import React, { useEffect } from 'react';

// components

import { AdminNavbar } from '@/components/Navbar';
import { SidebarAdmin } from '@/components/Sidebar';
import { FooterAdmin } from '@/components/Footer';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/AuthContext';

interface AdminLayoutProps {
	children: any;
}

export default function Admin({ children }: AdminLayoutProps) {
	const router = useRouter();
	const [authState] = useAuth();
	useEffect(() => {
		if (!authState.isAuth && authState.role !== 'ROLE_ADMIN') {
			router.push('/');
		}
	}, []);
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
