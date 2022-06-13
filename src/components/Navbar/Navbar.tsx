import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { LoginModal } from '../LoginModal';
import { useAuth } from '@/context/AuthContext';
import { UserDropdown } from '../Dropdowns';
import { getAllProducts } from '@/pages/api/productApi';
import { Card } from '@nextui-org/react';

function ChangeToSlug(str: any) {
	// Chuyển hết sang chữ thường
	str = str.toLowerCase();

	// xóa dấu
	str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
	str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
	str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
	str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
	str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
	str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
	str = str.replace(/(đ)/g, 'd');

	// Xóa ký tự đặc biệt
	str = str.replace(/([^0-9a-z-\s])/g, '');

	// Xóa khoảng trắng thay bằng ký tự -
	str = str.replace(/(\s+)/g, '-');

	// xóa phần dự - ở đầu
	str = str.replace(/^-+/g, '');

	// xóa phần dư - ở cuối
	str = str.replace(/-+$/g, '');

	// return
	return str;
}

const Navbar = () => {
	const [authState, dispatch] = useAuth();
	const [showLogin, setShowLogin] = useState(false);
	const [phoneMatch, setPhoneMatch] = useState([]);

	const [productInfo, setProductInfo] = useState([]);
	useEffect(() => {
		const asyncFetchDailyData = async () => {
			const fetchData: any = await getAllProducts();
			setProductInfo(fetchData);
		};

		asyncFetchDailyData();
	}, []);
	const searchPhones = (text: any) => {
		if (!text) {
			setPhoneMatch([]);
			return;
		} else {
			let matches = productInfo.filter((product: any) => {
				const regex = new RegExp(`${text}`, 'gi');
				return product.name.match(regex);
			});
			setPhoneMatch(matches);
		}
	};

	console.log(phoneMatch);

	function numberWithCommas(x: any) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
	}
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
					className="hidden justify-between w-full md:flex md:flex-col md:order-1 lg:w-6/12"
					id="mobile-menu-2"
				>
					<div className="bg-white py-2 rounded items-center hidden lg:visible lg:flex lg:w-9/12">
						<input
							type="text"
							className="mx-2 w-full px-3 border-0 outline-0"
							placeholder="Tìm kiếm điện thoại"
							onChange={(e) => searchPhones(e.target.value)}
						/>
						<Icon
							icon="akar-icons:search"
							className="mx-3 text-2xl cursor-pointer"
						/>
					</div>
					<div className="flex flex-col absolute mt-10 z-10">
						{phoneMatch &&
							phoneMatch.map((item: any, index: any) => {
								return (
									<Card
										css={{ mw: '600px' }}
										className="flex flex-col mt-1 hover:bg-black hover:text-white"
										key={index}
									>
										<Card.Body>
											<Link
												href={
													'/product/' +
													ChangeToSlug(item.name) +
													'.' +
													item._id +
													'.html'
												}
											>
												<a>
													<div className="flex items-center child:mx-2">
														<Image
															src={item.image[0]}
															width={35}
															height={35}
															alt={item.name}
														/>
														<div className="flex flex-col">
															<span className="font-bold">{item.name}</span>
															<span>{numberWithCommas(item.price)}</span>
														</div>
													</div>
												</a>
											</Link>
										</Card.Body>
									</Card>
								);
							})}
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
