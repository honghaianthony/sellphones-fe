import axiosInstance from './axiosInstance';

const addCart = async (data: any) => {
	return await axiosInstance.post('/api/v2/cart/add-cart', data);
};

export { addCart };
