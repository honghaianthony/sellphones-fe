import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import React from 'react';
import SubNavbar from '../SubNavbar';

type MainLayoutProps = {
	children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
	return (
		<div className="bg-gray-100 h-full">
			<Navbar />
			<SubNavbar />
			{children}
			<Footer />
		</div>
	);
};

export default MainLayout;
