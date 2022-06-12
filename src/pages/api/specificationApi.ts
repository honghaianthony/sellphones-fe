import axiosInstance from './axiosInstance';

const addSpecification = async (data: any) => {
	return await axiosInstance.post('/api/v1/specification/add', data);
};

export { addSpecification };
