import MainLayout from '@/components/Layouts/MainLayout';
import type { NextPage, GetServerSideProps, GetStaticProps } from 'next';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { getCart, deleteCart } from '@/pages/api/cartApi';
import { getUser } from '@/pages/api/userApi';
import { Input } from '@nextui-org/react';
import { updateOrder, getAllOrder } from '@/pages/api/orderApi';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { PageSEO } from '@/components/SEO';

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
	const router = useRouter();
	const [dailyData, setDailyData] = useState([]);
	const [user, setUser] = useState();
	const [userName, setUserName] = useState();
	const [address, setAddress] = useState();
	const [phone, setPhone] = useState();
	const [order, setOrder] = useState([]);
	var total = 0;

	useEffect(() => {
		const asyncFetchDailyData = async () => {
			const fetchData: any = await getCart(); // fetchDailyData() is calling Api
			setDailyData(fetchData);
		};

		asyncFetchDailyData();
	}, []);

	useEffect(() => {
		const asyncFetchDailyData = async () => {
			const fetchData: any = await getUser(); // fetchDailyData() is calling Api
			setUserName(fetchData.fullName);
		};

		asyncFetchDailyData();
	}, []);

	useEffect(() => {
		const asyncFetchDailyData = async () => {
			const fetchData: any = await getUser(); // fetchDailyData() is calling Api
			setAddress(fetchData.address);
		};

		asyncFetchDailyData();
	}, []);

	useEffect(() => {
		const asyncFetchDailyData = async () => {
			const fetchData: any = await getUser(); // fetchDailyData() is calling Api
			setPhone(fetchData.phone);
		};

		asyncFetchDailyData();
	}, []);

	useEffect(() => {
		const asyncFetchDailyData = async () => {
			const fetchData: any = await getAllOrder();
			setOrder(fetchData);
			// fetchData.map((item: any, index: Number) => {
			// 	total += item.price;
			// });
		};

		asyncFetchDailyData();
	}, []);

	const handleSubmitInfo = async () => {
		order.map(async (item: any, index: Number) => {
			const updateInfo = {
				fullName: userName,
				address: address,
				phone: phone,
				_id: item._id,
			};
			const res = await updateOrder(updateInfo);
			if (res) {
				toast.success(
					'?????t h??ng th??nh c??ng. H??ng s??? ???????c x??c nh???n v?? chuy???n h??ng trong th???i gian s???m nh???t'
				);
				router.push('/');
			} else {
				toast.error('?????t h??ng th???t b???i. H??y ki???m tra l???i c??c tr?????ng th??ng tin');
			}
		});
	};

	const itemPrice = order.map((item: any, index) => {
		total += item.price;
	});

	return (
		<>
			<PageSEO href="/info" name="Th??ng tin kh??ch h??ng" />
			<MainLayout>
				<div className="flex flex-row pt-12 pl-4 lg:mx-24 md:mx-10 mb-4 items-center">
					<Link href="/">
						<a className="hover:text-lightBlue-600">Trang ch???</a>
					</Link>
					<Icon icon="ant-design:arrow-right-outlined" className="mx-3" />
					<Link href="/cart">
						<a className="hover:text-lightBlue-600">Gi??? h??ng</a>
					</Link>
				</div>
				<div className="flex flex-col lg:flex-row my-8 mx-16 items-center">
					<div className="w-full xl:w-9/12 mb-12 xl:mb-0 p-4 bg-white rounded-lg mx-4">
						<h1 className="font-bold text-xl px-3 mb-8">
							Th??ng tin kh??ch h??ng
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
											labelPlaceholder="H??? t??n kh??ch h??ng"
											value={userName}
											onChange={(e: any) => setUserName(e.target.value)}
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
											labelPlaceholder="?????a ch???"
											value={address}
											onChange={(e: any) => setAddress(e.target.value)}
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
											labelPlaceholder="S??? ??i???n tho???i"
											value={phone}
											onChange={(e: any) => setPhone(e.target.value)}
										/>
									</div>
								</div>
							</div>
						</form>
					</div>
					<div className="w-full xl:w-3/12 flex flex-col">
						<div className=" px-4 bg-white border border-solid border-slate-100 rounded-lg h-36">
							<div className="flex justify-between my-3">
								<span>T???ng c???ng</span>
								<span>
									{total}
									<sup>??</sup>
								</span>
							</div>
							<div className="flex justify-between my-3">
								<span>Gi???m gi??</span>
								<span>
									0<sup>??</sup>
								</span>
							</div>
							<hr className="border border-solid border-red-300" />
							<div className="flex justify-between my-3">
								<span className="font-bold">Th??nh ti???n</span>
								<span className="text-xl text-red-500 font-bold">
									{total}
									<sup>??</sup>
								</span>
							</div>
						</div>
						<button
							className=" px-4 bg-red-500 border border-solid rounded-lg py-4 items-center my-4"
							onClick={handleSubmitInfo}
						>
							<span className="font-bold text-white">TI???P T???C</span>
						</button>
					</div>
				</div>
			</MainLayout>
		</>
	);
};

export default Info;
