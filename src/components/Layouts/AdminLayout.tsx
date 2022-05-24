import React from 'react';

// components

import { AdminNavbar } from '@/components/Navbar';
import { SidebarAdmin } from '@/components/Sidebar';
import { FooterAdmin } from '@/components/Footer';

interface AdminLayoutProps {
	children: any;
}

export default function Admin({ children }: AdminLayoutProps) {
	return (
		<>
			<SidebarAdmin />
			<div className="relative md:ml-64 bg-slate-100">
				<AdminNavbar />
				<div className="px-4 md:px-10 mx-auto w-full -m-24">
					{children}

					<FooterAdmin />
				</div>
			</div>
		</>
	);
}
