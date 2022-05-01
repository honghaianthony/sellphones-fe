import type { NextPage } from 'next';
import Navbar from '@/components/Navbar';
import SubNavbar from '@/components/SubNavbar';
import Slider from '@/components/Slider';
import Card from '@/components/Card';
import Head from 'next/head';
import Image from 'next/image';
import MainLayout from '@/components/Layouts/MainLayout';

const Home: NextPage = () => {
	return (
		<MainLayout>
			<Slider />
			<div className="container my-20 mx-auto items-center justify-between bg-gray-100">
				<span className="font-bold text-2xl ml-8">Hàng nổi bật</span>
				<div className="grid grid-cols-4 gap-8 px-8">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
				<span className="font-bold text-2xl ml-8">Gợi ý dánh cho bạn</span>
				<div className="grid grid-cols-4 gap-8 px-8">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</MainLayout>
	);
};

export default Home;
