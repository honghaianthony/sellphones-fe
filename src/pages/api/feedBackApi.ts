import axiosInstance from './axiosInstance';

const addFeedBack = async (id: any, data: any) => {
	return await axiosInstance.post(`/api/v2/feedback/add-feedback/${id}`, data);
};

export { addFeedBack };
