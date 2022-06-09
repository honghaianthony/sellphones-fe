import axiosInstance from './axiosInstance';

const loginGoogle = async (data: any) => {
	return await axiosInstance.get('/', data);
};

interface LoginReqBody {
	username: String;
	password: String;
}
const login = async (data: LoginReqBody) => {
	return await axiosInstance.post('/login', data)
}

//export default above function
export {
	login,
	loginGoogle,
};
