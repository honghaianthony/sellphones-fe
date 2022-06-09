import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import RatingBar from './RatingBar';

const Rating = (props: any) => {
	const [rating, setRating] = useState<any | null>();
	const [hover, setHover] = useState<any | null>(null);
	return (
		<div className="max-w-7xl bg-white rounded-lg pb-3">
			<h1 className="p-7 font-bold text-xl">
				Đánh giá & Nhận xét {props.name}
			</h1>

			<div className="items-center justify-between mx-5 flex flex-col lg:flex-row">
				<div className="flex flex-col items-center text-center ml-5">
					<p className="my-3 text-lg">Đánh giá trung bình</p>
					<p className="text-4xl text-[#BF3131] font-bold">5/5</p>
					<Icon icon="emojione:star" className="mt-2 text-lg" />
					<p className="text-sm my-3">1 đánh giá</p>
				</div>

				<div className="text-center items-center mx-auto">
					<RatingBar />
				</div>

				<div className="items-center flex flex-col py-3">
					<p>Bạn đã dùng sản phẩm này? Hãy gửi đánh giá</p>
					<div className="mt-3 mx-3 flex flex-row items-center">
						{[...Array(5)].map((star, i) => {
							const ratingValue = i + 1;
							return (
								<label key={i}>
									<input
										type="radio"
										name="rating"
										className="hidden"
										value={ratingValue}
										onClick={() => setRating(ratingValue)}
									/>
									<Icon
										icon="ant-design:star-filled"
										className="cursor-pointer transition color 200ms"
										color={
											ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'
										}
										onMouseEnter={() => setHover(ratingValue)}
										onMouseLeave={() => setHover(null)}
									/>
								</label>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Rating;
