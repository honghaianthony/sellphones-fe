import React, { useEffect } from 'react';

// components

import { SidebarEmployee } from '@/components/Sidebar';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/AuthContext';

interface EmployeeLayoutProps {
	children: any;
}

export default function EmployeeLayout({ children }: EmployeeLayoutProps) {
	const router = useRouter();
	const [authState] = useAuth();
	useEffect(() => {
		if (
			!authState.isAuth &&
			authState.role !== 'ROLE_ADMIN' &&
			authState.role !== 'ROLE_STAFF'
		) {
			router.push('/');
		}
	}, []);
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
