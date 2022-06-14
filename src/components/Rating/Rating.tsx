import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import RatingBar from './RatingBar';
import { getAllFeedback } from '@/pages/api/productApi';
import { Avatar, Grid, Progress } from '@nextui-org/react';

interface IRatingProps {
	name: String;
	rating: any;
	productId: any;
}
const Rating = (props: IRatingProps) => {
	const [rating, setRating] = useState<any | null>();
	const [hover, setHover] = useState<any | null>(null);
	const [feedbackList, setFeedbackList] = useState<any>([]);
	const [oneStar, setOneStar] = useState(0);
	const [twoStar, setTwoStar] = useState(0);
	const [threeStar, setThreeStar] = useState(0);
	const [fourStar, setFoureStar] = useState(0);
	const [fiveStar, setFiveeStar] = useState(0);
	const [maxStar, setMaxStar] = useState(1);

	const getFeedback = async () => {
		const res: any = await getAllFeedback(props.productId);
		setFeedbackList(res);
		let one = res.filter((i: any) => {
			return i.rateStar == 1;
		});
		let two = res.filter((i: any) => {
			return i.rateStar == 2;
		});
		let three = res.filter((i: any) => {
			return i.rateStar == 3;
		});
		let four = res.filter((i: any) => {
			return i.rateStar == 4;
		});
		let five = res.filter((i: any) => {
			return i.rateStar == 5;
		});
		setMaxStar(
			Math.max(one.length, two.length, three.length, four.length, five.length)
		);
		setOneStar(one.length);
		setTwoStar(two.length);
		setThreeStar(three.length);
		setFoureStar(four.length);
		setFiveeStar(five.length);
	};
	useEffect(() => {
		getFeedback();
	}, []);

	const mapFeedback = () => {
		return feedbackList.map((item: any, index: any) => {
			return (
				<div className="my-4 mx-7 flex items-center" key={index}>
					<Avatar
						pointer
						size="lg"
						src="/images/anonymous.png"
						color="gradient"
						bordered
						squared
					/>
					<div className="flex flex-col mx-3">
						<span className="font-bold">{item.user.fullName}</span>
						<p className="text-base">{item.content}</p>
					</div>
					{[...Array(5)].map((star, i) => {
						return (
							<label key={i}>
								{/* <input type="radio" name="rating" className="hidden" /> */}
								{i < Math.round(item.rateStar) ? (
									<Icon icon="emojione:star" />
								) : (
									<Icon icon="emojione-monotone:star" />
								)}
							</label>
						);
					})}
					<div className="mx-4">
						Kết quả phân tích đánh giá:
						<div className="rounded-sm bg-gradient-to-r from-[#f0cd9b] to-[#f4a186]">
							{item.sentimentResult.res}
						</div>
					</div>
				</div>
			);
		});
	};

	return (
		<div className="max-w-7xl bg-white rounded-lg pb-3">
			<h1 className="p-7 font-bold text-xl">
				Đánh giá & Nhận xét {props.name}
			</h1>

			<div className="items-center justify-between mx-5 flex flex-col lg:flex-row">
				<div className="flex flex-col items-center text-center ml-5">
					<p className="my-3 text-lg">Đánh giá trung bình</p>
					<p className="text-4xl text-[#BF3131] font-bold">
						{Math.round(props.rating * 10) / 10}/5
					</p>
					<Icon icon="emojione:star" className="mt-2 text-lg" />
					<p className="text-sm my-3">{feedbackList.length} đánh giá</p>
				</div>

				<div className="text-center items-center mx-auto">
					<Grid.Container xs={12} sm={3} gap={1}>
						<Grid className="flex w-96">
							<p className="text-sm mx-3">5</p>
							<Icon icon="emojione:star" className="mr-3" />
							<Progress color="success" value={(fiveStar / maxStar) * 100} />
						</Grid>
						<Grid className="flex w-96">
							<p className="text-sm mx-3">4</p>
							<Icon icon="emojione:star" className="mr-3" />
							<Progress color="success" value={(fourStar / maxStar) * 100} />
						</Grid>
						<Grid className="flex w-96">
							<p className="text-sm mx-3">3</p>
							<Icon icon="emojione:star" className="mr-3" />
							<Progress color="success" value={(threeStar / maxStar) * 100} />
						</Grid>
						<Grid className="flex w-96">
							<p className="text-sm mx-3">2</p>
							<Icon icon="emojione:star" className="mr-3" />
							<Progress color="success" value={(twoStar / maxStar) * 100} />
						</Grid>
						<Grid className="flex w-96">
							<p className="text-sm mx-3">1</p>
							<Icon icon="emojione:star" className="mr-3" />
							<Progress color="success" value={(oneStar / maxStar) * 100} />
						</Grid>
					</Grid.Container>
				</div>

				{/* <div className="items-center flex flex-col py-3">
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
				</div> */}
			</div>
			<hr className="mx-4" />
			<div className="m-4">{mapFeedback()}</div>
		</div>
	);
};

export default Rating;
