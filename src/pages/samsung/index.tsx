import React, { useState } from 'react';
import MainLayout from '@/components/Layouts/MainLayout';
import Image from 'next/image';
import Slider from 'react-slick';
import CardVivo from '@/components/CardDetail/CardVivo';
import Specifications from '@/components/Specifications';
import { Icon } from '@iconify/react';
import Link from 'next/link';
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
				className="bg-zinc-50 text-black w-8 h-14 absolute cursor-pointer hover:bg-black hover:text-white top-0 bottom-0 -ml-9 "
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

const Samsung = () => {
	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		slidesToScroll: 1,
	};
	const settings2 = {
		dots: false,
		infinite: false,
		slidesToShow: 4,
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
			<div className="pb-32 bg-[#DFB8C1] justify-center text-center align-middle">
				<Image
					alt="Banner"
					src="/images/banner/banner_samsung.png"
					width={1001}
					height={168}
				/>
			</div>
			<div className="w-[1200px] justify-center text-center align-middle mx-auto -mt-16">
				<Slider {...settings}>
					<div>
						<Image
							alt="Banner"
							src="/images/slider/slider_samsung.webp"
							width={1200}
							height={300}
						/>
					</div>
					<div>
						<Image
							alt="Banner"
							src="/images/slider/slider_samsung_2.webp"
							width={1200}
							height={300}
						/>
					</div>
					<div>
						<Image
							alt="Banner"
							src="/images/slider/slider_samsung_3.webp"
							width={1200}
							height={300}
						/>
					</div>
					<div>
						<Image
							alt="Banner"
							src="/images/slider/slider_samsung_4.webp"
							width={1200}
							height={300}
						/>
					</div>
				</Slider>
			</div>
			<div className="container max-w-7xl rounded bg-white mx-auto my-3 px-4 py-3">
				<h1 className="uppercase text-[#cb1c22] font-bold text-xl">
					Khuyến mãi hot
				</h1>
				<div>
					<Slider {...settings2}>
						<div className="grid grid-cols-1 gap-3 px-3 md:grid-cols-2 lg:grid-cols-4">
							<div className="flex flex-col items-center">
								<CardVivo />
								<Specifications />
								<div className="my-8">
									<Link href="/product/oppo-reno7z">
										<a className="px-5 py-3 text-white bg-red-600 rounded font-bold hover:bg-red-700">
											Mua ngay
										</a>
									</Link>
								</div>
							</div>
						</div>
						<div className="grid grid-cols-1 gap-3 px-3 md:grid-cols-2 lg:grid-cols-4">
							<div className="flex flex-col items-center">
								<CardVivo />
								<Specifications />
								<div className="my-8">
									<Link href="/product/oppo-reno7z">
										<a className="px-5 py-3 text-white bg-red-600 rounded font-bold hover:bg-red-700">
											Mua ngay
										</a>
									</Link>
								</div>
							</div>
						</div>
						<div className="grid grid-cols-1 gap-3 px-3 md:grid-cols-2 lg:grid-cols-4">
							<div className="flex flex-col items-center">
								<CardVivo />
								<Specifications />
								<div className="my-8">
									<Link href="/product/oppo-reno7z">
										<a className="px-5 py-3 text-white bg-red-600 rounded font-bold hover:bg-red-700">
											Mua ngay
										</a>
									</Link>
								</div>
							</div>
						</div>
						<div className="grid grid-cols-1 gap-3 px-3 md:grid-cols-2 lg:grid-cols-4">
							<div className="flex flex-col items-center">
								<CardVivo />
								<Specifications />
								<div className="my-8">
									<Link href="/product/oppo-reno7z">
										<a className="px-5 py-3 text-white bg-red-600 rounded font-bold hover:bg-red-700">
											Mua ngay
										</a>
									</Link>
								</div>
							</div>
						</div>
						<div className="grid grid-cols-1 gap-3 px-3 md:grid-cols-2 lg:grid-cols-4">
							<div className="flex flex-col items-center">
								<CardVivo />
								<Specifications />
								<div className="my-8">
									<Link href="/product/oppo-reno7z">
										<a className="px-5 py-3 text-white bg-red-600 rounded font-bold hover:bg-red-700">
											Mua ngay
										</a>
									</Link>
								</div>
							</div>
						</div>
						<div className="grid grid-cols-1 gap-3 px-3 md:grid-cols-2 lg:grid-cols-4">
							<div className="flex flex-col items-center">
								<CardVivo />
								<Specifications />
								<div className="my-8">
									<Link href="/product/oppo-reno7z">
										<a className="px-5 py-3 text-white bg-red-600 rounded font-bold hover:bg-red-700">
											Mua ngay
										</a>
									</Link>
								</div>
							</div>
						</div>
					</Slider>
				</div>
			</div>
			<div className="container max-w-7xl rounded bg-white mx-auto my-3 px-4 py-3">
				<div className="grid grid-cols-1 gap-3 px-3 md:grid-cols-2 lg:grid-cols-4">
					<div className="flex flex-col items-center">
						<CardVivo />
						<Specifications />
						<div className="my-8">
							<Link href="/product/oppo-reno7z">
								<a className="px-5 py-3 text-white bg-red-600 rounded font-bold hover:bg-red-700">
									Mua ngay
								</a>
							</Link>
						</div>
					</div>
					<div className="flex flex-col items-center">
						<CardVivo />
						<Specifications />
						<div className="my-8">
							<Link href="/product/oppo-reno7z">
								<a className="px-5 py-3 text-white bg-red-600 rounded font-bold hover:bg-red-700">
									Mua ngay
								</a>
							</Link>
						</div>
					</div>
					<div className="flex flex-col items-center">
						<CardVivo />
						<Specifications />
						<div className="my-8">
							<Link href="/product/oppo-reno7z">
								<a className="px-5 py-3 text-white bg-red-600 rounded font-bold hover:bg-red-700">
									Mua ngay
								</a>
							</Link>
						</div>
					</div>
					<div className="flex flex-col items-center">
						<CardVivo />
						<Specifications />
						<div className="my-8">
							<Link href="/product/oppo-reno7z">
								<a className="px-5 py-3 text-white bg-red-600 rounded font-bold hover:bg-red-700">
									Mua ngay
								</a>
							</Link>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-1 gap-3 px-3 md:grid-cols-2 lg:grid-cols-4">
					<div className="flex flex-col items-center">
						<CardVivo />
						<Specifications />
						<div className="my-8">
							<Link href="/product/oppo-reno7z">
								<a className="px-5 py-3 text-white bg-red-600 rounded font-bold hover:bg-red-700">
									Mua ngay
								</a>
							</Link>
						</div>
					</div>
					<div className="flex flex-col items-center">
						<CardVivo />
						<Specifications />
						<div className="my-8">
							<Link href="/product/oppo-reno7z">
								<a className="px-5 py-3 text-white bg-red-600 rounded font-bold hover:bg-red-700">
									Mua ngay
								</a>
							</Link>
						</div>
					</div>
					<div className="flex flex-col items-center">
						<CardVivo />
						<Specifications />
						<div className="my-8">
							<Link href="/product/oppo-reno7z">
								<a className="px-5 py-3 text-white bg-red-600 rounded font-bold hover:bg-red-700">
									Mua ngay
								</a>
							</Link>
						</div>
					</div>
					<div className="flex flex-col items-center">
						<CardVivo />
						<Specifications />
						<div className="my-8">
							<Link href="/product/oppo-reno7z">
								<a className="px-5 py-3 text-white bg-red-600 rounded font-bold hover:bg-red-700">
									Mua ngay
								</a>
							</Link>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-1 gap-3 px-3 md:grid-cols-2 lg:grid-cols-4">
					<div className="flex flex-col items-center">
						<CardVivo />
						<Specifications />
						<div className="my-8">
							<Link href="/product/oppo-reno7z">
								<a className="px-5 py-3 text-white bg-red-600 rounded font-bold hover:bg-red-700">
									Mua ngay
								</a>
							</Link>
						</div>
					</div>
					<div className="flex flex-col items-center">
						<CardVivo />
						<Specifications />
						<div className="my-8">
							<Link href="/product/oppo-reno7z">
								<a className="px-5 py-3 text-white bg-red-600 rounded font-bold hover:bg-red-700">
									Mua ngay
								</a>
							</Link>
						</div>
					</div>
					<div className="flex flex-col items-center">
						<CardVivo />
						<Specifications />
						<div className="my-8">
							<Link href="/product/oppo-reno7z">
								<a className="px-5 py-3 text-white bg-red-600 rounded font-bold hover:bg-red-700">
									Mua ngay
								</a>
							</Link>
						</div>
					</div>
					<div className="flex flex-col items-center">
						<CardVivo />
						<Specifications />
						<div className="my-8">
							<Link href="/product/oppo-reno7z">
								<a className="px-5 py-3 text-white bg-red-600 rounded font-bold hover:bg-red-700">
									Mua ngay
								</a>
							</Link>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-1 gap-3 px-3 md:grid-cols-2 lg:grid-cols-4">
					<div className="flex flex-col items-center">
						<CardVivo />
						<Specifications />
						<div className="my-8">
							<Link href="/product/oppo-reno7z">
								<a className="px-5 py-3 text-white bg-red-600 rounded font-bold hover:bg-red-700">
									Mua ngay
								</a>
							</Link>
						</div>
					</div>
					<div className="flex flex-col items-center">
						<CardVivo />
						<Specifications />
						<div className="my-8">
							<Link href="/product/oppo-reno7z">
								<a className="px-5 py-3 text-white bg-red-600 rounded font-bold hover:bg-red-700">
									Mua ngay
								</a>
							</Link>
						</div>
					</div>
					<div className="flex flex-col items-center">
						<CardVivo />
						<Specifications />
						<div className="my-8">
							<Link href="/product/oppo-reno7z">
								<a className="px-5 py-3 text-white bg-red-600 rounded font-bold hover:bg-red-700">
									Mua ngay
								</a>
							</Link>
						</div>
					</div>
					<div className="flex flex-col items-center">
						<CardVivo />
						<Specifications />
						<div className="my-8">
							<Link href="/product/oppo-reno7z">
								<a className="px-5 py-3 text-white bg-red-600 rounded font-bold hover:bg-red-700">
									Mua ngay
								</a>
							</Link>
						</div>
					</div>
				</div>

				{/* <div className="flex justify-center">
					<button onClick={onLoadMore}>Xem thêm</button>
				</div> */}
			</div>
			<div className="container max-w-5xl mx-auto my-16">
				<div className="flex justify-between">
					<div className="flex flex-col items-center">
						<div>
							<Image
								src="/images/product/shield.png"
								width={90}
								height={90}
								alt="Thương hiệu đảm bảo"
							/>
						</div>
						<div className="flex flex-col items-center">
							<h1 className="text-xl italic font-bold my-4">
								Thương hiệu đảm bảo
							</h1>
							<p className="text-sm text-[#6c757d] max-w-[137px] text-center">
								Nhập khẩu và bảo hành chính hãng
							</p>
						</div>
					</div>

					<div className="flex flex-col items-center">
						<div>
							<Image
								src="/images/product/exchange.png"
								width={90}
								height={90}
								alt="Đổi trả dễ dàng"
							/>
						</div>
						<div className="flex flex-col items-center">
							<h1 className="text-xl italic font-bold my-4">Đổi trả dễ dàng</h1>
							<p className="text-sm text-[#6c757d] max-w-[137px] text-center">
								Theo chính sách đổi trả tại SellPhone
							</p>
						</div>
					</div>
					<div className="flex flex-col items-center">
						<div>
							<Image
								src="/images/product/transport.png"
								width={90}
								height={90}
								alt="Giao hàng tận nơi"
							/>
						</div>
						<div className="flex flex-col items-center">
							<h1 className="text-xl italic font-bold my-4">
								Giao hàng tận nơi
							</h1>
							<p className="text-sm text-[#6c757d] max-w-[137px] text-center">
								Trong vòng 24h
							</p>
						</div>
					</div>
					<div className="flex flex-col items-center">
						<div>
							<Image
								src="/images/product/like.png"
								width={90}
								height={90}
								alt="Sản phẩm chất lượng"
							/>
						</div>
						<div className="flex flex-col items-center">
							<h1 className="text-xl italic font-bold my-4">
								Sản phẩm chất lượng
							</h1>
							<p className="text-sm text-[#6c757d] max-w-[137px] text-center">
								Đảm bảo tương thích và độ bền cao
							</p>
						</div>
					</div>
				</div>
			</div>
		</MainLayout>
	);
};

export default Samsung;
