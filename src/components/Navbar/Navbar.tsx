import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { LoginModal} from '../LoginModal';
import { useAuth } from '@/context/AuthContext';
import { UserDropdown } from '../Dropdowns';
 
const Navbar = () => {
	const [authState, dispatch] = useAuth();
	const [showLogin, setShowLogin] = useState(false);
	return (
		<nav className="top-0 z-50 w-full sticky flex flex-wrap justify-between px-2 py-3 navbar-expand-lg bg-orange-400 ">
			<div className="container max-w-7xl px-4 mx-auto flex items-center justify-between">
				<div className="relative flex w-7/12 lg:static space-x-5 items-center">
					<Link href="/">
						<a className="flex space-x-3 items-center w-5/12">
							<Image
								src="/images/logo.png"
								width={44}
								height={44}
								alt="Sellphone Logo"
							/>
							<h1 className="text-2xl font-medium text-white font-josefin">
								Sellphone
							</h1>
						</a>
					</Link>
					<div className="w-7/12 bg-white py-3 rounded items-center hidden lg:visible lg:flex">
						<input
							type="text"
							className="mx-2 w-full px-3 border-0 outline-0"
							placeholder="Tìm kiếm điện thoại"
						/>
						<Icon
							icon="akar-icons:search"
							className="mx-3 text-2xl cursor-pointer"
						/>
					</div>
				</div>

				<div className="flex w-5/12 items-center pt-2">
					<ul className="flex flex-col lg:flex-row list-none lg:ml-auto items-center">
						<li className="flex items-center px-3 lg:text-white cursor-pointer">
							<Link href="/cart">
								<a className="flex flex-col space-x-3 items-center">
									<Icon
										icon="ant-design:shopping-cart-outlined"
										className="text-white text-lg"
									/>
									<h5 className="text-lg text-white">Giỏ hàng</h5>
								</a>
							</Link>
						</li>
						<li className="flex items-center px-3 lg:text-white cursor-pointer">
							<Link href="/support">
								<a className="flex flex-col space-x-3 items-center">
									<Icon
										icon="akar-icons:chat-question"
										className="text-white text-lg"
									/>
									<h5 className="text-lg text-white">Hỏi đáp</h5>
								</a>
							</Link>
						</li>
						<li>
							{authState.isAuth ? (
								<>
									<UserDropdown username={authState.username}/>
								</>
							) : (
								<>
									<button onClick={()=> {setShowLogin(true)}}>Đăng nhập/Đăng ký</button>
									<LoginModal show={showLogin} setShow={setShowLogin}/>
								</>
							)}
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
