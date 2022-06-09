import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { addCart } from '@/pages/api/cartApi';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const BuyModal = (props: any) => {
	const router = useRouter();
	const [counter, setCounter] = useState(1);
	const [cart, setCart] = useState({});

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
	const handleAddToCart = async () => {
		const cartData = {
			specificationId: props.id,
			quantity: counter,
		};
		const res = await addCart(cartData);
		if (res) {
			toast.success('Thêm vào giỏ hàng thành công');
			setCart(res);
		} else {
			toast.error('Thêm vào giỏ hàng thất bại');
		}
	};

	function numberWithCommas(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
	}
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
						<div className="p-8">
							<div className="font-bold text-xl">Thông tin khánh hàng</div>
							<div>Họ và tên: Nguyễn Văn A</div>
							<div>Giới tính: Nam</div>
							<div>Số điện thoại: 0123456789</div>
							<div>Địa chỉ: TP. Hồ Chí Minh</div>
							<div>Email: nguyenvana@gmail.com</div>
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
						</div>
						<div className="mx-auto flex align-middle justify-center my-10 items-center flex-col">
							<button
								className="bg-red-600 text-white px-4 py-3 text-2xl rounded-xl my-3"
								onClick={() => {
									props.handleClick();
									handleAddToCart();
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
