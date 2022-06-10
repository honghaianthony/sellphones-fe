import { CardDetail } from '@/components/CardDetail';
import MainLayout from '@/components/Layouts/MainLayout';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import Slider from 'react-slick';
import Specifications from '@/components/Specifications';
import { useState, useEffect } from 'react';
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

const ProductList: NextPage = () => {
	const [product, setProduct] = useState([]);

	const idArray = [0, 1, 2];

	useEffect(() => {
		const asyncFetchDailyData = async () => {
			const allProducts = await getAllProducts();

			setProduct(allProducts);
		};

		asyncFetchDailyData();
	}, []);
	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
	};

	console.log(product);
	return (
		<>
			<Head>
				<title>Tất cả sản phẩm</title>
			</Head>
			<MainLayout>
				<div className="container max-w-7xl flex mx-auto items-center my-5">
					<Link href="/">
						<a className="hover:text-blue-600">Trang chủ</a>
					</Link>
					<Icon icon="ant-design:arrow-right-outlined" className="mx-3" />
					<Link href="/product-list">
						<a className="hover:text-blue-600">Điện thoại</a>
					</Link>
				</div>
				<div className="container max-w-[1200px] justify-center text-center align-middle mx-auto">
					<Slider {...settings}>
						<div>
							<Image
								alt="Banner"
								src="/images/slider/slider_apple.webp"
								width={1200}
								height={300}
							/>
						</div>
						<div>
							<Image
								alt="Banner"
								src="/images/slider/slider_apple2.webp"
								width={1200}
								height={300}
							/>
						</div>
						<div>
							<Image
								alt="Banner"
								src="/images/slider/slider_apple3.webp"
								width={1200}
								height={300}
							/>
						</div>
						<div>
							<Image
								alt="Banner"
								src="/images/slider/slider_apple4.webp"
								width={1200}
								height={300}
							/>
						</div>
						<div>
							<Image
								alt="Banner"
								src="/images/slider/slider_apple5.webp"
								width={1200}
								height={300}
							/>
						</div>
						<div>
							<Image
								alt="Banner"
								src="/images/slider/slider_apple6.webp"
								width={1200}
								height={300}
							/>
						</div>
					</Slider>
				</div>

				<div className="container max-w-7xl mx-auto ">
					<div className="flex flex-col md:flex-row">
						<div className="mx-8 w-1/4">
							<div className="mb-3">
								<h3 className="font-bold my-3">Hãng sản xuất</h3>
								<div className="grid grid-cols-2 gap-3">
									<div className="mr-3 flex items-center">
										<input type="checkbox" />
										<label className="ml-1">Tất cả</label>
									</div>
									<div className="mr-3 flex items-center">
										<input type="checkbox" />
										<label className="ml-1">Apple </label>
									</div>
									<div className="mr-3 flex items-center">
										<input type="checkbox" />
										<label className="ml-1">Samsung</label>
									</div>
									<div className="mr-3 flex items-center">
										<input type="checkbox" />
										<label className="ml-1">OPPO</label>
									</div>
									<div className="mr-3 flex items-center">
										<input type="checkbox" />
										<label className="ml-1">Xiaomi</label>
									</div>
									<div className="mr-3 flex items-center">
										<input type="checkbox" />
										<label className="ml-1">Vivo</label>
									</div>
									<div className="mr-3 flex items-center">
										<input type="checkbox" />
										<label className="ml-1">Realme</label>
									</div>
									<div className="mr-3 flex items-center">
										<input type="checkbox" />
										<label className="ml-1">Nokia</label>
									</div>
									<div className="mr-3 flex items-center">
										<input type="checkbox" />
										<label className="ml-1">Asus</label>
									</div>
									<div className="mr-3 flex items-center">
										<input type="checkbox" />
										<label className="ml-1">Vsmart</label>
									</div>
								</div>
							</div>
							<div className="mb-3">
								<h3 className="font-bold my-3">Mức giá</h3>
								<div className="grid grid-cols-1 gap-3">
									<div className="mr-3 flex items-center">
										<input type="checkbox" />
										<label className="ml-1">Tất cả</label>
									</div>
									<div className="mr-3 flex items-center">
										<input type="checkbox" />
										<label className="ml-1">Dưới 2 triệu </label>
									</div>
									<div className="mr-3 flex items-center">
										<input type="checkbox" />
										<label className="ml-1">Từ 2 - 4 triệu</label>
									</div>
									<div className="mr-3 flex items-center">
										<input type="checkbox" />
										<label className="ml-1">Từ 4 - 7 triệu</label>
									</div>
									<div className="mr-3 flex items-center">
										<input type="checkbox" />
										<label className="ml-1">Từ 7 - 13 triệu</label>
									</div>
									<div className="mr-3 flex items-center">
										<input type="checkbox" />
										<label className="ml-1">Trên 13 triệu</label>
									</div>
								</div>
							</div>
							<div className="mb-3">
								<h3 className="font-bold my-3">Dung lượng pin</h3>
								<div className="grid grid-cols-1 gap-3">
									<div className="mr-3 flex items-center">
										<input type="checkbox" />
										<label className="ml-1">Tất cả</label>
									</div>
									<div className="mr-3 flex items-center">
										<input type="checkbox" />
										<label className="ml-1">Dưới 3000 mah </label>
									</div>
									<div className="mr-3 flex items-center">
										<input type="checkbox" />
										<label className="ml-1">Từ 3000 - 4000 mah</label>
									</div>
									<div className="mr-3 flex items-center">
										<input type="checkbox" />
										<label className="ml-1">Siêu trâu: trên 4000 mah</label>
									</div>
								</div>
							</div>
							<div className="mb-3">
								<h3 className="font-bold mb-1">Màn hình</h3>
								<div className="grid grid-cols-1 gap-3">
									<div className="mr-3 flex items-center">
										<input type="checkbox" />
										<label className="ml-1">Tất cả</label>
									</div>
									<div className="mr-3 flex items-center">
										<input type="checkbox" />
										<label className="ml-1">Màn hình nhỏ: dưới 5.0 inch</label>
									</div>
									<div className="mr-3 flex items-center">
										<input type="checkbox" />
										<label className="ml-1">
											Nhỏ gọn vừa tay: dưới 6.0 inch, tràn viền
										</label>
									</div>
									<div className="mr-3 flex items-center">
										<input type="checkbox" />
										<label className="ml-1">Siêu trâu: trên 4000 mah</label>
									</div>
								</div>
							</div>
						</div>

						<div className="w-3/4 container my-3">
							<div className="w-full bg-white rounded-lg mb-8">
								<p className="py-4 pl-6 font-bold text-2xl">Điện thoại</p>
							</div>
							<div className="w-full bg-white rounded-lg mb-8">
								<p className="py-4 pl-6 font-bold text-xl">Dòng sản phẩm</p>
								<div className="grid grid-cols-1 gap-8 mx-8 md:grid-cols-2 lg:grid-cols-3">
									{idArray.map((item: any, index: Number) => {
										return (
											<CardDetail
												key={index}
												name={product[item].name}
												price={product[item].price}
												img={product[item].image[0]}
												slug={ChangeToSlug(product[item].name)}
												id={product[item]._id}
											/>
										);
									})}
								</div>
							</div>
							<div className="w-full bg-white mb-8 items-center rounded-lg">
								<div className="flex items-center">
									<p className="py-4 pl-6 font-bold mr-3">Ưu tiên xem</p>
									<div>
										<button className="bg-white px-1 py-1 hover:bg-red-600 active:bg-red-600 hover:text-white active:text-white focus:outline-none text-[#939393] border border-r-2">
											Bán chạy nhất
										</button>
										<button className="bg-white px-1 py-1 hover:bg-red-600 active:bg-red-600 hover:text-white active:text-white focus:outline-none text-[#939393] border border-r-2">
											Trả góp 0%
										</button>
										<button className="bg-white px-1 py-1 hover:bg-red-600 active:bg-red-600 hover:text-white active:text-white focus:outline-none text-[#939393] border border-r-2">
											Giá thấp
										</button>
										<button className="bg-white px-1 py-1 hover:bg-red-600 active:bg-red-600 hover:text-white active:text-white focus:outline-none text-[#939393] border border-r-2">
											Giá cao
										</button>
										<button className="bg-white px-1 py-1 hover:bg-red-600 active:bg-red-600 hover:text-white active:text-white focus:outline-none text-[#939393] border border-r-2">
											Ưu đãi online
										</button>
									</div>
								</div>

								<div className="grid grid-cols-1 gap-8 mx-8 md:grid-cols-2 lg:grid-cols-3 ">
									{product.map((item: any, index) => {
										return (
											<div className="flex flex-col items-center" key={index}>
												<CardDetail
													name={item.name}
													price={item.price}
													img={item.image[0]}
													slug={ChangeToSlug(item.name)}
													id={item._id}
												/>

												<Specifications
													processor={item.processor}
													ram={item.ram}
													screen={item.screen}
													backCamera={item.backCamera}
												/>
												<div className="my-8">
													<Link
														href={
															'/product/' +
															ChangeToSlug(item.name) +
															'.' +
															item._id +
															'.html'
														}
													>
														<a className="px-5 py-3 text-white bg-red-600 rounded font-bold hover:bg-red-700">
															Mua ngay
														</a>
													</Link>
												</div>
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</div>
			</MainLayout>
		</>
	);
};

export default ProductList;
