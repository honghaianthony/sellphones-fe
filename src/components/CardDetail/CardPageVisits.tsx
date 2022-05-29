import React from 'react';
import { Table, Row, Col, Tooltip, User, Text } from '@nextui-org/react';
import { IconButton } from './IconButton';
import { Icon } from '@iconify/react';

// components

export default function CardPageVisits(props: any) {
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
							<Table.Column>TÊN SẢN PHẨM</Table.Column>
							<Table.Column>NHÃN HÀNG</Table.Column>
							<Table.Column>XUẤT XỨ</Table.Column>
							<Table.Column>HỆ ĐIỀU HÀNH</Table.Column>
							<Table.Column>THỜI GIAN RA MẮT</Table.Column>
							<Table.Column>THAO TÁC</Table.Column>
						</Table.Header>
						<Table.Body>
							<Table.Row key="1" className="items-center">
								<Table.Cell>Iphone 13 Pro Max 256GB</Table.Cell>
								<Table.Cell>Apple</Table.Cell>
								<Table.Cell>Mỹ</Table.Cell>
								<Table.Cell>iOS</Table.Cell>
								<Table.Cell>29/05/2022</Table.Cell>
								<Table.Cell>
									<Tooltip content="Chỉnh sửa sản phẩm" color="success">
										<IconButton>
											<Icon
												icon="eva:edit-2-outline"
												className="text-[#6ff033] mr-3"
											/>
										</IconButton>
									</Tooltip>
									<Tooltip content="Xóa sản phẩm" color="error">
										<IconButton>
											<Icon
												icon="fluent:delete-24-filled"
												className="text-[#FF0080]"
											/>
										</IconButton>
									</Tooltip>
								</Table.Cell>
							</Table.Row>
							<Table.Row key="2">
								<Table.Cell>Iphone 13 Pro Max 256GB</Table.Cell>
								<Table.Cell>Apple</Table.Cell>
								<Table.Cell>Mỹ</Table.Cell>
								<Table.Cell>iOS</Table.Cell>
								<Table.Cell>29/05/2022</Table.Cell>
								<Table.Cell>
									<Tooltip content="Chỉnh sửa sản phẩm" color="success">
										<IconButton>
											<Icon
												icon="eva:edit-2-outline"
												className="text-[#6ff033] mr-3"
											/>
										</IconButton>
									</Tooltip>
									<Tooltip content="Xóa sản phẩm" color="error">
										<IconButton>
											<Icon
												icon="fluent:delete-24-filled"
												className="text-[#FF0080]"
											/>
										</IconButton>
									</Tooltip>
								</Table.Cell>
							</Table.Row>
							<Table.Row key="3">
								<Table.Cell>Iphone 13 Pro Max 256GB</Table.Cell>
								<Table.Cell>Apple</Table.Cell>
								<Table.Cell>Mỹ</Table.Cell>
								<Table.Cell>iOS</Table.Cell>
								<Table.Cell>29/05/2022</Table.Cell>
								<Table.Cell>
									<Tooltip content="Chỉnh sửa sản phẩm" color="success">
										<IconButton>
											<Icon
												icon="eva:edit-2-outline"
												className="text-[#6ff033] mr-3"
											/>
										</IconButton>
									</Tooltip>
									<Tooltip content="Xóa sản phẩm" color="error">
										<IconButton>
											<Icon
												icon="fluent:delete-24-filled"
												className="text-[#FF0080]"
											/>
										</IconButton>
									</Tooltip>
								</Table.Cell>
							</Table.Row>
							<Table.Row key="4">
								<Table.Cell>Iphone 13 Pro Max 256GB</Table.Cell>
								<Table.Cell>Apple</Table.Cell>
								<Table.Cell>Mỹ</Table.Cell>
								<Table.Cell>iOS</Table.Cell>
								<Table.Cell>29/05/2022</Table.Cell>
								<Table.Cell>
									<Tooltip content="Chỉnh sửa sản phẩm" color="success">
										<IconButton>
											<Icon
												icon="eva:edit-2-outline"
												className="text-[#6ff033] mr-3"
											/>
										</IconButton>
									</Tooltip>
									<Tooltip content="Xóa sản phẩm" color="error">
										<IconButton>
											<Icon
												icon="fluent:delete-24-filled"
												className="text-[#FF0080]"
											/>
										</IconButton>
									</Tooltip>
								</Table.Cell>
							</Table.Row>
							<Table.Row key="5">
								<Table.Cell>Iphone 13 Pro Max 256GB</Table.Cell>
								<Table.Cell>Apple</Table.Cell>
								<Table.Cell>Mỹ</Table.Cell>
								<Table.Cell>iOS</Table.Cell>
								<Table.Cell>29/05/2022</Table.Cell>
								<Table.Cell>
									<Tooltip content="Chỉnh sửa sản phẩm" color="success">
										<IconButton>
											<Icon
												icon="eva:edit-2-outline"
												className="text-[#6ff033] mr-3"
											/>
										</IconButton>
									</Tooltip>
									<Tooltip content="Xóa sản phẩm" color="error">
										<IconButton>
											<Icon
												icon="fluent:delete-24-filled"
												className="text-[#FF0080]"
											/>
										</IconButton>
									</Tooltip>
								</Table.Cell>
							</Table.Row>
							<Table.Row key="6">
								<Table.Cell>Iphone 13 Pro Max 256GB</Table.Cell>
								<Table.Cell>Apple</Table.Cell>
								<Table.Cell>Mỹ</Table.Cell>
								<Table.Cell>iOS</Table.Cell>
								<Table.Cell>29/05/2022</Table.Cell>
								<Table.Cell>
									<Tooltip content="Chỉnh sửa sản phẩm" color="success">
										<IconButton>
											<Icon
												icon="eva:edit-2-outline"
												className="text-[#6ff033] mr-3"
											/>
										</IconButton>
									</Tooltip>
									<Tooltip content="Xóa sản phẩm" color="error">
										<IconButton>
											<Icon
												icon="fluent:delete-24-filled"
												className="text-[#FF0080]"
											/>
										</IconButton>
									</Tooltip>
								</Table.Cell>
							</Table.Row>
							<Table.Row key="7">
								<Table.Cell>Iphone 13 Pro Max 256GB</Table.Cell>
								<Table.Cell>Apple</Table.Cell>
								<Table.Cell>Mỹ</Table.Cell>
								<Table.Cell>iOS</Table.Cell>
								<Table.Cell>29/05/2022</Table.Cell>
								<Table.Cell>
									<Tooltip content="Chỉnh sửa sản phẩm" color="success">
										<IconButton>
											<Icon
												icon="eva:edit-2-outline"
												className="text-[#6ff033] mr-3"
											/>
										</IconButton>
									</Tooltip>
									<Tooltip content="Xóa sản phẩm" color="error">
										<IconButton>
											<Icon
												icon="fluent:delete-24-filled"
												className="text-[#FF0080]"
											/>
										</IconButton>
									</Tooltip>
								</Table.Cell>
							</Table.Row>
							<Table.Row key="8">
								<Table.Cell>Iphone 13 Pro Max 256GB</Table.Cell>
								<Table.Cell>Apple</Table.Cell>
								<Table.Cell>Mỹ</Table.Cell>
								<Table.Cell>iOS</Table.Cell>
								<Table.Cell>29/05/2022</Table.Cell>
								<Table.Cell>
									<Tooltip content="Chỉnh sửa sản phẩm" color="success">
										<IconButton>
											<Icon
												icon="eva:edit-2-outline"
												className="text-[#6ff033] mr-3"
											/>
										</IconButton>
									</Tooltip>
									<Tooltip content="Xóa sản phẩm" color="error">
										<IconButton>
											<Icon
												icon="fluent:delete-24-filled"
												className="text-[#FF0080]"
											/>
										</IconButton>
									</Tooltip>
								</Table.Cell>
							</Table.Row>
						</Table.Body>
						<Table.Pagination
							shadow
							noMargin
							align="center"
							rowsPerPage={3}
							onPageChange={(page) => console.log({ page })}
						/>
					</Table>
				</div>
			</div>
		</>
	);
}
