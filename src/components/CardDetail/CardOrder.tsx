import React, { useState, useEffect } from 'react';
import { Table, Row, Col, Tooltip, User, Text, Input } from '@nextui-org/react';
import { IconButton } from './IconButton';
import { Icon } from '@iconify/react';
import { styled } from '@nextui-org/react';
import { getOrderDetail, updateOrderStatus } from '@/pages/api/orderApi';
import { toast } from 'react-toastify';

// components

export const StyledBadge = styled('span', {
	display: 'inline-block',
	textTransform: 'uppercase',
	padding: '$2 $3',
	margin: '0 2px',
	fontSize: '10px',
	fontWeight: '$bold',
	borderRadius: '14px',
	letterSpacing: '0.6px',
	lineHeight: 1,
	boxShadow: '1px 2px 5px 0px rgb(0 0 0 / 5%)',
	alignItems: 'center',
	alignSelf: 'center',
	color: '$white',
	variants: {
		type: {
			active: {
				bg: '$successLight',
				color: '$successLightContrast',
			},
			paused: {
				bg: '$errorLight',
				color: '$errorLightContrast',
			},
			vacation: {
				bg: '$warningLight',
				color: '$warningLightContrast',
			},
		},
	},
	defaultVariants: {
		type: 'active',
	},
});

interface InfoRowProps {
	key: any;
	carts: any;
	price: any;
	fullName: any;
	deliveryFees: any;
	orderStatus: any;
	_id: any;
	index: any;
	updateStatus: any;
}

const InfoRow = (props: InfoRowProps) => {
	const [cancelReason, setCancelReason] = useState('');
	return (
		<tr className="bg-white border-b" key={props.key}>
			<th
				scope="row"
				className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
			>
				{props.carts.map((item2: any, index2: any) => {
					return (
						<Row key={index2} className="flex items-center my-3">
							<span className="mx-3">
								{item2.product.name} {item2.specification.storage}{' '}
								{item2.specification.color}
							</span>
						</Row>
					);
				})}
			</th>
			<td className="px-6 py-4">{props.price}</td>
			<td className="px-6 py-4">{props.fullName}</td>
			<td className="px-6 py-4">{props.deliveryFees}</td>
			<td className="px-6 py-4 text-right">
				<select
					className="mbg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
					value={props.orderStatus}
					onChange={async (e) => {
						await props.updateStatus(
							props._id,
							e.target.value,
							cancelReason,
							props.index
						);
					}}
				>
					<option value="0">Đã hủy</option>
					<option value="1">Đang chờ xác nhận</option>
					<option value="2">Đang vận chuyển</option>
					<option value="3">Đã giao</option>
				</select>
			</td>
			<td className="px-6 py-4 text-right">
				<input
					placeholder="Lý do hủy đơn"
					value={cancelReason}
					onChange={(e: any) => setCancelReason(e.target.value)}
					key={props._id}
				></input>
			</td>
		</tr>
	);
};

export default function CardOrder(props: any) {
	const [order, setOrder] = useState([]);

	useEffect(() => {
		const asyncFetchDailyData = async () => {
			const fetchData: any = await getOrderDetail(); // fetchDailyData() is calling Api
			setOrder(fetchData);
		};

		asyncFetchDailyData();
	}, []);
	const setRoleUI = (index: any, status: any) => {
		let temp: any = Array.from(order);
		temp[index] = {
			...temp[index],
			orderStatus: status,
		};
		console.log('temp', temp);
		setOrder(temp);
	};
	const updateStatus = async (
		id: any,
		status: any,
		cancelReason: any,
		index: any
	) => {
		const body = {
			orderId: id,
			status: status,
			cancelReason: cancelReason,
		};
		let response = await updateOrderStatus(body);
		if (response) {
			toast.success('Cập nhật thành công!');
			setRoleUI(index, status);
		} else {
			toast.error('Cập nhật thất bại!');
		}
	};
	console.log(order);

	return (
		<>
			<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
				<div className="rounded-t mb-0 px-4 py-3 border-0">
					<div className="flex flex-wrap items-center">
						<div className="relative w-full px-4 max-w-full flex-grow flex-1">
							<h3 className="font-semibold text-base ">{props.tableTitle}</h3>
						</div>
					</div>
				</div>
				<div className="block w-full overflow-x-auto">
					<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
						<table className="w-full text-sm text-left text-gray-500 ">
							<thead className="text-xs text-gray-700 uppercase bg-gray-50">
								<tr>
									<th scope="col" className="px-6 py-3">
										Thông tin sản phẩm
									</th>
									<th scope="col" className="px-6 py-3">
										Thành tiền
									</th>
									<th scope="col" className="px-6 py-3">
										Họ tên khách hàng
									</th>
									<th scope="col" className="px-6 py-3">
										Phí vận chuyển
									</th>
									<th scope="col" className="px-6 py-3">
										Tình trạng đơn hàng
									</th>
									<th scope="col" className="px-6 py-3">
										Lý do hủy đơn
									</th>
								</tr>
							</thead>
							<tbody>
								{order.map((item: any, index: any) => {
									return (
										<InfoRow
											_id={item._id}
											key={index}
											carts={item.carts}
											price={item.price}
											fullName={item.fullName}
											deliveryFees={item.deliveryFees}
											orderStatus={item.orderStatus}
											index={index}
											updateStatus={updateStatus}
										/>
									);
								})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);
}
