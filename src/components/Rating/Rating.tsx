import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import RatingBar from './RatingBar';
import { getAllFeedback } from '@/pages/api/productApi';
import { Grid, Progress } from '@nextui-org/react';

interface IRatingProps {
	name: String;
	rating: any;
	productId: any;
}
const Rating = (props: IRatingProps) => {
	const [rating, setRating] = useState<any | null>();
	const [hover, setHover] = useState<any | null>(null);
	const [feedbackList, setFeedbackList] = useState<any>([]);
	const getFeedback = async ()=>{
		const res = await getAllFeedback(props.productId)
		setFeedbackList(res)
	}
	useEffect(() => {
		getFeedback()
	}, [])
	
	return (
		<div className="max-w-7xl bg-white rounded-lg pb-3">
			<h1 className="p-7 font-bold text-xl">
				Đánh giá & Nhận xét {props.name}
			</h1>

			<div className="items-center justify-between mx-5 flex flex-col lg:flex-row">
				<div className="flex flex-col items-center text-center ml-5">
					<p className="my-3 text-lg">Đánh giá trung bình</p>
					<p className="text-4xl text-[#BF3131] font-bold">{props.rating}/5</p>
					<Icon icon="emojione:star" className="mt-2 text-lg" />
					<p className="text-sm my-3">{feedbackList.length} đánh giá</p>
				</div>

				<div className="text-center items-center mx-auto">
					<Grid.Container xs={12} sm={3} gap={1}>
						<Grid className="flex w-96">
							<p className="text-sm mx-3">5</p>
							<Icon icon="emojione:star" className="mr-3" />
							<Progress color="success" value={100} />
						</Grid>
						<Grid className="flex w-96">
							<p className="text-sm mx-3">4</p>
							<Icon icon="emojione:star" className="mr-3" />
							<Progress color="success" value={75} />
						</Grid>
						<Grid className="flex w-96">
							<p className="text-sm mx-3">3</p>
							<Icon icon="emojione:star" className="mr-3" />
							<Progress color="success" value={50} />
						</Grid>
						<Grid className="flex w-96">
							<p className="text-sm mx-3">2</p>
							<Icon icon="emojione:star" className="mr-3" />
							<Progress color="success" value={25} />
						</Grid>
						<Grid className="flex w-96">
							<p className="text-sm mx-3">1</p>
							<Icon icon="emojione:star" className="mr-3" />
							<Progress color="success" value={0} />
						</Grid>
					</Grid.Container>
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
