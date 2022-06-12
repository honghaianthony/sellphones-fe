import axiosInstance from './axiosInstance';

const addOrder = async (data: any) => {
	return await axiosInstance.post('/api/v2/order/add-order', data);
};

const buyNow = async (data: any) => {
	return await axiosInstance.post('/api/v2/order/buy-now', data);
};

const getAllOrder = async () => {
	return await axiosInstance.get('/api/v2/order');
};

const getOrderById = async (id: String) => {
	return await axiosInstance.get(`/api/v2/order/${id}`);
};

const getOrderDetail = async () => {
	return await axiosInstance.get('/api/v2/order/detail');
};

interface IUpdateOrderReq {
	_id: String;
	fullName: string;
	address: string;
	phone: string;
}
const updateOrder = async (data: IUpdateOrderReq) => {
	return await axiosInstance.put('/api/v2/order/update-order', data);
};

interface IUpdatePaymentMethodReq {
	idOrder: String;
	method: 'Thanh toán MOMO';
	status: 1;
}
const updatePaymentMethod = async (data: IUpdatePaymentMethodReq) => {
	return await axiosInstance.put('/api/v2/order/update-payment', data);
};

export {
	addOrder,
	updateOrder,
	getAllOrder,
	getOrderById,
	buyNow,
	updatePaymentMethod,
	getOrderDetail,
};
