import React, { useState } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import SubNavbar from '@/components/SubNavbar';
import { Icon } from '@iconify/react';

const productData = [
	{
		images: '/images/product/hinh1.png',
	},
	{
		images: '/images/product/hinh2.jpg',
	},
	{
		images: '/images/product/hinh3.jpg',
	},
	{
		images: '/images/product/hinh4.jpg',
	},
];

const ProductDetail: NextPage = () => {
	const [mainImage, setMainImage] = useState(productData[0]);
	return (
		<>
			<Navbar />

			<div className="container mx-auto px-4 my-8 flex flex-row">
				<div className="flex flex-col">
					<div className="flex flex-row my-5 items-center">
						<h3 className="font-bold mx-5">
							Điện thoại OPPO Reno7 Z 5G
						</h3>
						{[...Array(5)].map((star, i) => {
							return (
								<label key={i}>
									<input
										type="radio"
										name="rating"
										className="hidden"
									/>
									<Icon
										icon="emojione:star"
										className="mx-1"
									/>
								</label>
							);
						})}
						<span className="text-blue-500 mx-5">100 đánh giá</span>
					</div>

					<div className="w-full px-4 my-5">
						<div className="w-7/10 mx-auto px-4 relative">
							<Image
								src={mainImage.images}
								width={550}
								height={300}
								alt="Hinh 1"
							/>
						</div>
						<div className="flex flex-row">
							{productData.map((i, index) => {
								return (
									<div className="mr-4" key={index}>
										<Image
											src={i.images}
											alt={
												'Handmade bag number 5-' + index
											}
											className="w-1/5 mr-auto cursor-pointer md:mb-4"
											width={155}
											height={120}
											onClick={() => {
												setMainImage(i);
											}}
										/>
									</div>
								);
							})}
						</div>
					</div>
					<div className="grid grid-cols-2 my-4 auto-cols-min w-4/5">
						<div className="flex flex-row w-9/12 pb-3">
							<Icon
								icon="fluent:wallet-24-regular"
								className="text-2xl text-blue-500 mx-3"
							/>
							<p>
								Hư gì đổi nấy{' '}
								<span className="font-bold">12 tháng</span> tại
								3091 siêu thị toàn quốc (miễn phí tháng đầu){' '}
								<a href="/" className="text-blue-500">
									Xem chi tiết
								</a>
							</p>
						</div>
						<div className="flex flex-row w-9/12">
							<Icon
								icon="bi:shield-check"
								className="text-2xl text-blue-500 mx-3"
							/>
							<p>
								Bảo hành
								<span className="font-bold">
									chính hãng điện thoại 1 năm
								</span>{' '}
								tại 3091 siêu thị toàn quốc (miễn phí tháng đầu){' '}
								<a href="/" className="text-blue-500">
									Xem địa chỉ bảo hành
								</a>
							</p>
						</div>
						<div className="flex flex-row w-9/12">
							<Icon
								icon="bi:box-seam"
								className="text-2xl text-blue-500 mx-3"
							/>
							<p>
								Bộ sản phẩm gồm: Hộp, Sách hướng dẫn, Cây lấy
								sim, Ốp lưng, Cáp Type C, Củ sạc nhanh rời đầu
								Type A{' '}
								<a href="/" className="text-blue-500">
									Xem hình
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductDetail;
