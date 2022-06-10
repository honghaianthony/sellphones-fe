import axiosInstance from './axiosInstance';

const addOrder = async (data: any) => {
	return await axiosInstance.post('/api/v2/order/add-order', data);
};

const getAllOrder = async () => {
	return await axiosInstance.get('/api/v2/order');
};

const getOrderById = async (id: String) => {
	return await axiosInstance.get(`/api/v2/order/${id}`);
};

const updateOrder = async (data: any) => {
	return await axiosInstance.put('/api/v2/order/update-order', data);
};

export { addOrder, updateOrder, getAllOrder, getOrderById };
