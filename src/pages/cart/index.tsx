import { BuyModal } from '@/components/BuyModal';
import { CartItem } from '@/components/CardDetail';
import MainLayout from '@/components/Layouts/MainLayout';
import type { NextPage, GetServerSideProps, GetStaticProps } from 'next';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import {
	Table,
	Row,
	Col,
	Tooltip,
	User,
	Text,
	Input,
	Radio,
} from '@nextui-org/react';
import { IconButton } from '@/components/CardDetail/IconButton';
import { getCart, deleteCart, getCartInfo } from '@/pages/api/cartApi';
import { addOrder, buyNow } from '@/pages/api/orderApi';
import Image from 'next/image';
import { toast } from 'react-toastify';
import { PageSEO } from '@/components/SEO';
import { getUser } from '../api/userApi';
import { createMomoPay } from '../api/momoApi';

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

function numberWithCommas(x: any) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

const Cart: NextPage = () => {
	const [dailyData, setDailyData] = useState([]);
	const [infoCart, setInfoCart] = useState([]);
	const [userName, setUserName] = useState();
	const [address, setAddress] = useState();
	const [phone, setPhone] = useState();
	const [email, setEmail] = useState();
	const [momoPay, setMomoPay] = useState<any>(false);
	var total = 0;

	useEffect(() => {
		const asyncFetchDailyData = async () => {
			const fetchData: any = await getCart(); // fetchDailyData() is calling Api
			setDailyData(fetchData);
			const cartInfo: any = await getCartInfo();
			setInfoCart(cartInfo);
			const user: any = await getUser();
			setPhone(user.phone);
			setUserName(user.fullName);
			setAddress(user.address);
			setEmail(user.email);
		};

		asyncFetchDailyData();
	}, []);

	const handleDelete = async (id: any) => {
		try {
			let response: any = await deleteCart(id);
			if (response && response.statusCode === 201) {
				const succ: any = await getCart();
				setDailyData(succ);
			}
		} catch (error) {}
	};

	const handleAddOrder = async () => {
		if (total === 0) {
			toast.warning('Gi??? h??ng tr???ng!!!');
			return;
		}
		const orderData: any = {
			carts: infoCart,
			fullName: userName,
			phone: phone,
			address: address,
		};
		if (momoPay === true) {
			orderData.paymentStatus = 0;
			orderData.paymentMethod = 'Thanh to??n MOMO';
		}
		const res: any = await buyNow(orderData);
		if (res) {
			toast.success('?????t h??ng th??nh c??ng.');
			if (momoPay === true) {
				const momo: any = await createMomoPay({
					amount: total,
					orderId: res.orderId,
				});
				if (momo.resultCode === 0) {
					window.open(momo.payUrl, '_self');
				}
			}
		} else {
			toast.error('?????t h??ng th???t b???i');
		}
	};
	return (
		<>
			<PageSEO href="/cart" name="Gi??? h??ng" />
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
				<div className="flex flex-wrap my-8 mx-8">
					<div className="w-full xl:w-9/12 mb-12 xl:mb-0 px-16 ">
						{/* Projects table */}
						<Table
							shadow={false}
							color="secondary"
							aria-label="Example pagination  table"
							css={{
								height: 'auto',
								minWidth: '100%',
							}}
							className="bg-white"
						>
							<Table.Header>
								<Table.Column>Th??ng tin s???n ph???m</Table.Column>
								<Table.Column>????n gi??</Table.Column>
								<Table.Column>S??? l?????ng</Table.Column>
								<Table.Column>Th??nh ti???n</Table.Column>
								<Table.Column>THAO T??C</Table.Column>
							</Table.Header>
							<Table.Body>
								{dailyData.map((item: any, index) => {
									total += item.specification.price * item.quantity;

									return (
										<Table.Row key={index} className="items-center">
											<Table.Cell className="items-center flex">
												<Image
													src={item.product.image[0]}
													width={30}
													height={30}
													alt="Product Image"
												/>
												<span className="mx-3">
													{item.product.name} {item.specification.storage}{' '}
													{item.specification.color}
												</span>
											</Table.Cell>
											<Table.Cell>
												{numberWithCommas(item.specification.price)}{' '}
												<sup>??</sup>
											</Table.Cell>
											<Table.Cell>{item.quantity}</Table.Cell>
											<Table.Cell>
												{numberWithCommas(
													item.specification.price * item.quantity
												)}
											</Table.Cell>
											<Table.Cell>
												<Tooltip content="X??a s???n ph???m" color="error">
													<IconButton>
														<Icon
															icon="fluent:delete-24-filled"
															className="text-[#FF0080]"
															onClick={() => handleDelete(item.id)}
														/>
													</IconButton>
												</Tooltip>
											</Table.Cell>
										</Table.Row>
									);
								})}
							</Table.Body>
						</Table>
						<div className="bg-white rounded-lg mt-4">
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
									<div className="w-full lg:w-6/12 px-4 mb-8">
										<div className="relative w-full mb-3 z-0">
											<Input
												fullWidth
												clearable
												bordered
												color="default"
												labelPlaceholder="Email"
												value={email}
												onChange={(e: any) => setEmail(e.target.value)}
											/>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
					<div className="w-full xl:w-3/12 flex flex-col">
						<div className=" px-4 bg-white border border-solid border-slate-100 rounded-lg h-36">
							<div className="flex justify-between my-3">
								<span>T???ng c???ng</span>
								<span>
									{numberWithCommas(total)}
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
									{numberWithCommas(total)}
									<sup>??</sup>
								</span>
							</div>
						</div>
						<div className="text-lg text-left mt-5 bg-gradient-to-r from-[#ffecd2] to-[#fcb69f] rounded-lg ">
							<span className="px-4 font-bold pt-8">
								Ch???n ph????ng th???c thanh to??n:
							</span>
							<div className="flex flex-col px-4 pb-5">
								<Radio.Group defaultValue="A">
									<Radio
										checked={!momoPay}
										onClick={() => {
											setMomoPay(false);
										}}
									>
										Thanh to??n khi nh???n h??ng
									</Radio>
									<Radio
										checked={momoPay}
										onClick={() => {
											setMomoPay(true);
										}}
									>
										Thanh to??n Momo
									</Radio>
								</Radio.Group>
							</div>
						</div>
						<button
							onClick={handleAddOrder}
							className="align-middle text-center px-4 bg-red-500 border border-solid rounded-lg py-4 items-center my-4"
						>
							<span className="font-bold text-white text-center">TI???P T???C</span>
						</button>
					</div>
				</div>
			</MainLayout>
		</>
	);
};

export default Cart;
