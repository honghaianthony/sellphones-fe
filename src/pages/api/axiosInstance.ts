import axios from 'axios';
import Cookies from 'js-cookie';

const axiosInstance = axios.create({
	baseURL: 'http://localhost:8102/',
	withCredentials: true,
	// baseURL: 'https://sellphone-heroku.herokuapp.com',
});

axiosInstance.interceptors.request.use(function (config: any) {
		const token = Cookies.get("token");
		config.headers.Authorization = token;
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

axiosInstance.interceptors.response.use(
	function (response) {
		return response.data;
	},
	function (error) {
		return Promise.reject(error);
	}
);

export default axiosInstance;
