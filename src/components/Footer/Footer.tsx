import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
	return (
		<div className="bottom-0 w-full flex flex-wrap items-center justify-between px-2 py-3 bg-gray-200 mx-auto">
			<div className="container px-4 mx-auto flex flex-col md:flex-row justify-between">
				<ul className="flex flex-col py-3 list-none">
					<li className="flex items-center px-3 pb-3 lg:text-white cursor-pointer">
						<Link href="/support/introduction">
							<a className="flex space-x-3 items-center">
								<h5 className="text-sm text-black">Giới thiệu về SellPhone</h5>
							</a>
						</Link>
					</li>
					<li className="flex items-center px-3 pb-3 lg:text-white cursor-pointer">
						<Link href="/support/common-questions">
							<a className="flex space-x-3 items-center">
								<h5 className="text-sm text-black">
									Câu hỏi thường gặp mua hàng
								</h5>
							</a>
						</Link>
					</li>
					<li className="flex items-center px-3 pb-3 lg:text-white cursor-pointer">
						<Link href="/support/security-policy">
							<a className="flex space-x-3 items-center">
								<h5 className="text-sm text-black">Chính sách bảo mật</h5>
							</a>
						</Link>
					</li>
					<li className="flex items-center px-3 pb-3 lg:text-white cursor-pointer">
						<Link href="/support/installment-policy">
							<a className="flex space-x-3 items-center">
								<h5 className="text-sm text-black">Chính sách trả góp</h5>
							</a>
						</Link>
					</li>
					<li className="flex items-center px-3 pb-3 lg:text-white cursor-pointer">
						<Link href="/support/exchange-policy">
							<a className="flex space-x-3 items-center">
								<h5 className="text-sm text-black">Chính sách đổi trả</h5>
							</a>
						</Link>
					</li>
				</ul>
				<ul className="flex flex-col py-3 list-none">
					<li className="flex items-center px-3 pb-3 lg:text-white cursor-pointer">
						<Link href="/support/warranty-policy">
							<a className="flex space-x-3 items-center">
								<h5 className="text-sm text-black">Hệ thống bảo hành</h5>
							</a>
						</Link>
					</li>
					<li className="flex items-center px-3 pb-3 lg:text-white cursor-pointer">
						<Link href="/support/apple-questions">
							<a className="flex space-x-3 items-center">
								<h5 className="text-sm text-black">
									Câu hỏi thường gặp về Apple
								</h5>
							</a>
						</Link>
					</li>
					<li className="flex items-center px-3 pb-3 lg:text-white cursor-pointer">
						<Link href="/support/exchange-machine">
							<a className="flex space-x-3 items-center">
								<h5 className="text-sm text-black">Giới thiệu máy đổi trả</h5>
							</a>
						</Link>
					</li>
					<li className="flex items-center px-3 pb-3 lg:text-white cursor-pointer">
						<Link href="/support/unboxing-policy">
							<a className="flex space-x-3 items-center">
								<h5 className="text-sm text-black">
									Chính sách khui hộp sản phẩm
								</h5>
							</a>
						</Link>
					</li>
				</ul>
				<ul className="flex flex-col py-3 list-none">
					<li className="flex items-center px-3 pb-3 lg:text-white cursor-pointer">
						<Link href="/">
							<a className="flex space-x-3 items-center">
								<h5 className="text-sm text-black">Trang chủ</h5>
							</a>
						</Link>
					</li>
					<li className="flex items-center px-3 pb-3 lg:text-white cursor-pointer">
						<Link href="/">
							<a className="flex space-x-3 items-center">
								<h5 className="text-sm text-black">Giỏ hàng</h5>
							</a>
						</Link>
					</li>
					<li className="flex items-center px-3 pb-3 lg:text-white cursor-pointer">
						<Link href="/product">
							<a className="flex space-x-3 items-center">
								<h5 className="text-sm text-black">Sản phẩm</h5>
							</a>
						</Link>
					</li>
				</ul>
				<ul className="flex flex-col py-3 list-none">
					<li className="flex items-center px-3 pb-3 lg:text-white cursor-pointer">
						<Link href="/">
							<a className="flex space-x-3 items-center">
								<h5 className="text-sm text-black font-bold">
									Tổng đài hỗ trợ
								</h5>
							</a>
						</Link>
					</li>
					<li className="flex items-center px-3 pb-3 lg:text-white cursor-pointer">
						<Link href="/">
							<a className="flex space-x-3 items-center">
								<h5 className="text-sm text-black">
									Mua hàng:{' '}
									<span className="text-sm text-red-600 font-bold">
										1900 0000
									</span>
								</h5>
							</a>
						</Link>
					</li>
					<li className="flex items-center px-3 pb-3 lg:text-white cursor-pointer">
						<Link href="/">
							<a className="flex space-x-3 items-center">
								<h5 className="text-sm text-black">
									Kỹ thuật:{' '}
									<span className="text-sm text-red-600 font-bold">
										1900 0000
									</span>
								</h5>
							</a>
						</Link>
					</li>
					<li className="flex items-center px-3 pb-3 lg:text-white cursor-pointer">
						<Link href="/">
							<a className="flex space-x-3 items-center">
								<h5 className="text-sm text-black">
									Khiếu nại:{' '}
									<span className="text-sm text-red-600 font-bold">
										1900 0000
									</span>
								</h5>
							</a>
						</Link>
					</li>
				</ul>
				<ul className="flex flex-col py-3 list-none">
					<li className="flex items-center px-3 pb-3 lg:text-white cursor-pointer">
						<Link href="/">
							<a className="flex space-x-3 items-center">
								<h5 className="text-sm text-black font-bold">
									Website cùng tập đoàn
								</h5>
							</a>
						</Link>
					</li>
					<li className="flex items-center px-3 pb-3 lg:text-white cursor-pointer">
						<Link href="https://dce2021.ml/">
							<a className="mx-2">
								<Image
									src="/images/home/dce-logo.png"
									width={35}
									height={35}
									alt="DCE Logo"
								/>
							</a>
						</Link>
						<Link href="https://vivihandmade.com/">
							<a className="mx-2">
								<Image
									src="/images/home/vivi-logo.png"
									width={35}
									height={35}
									alt="Vivi handmade Logo"
									className="mx-3"
								/>
							</a>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
