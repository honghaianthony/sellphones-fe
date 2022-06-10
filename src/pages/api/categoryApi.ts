import axiosInstance from './axiosInstance';

const getCategories = async () => {
	return await axiosInstance.get('/api/v1/category');
};

export { getCategories };
