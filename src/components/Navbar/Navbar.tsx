import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { LoginModal } from '../LoginModal';
import { useAuth } from '@/context/AuthContext';
import { UserDropdown } from '../Dropdowns';

const Navbar = () => {
	const [authState, dispatch] = useAuth();
	const [showLogin, setShowLogin] = useState(false);
	return (
		<nav className="bg-orange-600 border-gray-200 px-2 sm:px-4 py-2.5 rounded">
			<div className="flex flex-wrap justify-between items-center mx-auto container max-w-7xl">
				<Link href="/">
					<a className="flex items-center lg:w-2/12 mx-auto">
						<Image
							src="/images/logo.png"
							width={44}
							height={44}
							alt="Sellphone Logo"
						/>
						<span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white mx-3">
							SellPhone
						</span>
					</a>
				</Link>

				<div
					className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1 lg:w-6/12"
					id="mobile-menu-2"
				>
					<div className="bg-white py-2 rounded items-center hidden lg:visible lg:flex lg:w-9/12">
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

				<div className="flex md:order-2 ">
					<div className="flex items-center mx-3">
						<Link href="/cart">
							<a className="flex space-x-3 items-center">
								<Icon
									icon="ant-design:shopping-cart-outlined"
									className="text-white text-lg"
								/>
								<h5 className="text-lg text-white">Giỏ hàng</h5>
							</a>
						</Link>
					</div>
					<div className="flex items-center mx-3">
						<Link href="/support">
							<a className="flex space-x-3 items-center">
								<Icon
									icon="akar-icons:chat-question"
									className="text-white text-lg"
								/>
								<h5 className="text-lg text-white">Hỏi đáp</h5>
							</a>
						</Link>
					</div>
					<div className="flex items-center mx-3">
						{authState.isAuth ? (
							<>
								<UserDropdown />
							</>
						) : (
							<>
								<button
									onClick={() => {
										setShowLogin(true);
									}}
									className="flex text-white items-center"
								>
									<Icon
										icon="ant-design:user-outlined"
										className="text-white text-lg mr-2"
									/>
									<span>Đăng nhập</span>
								</button>
								<LoginModal show={showLogin} setShow={setShowLogin} />
							</>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
