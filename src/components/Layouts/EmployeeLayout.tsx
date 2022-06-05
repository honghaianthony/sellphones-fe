import React from 'react';

// components

import { SidebarEmployee } from '@/components/Sidebar';

interface EmployeeLayoutProps {
	children: any;
}

export default function EmployeeLayout({ children }: EmployeeLayoutProps) {
	return (
		<>
			<SidebarEmployee />
			<div className="relative md:ml-64 bg-slate-100">
				<div className="px-4 md:px-10 mx-auto w-full">
					{children}
				</div>
			</div>
		</>
	);
}
