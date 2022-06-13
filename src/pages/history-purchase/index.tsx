import MainLayout from '@/components/Layouts/MainLayout';
import type { NextPage, GetServerSideProps, GetStaticProps } from 'next';
import React, { useState, useEffect } from 'react';
import { PageSEO } from '@/components/SEO';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import { styled } from '@nextui-org/react';
import {
	Table,
	Row,
	Col,
	Tooltip,
	User,
	Text,
	Input,
	Radio,
	Button,
	Modal,
} from '@nextui-org/react';
import { getOrderDetail } from '@/pages/api/orderApi';
import { addFeedBack } from '@/pages/api/feedBackApi';
import { toast } from 'react-toastify';

function numberWithCommas(x: any) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

export const StyledBadge = styled('span', {
	display: 'inline-block',
	textTransform: 'uppercase',
	padding: '$2 $3',
	margin: '0 2px',
	fontSize: '10px',
	fontWeight: '$bold',
	borderRadius: '14px',
	letterSpacing: '0.6px',
	lineHeight: 1,
	boxShadow: '1px 2px 5px 0px rgb(0 0 0 / 5%)',
	alignItems: 'center',
	alignSelf: 'center',
	color: '$white',
	variants: {
		type: {
			active: {
				bg: '$successLight',
				color: '$successLightContrast',
			},
			paused: {
				bg: '$errorLight',
				color: '$errorLightContrast',
			},
			vacation: {
				bg: '$warningLight',
				color: '$warningLightContrast',
			},
		},
	},
	defaultVariants: {
		type: 'active',
	},
});

const HistoryPurchase: NextPage = () => {
	const [order, setOrder] = useState([]);
	const [productId, setProductId] = useState();
	const [orderId, setOrderId] = useState();
	const [comment, setComment] = useState();
	const [cart, setCart] = useState([]);
	const [visible, setVisible] = React.useState(false);
	const handler = () => setVisible(true);
	const [rating, setRating] = useState<any | null>();
	const [hover, setHover] = useState<any | null>(null);

	const closeHandler = () => {
		setVisible(false);
	};
	useEffect(() => {
		const asyncFetchDailyData = async () => {
			const allOrder: any = await getOrderDetail();

			setOrder(allOrder);
		};
		asyncFetchDailyData();
	}, []);

	const handleCreateRating = async () => {
		const body = [
			{
				productId: productId,
				content: comment,
				rateStar: rating,
			},
		];
		const res = await addFeedBack(orderId, body);
		if (res) {
			toast.success('Cảm ơn bạn đã gửi đánh giá');
		} else {
			toast.error('Đánh giá thất bại');
		}
	};

	function handleClick(event: any) {
		const id = event.target.id;
		console.log(id);
		setProductId(id);
	}

	return (
		<>
			<PageSEO href="/history-purchase" name="Lịch sử mua hàng" />
			<MainLayout>
				<div className="container max-w-7xl flex flex-row pt-12 pl-4 lg:mx-auto md:mx-10 mb-4 items-center">
					<Link href="/">
						<a className="hover:text-blue-400">Trang chủ</a>
					</Link>
					<Icon icon="ant-design:arrow-right-outlined" className="mx-3" />
					<Link href="/cart">
						<a className="hover:text-blue-400">Lịch sử mua hàng</a>
					</Link>
				</div>
				<div className="container max-w-7xl bg-white rounded-lg mx-auto my-8">
					<h1 className="p-5 text-2xl font-bold">Lịch sử mua hàng</h1>
					<Table
						shadow={false}
						color="secondary"
						aria-label="Example pagination  table"
						css={{
							height: 'auto',
							minWidth: '100%',
						}}
						className="bg-white items-center"
					>
						<Table.Header>
							<Table.Column>Thông tin sản phẩm</Table.Column>
							<Table.Column>Tổng tiền</Table.Column>
							<Table.Column>Phí vận chuyển</Table.Column>
							<Table.Column>Địa chỉ</Table.Column>
							<Table.Column>Tình trạng đơn hàng</Table.Column>
							<Table.Column>Phương thức thanh toán</Table.Column>
							<Table.Column>Lý do hủy đơn</Table.Column>
						</Table.Header>
						<Table.Body>
							{order.map((item: any, index: any) => {
								return (
									<Table.Row key={index} className="items-center">
										<Table.Cell className="items-center flex">
											{item.carts.map((item2: any, index2: any) => {
												return (
													<Row key={index2} className="flex items-center my-3">
														<span className="mx-3">
															{item2.product.name} {item2.specification.storage}{' '}
															{item2.specification.color}
														</span>
														{item.orderStatus === 1 ? (
															<button
																className="px-8 py-3 text-white bg-blue-600 rounded focus:outline-none"
																id={item2.product._id}
																onClick={(e: any) => {
																	handleClick(e);
																	handler();
																	setOrderId(item._id);
																}}
																aria-label="open"
															>
																{console.log('id', 3)}
																Đánh giá
																<Modal
																	closeButton
																	aria-labelledby="modal-title"
																	open={visible}
																	onClose={closeHandler}
																>
																	<Modal.Header>
																		<Text id="modal-title" size={18}>
																			Hãy đánh giá sản phẩm bạn đã nhận
																		</Text>
																	</Modal.Header>
																	<Modal.Body>
																		<Input
																			clearable
																			bordered
																			fullWidth
																			color="primary"
																			size="lg"
																			placeholder="Nội dung đánh giá"
																			value={comment}
																			onChange={(e: any) =>
																				setComment(e.target.value)
																			}
																		/>
																		<div className="mt-3 flex items-center text-center mx-auto">
																			{[...Array(5)].map((star, i) => {
																				const ratingValue = i + 1;
																				return (
																					<label key={i}>
																						<input
																							type="radio"
																							name="rating"
																							className="hidden"
																							value={ratingValue}
																							onClick={() =>
																								setRating(ratingValue)
																							}
																						/>
																						<Icon
																							icon="ant-design:star-filled"
																							className="cursor-pointer transition color 200ms text-3xl"
																							color={
																								ratingValue <= (hover || rating)
																									? '#ffc107'
																									: '#e4e5e9'
																							}
																							onMouseEnter={() =>
																								setHover(ratingValue)
																							}
																							onMouseLeave={() =>
																								setHover(null)
																							}
																						/>
																					</label>
																				);
																			})}
																		</div>
																	</Modal.Body>
																	<Modal.Footer>
																		<button
																			className="px-8 py-3 text-white bg-blue-600 rounded focus:outline-none"
																			onClick={() => {
																				handleCreateRating();
																				closeHandler();
																			}}
																		>
																			Đánh giá
																		</button>
																	</Modal.Footer>
																</Modal>
															</button>
														) : (
															<button
																className="px-8 py-3 text-white bg-blue-300 rounded focus:outline-none"
																disabled
															>
																Đánh giá
															</button>
														)}
													</Row>
												);
											})}
										</Table.Cell>
										<Table.Cell>
											{numberWithCommas(item.price)} <sup>đ</sup>
										</Table.Cell>
										<Table.Cell>
											{numberWithCommas(item.deliveryFees)}
										</Table.Cell>
										<Table.Cell>{item.address}</Table.Cell>
										<Table.Cell>
											{item.orderStatus === 0 ? (
												<StyledBadge type="paused">Hủy đơn</StyledBadge>
											) : item.orderStatus === 1 ? (
												<StyledBadge type="active">Thành công</StyledBadge>
											) : item.orderStatus === 2 ? (
												<StyledBadge type="vacation">
													Đang vận chuyển
												</StyledBadge>
											) : item.orderStatus === 3 ? (
												<StyledBadge type="active">Đã giao</StyledBadge>
											) : null}
										</Table.Cell>
										<Table.Cell>
											{item.paymentMethod
												? item.paymentMethod
												: 'Thanh toán khi nhận hàng'}
										</Table.Cell>
										<Table.Cell>
											{item.cancelReason ? item.cancelReason : 'Không có'}
										</Table.Cell>
									</Table.Row>
								);
							})}
						</Table.Body>
					</Table>
				</div>
			</MainLayout>
		</>
	);
};

export default HistoryPurchase;
