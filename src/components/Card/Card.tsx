import React, { useState } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';

const Card = () => {
	return (
		<div className="max-w-7xl absolute my-5 bg-orange-200">
			<div className="pt-5 flex flex-col pb-10">
				<Image
					src="/images/home/oppo.png"
					width={300}
					height={300}
					alt="Oppo"
				/>
				<span className="font-bold text-xl mx-5">Oppo Reno 7z</span>
				<span className="font-bold text-xl text-red-500 mx-5">
					10.490.000<sup>đ</sup>
				</span>
				<div className="mt-3 mx-5 flex flex-row items-center">
					{[...Array(5)].map((star, i) => {
						return (
							<label key={i}>
								<input
									type="radio"
									name="rating"
									className="hidden"
								/>
								<Icon icon="emojione:star" className="mx-1" />
							</label>
						);
					})}
					<span className="text-gray-10 mx-5">(100 đánh giá)</span>
				</div>
			</div>
		</div>
	);
};

export default Card;
