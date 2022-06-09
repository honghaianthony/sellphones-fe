import React, { useState } from 'react';
import {login} from '@/pages/api/authApi'
import {actions, useAuth} from '@/context/AuthContext'
import {RegisterModal} from './index'
import { toast } from 'react-toastify'

interface LoginModalProps {
	show: Boolean;
	setShow: Function;
}
function LoginModal(props: LoginModalProps) {
	const [authState, dispatch] = useAuth();
	const [showRegister, setShowRegister] = useState<boolean>(false)
	const handleLogin = async (e: any) => {
		e.preventDefault();
		try {
			const res: any = await login({username: e.target.username.value, password: e.target.password.value})
			if(res.jwtToken) {
				dispatch(actions.login(res.jwtToken));
				toast.success("Đăng nhập thành công!")
				props.setShow(false);
			} 
		} catch (error) {
			toast.error("Đăng nhập thất bại!")
		}
	}
	return (
		<>
			{props.show && !authState.isAuth ? (
				<>
					<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
						<div className="relative w-96 my-6 mx-auto max-w-3xl">
							<div className="z-50">
								<div className="relative p-4 w-full max-w-md h-full md:h-auto">
									<div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
										<button
											type="button"
											className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
											onClick={() => {
												props.setShow(false);
											}}
										>
											<svg
												className="w-5 h-5"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
													clipRule="evenodd"
												></path>
											</svg>
										</button>
										<div className="py-6 px-6 lg:px-8">
											<h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
												Đăng nhập
											</h3>
											<form className="space-y-6" onSubmit={handleLogin}>
												<div>
													<label
														htmlFor="email"
														className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
													>
														Tên đăng nhập
													</label>
													<input
														type="text"
														name="username"
														id="username"
														className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
														placeholder="username"
														required
													/>
												</div>
												<div>
													<label
														htmlFor="password"
														className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
													>
														Mật khẩu
													</label>
													<input
														type="password"
														name="password"
														id="password"
														placeholder="••••••••"
														className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
														required
													/>
												</div>
												<div className="flex justify-between">
													<div className="flex items-start">
														{/* <div className="flex items-center h-5">
															<input
																id="remember"
																type="checkbox"
																value=""
																className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
																required
															/>
														</div>
														<label
															htmlFor="remember"
															className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
														>
															Remember me
														</label> */}
													</div>
													<a
														href="#"
														className="text-sm text-blue-700 hover:underline dark:text-blue-500"
													>
														Quên mật khẩu?
													</a>
												</div>
												<button
													type="submit"
													className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
												>
													Đăng nhập
												</button>
												<div className="text-sm font-medium text-gray-500 dark:text-gray-300">
													Chưa có tài khoản{' '}
													<button
														className="text-blue-700 hover:underline dark:text-blue-500"
														onClick={(e) => {
															e.preventDefault()
															setShowRegister(true)
														}}
													>
														Đăng ký
													</button>
													<RegisterModal show={showRegister} setShow={setShowRegister} />
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						className="opacity-50 fixed inset-0 z-40 bg-black"></div>
				</>
			) : null}
		</>
	);
}

export default LoginModal;
