import { BuyModal } from '@/components/BuyModal';
import { CartItem } from '@/components/CardDetail';
import MainLayout from '@/components/Layouts/MainLayout';
import type { NextPage, GetServerSideProps, GetStaticProps } from 'next';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { Table, Row, Col, Tooltip, User, Text } from '@nextui-org/react';
import { IconButton } from '@/components/CardDetail/IconButton';
import { getCart, deleteCart } from '@/pages/api/cartApi';
import {
	getProductBySpecificationId,
	getProductById,
} from '@/pages/api/productApi';
import { Input } from '@nextui-org/react';

// export const getServerSideProps: GetServerSideProps = async (context) => {
// 	// const product = await getProductById('6298bd463ab70e3d305d5a8c');
// 	const spec = await getCart();
// 	console.log(spec);
// 	// const allProducts = await getProductBySpecificationId(
// 	// 	specification.specificationId
// 	// );

// 	return {
// 		props: {
// 			spec,
// 		},
// 	};
// };

const Info: NextPage = () => {
	const [dailyData, setDailyData] = useState([]);
	var total = 0;

	useEffect(() => {
		const asyncFetchDailyData = async () => {
			const fetchData = await getCart(); // fetchDailyData() is calling Api
			setDailyData(fetchData);
		};

		asyncFetchDailyData();
	}, []);

	const handleDelete = async (id) => {
		try {
			let response = await deleteCart(id);
			if (response && response.errCode === 0) {
				const succ = await getCart();
				setDailyData(succ);
			}
		} catch (error) {}
	};
	console.log(dailyData);
	return (
		<>
			<Head>
				<title>Giỏ hàng</title>
			</Head>
			<MainLayout>
				<div className="flex flex-row pt-12 pl-4 lg:mx-24 md:mx-10 mb-4 items-center">
					<Link href="/">
						<a className="hover:text-lightBlue-600">Trang chủ</a>
					</Link>
					<Icon icon="ant-design:arrow-right-outlined" className="mx-3" />
					<Link href="/cart">
						<a className="hover:text-lightBlue-600">Giỏ hàng</a>
					</Link>
				</div>
				<div className="flex flex-col lg:flex-row my-8 mx-16">
					<div className="w-full xl:w-9/12 mb-12 xl:mb-0 p-4 bg-white rounded-lg mx-4">
						<h1 className="font-bold text-xl px-3 mb-8">
							Thông tin khách hàng
						</h1>
						<form>
							<div className="flex flex-wrap">
								<div className="w-full lg:w-6/12 px-4 mb-8">
									<div className="relative w-full mb-3 z-0">
										<Input
											fullWidth
											clearable
											bordered
											color="default"
											labelPlaceholder="Họ tên khách hàng"
										/>
									</div>
								</div>
								<div className="w-full lg:w-6/12 px-4 mb-8">
									<div className="relative w-full mb-3 z-0">
										<Input
											fullWidth
											clearable
											bordered
											color="default"
											labelPlaceholder="Email"
										/>
									</div>
								</div>
								<div className="w-full lg:w-6/12 px-4 mb-8">
									<div className="relative w-full mb-3 z-0">
										<Input
											fullWidth
											clearable
											bordered
											color="default"
											labelPlaceholder="Địa chỉ"
										/>
									</div>
								</div>
								<div className="w-full lg:w-6/12 px-4 mb-8">
									<div className="relative w-full mb-3 z-0">
										<Input
											fullWidth
											clearable
											bordered
											color="default"
											labelPlaceholder="Số điện thoại"
										/>
									</div>
								</div>
							</div>
						</form>
					</div>
					<div className="w-full xl:w-3/12 flex flex-col">
						<div className=" px-4 bg-white border border-solid border-slate-100 rounded-lg h-36">
							<div className="flex justify-between my-3">
								<span>Tổng cộng</span>
								<span>
									{total}
									<sup>đ</sup>
								</span>
							</div>
							<div className="flex justify-between my-3">
								<span>Giảm giá</span>
								<span>
									0<sup>đ</sup>
								</span>
							</div>
							<hr className="border border-solid border-red-300" />
							<div className="flex justify-between my-3">
								<span className="font-bold">Thành tiền</span>
								<span className="text-xl text-red-500 font-bold">
									{total}
									<sup>đ</sup>
								</span>
							</div>
						</div>
						<button className=" px-4 bg-red-500 border border-solid rounded-lg py-4 items-center my-4">
							<span className="font-bold text-white">TIẾP TỤC</span>
						</button>
					</div>
				</div>
			</MainLayout>
		</>
	);
};

export default Info;
