import React from 'react';
import { Table, Row, Col, Tooltip, User, Text } from '@nextui-org/react';
import { IconButton } from './IconButton';
import { Icon } from '@iconify/react';
import { styled } from '@nextui-org/react';

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

export default function CardOrder(props: any) {
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
							<Table.Column>SẢN PHẨM</Table.Column>
							<Table.Column>TRẠNG THÁI ĐƠN HÀNG</Table.Column>
							<Table.Column>THAO TÁC</Table.Column>
						</Table.Header>
						<Table.Body>
							<Table.Row key="1" className="items-center">
								<Table.Cell>Đặng Ngô Hồng Hải</Table.Cell>
								<Table.Cell>dangngohonghai@gmail.com</Table.Cell>
								<Table.Cell>Trường Đại học CNTT</Table.Cell>
								<Table.Cell>0123456789</Table.Cell>
								<Table.Cell>Iphone 13 Pro Max 256GB</Table.Cell>
								<Table.Cell>
									<StyledBadge type="active">Thành công</StyledBadge>
								</Table.Cell>
								<Table.Cell>
									<Tooltip content="Xác nhận đơn hàng" color="success">
										<IconButton>
											<Icon icon="charm:tick" className="text-[#35e94d] mr-3" />
										</IconButton>
									</Tooltip>
									<Tooltip content="Xóa đơn hàng" color="error">
										<IconButton>
											<Icon icon="fa:close" className="text-[#FF0080]" />
										</IconButton>
									</Tooltip>
								</Table.Cell>
							</Table.Row>
							<Table.Row key="2">
								<Table.Cell>Đặng Ngô Hồng Hải</Table.Cell>
								<Table.Cell>dangngohonghai@gmail.com</Table.Cell>
								<Table.Cell>Trường Đại học CNTT</Table.Cell>
								<Table.Cell>0123456789</Table.Cell>
								<Table.Cell>Tai nghe bluetooth 3.0</Table.Cell>
								<Table.Cell>
									<StyledBadge type="vacation">Đang vận chuyển</StyledBadge>
								</Table.Cell>
								<Table.Cell>
									<Tooltip content="Xác nhận đơn hàng" color="success">
										<IconButton>
											<Icon icon="charm:tick" className="text-[#35e94d] mr-3" />
										</IconButton>
									</Tooltip>
									<Tooltip content="Xóa đơn hàng" color="error">
										<IconButton>
											<Icon icon="fa:close" className="text-[#FF0080]" />
										</IconButton>
									</Tooltip>
								</Table.Cell>
							</Table.Row>
							<Table.Row key="3">
								<Table.Cell>Đặng Ngô Hồng Hải</Table.Cell>
								<Table.Cell>dangngohonghai@gmail.com</Table.Cell>
								<Table.Cell>Trường Đại học CNTT</Table.Cell>
								<Table.Cell>0123456789</Table.Cell>
								<Table.Cell>Oppo Reno 7z 5G</Table.Cell>
								<Table.Cell>
									<StyledBadge type="paused">Hủy đơn</StyledBadge>
								</Table.Cell>
								<Table.Cell>
									<Tooltip content="Xác nhận đơn hàng" color="success">
										<IconButton>
											<Icon icon="charm:tick" className="text-[#35e94d] mr-3" />
										</IconButton>
									</Tooltip>
									<Tooltip content="Xóa đơn hàng" color="error">
										<IconButton>
											<Icon icon="fa:close" className="text-[#FF0080]" />
										</IconButton>
									</Tooltip>
								</Table.Cell>
							</Table.Row>
							<Table.Row key="4">
								<Table.Cell>Đặng Ngô Hồng Hải</Table.Cell>
								<Table.Cell>dangngohonghai@gmail.com</Table.Cell>
								<Table.Cell>Trường Đại học CNTT</Table.Cell>
								<Table.Cell>0123456789</Table.Cell>
								<Table.Cell>Oppo Reno 7z 5G</Table.Cell>
								<Table.Cell>
									<StyledBadge type="vacation">Đang vận chuyển</StyledBadge>
								</Table.Cell>
								<Table.Cell>
									<Tooltip content="Xác nhận đơn hàng" color="success">
										<IconButton>
											<Icon icon="charm:tick" className="text-[#35e94d] mr-3" />
										</IconButton>
									</Tooltip>
									<Tooltip content="Xóa đơn hàng" color="error">
										<IconButton>
											<Icon icon="fa:close" className="text-[#FF0080]" />
										</IconButton>
									</Tooltip>
								</Table.Cell>
							</Table.Row>
							<Table.Row key="5">
								<Table.Cell>Đặng Ngô Hồng Hải</Table.Cell>
								<Table.Cell>dangngohonghai@gmail.com</Table.Cell>
								<Table.Cell>Trường Đại học CNTT</Table.Cell>
								<Table.Cell>0123456789</Table.Cell>
								<Table.Cell>Oppo Reno 7z 5G</Table.Cell>
								<Table.Cell>
									<StyledBadge type="paused">Hủy đơn</StyledBadge>
								</Table.Cell>
								<Table.Cell>
									<Tooltip content="Xác nhận đơn hàng" color="success">
										<IconButton>
											<Icon icon="charm:tick" className="text-[#35e94d] mr-3" />
										</IconButton>
									</Tooltip>
									<Tooltip content="Xóa đơn hàng" color="error">
										<IconButton>
											<Icon icon="fa:close" className="text-[#FF0080]" />
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
