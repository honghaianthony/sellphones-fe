import React, { useState } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';

export interface ICartItemProps {
  img: string,
  name: string,
  description: string,
  price: number,
  quality: number,
}

const CartItem = () => {
	return (
		<div className="my-6 bg-white flex flex-row justify-between">
			<div className="mx-8 py-3 text-center flex flex-row">
				<Image
					src="/images/home/oppo.png"
					width={206}
					height={206}
					alt="Oppo"
				/>
				<div className="flex flex-col">
					<div className="font-bold text-xl mx-5 mt-5 mb-2 ">
						OPPO Reno7 Z 5G 8GB - 128GB
					</div>
					<div className='max-w-sm text-left ml-10 text-sm'>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book.
					</div>
				</div>
			</div>

			<div className="flex flex-row">
				<button className="h-4">-</button>
				<div className="mx-2">1</div>
				<button className="h-4">+</button>
			</div>

			<div className="font-bold text-xl text-red-500 mx-5">
				10.490.000<sup>đ</sup>
			</div>
		</div>
	);
};

export default CartItem;
