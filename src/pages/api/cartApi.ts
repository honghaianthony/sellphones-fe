import axiosInstance from './axiosInstance';

const getCart = async () => {
	return await axiosInstance.get('/api/v2/cart');
};

const getCartInfo = async () => {
	return await axiosInstance.get('/api/v2/cart/get-all-cart');
};

const addCart = async (data: any) => {
	return await axiosInstance.post('/api/v2/cart/add-cart', data);
};

const deleteCart = async (id: any) => {
	return await axiosInstance.delete(`/api/v2/cart/${id}`);
};

export { addCart, getCart, deleteCart, getCartInfo };
