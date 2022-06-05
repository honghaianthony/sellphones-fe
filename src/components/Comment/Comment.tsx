import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { Tooltip, Button, Grid, Avatar } from '@nextui-org/react';
import UserCard from '@/components/UserCard';

const Comment = (props: any) => {
	const [showInput, setShowInput] = useState(false);
	const handleClickReply = () => {
		setShowInput(!showInput);
	};
	return (
		<div className="max-w-7xl bg-white rounded-lg pb-16">
			<h1 className="p-7 font-bold text-xl">Hỏi & Đáp về {props.name}</h1>

			<div className="flex items-center mx-7 px-4 border justify-between">
				<input
					type="text"
					placeholder="Viết bình luận"
					name="comment"
					className="pt-5 pb-10"
				/>
				<Icon icon="bi:send" className="float-right text-red-500 w-5 h-5" />
			</div>
			<div className="my-4 mx-7 flex items-center">
				<Tooltip placement="top" content={<UserCard />}>
					<Avatar
						pointer
						size="xl"
						src="/images/product/avatar.png"
						color="gradient"
						bordered
						squared
					/>
				</Tooltip>
				<div className="flex flex-col mx-3">
					<span className="font-bold">Đặng Ngô Hồng Hải</span>
					<p className="text-sm">Reno7.4g về chưa shop, giá bao nhiêu vậy</p>
					<button
						className="text-sm text-blue-400 text-left my-1"
						onClick={handleClickReply}
					>
						Trả lời
					</button>
				</div>
			</div>
			<div className="flex flex-col border-l-4 border-[#c7c7c7] mx-28">
				<div className="flex flex-col mx-3">
					<div className="flex">
						<span className="font-bold text-black mr-3">Đặng Ngô Hồng Hải</span>
						<span className="w-24 h-5 px-2 bg-red-500 text-white text-sm pb-2">
							Quản trị viên
						</span>
					</div>
					<p>Về rồi ạ</p>
				</div>
			</div>

			<div className="my-5 mx-5">
				{showInput ? (
					<div className="relative flex items-center mx-7 px-4 border justify-between">
						<input
							type="text"
							placeholder="Viết bình luận"
							name="comment2"
							className="pt-5 pb-10"
						/>
						<Icon icon="bi:send" className="float-right text-red-500 w-5 h-5" />
					</div>
				) : null}
			</div>
		</div>
	);
};

export default Comment;
