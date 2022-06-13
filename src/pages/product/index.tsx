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
import { getCategories } from '@/pages/api/categoryApi';
import { PageSEO } from '@/components/SEO';
import { AxiosResponse } from 'axios';

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
	const [product, setProduct] = useState<any[]>([]);
	const [productName, setProductName] = useState<any[]>([]);
	const [battery, setBattery] = useState<any[]>([]);
	const [ram, setRam] = useState<any[]>([]);
	const [ramArray, setRamArray] = useState<any[]>([]);
	const [activeFilter, setActiveFilter] = useState<any[]>([]);

	useEffect(() => {
		const asyncFetchDailyData = async () => {
			const allProducts: any = await getAllProducts();

			const ramCategory = allProducts.map((category: any) => {
				return category.ram;
			});

			setRamArray(ramCategory);
		};

		asyncFetchDailyData();
	}, []);

	useEffect(() => {
		const asyncFetchDailyData = async () => {
			const allProducts: any = await getAllProducts();

			setRam(allProducts);
		};

		asyncFetchDailyData();
	}, []);

	useEffect(() => {
		const asyncFetchDailyData = async () => {
			const allProducts: any = await getAllProducts();

			setBattery(allProducts);
		};

		asyncFetchDailyData();
	}, []);

	useEffect(() => {
		const asyncFetchDailyData = async () => {
			const res: any = await getCategories();

			setProductName(res);
		};

		asyncFetchDailyData();
	}, []);

	useEffect(() => {
		const asyncFetchDailyData = async () => {
			const allProducts: any = await getAllProducts();

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

	let takeThreeProduct = [1, 2, 3];

	const [productInfo, setProductInfo] = useState([]);
	const [productRam, setProductRam] = useState([]);
	// const [productBattery, setProductBattery] = useState([]);

	const filteredUnits =
		productInfo.length || productRam.length
			? product.filter((apartment: any) => {
					console.log('filtering', apartment);
					return (
						(!productInfo.length ||
							productInfo.includes(apartment.categoryId)) &&
						(!productRam.length || productRam.includes(apartment.ram))
					);
			  })
			: product;

	// const onFilterChange = (filter: any) => {
	// 	if (filter === 'ALL') {
	// 		if (activeFilter.length === productName.length) {
	// 			return;
	// 		} else {
	// 			setActiveFilter(productName.map((filter) => filter._id));
	// 		}
	// 	} else {
	// 		if (activeFilter.includes(filter)) {
	// 			const filterIndex = activeFilter.indexOf(filter);
	// 			const newFilter = [...activeFilter];
	// 			newFilter.splice(filterIndex, 1);
	// 			setActiveFilter(newFilter);
	// 		} else {
	// 			setActiveFilter([...activeFilter, filter]);
	// 		}
	// 	}
	// };

	// let filteredList;

	// if (activeFilter.length === 0 || activeFilter.length === productName.length) {
	// 	filteredList = product;
	// } else {
	// 	filteredList = product.filter((item) =>
	// 		activeFilter.includes(item.categoryId)
	// 	);
	// }

	// console.log(filteredList);

	function numberWithCommas(x: any) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
	}

	function uniq(a: any) {
		var seen: any = {};
		return a.filter(function (item: any) {
			return seen.hasOwnProperty(item) ? false : (seen[item] = true);
		});
	}
	const newRam = uniq(ramArray);
	return (
		<>
			<PageSEO href="/product" name="Sản phẩm" />
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
									{/* <div className="mr-3 flex items-center">
										<input
											id="myInput"
											type="checkbox"
											onChange={() => onFilterChange('ALL')}
											defaultChecked
											checked={activeFilter.length === productName.length}
										/>
										<label className="ml-1">Tất cả</label>
									</div> */}
									{productName.map((item: any, index: any) => {
										return (
											<div className="mr-3 flex items-center" key={index}>
												<input
													id="check-box-1"
													type="checkbox"
													onChange={(event) =>
														setProductInfo((prev: any) =>
															event.target.checked ? [...prev, item._id] : []
														)
													}
													className=" h-4 w-4"
												/>

												<label className="ml-1" htmlFor={item._id}>
													{item.name}
												</label>
											</div>
										);
									})}
								</div>
							</div>
							<div className="mb-3">
								<h3 className="font-bold my-3">Dung lượng RAM</h3>
								<div className="grid grid-cols-2 gap-3">
									{newRam.map((item: any, index: any) => {
										return (
											<div className="mr-3 flex items-center" key={index}>
												<input
													id={item._id}
													type="checkbox"
													onChange={(event) => {
														setProductRam((prev: any) =>
															event.target.checked ? [...prev, item] : []
														);
													}}
													className=" h-4 w-4"
												/>
												<label className="ml-1" htmlFor={item._id} key={index}>
													{item} GB
												</label>
											</div>
										);
									})}
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
									{takeThreeProduct.map((item: any, index: any) => {
										return (
											product[item] && (
												<CardDetail
													key={index}
													name={product[item].name}
													price={numberWithCommas(product[item].price)}
													img={product[item].image[0]}
													slug={ChangeToSlug(product[item].name)}
													id={product[item]._id}
													rating={product[item].rating}
												/>
											)
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
									{filteredUnits.map((item: any, index) => {
										return (
											<div className="flex flex-col items-center" key={index}>
												<CardDetail
													name={item.name}
													price={numberWithCommas(item.price)}
													img={item.image[0]}
													slug={ChangeToSlug(item.name)}
													id={item._id}
													rating={item.rating}
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
