import React from 'react';

// components

import { CardPageVisits } from '@/components/CardDetail';
import { CardEmployee } from '@/components/CardDetail';
import { CardSocialTraffic } from '@/components/CardDetail';

// layout for page

import Admin from '@/components/Layouts/AdminLayout';

export default function Dashboard() {
	return (
		<Admin>
			<div className="flex flex-wrap mt-32">
				<div className="w-full mb-12 xl:mb-0 px-4">
					<CardEmployee tableTitle="Danh sách các nhân viên" />
				</div>
				{/* <div className="w-full xl:w-4/12 px-4">
					<CardSocialTraffic />
				</div> */}
			</div>
			<div className="flex flex-wrap">
				<div className="w-full mb-12 xl:mb-0 px-4">
					<CardPageVisits tableTitle="Danh sách các sản phẩm" />
				</div>
				{/* <div className="w-full xl:w-4/12 px-4">
					<CardSocialTraffic />
				</div> */}
			</div>
			<div className="flex flex-wrap">
				<div className="w-full mb-12 xl:mb-0 px-4">
					<CardPageVisits tableTitle="Danh sách các phụ kiện" />
				</div>
				{/* <div className="w-full xl:w-4/12 px-4">
					<CardSocialTraffic />
				</div> */}
			</div>
		</Admin>
	);
}

Dashboard.layout = Admin;
