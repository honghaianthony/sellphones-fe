import axiosInstance from './axiosInstance';

const getAllProducts = async () => {
	return await axiosInstance.get('/api/v1/product');
};

const getProductById = async (id: any) => {
	return await axiosInstance.get(`/api/v1/product/${id}`);
};

//export default 2 above function
export { getAllProducts, getProductById };
