import axiosInstance from './axiosInstance';

const addSpecification = async (data: any) => {
	return await axiosInstance.post(
		'/api/v4/specification/add-specification',
		data
	);
};

const getSpecificationDetail = async () => {
	return await axiosInstance.get('/api/v4/specification/detail');
};

const getSpecificationDetailById = async (id: any) => {
	return await axiosInstance.get(`/api/v1/specification/info/${id}`);
};

const updateSpecificationDetail = async (data: any) => {
	return await axiosInstance.put(
		'/api/v4/specification/update-specification',
		data
	);
};

const deleteSpecificationDetail = async (id: any) => {
	return await axiosInstance.delete(`/api/v4/specification/${id}`);
};

export {
	addSpecification,
	getSpecificationDetail,
	getSpecificationDetailById,
	updateSpecificationDetail,
	deleteSpecificationDetail,
};
