import type { NextPage } from 'next';
import Navbar from '@/components/Navbar';
import SubNavbar from '@/components/SubNavbar';
import Slider from '@/components/Slider';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
	return (
		<div>
			<Navbar />
			<SubNavbar />
			<div className="flex flex-col lg:flex lg:flex-row w-full">
				<Slider />
			</div>
		</div>
	);
};

export default Home;
