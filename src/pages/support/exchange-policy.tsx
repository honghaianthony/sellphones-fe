import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Image from 'next/image';
import React from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { Icon } from '@iconify/react';
const Support = () => {
	return (
		<>
			<Navbar />
			<div className="flex flex-col lg:flex-row bg-gray-100">
				<Sidebar />
				<div className="my-5 lg:my-20 mx-14 xl:mr-72 xl:w-1/2">
					<h3 className="font-semibold text-2xl mb-3">
						Chính sách đổi trả tại SellPhone
					</h3>
					<div className="w-full px-4">
						<h4 className="font-bold text-xl">
							A. MỘT SỐ ĐỊNH NGHĨA VÀ THUẬT NGỮ
						</h4>
						<div className="w-full max-w-full rounded-2xl bg-white p-2">
							<Disclosure>
								{({ open }) => (
									<>
										<Disclosure.Button className="focus:outline-none flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
											<span>1. Lỗi nhà sản xuất (NSX)</span>
											<Icon
												icon="akar-icons:chevron-up"
												className={`${
													open ? 'rotate-180 transform' : ''
												} h-5 w-5 text-purple-500`}
											/>
										</Disclosure.Button>
										<Transition
											enter="transition duration-100 ease-out"
											enterFrom="transform scale-95 opacity-0"
											enterTo="transform scale-100 opacity-100"
											leave="transition duration-75 ease-out"
											leaveFrom="transform scale-100 opacity-100"
											leaveTo="transform scale-95 opacity-0"
										>
											<Disclosure.Panel className="px-4 pt-4 pb-2 text-sm ">
												Là lỗi phần cứng, do NSX gây ra trong quá trình sản
												xuất, đóng gói, bảo quản hàng hóa
											</Disclosure.Panel>
										</Transition>
									</>
								)}
							</Disclosure>
							<Disclosure>
								{({ open }) => (
									<>
										<Disclosure.Button className="focus:outline-none flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
											<span>2. Lỗi người sử dụng</span>
											<Icon
												icon="akar-icons:chevron-up"
												className={`${
													open ? 'rotate-180 transform' : ''
												} h-5 w-5 text-purple-500`}
											/>
										</Disclosure.Button>
										<Transition
											enter="transition duration-100 ease-out"
											enterFrom="transform scale-95 opacity-0"
											enterTo="transform scale-100 opacity-100"
											leave="transition duration-75 ease-out"
											leaveFrom="transform scale-100 opacity-100"
											leaveTo="transform scale-95 opacity-0"
										>
											<Disclosure.Panel className="px-4 pt-4 pb-2 text-sm ">
												Lỗi phát sinh trong quá trình sử dụng do người sử dụng
												tác động vào, ví dụ như: cấn móp do rơi rớt, va đập; vào
												nước; sử dụng phụ kiện không theo qui định, hướng dẫn
												của NSX v.v
											</Disclosure.Panel>
										</Transition>
									</>
								)}
							</Disclosure>
							<Disclosure>
								{({ open }) => (
									<>
										<Disclosure.Button className="focus:outline-none flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
											<span>3. Phí đổi trả (Nếu có)</span>
											<Icon
												icon="akar-icons:chevron-up"
												className={`${
													open ? 'rotate-180 transform' : ''
												} h-5 w-5 text-purple-500`}
											/>
										</Disclosure.Button>
										<Transition
											enter="transition duration-100 ease-out"
											enterFrom="transform scale-95 opacity-0"
											enterTo="transform scale-100 opacity-100"
											leave="transition duration-75 ease-out"
											leaveFrom="transform scale-100 opacity-100"
											leaveTo="transform scale-95 opacity-0"
										>
											<Disclosure.Panel className="px-4 pt-4 pb-2 text-sm ">
												SellPhone sẽ kiểm tra tình trạng máy và thông báo đến
												khách hàng về mức phí phải thu ngay tại cửa hàng.
											</Disclosure.Panel>
										</Transition>
									</>
								)}
							</Disclosure>
							<Disclosure>
								{({ open }) => (
									<>
										<Disclosure.Button className="focus:outline-none flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
											<span>4. Điều kiện đổi trả</span>
											<Icon
												icon="akar-icons:chevron-up"
												className={`${
													open ? 'rotate-180 transform' : ''
												} h-5 w-5 text-purple-500`}
											/>
										</Disclosure.Button>
										<Transition
											enter="transition duration-100 ease-out"
											enterFrom="transform scale-95 opacity-0"
											enterTo="transform scale-100 opacity-100"
											leave="transition duration-75 ease-out"
											leaveFrom="transform scale-100 opacity-100"
											leaveTo="transform scale-95 opacity-0"
										>
											<Disclosure.Panel className="px-4 pt-4 pb-2 text-sm ">
												Sản phẩm đủ điều kiện đổi trả là sản phẩm không thuộc
												trường hợp nằm ngoài chính sách bảo hành.
											</Disclosure.Panel>
										</Transition>
									</>
								)}
							</Disclosure>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Support;
