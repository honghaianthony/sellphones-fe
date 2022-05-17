import React, { useState } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';

export interface ICartItemProps {
	img: string;
	name: string;
	description: string;
	price: number;
	quality: number;
}

const CartItem = () => {
	const [counter, setCounter] = useState(0);

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
	return (
		<div className="my-6 bg-white flex justify-between">
			<div className="mx-8 py-3 flex flex-col md:flex-row">
				<div>
					<Image
						src="/images/home/oppo.png"
						width={206}
						height={206}
						alt="Oppo"
						className="absolute"
					/>
				</div>

				<div className="max-w-xl flex flex-col">
					<div className="font-bold text-xl mx-5 mt-5 mb-2 text-left">
						OPPO Reno7 Z 5G 8GB - 128GB
					</div>
					<div className="font-bold text-lg mx-5 mb-2 text-left">Đen</div>
					<div className="flex text-left mx-5 text-sm items-center text-[#6a737a]">
						<Icon icon="bi:dot" />
						<p>Giảm ngay 500.000đ áp dụng đến 03/05 + Trả góp 0%</p>
					</div>
					<div className="flex text-left mx-5 text-sm items-center text-[#6a737a]">
						<Icon icon="bi:dot" />
						<p>Tặng PMH 150.000đ mua gói Bảo Hành Rơi Vỡ/Vào nước 12 tháng</p>
					</div>
					<div className="flex text-left mx-5 text-sm items-center text-[#6a737a]">
						<Icon icon="bi:dot" />
						<p>Thu cũ đổi mới trợ giá 15%</p>
					</div>
					<div className="flex text-left mx-5 text-sm items-center text-[#6a737a]">
						<Icon icon="bi:dot" />
						<p>Giảm ngay 20% Tai nghe Enco Air 2 khi mua kèm Reno 7/Reno 7z</p>
					</div>
					<div className="flex text-left mx-5 text-sm items-center text-[#6a737a]">
						<Icon icon="bi:dot" />
						<p>Cơ hội trúng Jackpot đến 2 tỷ</p>
					</div>
				</div>
			</div>

			<div className="flex flex-row">
				<button className="h-4" onClick={decrease}>
					-
				</button>
				<div className="mx-2">{counter}</div>
				<button className="h-4" onClick={increase}>
					+
				</button>
			</div>

			<div className="font-bold text-xl text-red-500 mx-5">
				10.490.000<sup>đ</sup>
			</div>
		</div>
	);
};

export default CartItem;
