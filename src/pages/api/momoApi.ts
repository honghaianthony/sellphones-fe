import axiosInstance from './axiosInstance';

interface IMomoPayReq {
  amount: Number,
  orderId: String,
}
export const createMomoPay = async (data: IMomoPayReq) => {
  return await axiosInstance.post('/api/v1/create-payment', data);
}
