import type { NextPage } from 'next';
import Navbar from '@/components/Navbar';
import SubNavbar from '@/components/SubNavbar';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
	return (
		<div>
			<Navbar />
			<SubNavbar />
		</div>
	);
};

export default Home;
