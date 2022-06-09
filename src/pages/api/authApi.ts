import axiosInstance from './axiosInstance';

const loginGoogle = async (data: any) => {
	return await axiosInstance.get('/', data);
};

interface LoginReqBody {
	username: String;
	password: String;
}
const login = async (data: LoginReqBody) => {
	return await axiosInstance.post('/login', data)
}

interface RegisterReqBody {
	username: String;
	password: String;
	fullName: String;
	address: String;
	phone: String;
	email: String;
}
const register = async (data: RegisterReqBody) => {
	return await axiosInstance.post('/register', data)
}

//export default above function
export {
	login,
	loginGoogle,
	register,
};
