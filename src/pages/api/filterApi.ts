import axiosInstance from './axiosInstance';

const getFilter = async (data: any) => {
	await axiosInstance.get('/api/v1/product/filter');
};

export { getFilter };
