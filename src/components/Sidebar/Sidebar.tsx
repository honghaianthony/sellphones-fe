import { Icon } from '@iconify/react';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar = () => {
	const router = useRouter();
	return (
		<div className="bg-white flex flex-col w-10/12 mx-auto relative mt-20 mb-5 md:my-20 space-y-8 rounded-lg py-5 px-6 md:mx-10 md:h-1/2 xl:ml-48 xl:mr-24 xl:w-80">
			<ul className="block py-5">
				<li>
					<Link href="/support">
						<a
							className={
								router.pathname == '/support'
									? 'active block border-b-2 border-[#adacac] py-3 text-[#46B62A]'
									: 'block border-b-2 border-[#adacac] py-3 hover:text-[#46B62A]'
							}
						>
							Apple
						</a>
					</Link>

					<ul className="items-center py-3">
						<li className="items-center border-b-2 border-[#adacac] pb-3 flex">
							<Icon icon="bi:dot" className="ml-5" />
							<Link href="/support/apple-id">
								<a
									className={
										router.pathname == '/support/apple-id'
											? 'active text-[#46B62A]'
											: 'hover:text-[#46B62A]'
									}
								>
									Tìm hiểu về ICloud (AppleID)
								</a>
							</Link>
						</li>
						<li className="items-center border-b-2 border-[#adacac] py-3 flex">
							<Icon icon="bi:dot" className="ml-5" />
							<Link href="/support/direct-importer">
								<a
									className={
										router.pathname == '/support/direct-importer'
											? 'active text-[#46B62A]'
											: 'hover:text-[#46B62A]'
									}
								>
									Nhà nhập khẩu trực tiếp
								</a>
							</Link>
						</li>
						<li className="items-center border-b-2 border-[#adacac] py-3 flex">
							<Icon icon="bi:dot" className="ml-5" />
							<Link href="/support/apple-questions">
								<a
									className={
										router.pathname == '/support/apple-questions'
											? 'active text-[#46B62A]'
											: 'hover:text-[#46B62A]'
									}
								>
									Câu hỏi thường gặp về Apple
								</a>
							</Link>
						</li>
					</ul>
				</li>
				<li>
					<Link href="/support/shopping-guide">
						<a
							className={
								router.pathname == '/support/shopping-guide'
									? 'block border-b-2 border-[#adacac] pb-3 active text-[#46B62A]'
									: 'block border-b-2 border-[#adacac] pb-3 hover:text-[#46B62A]'
							}
						>
							Hướng dẫn mua hàng
						</a>
					</Link>
				</li>
				<li>
					<Link href="/support/common-questions">
						<a
							className={
								router.pathname == '/support/common-questions'
									? 'block border-b-2 border-[#adacac] py-3 active text-[#46B62A]'
									: 'block border-b-2 border-[#adacac] py-3 hover:text-[#46B62A]'
							}
						>
							Câu hỏi thường gặp
						</a>
					</Link>
				</li>
				<li>
					<Link href="/support/exchange-machine">
						<a
							className={
								router.pathname == '/support/exchange-machine'
									? 'block border-b-2 border-[#adacac] py-3 active text-[#46B62A]'
									: 'block border-b-2 border-[#adacac] py-3 hover:text-[#46B62A]'
							}
						>
							Giới thiệu máy đổi trả
						</a>
					</Link>
				</li>
				<li>
					<Link href="/support/warranty-policy">
						<a
							className={
								router.pathname == '/support/warranty-policy'
									? 'block border-b-2 border-[#adacac] py-3 active text-[#46B62A]'
									: 'block border-b-2 border-[#adacac] py-3 hover:text-[#46B62A]'
							}
						>
							Chính sách bảo hành
						</a>
					</Link>
				</li>
				<li>
					<Link href="/support/exchange-policy">
						<a
							className={
								router.pathname == '/support/exchange-policy'
									? 'block border-b-2 border-[#adacac] py-3 active text-[#46B62A]'
									: 'block border-b-2 border-[#adacac] py-3 hover:text-[#46B62A]'
							}
						>
							Chính sách đổi sản phẩm
						</a>
					</Link>
				</li>
				<li>
					<Link href="/support/unboxing-policy">
						<a
							className={
								router.pathname == '/support/unboxing-policy'
									? 'block border-b-2 border-[#adacac] py-3 active text-[#46B62A]'
									: 'block border-b-2 border-[#adacac] py-3 hover:text-[#46B62A]'
							}
						>
							Chính sách khui hộp sản phẩm
						</a>
					</Link>
				</li>
				<li>
					<Link href="/support/installment-policy">
						<a
							className={
								router.pathname == '/support/installment-policy'
									? 'block border-b-2 border-[#adacac] py-3 active text-[#46B62A]'
									: 'block border-b-2 border-[#adacac] py-3 hover:text-[#46B62A]'
							}
						>
							Chính sách trả góp
						</a>
					</Link>
				</li>
				<li>
					<Link href="/support/delivery-and-business-policy">
						<a
							className={
								router.pathname == '/support/delivery-and-business-policy'
									? 'block border-b-2 border-[#adacac] py-3 active text-[#46B62A]'
									: 'block border-b-2 border-[#adacac] py-3 hover:text-[#46B62A]'
							}
						>
							Chính sách giao hàng và kinh doanh
						</a>
					</Link>
				</li>
				<li>
					<Link href="/support/security-policy">
						<a
							className={
								router.pathname == '/support/security-policy'
									? 'block border-b-2 border-[#adacac] py-3 active text-[#46B62A]'
									: 'block border-b-2 border-[#adacac] py-3 hover:text-[#46B62A]'
							}
						>
							Chính sách bảo mật
						</a>
					</Link>
				</li>
				<li>
					<Link href="/support/introduction">
						<a
							className={
								router.pathname == '/support/introduction'
									? 'block border-b-2 border-[#adacac] py-3 active text-[#46B62A]'
									: 'block border-b-2 border-[#adacac] py-3 hover:text-[#46B62A]'
							}
						>
							Giới thiệu về SellPhone
						</a>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
