import axiosInstance from './axiosInstance';

const loginGoogle = async (data: any) => {
	return await axiosInstance.get('/', data);
};

//export default above function
export default loginGoogle;
