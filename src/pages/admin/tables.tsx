import React from 'react';

// components

import { CardTable } from '@/components/CardDetail';
import { CardOrder } from '@/components/CardDetail';

// layout for page

import Admin from '@/components/Layouts/AdminLayout';

export default function Tables() {
	return (
		<Admin>
			<div className="flex flex-wrap mt-32">
				<div className="w-full mb-12 xl:mb-0 px-4">
					<CardOrder tableTitle="Danh sách các đơn hàng" />
				</div>
			</div>
		</Admin>
	);
}

Tables.layout = Admin;
