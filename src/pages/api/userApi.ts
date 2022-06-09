import axiosInstance from './axiosInstance';

const getUser = async () => {
	return await axiosInstance.get('/api/v2/user');
};

export { getUser };
