import React, { useEffect, useState } from 'react';

import EmployeeLayout from '@/components/Layouts/EmployeeLayout';
import { getAllProductCommentStaff, replyComment } from '../api/productApi';
import { Input, Table, Modal, Text } from '@nextui-org/react';
import { IconButton } from '@/components/CardDetail/IconButton';
import { Icon } from '@iconify/react';
import { PopupModal } from '@/components/PopupModal';

import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import { toast } from 'react-toastify';

var stompClient: any = null;
function Overview() {
	const [cmt, setCmt] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [reply, setReply] = useState('');
	const getUnreplyCmt = async () => {
		const cmt: any = await getAllProductCommentStaff();
		setCmt(cmt);
	};

	const handler = () => setShowModal(true);
	const closeHandler = () => {
		setShowModal(false);
	};

	useEffect(() => {}, []);
	useEffect(() => {
		connect();
		getUnreplyCmt();
	}, []);
	const connect = () => {
		let Sock: any = new SockJS('http://localhost:8102/ws');
		stompClient = Stomp.over(Sock);
		stompClient.connect(
			{},
			() => {
				setTimeout(() => {
					onConnected();
				}, 500);
			},
			onError
		);
	};

	const onConnected = () => {
		stompClient.subscribe('/product', getUnreplyCmt);
	};
	const onError = (err: any) => {
		console.log(err);
	};
	const replyCmt = async (item: any) => {
		try {
			if (reply) {
				await replyComment({ content: reply, productCommentId: item.commentId });
				toast.success("Phản hồi thành công!")
				setShowModal(false)
				setReply("")
				getUnreplyCmt()
			} else {
				toast.warning("Không được phản hồi rỗng!")
			}
		} catch (error) {
			toast.error("Phản hồi thất bại!")
		}
	}
	return (
		<EmployeeLayout>
			<div className="block w-full overflow-x-auto my-5 bg-white">
				<Table
					shadow={false}
					color="secondary"
					aria-label="Cmt to reply"
					css={{
						height: 'auto',
						minWidth: '100%',
					}}
				>
					<Table.Header>
						<Table.Column>Họ tên</Table.Column>
						<Table.Column>Sản phẩm</Table.Column>
						<Table.Column>Bình luận</Table.Column>
						<Table.Column>THAO TÁC</Table.Column>
					</Table.Header>
					<Table.Body items={cmt}>
						{cmt.map((item: any, index: any) => {
							return (
								<Table.Row key={index} className="items-center">
									<Table.Cell>{item.userName}</Table.Cell>
									<Table.Cell>{item.productName}</Table.Cell>
									<Table.Cell>{item.content}</Table.Cell>
									<Table.Cell>
										<IconButton>
											<Icon
												icon="eva:edit-2-outline"
												className="text-[#6ff033] mr-3"
												onClick={handler}
											/>
										</IconButton>
										<Modal
											closeButton
											aria-labelledby="modal-title"
											open={showModal}
											onClose={closeHandler}
										>
											<Modal.Header>
												<Text id="modal-title" size={25} weight="bold">
													Phản hồi bình luận
												</Text>
											</Modal.Header>
											<Modal.Body>
												<div className="child:my-2 w-full">
													<div>
														Người dùng {item.userName} đã bình luận về sản phẩm{' '}
														{item.productName}
													</div>
													<div>Nội dung: </div>
													<div>{item.content}</div>
													<div>Phản hồi</div>
													<Input
														fullWidth
														clearable
														bordered
														color="default"
														value={reply}
														onChange={(e: any) => setReply(e.target.value)}
													/>
												</div>
											</Modal.Body>
											<Modal.Footer>
												<button className="px-8 py-3 text-white bg-blue-600 rounded-lg focus:outline-none" onClick={()=>{replyCmt(item)}}>
													Bình luận
												</button>
											</Modal.Footer>
										</Modal>
									</Table.Cell>
								</Table.Row>
							);
						})}
					</Table.Body>
					<Table.Pagination
						shadow
						noMargin
						align="center"
						rowsPerPage={5}
						total={Math.ceil(cmt.length / 5)}
						onPageChange={(page) => console.log({ page })}
					/>
				</Table>
			</div>
		</EmployeeLayout>
	);
}

export default Overview;
