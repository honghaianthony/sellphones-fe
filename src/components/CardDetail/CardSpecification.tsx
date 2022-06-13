import React, { useEffect, useState } from 'react';
import { Table, Row, Col, Tooltip, User, Text } from '@nextui-org/react';
import { IconButton } from './IconButton';
import { Icon } from '@iconify/react';
// import { getAllProducts, deleteProduct } from '@/pages/api/productApi';
import {
	getSpecificationDetail,
	deleteSpecificationDetail,
} from '@/pages/api/specificationApi';
import Link from 'next/link';
import { toast } from 'react-toastify';

// components

function numberWithCommas(x: any) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

export default function CardSpecification(props: any) {
	const [specification, setSpecification] = useState([]);
	const handleDelete = async (product: any) => {
		try {
			let response: any = await deleteSpecificationDetail(product._id);

			const succ: any = await getSpecificationDetail();
			setSpecification(succ);

			toast.success('Xóa thành công');
		} catch (error) {}
	};
	useEffect(() => {
		const asyncFetchDailyData = async () => {
			const allSpecifications: any = await getSpecificationDetail();

			setSpecification(allSpecifications);
		};

		asyncFetchDailyData();
	}, []);

	console.log(specification);
	return (
		<>
			<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded z-0">
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
							<Table.Column>MÀU SẮC</Table.Column>
							<Table.Column>BỘ NHỚ TRONG</Table.Column>
							<Table.Column>SỐ LƯỢNG</Table.Column>
							<Table.Column>GIÁ</Table.Column>
							<Table.Column>THAO TÁC</Table.Column>
						</Table.Header>
						<Table.Body>
							{specification &&
								specification.map((item: any, index) => {
									return (
										<Table.Row key={index} className="items-center">
											<Table.Cell>{item.product.name}</Table.Cell>
											<Table.Cell>{item.specification.color}</Table.Cell>
											<Table.Cell>{item.specification.storage}</Table.Cell>
											<Table.Cell>{item.specification.quantity}</Table.Cell>
											<Table.Cell>
												{numberWithCommas(item.specification.price)}
											</Table.Cell>
											<Table.Cell>
												<Tooltip content="Chỉnh sửa sản phẩm" color="success">
													<IconButton>
														<Link
															href={`/admin/update-specification/${item.specification._id}`}
														>
															<a>
																<Icon
																	icon="eva:edit-2-outline"
																	className="text-[#6ff033] mr-3"
																/>
															</a>
														</Link>
													</IconButton>
												</Tooltip>
												<Tooltip content="Xóa sản phẩm" color="error">
													<IconButton>
														<button
															onClick={() => {
																handleDelete(item.specification);
															}}
														>
															<Icon
																icon="fluent:delete-24-filled"
																className="text-[#FF0080]"
															/>
														</button>
													</IconButton>
												</Tooltip>
											</Table.Cell>
										</Table.Row>
									);
								})}
						</Table.Body>
						<Table.Pagination
							shadow
							noMargin
							align="center"
							rowsPerPage={7}
							total={Math.ceil(specification.length / 7)}
							onPageChange={(page) => console.log({ page })}
						/>
					</Table>
				</div>
			</div>
		</>
	);
}
