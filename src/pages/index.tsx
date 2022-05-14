import type { NextPage } from 'next';
import Navbar from '@/components/Navbar';
import SubNavbar from '@/components/SubNavbar';
import Slider from '@/components/Slider';
import CardDetail from '@/components/CardDetail';
import Head from 'next/head';
import Image from 'next/image';
import MainLayout from '@/components/Layouts/MainLayout';
import { Card, Grid, Row, Text } from '@nextui-org/react';

const Home: NextPage = () => {
	const list = [
		{
			title: 'iPhone 13',
			img: '/images/banner/banner2.jpg',
			price: '24.000.000đ',
		},
		{
			title: 'Samsung Galaxy S10',
			img: '/images/banner/banner3.jpg',
			price: '14.000.000đ',
		},
		{
			title: 'Galaxy A Series',
			img: '/images/banner/banner1.webp',
			price: '24.000.000đ',
		},
	];
	return (
		<MainLayout>
			<div
				style={{ width: '100%', height: '446px', position: 'relative' }}
				className="mb-32"
			>
				<Image
					alt="Banner"
					src="/images/slider/banner.png"
					layout="fill"
					objectFit="cover"
				/>

				<div className="flex flex-col lg:flex-row">
					<div className="top-0 left-0 pt-60 pl-32 w-full">
						<Slider />
					</div>
					<div className="mt-60 -ml-80">
						<Grid.Container gap={3} justify="flex-start">
							{list.map((item, index) => (
								<Grid key={index}>
									<Card hoverable clickable>
										<Card.Body css={{ p: 0 }}>
											<Card.Image
												objectFit="cover"
												src={item.img}
												width="100%"
												height={140}
												alt={item.title}
											/>
										</Card.Body>
										<Card.Footer justify="flex-start">
											<Row
												wrap="wrap"
												justify="space-between"
												className="items-center"
											>
												<Text b className="mr-4">
													{item.title}
												</Text>
												<Text
													css={{ color: '$accents4', fontWeight: '$semibold' }}
												>
													{item.price}
												</Text>
											</Row>
										</Card.Footer>
									</Card>
								</Grid>
							))}
						</Grid.Container>
					</div>
				</div>
			</div>

			<div className="container py-40 mx-auto items-center justify-between bg-gray-100">
				<span className="font-bold text-2xl ml-8">Hàng nổi bật</span>
				<div className="grid grid-cols-1 gap-8 px-32 md:grid-cols-3 lg:grid-cols-4">
					<CardDetail />
					<CardDetail />
					<CardDetail />
					<CardDetail />
					<CardDetail />
				</div>
				<span className="font-bold text-2xl ml-8">Gợi ý dành cho bạn</span>
				<div className="grid grid-cols-1 gap-8 px-32 md:grid-cols-3 lg:grid-cols-4">
					<CardDetail />
					<CardDetail />
					<CardDetail />
					<CardDetail />
					<CardDetail />
				</div>
			</div>
		</MainLayout>
	);
};

export default Home;
