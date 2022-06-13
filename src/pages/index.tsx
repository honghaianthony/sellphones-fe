import type { NextPage, GetServerSideProps } from 'next';
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
import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { Icon } from '@iconify/react';
import MenuDetail from '@/components/MenuDetail/MenuDetail';
import { loginGoogle } from '@/pages/api/authApi';
import GoogleLogin from 'react-google-login';
import { getAllProducts } from '@/pages/api/productApi';

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

function ChangeToSlug(str: any) {
	// Chuyển hết sang chữ thường
	str = str.toLowerCase();

	// xóa dấu
	str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
	str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
	str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
	str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
	str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
	str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
	str = str.replace(/(đ)/g, 'd');

	// Xóa ký tự đặc biệt
	str = str.replace(/([^0-9a-z-\s])/g, '');

	// Xóa khoảng trắng thay bằng ký tự -
	str = str.replace(/(\s+)/g, '-');

	// xóa phần dự - ở đầu
	str = str.replace(/^-+/g, '');

	// xóa phần dư - ở cuối
	str = str.replace(/-+$/g, '');

	// return
	return str;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const allProducts = await getAllProducts();
	return {
		props: {
			allProducts,
		},
	};
};

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

interface HomeProps {
	allProducts: [];
}

const Home: NextPage<HomeProps> = ({ allProducts }) => {
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
			title: 'iPhone 13 pro max',
			img: '/images/banner/banner2.jpg',
			price: '30.990.000đ',
			link: '/product/iphone-13-pro-max-i-chinh-hang-vna.62988fd48653b1442d01e10e.html',
		},
		{
			title: 'Samsung Note 20',
			img: '/images/banner/banner3.jpg',
			price: '17.990.000đ',
			link: '/product/samsung-galaxy-note-20.6297a7b0f810b335731cb758.html',
		},
		{
			title: 'Samsung Galaxy Series',
			img: '/images/banner/banner1.webp',
			price: '24.000.000đ',
			link: '/samsung',
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

	let takeEightProduct = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	let takeDeal = [2, 4, 6, 8, 10, 12, 13];

	const PAGE_SIZE = 10; // or whatever you like

	const [index, setIndex] = useState(0);

	const [visibleData, setVisibleData] = useState([]);

	useEffect(() => {
		const numberOfItems = PAGE_SIZE * (index + 1);

		const newArray = [];

		for (let i = 0; i < allProducts.length; i++) {
			if (i < numberOfItems) newArray.push(allProducts[i]);
		}

		setVisibleData(newArray);
	}, [index]);
	return (
		<MainLayout>
			<div
				style={{ width: '100%', height: '446px', position: 'relative' }}
				className="mb-8"
			>
				<Image
					alt="Banner"
					src="/images/banner/banner2.png"
					layout="fill"
					objectFit="cover"
				/>
			</div>

			<div className="max-w-7xl flex flex-col lg:flex-row mx-auto text-center -mt-44 ">
				<div className="top-0 left-0 my-5 w-full">
					<Slide />
				</div>
				<div className="relative mt-32 lg:-mt-16 mx-auto">
					<Grid.Container gap={3} justify="flex-start">
						{list.map((item, index) => (
							<Grid key={index}>
								<Link href={item.link}>
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
								</Link>
							</Grid>
						))}
					</Grid.Container>
				</div>
			</div>

			<div className="max-w-7xl container py-8 mx-auto items-center justify-between bg-gradient-to-r from-[#ffecd2] to-[#fcb69f] mt-16 mb-5 rounded-lg">
				<span className="font-bold text-2xl ml-5 text-black">Top sale</span>
				<div className="grid grid-cols-1 gap-4 mx-5 md:grid-cols-3 lg:grid-cols-5">
					{takeEightProduct.map((item: any, index: number) => {
						return (
							<CardDetail
								key={index}
								name={allProducts[item].name}
								price={numberWithCommas(allProducts[item].price)}
								img={allProducts[item].image[0]}
								slug={ChangeToSlug(allProducts[item].name)}
								id={allProducts[item]._id}
								rating={allProducts[item].rating}
							/>
						);
					})}
				</div>
			</div>
			<div className="container max-w-7xl rounded-lg mx-auto bg-[#FEC603] py-3 my-5">
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
						{takeDeal.map((item: any, index) => {
							return (
								<div
									className="grid grid-cols-1 gap-3 px-3 md:grid-cols-3 lg:grid-cols-5"
									key={index}
								>
									<CardDetail
										name={allProducts[item].name}
										price={numberWithCommas(allProducts[item].price)}
										img={allProducts[item].image[0]}
										slug={ChangeToSlug(allProducts[item].name)}
										id={allProducts[item]._id}
										rating={allProducts[item].rating}
									/>
								</div>
							);
						})}
					</Slider>
				</div>
				<div className="mx-auto text-center my-3">
					<Link href="/product">
						<a className="px-16 py-3 rounded items-center bg-white text-black hover:bg-black hover:text-white">
							Xem tất cả các sản phẩm
						</a>
					</Link>
				</div>
			</div>
			<div className="max-w-7xl container py-8 mx-auto items-center justify-between bg-gradient-to-r from-purple-500 to-pink-500 mt-16 mb-5 rounded-lg">
				<span className="font-bold text-2xl ml-5 text-white">
					Xu hướng mua sắm
				</span>
				<div className="grid grid-cols-1 gap-4 mx-5 md:grid-cols-3 lg:grid-cols-5">
					{visibleData.map((item: any, index) => {
						console.log(item);
						return (
							<CardDetail
								key={index}
								name={item.name}
								price={numberWithCommas(item.price)}
								img={item.image[0]}
								slug={ChangeToSlug(item.name)}
								id={item._id}
								rating={item.rating}
							/>
						);
					})}
				</div>
				<div className="mx-auto text-center my-3 ">
					<button
						onClick={() => setIndex(index + 1)}
						className="px-16 py-3 rounded items-center bg-white text-black hover:bg-black hover:text-white"
					>
						Xem thêm
					</button>
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
						{allProducts.map((item: any, index) => {
							return (
								<div
									className="grid grid-cols-1 gap-3 px-3 md:grid-cols-3 lg:grid-cols-5"
									key={index}
								>
									<CardDetail
										key={index}
										name={item.name}
										price={numberWithCommas(item.price)}
										img={item.image[0]}
										slug={ChangeToSlug(item.name)}
										id={item._id}
										rating={item.rating}
									/>
								</div>
							);
						})}
					</Slider>
				</div>
				<div className="mx-auto text-center my-3">
					<Link href="/product">
						<a className="px-16 py-3 rounded items-center bg-white text-black hover:bg-black hover:text-white">
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
								link={ChangeToSlug(item.title)}
							/>
						);
					})}
				</div>
			</div>
		</MainLayout>
	);
};

export default Home;
