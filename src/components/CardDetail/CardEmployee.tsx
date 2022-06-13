import React, { useState, useEffect } from 'react';
import { Table, Row, Col, Tooltip, User, Text } from '@nextui-org/react';
import { IconButton } from './IconButton';
import { Icon } from '@iconify/react';
import { getAllUsers } from '@/pages/api/userApi';

// components

export default function CardEmployee(props: any) {
	const [employee, setEmployee] = useState([]);

	useEffect(() => {
		const asyncFetchDailyData = async () => {
			const fetchData: any = await getAllUsers(); // fetchDailyData() is calling Api
			setEmployee(fetchData);
		};

		asyncFetchDailyData();
	}, []);
	return (
		<>
			<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
				<div className="rounded-t mb-0 px-4 py-3 border-0">
					<div className="flex flex-wrap items-center">
						<div className="relative w-full px-4 max-w-full flex-grow flex-1">
							<h3 className="font-semibold text-base ">{props.tableTitle}</h3>
						</div>
						{/* <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
							<button
								className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
								type="button"
							>
								Chỉnh sửa
							</button>
						</div> */}
					</div>
				</div>
				<div className="block w-full overflow-x-auto">
					{/* Projects table */}
					<Table
						shadow={false}
						color="secondary"
						aria-label="Example pagination  table"
						css={{
							height: 'auto',
							minWidth: '100%',
						}}
						selectionMode="multiple"
					>
						<Table.Header>
							<Table.Column>HỌ TÊN</Table.Column>
							<Table.Column>EMAIL</Table.Column>
							<Table.Column>ĐỊA CHỈ</Table.Column>
							<Table.Column>SỐ ĐIỆN THOẠI</Table.Column>
							<Table.Column>CHỨC VỤ</Table.Column>
						</Table.Header>
						<Table.Body items={employee}>
							{employee.map((item: any, index: any) => {
								return (
									<Table.Row key={index} className="items-center">
										<Table.Cell>{item.fullName}</Table.Cell>
										<Table.Cell>{item.email}</Table.Cell>
										<Table.Cell>{item.address}</Table.Cell>
										<Table.Cell>{item.phone}</Table.Cell>
										<Table.Cell>Nhân viên</Table.Cell>
									</Table.Row>
								);
							})}
						</Table.Body>
						<Table.Pagination
							shadow
							noMargin
							align="center"
							rowsPerPage={3}
							total={Math.ceil(employee.length / 3)}
							onPageChange={(page) => console.log({ page })}
						/>
					</Table>
				</div>
			</div>
		</>
	);
}
