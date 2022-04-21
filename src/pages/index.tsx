import type { NextPage } from 'next';
import Navbar from '@/components/Navbar';
import SubNavbar from '@/components/SubNavbar';
import Slider from '@/components/Slider';
import Card from '@/components/Card';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
	return (
		<div className="bg-gray-100 h-screen">
			<Navbar />
			<SubNavbar />
			<Slider />
			<div className="container my-20 mx-auto items-center justify-between bg-gray-100">
				<span className="font-bold text-2xl">Hàng nổi bật</span>
				<Card />
			</div>
		</div>
	);
};

export default Home;
