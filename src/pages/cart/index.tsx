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
import { getCart, deleteCart, getCartInfo } from '@/pages/api/cartApi';
import { addOrder } from '@/pages/api/orderApi';
import Image from 'next/image';
import { toast } from 'react-toastify';

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

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

const Cart: NextPage = () => {
	const [dailyData, setDailyData] = useState([]);
	const [infoCart, setInfoCart] = useState([]);
	var total = 0;

	useEffect(() => {
		const asyncFetchDailyData = async () => {
			const fetchData = await getCart(); // fetchDailyData() is calling Api
			setDailyData(fetchData);
		};

		asyncFetchDailyData();
	}, []);

	useEffect(() => {
		const asyncFetchDailyData = async () => {
			const fetchData = await getCartInfo(); // fetchDailyData() is calling Api
			setInfoCart(fetchData);
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
	console.log(infoCart);

	const handleAddOrder = async () => {
		const orderData = {
			carts: infoCart,
		};
		const res = await addOrder(orderData);
		if (res) {
			toast.success('Đặt hàng thành công. Vui lòng điền thông tin khách hàng');
		} else {
			toast.error('Đặt hàng thất bại');
		}
	};
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
								<Table.Column>Thông tin sản phẩm</Table.Column>
								<Table.Column>Đơn giá</Table.Column>
								<Table.Column>Số lượng</Table.Column>
								<Table.Column>Thành tiền</Table.Column>
								<Table.Column>THAO TÁC</Table.Column>
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
												<sup>đ</sup>
											</Table.Cell>
											<Table.Cell>{item.quantity}</Table.Cell>
											<Table.Cell>
												{numberWithCommas(
													item.specification.price * item.quantity
												)}
											</Table.Cell>
											<Table.Cell>
												<Tooltip content="Xóa sản phẩm" color="error">
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
					</div>
					<div className="w-full xl:w-3/12 flex flex-col">
						<div className=" px-4 bg-white border border-solid border-slate-100 rounded-lg h-36">
							<div className="flex justify-between my-3">
								<span>Tổng cộng</span>
								<span>
									{numberWithCommas(total)}
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
									{numberWithCommas(total)}
									<sup>đ</sup>
								</span>
							</div>
						</div>
						<Link href="/info">
							<a className="align-middle text-center px-4 bg-red-500 border border-solid rounded-lg py-4 items-center my-4">
								<button onClick={handleAddOrder}>
									<span className="font-bold text-white text-center">
										TIẾP TỤC
									</span>
								</button>
							</a>
						</Link>
					</div>
				</div>

				{/* <div className="container px-32">
					<div className='bg-white rounded-2xl'>
            <div className='p-4 font-bold text-xl'>Đặt mua sản phẩm</div>
            <hr />
            <CartItem />
            <hr />
            <div className='p-8'>
              <div className='font-bold text-xl'>Thông tin khánh hàng</div>
              <div>Họ và tên: Nguyễn Văn A</div>
              <div>Giới tính: Nam</div>
              <div>Số điện thoại: 0123456789</div>
              <div>Địa chỉ: TP. Hồ Chí Minh</div>
              <div>Email: nguyenvana@gmail.com</div>
            </div>
            <hr />
            <div>
              <div>Tổng tiền: </div>
              <div>Giảm: </div>
              <div>Cần thanh toán: </div>
            </div>
            <button className='bg-red-600 text-white p-4 text-2xl rounded-xl'>Hoàn tất đặt hàng</button>
          </div>
				</div> */}
			</MainLayout>
		</>
	);
};

export default Cart;
