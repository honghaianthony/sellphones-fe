import Navbar from '@/components/Navbar';
import React from 'react';
import SubNavbar from '../SubNavbar';

type MainLayoutProps = {
	children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
	return (
		<div className="bg-gray-100 h-screen">
			<Navbar />
			<SubNavbar />
			{children}
		</div>
	);
};

export default MainLayout;
