import React, { useState } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import Link from 'next/link';

function numberWithCommas(x: any) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
interface ICardDetailProps {
	slug: String;
	id: String;
	img: any;
	name: any;
	price: any;
	rating: any;
}
const CardDetail = (props: ICardDetailProps) => {
	return (
		<Link href={'/product/' + props.slug + '.' + props.id + '.html'}>
			<a>
				<div className="my-6 bg-white h-[400px] rounded-lg">
					<div className="py-3 text-center">
						<Image
							src={props.img ? props.img : '/images/product/oppo_1.jpg'}
							width={206}
							height={206}
							alt={props.name}
							className="transition duration-150 ease-out hover:ease-in hover:scale-105"
						/>
					</div>

					<div className="flex flex-col pb-5">
						<span className="font-bold text-sm mx-5 mt-5 mb-2 hover:text-[#3891da]">
							{props.name}
						</span>
						<span className="font-bold text-xl text-red-500 mx-5">
							{numberWithCommas(props.price)}
							<sup>đ</sup>
						</span>
						<div className="flex flex-row">
							<div className="mt-3 mx-3 flex flex-row items-center">
								{props.rating == 0 ? (
									<div className="text-gray-500">Chưa có đánh giá</div>
								) : (
									[...Array(5)].map((star, i) => {
										return (
											<label key={i}>
												{/* <input type="radio" name="rating" className="hidden" /> */}
												{i < Math.round(props.rating) ? (
													<Icon icon="emojione:star" />
												) : (
													<Icon icon="emojione-monotone:star" />
												)}
											</label>
										);
									})
								)}
							</div>
							{/* <span className="text-gray-10 mt-2">(100)</span> */}
						</div>
					</div>
				</div>
			</a>
		</Link>
	);
};

export default CardDetail;
