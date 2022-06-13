import React, { useState } from 'react';
import type { NextPage, GetServerSideProps } from 'next';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import SubNavbar from '@/components/SubNavbar';
import BuyModal from '@/components/BuyModal/BuyModal';
import Link from 'next/link';
import { Footer } from '@/components/Footer';
import { Icon } from '@iconify/react';
import { Radio, Modal } from '@nextui-org/react';
import Slider from 'react-slick';
import CardDetail from '@/components/CardDetail/CardDetail';
import Rating from '@/components/Rating';
import Comment from '@/components/Comment';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { getProductById, getAllProducts } from '@/pages/api/productApi';
import { PageSEO } from '@/components/SEO';
import { toast } from 'react-toastify';
import { addCart } from '../api/cartApi';
import MainLayout from '@/components/Layouts/MainLayout';
import { useAuth } from '@/context/AuthContext';

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

export const getServerSideProps: GetServerSideProps = async (context) => {
	// const product = await getProductById('6298bd463ab70e3d305d5a8c');
	const allProducts: any = await getAllProducts();
	const { slug }: any = context.params;

	const productId = allProducts.find(
		(product: any) =>
			ChangeToSlug(product.name) + '.' + product._id + '.html' === slug
	);
	if (!productId) {
		return {
			redirect: {
				destination: '/404',
			},
			props: {},
		};
	}

	const product = await getProductById(productId._id);

	return {
		props: {
			product,
			productId,
			allProducts,
		},
	};
};

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

const productData2 = [
	{
		images: '/images/product/tronghop.webp',
	},
];

const images = [
	'/images/product/hinh1.png',
	'/images/product/hinh2.jpg',
	'/images/product/hinh3.jpg',
	'/images/product/hinh4.jpg',
];

interface ProductDetailProps {
	product: any;
	productId: any;
	allProducts: [];
}

const ProductDetail: NextPage<ProductDetailProps> = ({
	product,
	productId,
	allProducts,
}) => {
	const [choosedItem, setChoosedItem] = useState<any>(product[0]);
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
	const [photoIndex, setPhotoIndex] = useState(0);
	const [isOpen, setIsOpen] = useState(false);
	const [isOpen2, setIsOpen2] = useState(false);
	const [mainImage, setMainImage] = useState(productData[0]);
	const [visible, setVisible] = useState(false);
	const [authState] = useAuth();
	const handler = () => {
		if (authState.isAuth === false) {
			toast.warning('Vui lòng đăng nhập để tiếp tục!');
		} else {
			setVisible(true);
		}
	};
	const closeHandler = () => {
		setVisible(false);
	};
	const handleAddToCart = async () => {
		const cartData = {
			specificationId: choosedItem._id,
			quantity: 1,
		};
		try {
			const res: any = await addCart(cartData);
			if (res.statusCode === 201) {
				toast.success('Thêm vào giỏ hàng thành công!');
			} else {
				toast.error(res.errorMess);
			}
		} catch (error) {
			toast.error('Thêm vào giỏ hàng thất bại!');
		}
	};
	function numberWithCommas(x: any) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
	}

	const smallItemStyles: React.CSSProperties = {
		cursor: 'pointer',
		objectFit: 'cover',
		width: '100%',
		maxHeight: '100%',
	};
	return (
		<MainLayout>
			<PageSEO
				href={`/product/${ChangeToSlug(productId.name)}.${productId._id}.html`}
				name={productId.name}
			/>
			<div className="bg-[#fcfaf8] h-full">
				<div className="container max-w-7xl mx-auto px-4 my-8 flex flex-col lg:flex-row text-center">
					<div className="flex flex-col w-full lg:w-2/3 mx-auto">
						<div className="flex flex-row my-5 items-center">
							<h3 className="font-bold mx-5">{productId.name}</h3>
							{[...Array(5)].map((star, i) => {
								return (
									<label key={i}>
										<input type="radio" name="rating" className="hidden" />
										<Icon icon="emojione:star" />
									</label>
								);
							})}
							<span className="text-blue-500 mx-5">100 đánh giá</span>
						</div>

						<div className="my-3 px-4 relative items-center text-center">
							<Image
								src={productId.image[0]}
								width={400}
								height={400}
								alt="Hinh 1"
							/>
						</div>

						<div className="flex">
							<div className="w-full px-4 my-5">
								<div className="flex flex-col items-center">
									<button type="button" onClick={() => setIsOpen(true)}>
										<Icon icon="bi:images" className="text-5xl" />
									</button>
									<span>Xem thêm {productData.length} ảnh</span>
								</div>

								{isOpen && (
									<Lightbox
										mainSrc={productData[photoIndex].images}
										nextSrc={
											productData[(photoIndex + 1) % productData.length].images
										}
										prevSrc={
											productData[
												(photoIndex + productData.length - 1) %
													productData.length
											].images
										}
										onCloseRequest={() => setIsOpen(false)}
										onMovePrevRequest={() =>
											setPhotoIndex(
												(photoIndex + productData.length - 1) %
													productData.length
											)
										}
										onMoveNextRequest={() =>
											setPhotoIndex((photoIndex + 1) % productData.length)
										}
									/>
								)}
							</div>
						</div>

						<div className="container max-w-3xl grid grid-cols-2 my-4 auto-cols-min">
							<div className="flex flex-row  pb-3">
								<Icon
									icon="fluent:wallet-24-regular"
									className="text-4xl text-blue-500 mx-3"
								/>
								<p>
									Hư gì đổi nấy <span className="font-bold">12 tháng</span> tại
									3091 siêu thị toàn quốc (miễn phí tháng đầu){' '}
									<Link href="/">
										<a className="text-blue-500">Xem chi tiết</a>
									</Link>
								</p>
							</div>
							<div className="flex flex-row ">
								<Icon
									icon="bi:shield-check"
									className="text-4xl text-blue-500 mx-3"
								/>
								<p>
									Bảo hành
									<span className="font-bold">
										{' '}
										chính hãng điện thoại 1 năm
									</span>{' '}
									tại 3091 siêu thị toàn quốc (miễn phí tháng đầu){' '}
									<Link href="/">
										<a className="text-blue-500">Xem địa chỉ bảo hành</a>
									</Link>
								</p>
							</div>
							<div className="flex flex-row ">
								<Icon
									icon="bi:box-seam"
									className="text-4xl text-blue-500 mx-3"
								/>
								<p>
									Bộ sản phẩm gồm: Hộp, Sách hướng dẫn, Cây lấy sim, Ốp lưng,
									Cáp Type C, Củ sạc nhanh rời đầu Type A{' '}
									<Link href="/">
										<a className="text-blue-500">Xem hình</a>
									</Link>
								</p>
							</div>
						</div>

						<div className="bg-white rounded-lg max-w-3xl py-3 px-5">
							<h1 className="text-lg font-bold text-left m-5">
								Đặc điểm nổi bật
							</h1>
							<div
								dangerouslySetInnerHTML={{ __html: productId.description }}
							></div>
						</div>
					</div>
					<div className="flex flex-col my-5 w-full lg:w-1/3">
						<div className="flex justify-between items-center container">
							<div className="mx-3 flex items-center mr-5">
								<h1 className="text-red-500 mx-3 text-2xl font-bold">
									<span>
										{choosedItem.price === undefined || choosedItem === null
											? numberWithCommas(productId.price)
											: numberWithCommas(choosedItem.price)}
										<sup>đ</sup>
									</span>
								</h1>
							</div>

							<span className="text-[#AAAAAA] ">Trả góp 0%</span>
						</div>

						<div className="my-8 text-center cursor-pointer grid grid-cols-2 gap-2">
							{product.map((item: any, index: any) => {
								return (
									<div
										className="bg-white rounded py-5 px-5 mx-3 text-center items-center"
										key={index}
									>
										<Radio
											value={index}
											className="items-center text-center"
											checked={item == choosedItem}
											onChange={() => {
												setChoosedItem(item);
											}}
										>
											<div className="flex flex-col">
												<span className="text-sm">{item.storage}</span>
												<span className="text-sm">{item.color}</span>
											</div>

											<Radio.Description>
												{numberWithCommas(item.price)}
											</Radio.Description>
										</Radio>
									</div>
								);
							})}
						</div>

						<div className="bg-white my-5 flex flex-col rounded-lg">
							<div className="flex flex-col bg-[##F5F5F5] mx-3 pt-3 pb-5">
								<span className="font-bold">Khuyến mãi</span>
								<span className="font-semibold text-[#ff0000]">
									Giá và khuyến mãi dự kiến áp dụng đến 23:59 30/04
								</span>
							</div>
							<div className="flex flex-col my-3">
								<div className="flex items-center mx-3 pb-5">
									<div>
										<span className="text-xs text-white w-4 h-4 text-center rounded-full inline-block leading-4 bg-[#424FC2] mx-3">
											1
										</span>
									</div>
									<div className="font-semibold">
										Nhập mã DMX100 giảm 3% tối đa 100,000đ khi thanh toán quét
										QRcode qua App của ngân hàng
									</div>
								</div>
								<div className="flex items-center mx-3 pb-5">
									<div>
										<span className="text-xs text-white w-4 h-4 text-center rounded-full inline-block leading-4 bg-[#424FC2] mx-3">
											2
										</span>
									</div>
									<div className="font-semibold">
										Nhập mã DMX100 giảm 3% tối đa 100,000đ khi thanh toán quét
										QRcode qua App của ngân hàng
									</div>
								</div>
								<div className="flex items-center mx-3 pb-5">
									<div>
										<span className="text-xs text-white w-4 h-4 text-center rounded-full inline-block leading-4 bg-[#424FC2] mx-3">
											3
										</span>
									</div>
									<div className="font-semibold">
										Nhập mã DMX100 giảm 3% tối đa 100,000đ khi thanh toán quét
										QRcode qua App của ngân hàng
									</div>
								</div>
							</div>
						</div>

						<div className="my-3 gap-3 grid grid-cols-2">
							<div
								className="col-span-2 max-w-3xl bg-[#CA2A2A] py-3 items-center text-center cursor-pointer rounded-lg"
								onClick={handler}
							>
								<h3 className="uppercase text-white text-center text-xl font-bold">
									MUA NGAY
								</h3>
								<span className="text-white text-center text-sm font-semibold justify-center">
									Giao hàng miễn phí hoặc giao tại shop
								</span>
								<Modal
									closeButton
									width="1280px"
									aria-labelledby="modal-title"
									open={visible}
									onClose={closeHandler}
								>
									{product.map((item: any, index: any) => {
										return (
											<div key={index}>
												{item == choosedItem && (
													<BuyModal
														id={item._id}
														name={productId.name}
														storage={item.storage}
														color={item.color}
														img={productId.image[0]}
														price={item.price}
														handleClick={closeHandler}
													/>
												)}
											</div>
										);
									})}
								</Modal>
							</div>
							<div
								className="col-span-2 max-w-xl bg-[#1B6BE3] py-3 items-center text-center cursor-pointer rounded-lg my-3"
								onClick={handleAddToCart}
							>
								<Icon
									icon="bi:cart-check-fill"
									className="text-white text-center text-2xl font-semibold m-auto"
								/>
								<h3 className="uppercase text-white text-center text-base font-bold">
									Thêm vào giỏ hàng
								</h3>
							</div>
							{/* <div className="max-w-xl bg-[#1B6BE3] py-3 items-center text-center cursor-pointer rounded-lg my-3 px-2">
								<h3 className="uppercase text-white text-center text-base font-bold">
									Thanh toán bằng Momo
								</h3>
								<span className="text-white text-center text-sm font-semibold justify-center my-2">
									<Image
										src="/images/product/momo.jpg"
										alt="Momo Payment"
										width={35}
										height={35}
										className="rounded-lg"
									/>
								</span>
							</div> */}
						</div>

						<div className="bg-white my-5 flex flex-col rounded-lg">
							<div className="m-5 font-semibold">Thông số kỹ thuật</div>
							<div className="my-5">
								<table className="table-auto border-collapse w-10/12 justify-center items-center ml-5">
									<tbody>
										{choosedItem.price !== undefined && (
											<>
												<tr className="odd:bg-white even:bg-slate-100 py-3 leading-10 text-sm">
													<td>Màn hình: </td>
													<td className="pl-3">{productId.screen}</td>
												</tr>
												<tr className="odd:bg-white even:bg-slate-100 py-3 leading-10 text-sm">
													<td>Hệ điều hành: </td>
													<td className="pl-3">{productId.operatingSystem}</td>
												</tr>
												<tr className="odd:bg-white even:bg-slate-100 py-3 leading-10 text-sm">
													<td>Camera sau: </td>
													<td className="pl-3">{productId.backCamera}</td>
												</tr>
												<tr className="odd:bg-white even:bg-slate-100 py-3 leading-10 text-sm">
													<td>Camera trước: </td>
													<td className="pl-3">{productId.frontCamera}</td>
												</tr>
												<tr className="odd:bg-white even:bg-slate-100 py-3 leading-10 text-sm">
													<td>Màu sắc: </td>
													<td className="pl-3">{choosedItem.color}</td>
												</tr>
												<tr className="odd:bg-white even:bg-slate-100 py-3 leading-10 text-sm">
													<td>Chip: </td>
													<td className="pl-3">{productId.processor}</td>
												</tr>
												<tr className="odd:bg-white even:bg-slate-100 py-3 leading-10 text-sm">
													<td>Ram: </td>
													<td className="pl-3">{productId.ram}</td>
												</tr>
												<tr className="odd:bg-white even:bg-slate-100 py-3 leading-10 text-sm">
													<td>Bộ nhớ trong: </td>
													<td className="pl-3">{choosedItem.storage}</td>
												</tr>
												<tr className="odd:bg-white even:bg-slate-100 py-3 leading-10 text-sm">
													<td>SIM: </td>
													<td className="pl-3">{productId.connect}</td>
												</tr>
												<tr className="odd:bg-white even:bg-slate-100 py-3 leading-10 text-sm">
													<td>Pin, Sạc: </td>
													<td className="pl-3">
														{productId.battery},{productId.charge}
													</td>
												</tr>
											</>
										)}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div className="container max-w-7xl mx-auto px-4 my-16">
					<h1 className="font-bold my-3 text-xl px-3">
						Xem thêm điện thoại khác
					</h1>
					<div>
						<Slider {...settings}>
							{allProducts.map((item: any, index) => {
								return (
									<div
										className="grid grid-cols-1 gap-3 px-3 md:grid-cols-3 lg:grid-cols-5"
										key={index}
									>
										<CardDetail
											name={item.name}
											price={item.price}
											img={item.image[0]}
											slug={ChangeToSlug(item.name)}
											id={item._id}
										/>
									</div>
								);
							})}
						</Slider>
					</div>
				</div>

				<div className="container max-w-7xl mx-auto px-4 my-16">
					<Rating name={productId.name} />
				</div>
				<div className="container max-w-7xl mx-auto px-4 my-16">
					<Comment name={productId.name} productId={productId._id} />
				</div>
			</div>
		</MainLayout>
	);
};

export default ProductDetail;
