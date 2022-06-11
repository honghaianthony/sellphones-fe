import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { addCart } from '@/pages/api/cartApi';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { getUser } from '@/pages/api/userApi';
import { addOrder, buyNow, updateOrder, updatePaymentMethod } from '@/pages/api/orderApi'
import { Input, Radio } from '@nextui-org/react';

const BuyModal = (props: any) => {
	const router = useRouter();
	const [counter, setCounter] = useState(1);
	const [cart, setCart] = useState({});
	const [user, setUser] = useState<any>();
	const [name, setName] = useState<string>("");
	const [phone, setPhone] = useState<string>("");
	const [address, setAddress] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [momoPay, setMomoPay] = useState<any>(false);

	useEffect(() => {
		const asyncFetchDailyData = async () => {
			const fetchData: any = await getUser(); // fetchDailyData() is calling Api
			setUser(fetchData);
			setName(fetchData.fullName);
			setPhone(fetchData.phone);
			setAddress(fetchData.address);
			setEmail(fetchData.email);
		};

		asyncFetchDailyData();
	}, []);

	const increase = () => {
		setCounter((count) => count + 1);
	};

	const decrease = () => {
		if (counter > 0) {
			setCounter((count) => count - 1);
		}
	};

	const reset = () => {
		setCounter(0);
	};
	const handleOrder = async () => {
		const cartData = {
			specificationId: props.id,
			quantity: counter,
		};
		const body = {
			carts: [cartData]
		}
		try {
			const res: any = await buyNow(body);
			console.log(res);
			if(res.statusCode === 201) {
				const info: any = await updateOrder({_id: res.orderId, address: address, fullName: name, phone: phone});
				if (momoPay === true) {
					await updatePaymentMethod({idOrder: res.orderId, method: "Thanh toán MOMO", status: 1})
				}
				if (info.statusCode === 201) {
					toast.success('Đặt hàng thành công');
					props.handleClick();
				} else {
					toast.error('Đặt hàng thất bại');
				}
			} else {
				toast.error('Đặt hàng thất bại');
			}
		} catch (error) {
			toast.error('Đặt hàng thất bại');
		}
	};

	function numberWithCommas(x: any) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
	}

	console.log(user);

	return (
		<>
			{counter > 0 ? (
				<div className="container max-w-7xl mx-auto my-5">
					<div className="bg-white rounded-2xl">
						<div className="p-6 font-bold text-xl flex justify-between">
							<span>Đặt mua sản phẩm</span>
						</div>
						<hr />
						<div className="my-6 bg-white flex flex-col md:flex-row justify-between">
							<div className="mx-8 py-3 flex flex-col md:flex-row">
								<div>
									<Image
										src={props.img ? props.img : '/images/product/oppo_1.jpg'}
										width={206}
										height={206}
										alt="Oppo"
										className="absolute"
									/>
								</div>

								<div className="max-w-xl flex flex-col">
									<div className="font-bold text-xl mx-5 mt-5 mb-2 text-left">
										{props.name} {props.storage}
									</div>
									<div className="font-bold text-lg mx-5 mb-2 text-left">
										{props.color}
									</div>
									<div className="flex text-left mx-5 text-sm items-center text-[#6a737a]">
										<Icon icon="bi:dot" />
										<p>Giảm ngay 500.000đ áp dụng đến 03/05 + Trả góp 0%</p>
									</div>
									<div className="flex text-left mx-5 text-sm items-center text-[#6a737a]">
										<Icon icon="bi:dot" />
										<p>
											Tặng PMH 150.000đ mua gói Bảo Hành Rơi Vỡ/Vào nước 12
											tháng
										</p>
									</div>
									<div className="flex text-left mx-5 text-sm items-center text-[#6a737a]">
										<Icon icon="bi:dot" />
										<p>Thu cũ đổi mới trợ giá 15%</p>
									</div>
									<div className="flex text-left mx-5 text-sm items-center text-[#6a737a]">
										<Icon icon="bi:dot" />
										<p>
											Giảm ngay 20% Tai nghe Enco Air 2 khi mua kèm Reno 7/Reno
											7z
										</p>
									</div>
									<div className="flex text-left mx-5 text-sm items-center text-[#6a737a]">
										<Icon icon="bi:dot" />
										<p>Cơ hội trúng Jackpot đến 2 tỷ</p>
									</div>
								</div>
							</div>

							<div className="flex flex-col items-center text-center">
								<div className="flex flex-row items-center">
									<button className="h-4" onClick={decrease}>
										<Icon
											icon="akar-icons:circle-minus-fill"
											className="hover:text-red-500"
										/>
									</button>
									<div className="mx-3">{counter}</div>
									<button className="h-4" onClick={increase}>
										<Icon
											icon="akar-icons:circle-plus-fill"
											className="hover:text-green-500"
										/>
									</button>
								</div>
								<button
									className="flex items-center -ml-4 my-2 cursor-pointer"
									onClick={reset}
								>
									<Icon icon="ep:delete-filled" className="mx-3" />
									<span>Xóa</span>
								</button>
							</div>

							<div className="font-bold text-xl text-red-500 mx-5">
								{numberWithCommas(props.price * counter)}
								<sup>đ</sup>
							</div>
						</div>
						<hr />
						<div className="p-8 text-left child:my-2 w-full">
							<div className="font-bold text-xl ">Thông tin khánh hàng</div>
							{user && (
								<div className="flex flex-row">
									<div className="child:h-12 child:leading-10">
										<div className="">Họ và tên:</div>
										<div className="">Số điện thoại:</div>
										<div className="">Địa chỉ:</div>
										<div className="">Email:</div>
									</div>
									<div className="flex flex-col child:w-full child:h-12 w-1/2">
										<Input
											bordered
											color="default"
											className="ml-2"
											type="text"
											value={name}
											onChange={(e: any) => {
												setName(e.target.value);
											}}
										/>
										<Input
											bordered
											color="default"
											className="ml-2 "
											type="text"
											value={phone}
											onChange={(e: any) => {
												setPhone(e.target.value);
											}}
										/>
										<Input
											bordered
											color="default"
											className="ml-2 "
											type="text"
											value={address}
											onChange={(e: any) => {
												setAddress(e.target.value);
											}}
										/>
										<Input
											bordered
											color="default"
											className="ml-2 "
											type="text"
											value={email}
											onChange={(e: any) => {
												setEmail(e.target.value);
											}}
										/>
									</div>
								</div>
							)}
						</div>
						<hr />
						<div className="text-right ml-auto mr-2 mx-3 max-w-sm my-3">
							<div className="flex justify-between">
								<span className="text-lg">Tổng tiền: </span>
								<span>{numberWithCommas(props.price * counter)}</span>
							</div>
							<div className="flex justify-between">
								<span className="text-lg">Giảm: </span>
								<span>-500.000đ</span>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-xl font-bold">Cần thanh toán: </span>
								<span className="text-red-500 font-bold text-xl">
									{numberWithCommas(props.price * counter - 500000)}
								</span>
							</div>
							<div className="text-lg text-left">
								Chọn phương thức thanh toán:
							</div>
							<div className="flex flex-col">
								<Radio
									checked={!momoPay}
									onClick={() => {
										setMomoPay(false);
									}}
								>
									<Radio.Description>
										Thanh toán khi nhận hàng
									</Radio.Description>
								</Radio>
								<Radio
									checked={momoPay}
									onClick={() => {
										setMomoPay(true);
									}}
								>
									<Radio.Description>Thanh toán Momo</Radio.Description>
								</Radio>
							</div>
						</div>
						<div className="mx-auto flex align-middle justify-center my-10 items-center flex-col">
							<button
								className="bg-red-600 text-white px-4 py-3 text-2xl rounded-xl my-3"
								onClick={() => {
									handleOrder();
								}}
							>
								Hoàn tất đặt hàng
							</button>
							<span className="text-[#b7b7b7] mb-5">
								Bằng cách đặt hàng, bạn đồng ý với điều khoản sử dụng của
								SellPhone
							</span>
						</div>
					</div>
				</div>
			) : (
				<div className="container max-w-7xl mx-auto h-96 bg-white rounded-2xl my-16 relative">
					<div className="flex items-center mx-auto relative align-middle justify-center top-1/2">
						<Icon
							icon="bi:cart-fill"
							className="text-red-500 mx-3 text-2xl font-bold"
						/>
						<span className="text-2xl font-bold">
							Không có sản phẩm trong giỏ hàng
						</span>
					</div>
				</div>
			)}
		</>
	);
};

export default BuyModal;
