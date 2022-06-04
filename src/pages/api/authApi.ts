import axiosInstance from './axiosInstance';

const loginGoogle = async (data: any) => {
	return await axiosInstance.get('/api/v2/user', data);
};

//export default above function
export default loginGoogle;
