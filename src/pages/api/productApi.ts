import axiosInstance from './axiosInstance';

const getAllProducts = async () => {
	return await axiosInstance.get('/api/v1/product');
};

const getProductById = async (id: any) => {
	return await axiosInstance.get(`/api/v1/product/${id}`);
};

const getProductInfoById = async (id: any) => {
	return await axiosInstance.get(`/api/v1/product/info/${id}`);
};

const getProductBySpecificationId = async (id: any) => {
	return await axiosInstance.get(`/api/v1/specification/${id}`);
};

const addProduct = async (data: any) => {
	return await axiosInstance.post('/api/v3/product/add-product', data);
};

const deleteProduct = async (id: any) => {
	return await axiosInstance.delete(`/api/v3/product/${id}`);
};

const updateProduct = async (data: any) => {
	return await axiosInstance.put('/api/v3/product/update-product', data);
};

export const getAllProductComment = async (productId: any) => {
	return await axiosInstance.get('/api/v1/get-all-comment?productId=' + productId);
}
export const getAllProductCommentStaff = async () => {
	return await axiosInstance.get('/api/v3/get-all-comment-staff');
}

interface IReplyCommentReq {
	productCommentId: String;
	content: String;
}
export const replyComment = async (data: IReplyCommentReq) => {
	return await axiosInstance.post('/api/v3/reply', data)
}
//export default 2 above function
export {
	getAllProducts,
	getProductById,
	getProductBySpecificationId,
	addProduct,
	deleteProduct,
	getProductInfoById,
	updateProduct,
};
