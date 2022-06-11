import axiosInstance from './axiosInstance';

const getUser = async () => {
	return await axiosInstance.get('/api/v2/user');
};

const getAllUsers = async () => {
	return await axiosInstance.get('/api/v3/user/get-all-staff');
};

export { getUser, getAllUsers };
