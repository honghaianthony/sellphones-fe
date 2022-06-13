import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { Tooltip, Button, Grid, Avatar } from '@nextui-org/react';
import UserCard from '@/components/UserCard';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import { useAuth } from '@/context/AuthContext';
import { getUser } from '@/pages/api/userApi';
import { getAllProductComment } from '@/pages/api/productApi';

interface ICommentProps {
	name: String;
	productId: String;
}

var stompClient: any = null;
const Comment = (props: ICommentProps) => {
	const [showInput, setShowInput] = useState(false);
	const [comment, setComment] = useState("");
	const [authState] = useAuth();
	const [user, setUser] = useState<any>();
	const [commentList, setCommentList] = useState([])


	const getUserData = async ()=> {
		try {
			const user: any = await getUser();
			setUser(user);
		} catch (error) {
			console.log(error);
		}
	}
	useEffect(()=>{
		getUserData();
	}, [authState])

	useEffect(()=>{
		connect();
		onRecieveComment();
	}, [])
	const connect = () => {
		let Sock: any = new SockJS('http://localhost:8102/ws');
		stompClient = Stomp.over(Sock);
		stompClient.connect({}, ()=>{
			setTimeout(()=>{
				onConnected();
			}, 500)
		}, onError);
	}

	const onConnected = () => {
		stompClient.subscribe(
			'/product/' + props.productId + "/**",
			onRecieveComment
		);
	};
	const onRecieveComment = async () => {
		// call lại api
		const cmt: any = await getAllProductComment(props.productId)
		setCommentList(cmt)
	};
	const onError = (err: any) => {
		console.log(err);
	};
	const sendComment = () => {
		if (stompClient && authState.isAuth) {
			const chatMessage = {
				ownerId: user.id,
				productId: props.productId,
				content: comment,
			};
			stompClient.send('/app/product/' + props.productId, {}, JSON.stringify(chatMessage));
			setComment("")
		}
	};
	const deleteComment = (item: any) => {
		const del = {
			ownerId: user.id,
			_id: item._id,
			productId: props.productId,
		}
		stompClient.send(
			'/app/delete',
			{},
			JSON.stringify(del)
		);
	}
	const handleClickReply = () => {
		setShowInput(!showInput);
	};
	const mapCmt = ()=> {
		return (
			commentList?.map((item: any, index: any)=> {
				return (
					<div key={index}>
						<div className="my-4 mx-7 flex items-center">
							<Avatar
								pointer
								size="xl"
								src="/images/anonymous.png"
								color="gradient"
								bordered
								squared
							/>
							<div className="flex flex-col mx-3">
								<span className="font-bold">{item.user.fullName}</span>
								<p className="text-base">{item.content}</p>
								<div className='child:mx-1'>
									{(authState.role === 'ROLE_ADMIN' ||
										authState.role === 'ROLE_STAFF') && (
										<button
											className="text-sm text-blue-400 text-left my-1"
											onClick={handleClickReply}
										>
											Trả lời
										</button>
									)}
									{user && user.id === item.ownerId && (
										<button
											className="text-sm text-blue-400 text-left my-1"
											onClick={()=>{deleteComment(item)}}
										>
											Xóa
										</button>
									)}
								</div>
							</div>
						</div>
						{item.cmtReplyDetail || true  && (
							<div className="flex flex-col border-l-4 border-[#c7c7c7] mx-28">
								<div className="flex flex-col mx-3">
									<div className="flex">
										<span className="font-bold text-black mr-3">
											Đặng Ngô Hồng Hải
										</span>
										<span className="w-24 h-5 px-2 bg-red-500 text-white text-sm pb-2">
											Quản trị viên
										</span>
									</div>
									<p className="text-base">Về rồi ạ</p>
								</div>
							</div>
						)}

						<div className="my-5 mx-5">
							{showInput && (
								<div className="relative flex items-center mx-7 px-4 border justify-between">
									<input
										type="text"
										placeholder="Viết bình luận"
										name="comment2"
										className="pt-5 pb-10"
									/>
									<Icon
										icon="bi:send"
										className="float-right text-red-500 w-5 h-5"
									/>
								</div>
							)}
						</div>
					</div>
				);
			})
		)
	}
	return (
		<div className="max-w-7xl bg-white rounded-lg pb-16">
			<h1 className="p-7 font-bold text-xl">Hỏi & Đáp về {props.name}</h1>

			{authState.isAuth && (
				<div className="flex items-center mx-7 px-4 border justify-between">
					<input
						type="text"
						placeholder="Viết bình luận"
						name="comment"
						className="pt-5 pb-10 w-full"
						value={comment}
						onChange={(e: any) => {
							setComment(e.target.value);
						}}
						onKeyDown={(e: any) => {
							if (e.key === 'Enter') {
								sendComment();
							}
						}}
					/>
					<Icon
						icon="bi:send"
						className="float-right text-red-500 w-5 h-5"
						onClick={sendComment}
					/>
				</div>
			)}
			{mapCmt()}
		</div>
	);
};

export default Comment;
