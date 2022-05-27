import type { NextPage } from 'next';
import { Navbar } from '@/components/Navbar';
import SubNavbar from '@/components/SubNavbar';
import Slide from '@/components/Slide';
import CardDetail from '@/components/CardDetail/CardDetail';
import CardVivo from '@/components/CardDetail/CardVivo';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '@/components/Layouts/MainLayout';
import { Card, Grid, Row, Text } from '@nextui-org/react';
import React, { Component } from 'react';
import Slider from 'react-slick';
import { Icon } from '@iconify/react';
import MenuDetail from '@/components/MenuDetail/MenuDetail';

function SampleNextArrow(props: any) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{
				...style,
				display: 'block',
			}}
			onClick={onClick}
		>
			<Icon
				icon="akar-icons:chevron-right"
				className="bg-zinc-50 text-black w-8 h-14 absolute cursor-pointer hover:bg-black hover:text-white top-0 bottom-0 -ml-9"
			/>
		</div>
	);
}

function SamplePrevArrow(props: any) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{
				...style,
				display: 'block',
				zIndex: '10',
			}}
			onClick={onClick}
		>
			<Icon
				icon="akar-icons:chevron-left"
				className="bg-zinc-50 text-black w-8 h-14 absolute cursor-pointer hover:bg-black hover:text-white top-0 bottom-0 ml-6"
			/>
		</div>
	);
}

const Home: NextPage = () => {
	const menuList = [
		{
			id: 1,
			title: 'Apple',
			image: '/images/home/iphone.png',
		},
		{
			id: 2,
			title: 'Samsung',
			image: '/images/home/samsung.png',
		},
		{
			id: 3,
			title: 'Oppo',
			image: '/images/home/oppo2.png',
		},
		{
			id: 4,
			title: 'Vivo',
			image: '/images/home/vivo.png',
		},
		{
			id: 5,
			title: 'Xiaomi',
			image: '/images/home/xiaomi.png',
		},
		{
			id: 6,
			title: 'Nokia',
			image: '/images/home/nokia.png',
		},
		{
			id: 7,
			title: 'Realme',
			image: '/images/home/realme.png',
		},
		{
			id: 8,
			title: 'Vsmart',
			image: '/images/home/vsmart.png',
		},
		{
			id: 9,
			title: 'Asus',
			image: '/images/home/asus.png',
		},
		{
			id: 10,
			title: 'Hãng khác',
			image: '/images/home/khac.png',
		},
	];
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
	const settings = {
		dots: false,
		infinite: false,
		slidesToShow: 5,
		slidesToScroll: 3,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<MainLayout>
			<div
				style={{ width: '100%', height: '446px', position: 'relative' }}
				className="mb-8"
			>
				<Image
					alt="Banner"
					src="/images/slider/banner.png"
					layout="fill"
					objectFit="cover"
				/>
			</div>

			<div className="flex flex-col lg:flex-row mx-auto justify-center align-middle text-center">
				<div className="top-0 left-0 my-5 w-full">
					<Slide />
				</div>
				<div className="relative mt-24 mx-8 lg:mt-5 lg:-ml-3">
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

			<div className="container py-8 mx-auto items-center justify-between bg-gradient-to-r from-green-400 to-blue-500 mt-32 mb-5">
				<span className="font-bold text-2xl ml-8 text-white">Hàng nổi bật</span>
				<div className="grid grid-cols-1 gap-8 px-32 md:grid-cols-2 lg:grid-cols-4">
					<CardDetail />
					<CardDetail />
					<CardDetail />
					<CardDetail />
					<CardDetail />
				</div>
			</div>
			<div className="container max-w-7xl rounded mx-auto bg-[#FEC603] py-3 my-5">
				<div className="mx-auto align-center text-center">
					<Image
						src="/images/home/deal.png"
						width={1200}
						height={120}
						alt="Deal ngon mỗi ngày"
					/>
				</div>
				<div className="flex gap-3 mx-auto items-center justify-center py-3">
					<Image
						src="/images/home/vivo1.png"
						width={380}
						height={200}
						alt="Vivo Y33s"
					/>
					<Image
						src="/images/home/vivo2.png"
						width={380}
						height={200}
						alt="Vivo Y55"
					/>
					<Image
						src="/images/home/vivo3.png"
						width={380}
						height={200}
						alt="Vivo Y01"
					/>
				</div>
				<div>
					<Slider {...settings}>
						<div className="grid grid-cols-1 gap-3 px-3 md:grid-cols-3 lg:grid-cols-5">
							<CardVivo />
						</div>
						<div className="grid grid-cols-1 gap-3 px-3 md:grid-cols-3 lg:grid-cols-5">
							<CardVivo />
						</div>
						<div className="grid grid-cols-1 gap-3 px-3 md:grid-cols-3 lg:grid-cols-5">
							<CardVivo />
						</div>
						<div className="grid grid-cols-1 gap-3 px-3 md:grid-cols-3 lg:grid-cols-5">
							<CardVivo />
						</div>
						<div className="grid grid-cols-1 gap-3 px-3 md:grid-cols-3 lg:grid-cols-5">
							<CardVivo />
						</div>
						<div className="grid grid-cols-1 gap-3 px-3 md:grid-cols-3 lg:grid-cols-5">
							<CardVivo />
						</div>
					</Slider>
				</div>
				<div className="mx-auto text-center">
					<Link href="/product">
						<a className="px-16 py-3 rounded items-center bg-white text-black">
							Xem tất cả các sản phẩm
						</a>
					</Link>
				</div>
			</div>
			<div className="container py-8 mx-auto items-center justify-between bg-gradient-to-r from-green-400 to-blue-500 my-5">
				<span className="font-bold text-2xl ml-8 text-white">
					Xu hướng mua sắm
				</span>
				<div className="grid grid-cols-1 gap-8 px-32 md:grid-cols-3 lg:grid-cols-4">
					<CardDetail />
					<CardDetail />
					<CardDetail />
					<CardDetail />
					<CardDetail />
				</div>
			</div>

			<div className="container max-w-7xl rounded mx-auto bg-blue-700 py-3 my-5">
				<h1 className="mx-auto uppercase text-center text-white text-5xl tracking-wide font-bold py-3">
					Tuần lễ vàng VIVO
				</h1>
				<div className="flex gap-3 mx-auto items-center justify-center py-3">
					<Image
						src="/images/home/vivo1.png"
						width={380}
						height={200}
						alt="Vivo Y33s"
					/>
					<Image
						src="/images/home/vivo2.png"
						width={380}
						height={200}
						alt="Vivo Y55"
					/>
					<Image
						src="/images/home/vivo3.png"
						width={380}
						height={200}
						alt="Vivo Y01"
					/>
				</div>
				<div>
					<Slider {...settings}>
						<div className="grid grid-cols-1 gap-3 px-3 md:grid-cols-3 lg:grid-cols-5">
							<CardVivo />
						</div>
						<div className="grid grid-cols-1 gap-3 px-3 md:grid-cols-3 lg:grid-cols-5">
							<CardVivo />
						</div>
						<div className="grid grid-cols-1 gap-3 px-3 md:grid-cols-3 lg:grid-cols-5">
							<CardVivo />
						</div>
						<div className="grid grid-cols-1 gap-3 px-3 md:grid-cols-3 lg:grid-cols-5">
							<CardVivo />
						</div>
						<div className="grid grid-cols-1 gap-3 px-3 md:grid-cols-3 lg:grid-cols-5">
							<CardVivo />
						</div>
						<div className="grid grid-cols-1 gap-3 px-3 md:grid-cols-3 lg:grid-cols-5">
							<CardVivo />
						</div>
					</Slider>
				</div>
				<div className="mx-auto text-center">
					<Link href="/product">
						<a className="px-16 py-3 rounded items-center bg-white text-black">
							Xem tất cả các sản phẩm
						</a>
					</Link>
				</div>
			</div>
			<div className="container max-w-7xl rounded mx-auto bg-white my-8">
				<div className="grid md:grid-cols-3 lg:grid-cols-5 divide-x divide-y">
					{menuList.map((item, index) => {
						return (
							<MenuDetail
								key={index}
								id={item.id}
								title={item.title}
								image={item.image}
							/>
						);
					})}
				</div>
			</div>
		</MainLayout>
	);
};

export default Home;
