import React, { useState } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';

const CardDetail = () => {
	return (
		<div className="my-6 bg-white">
			<div className="mx-auto py-3 text-center">
				<Image
					src="/images/home/oppo.png"
					width={206}
					height={206}
					alt="Oppo"
				/>
			</div>

			<div className="flex flex-col pb-5">
				<span className="font-bold text-xl mx-5 mt-5 mb-2">Oppo Reno 7z</span>
				<span className="font-bold text-xl text-red-500 mx-5">
					10.490.000<sup>đ</sup>
				</span>
				<div className="flex flex-row">
					<div className="mt-3 mx-5 flex flex-row items-center">
						{[...Array(5)].map((star, i) => {
							return (
								<label key={i}>
									<input type="radio" name="rating" className="hidden" />
									<Icon icon="emojione:star" className="mx-1" />
								</label>
							);
						})}
					</div>
					<span className="text-gray-10 mx-3 mt-2">(100 đánh giá)</span>
				</div>
			</div>
		</div>
	);
};

export default CardDetail;
