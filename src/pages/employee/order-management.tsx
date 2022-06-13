import EmployeeLayout from '@/components/Layouts/EmployeeLayout';
import React from 'react';

import { CardOrder } from '@/components/CardDetail';

const OrderManagement = () => {
	return (
		<EmployeeLayout>
			<div className="flex flex-wrap mt-32">
				<div className="w-full px-4">
					<CardOrder tableTitle="Danh sách các đơn hàng" />
				</div>
			</div>
		</EmployeeLayout>
	);
};

export default OrderManagement;
