import axiosInstance from './axiosInstance';

const getCart = async () => {
	return await axiosInstance.get('/api/v2/cart');
};

const addCart = async (data: any) => {
	return await axiosInstance.post('/api/v2/cart/add-cart', data);
};

export { addCart, getCart };
