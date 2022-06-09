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

function ChangeToSlug(str) {
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
	const allProducts = await getAllProducts();
	const { slug } = context.params;

	const productId = allProducts.find(
		(product) =>
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
	product: [];
	productId: any;
	allProducts: [];
}

const ProductDetail: NextPage<ProductDetailProps> = ({
	product,
	productId,
	allProducts,
}) => {
	console.log('1', productId);
	console.log('2', product);
	console.log('3', allProducts);
	const [color, setColor] = useState('');
	const [version, setVersion] = useState('');
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
	const handler = () => setVisible(true);
	const closeHandler = () => {
		setVisible(false);
	};

	function numberWithCommas(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
	}

	const smallItemStyles: React.CSSProperties = {
		cursor: 'pointer',
		objectFit: 'cover',
		width: '100%',
		maxHeight: '100%',
	};

	return (
		<div className="bg-[#fcfaf8] h-full">
			<Navbar />

			<div className="container max-w-7xl mx-auto px-4 my-8 flex flex-col lg:flex-row ">
				<div className="flex flex-col w-2/3">
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
											(photoIndex + productData.length - 1) % productData.length
										].images
									}
									onCloseRequest={() => setIsOpen(false)}
									onMovePrevRequest={() =>
										setPhotoIndex(
											(photoIndex + productData.length - 1) % productData.length
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
								Bộ sản phẩm gồm: Hộp, Sách hướng dẫn, Cây lấy sim, Ốp lưng, Cáp
								Type C, Củ sạc nhanh rời đầu Type A{' '}
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
						<h3 className="text-center my-3 text-lg font-bold">
							Đánh giá chi tiết Oppo Reno7
						</h3>
						<p className="mx-3 font-bold my-3">
							Thiết kế cổ điển, cùng sắc màu thời thượng, OPPO Reno7 mang tới
							nét đẹp độc đáo và đầy sự sáng tạo cho người dùng Gen Z. Chưa dừng
							lại đó, điện thoại còn đưa đến trải nghiệm chụp ảnh ấn tượng cùng
							thế hệ camera chân dung đỉnh cao và cảm biến selfie độc quyền.
						</p>
						<Image
							src="/images/product/oppo_1.jpg"
							width={960}
							height={640}
							alt="Oppo 1"
						/>
						<p className="mx-3 font-bold my-3">
							Camera selfie độc quyền – sự kết hợp giữa OPPO và Sony
						</p>
						<p className="mx-3 my-3">
							OPPO Reno7 sở hữu camera trước với cảm biến siêu nhạy độc quyền
							IMX70 32MP. Đây là sự hợp tác giữa OPPO và ông lớn Sony để mang
							tới thế hệ camera selfie vượt trội trên thị trường smartphone. So
							với cảm biến RGGB tiêu chuẩn, cảm biến RGBW thế hệ mới sẽ cho các
							điểm ánh trắng nhạy sáng hơn, thu sáng nhiều hơn đến 60%, giúp bạn
							có tấm ảnh selfie rạng ngời trong mọi điều kiện ánh sáng.
						</p>
						<Image
							src="/images/product/oppo_2.jpg"
							width={960}
							height={640}
							alt="Oppo 1"
						/>
						<p className="mx-3 my-3">
							Đồng thời, công nghệ làm đẹp AI của OPPO cũng là trợ lý đắc lực để
							cảm biến trở nên hoàn hảo. Trong đó, OPPO Reno7 có thể nhận diện
							390 điểm trên khuôn mặt, cải thiện vẻ đẹp chính xác đến từng chi
							tiết. Các mẫu tùy chỉnh được tối ưu với 8 công cụ và 100 mức độ
							làm đẹp, để bạn có thể sở hữu vẻ đẹp ưng ý nhất. Bạn hãy thử
							selfie trên OPPO Reno7, để thấy sự khác biệt ngay từ những tấm ảnh
							đầu tiên.
						</p>
						<Image
							src="/images/product/oppo_3.jpg"
							width={960}
							height={640}
							alt="Oppo 1"
						/>
						<p className="mx-3 font-bold my-3">
							Tỏa sáng với chân dung Bokeh Flare
						</p>
						<p className="mx-3 my-3">
							Mọi khoảnh khắc đều trở nên lung linh và huyền ảo hơn với tính
							năng chụp Bokeh Flare. OPPO đã nâng cấp thuật toán chụp chân dung
							Bokeh Flare ngày càng tốt. Ảnh chân dung được chụp bởi Bokeh Flare
							sẽ làm mờ hậu cảnh chuyên nghiệp, mang lại các hiệu ứng bokeh
							chuẩn xác và chủ thể được làm đẹp một cách tự nhiên. Đặc biệt,
							tính năng cũng sử dụng cho cả camera trước và sau, để bạn tùy
							thích chọn được kiểu chụp phù hợp.
						</p>
						<Image
							src="/images/product/oppo_4.jpg"
							width={960}
							height={640}
							alt="Oppo 1"
						/>
						<p className="mx-3 font-bold my-3">Bộ ba camera chuyên nghiệp</p>
						<p className="mx-3 my-3">
							OPPO Reno7 được trang bị hệ thống 3 camera 64MP chuyên nghiệp.
							Trong đó, camera chính 64MP cho những tấm ảnh rõ ràng, đảm bảo mọi
							chi tiết đều được ghi lại chân thực. Camera kính hiển vi 2MP, có
							khả năng phóng đại ảnh lên tới 30 lần. Mọi chi tiết siêu nhỏ đều
							có thể khám phá được qua ống kính tiêu cự mở rộng chưa từng có
							này. Camera bokeh 2MP sẽ là người bạn đồng hành cho những khung
							hình chân dung hay ảnh xóa phông ấn tượng.
						</p>
						<Image
							src="/images/product/oppo_5.jpg"
							width={960}
							height={640}
							alt="Oppo 1"
						/>
						<p className="mx-3 font-bold my-3">
							Lưu giữ hình ảnh sắc nét nhất có thể
						</p>
						<p className="mx-3 my-3">
							Ngoài bộ ba camera 64MP và camera selfie thế hệ mới, OPPO Reno7
							còn có các công cụ hỗ trợ đắc lực khác để bạn có tấm ảnh sắc nét
							như: Chụp ảnh siêu nét 108MP và Chụp nhanh siêu nét. Theo đó, Chụp
							ảnh siêu nét 108MP sẽ ghi lại kết cấu và độ nét tấm ảnh ở mức cao
							nhất có thể. Bạn có thể tận dụng ảnh siêu nét này, để cắt bất kỳ
							chi tiết nào mà không lo ngại ảnh sẽ bị vỡ hay nhòe. Đối với Chụp
							ảnh siêu nét, tính năng mang tới khung hình sắc nét và rõ ràng,
							ngay cả khi bạn đang di chuyển.
						</p>
						<Image
							src="/images/product/oppo_6.jpg"
							width={960}
							height={640}
							alt="Oppo 1"
						/>
						<p className="mx-3 font-bold my-3">
							Những đường nét cổ điển và đầy cuốn hút
						</p>
						<p className="mx-3 my-3">
							OPPO Reno7 có thiết kế siêu mỏng, nhẹ với độ mỏng 7.54mm cho phiên
							bản Cam Hoàng Hôn, 7.49mm cho Đen Vô Cực và trọng lượng 175g.
						</p>
						<Image
							src="/images/product/oppo_7.jpg"
							width={960}
							height={640}
							alt="Oppo 1"
						/>
						<p className="mx-3 my-3">
							Sức hút của Reno7 còn đến từ những đường nét cổ điển của phiên bản
							Cam Hoàng Hôn. Đây là thiết kế được hoàn thiện từ kỹ thuật xử lý
							da sợi thủy tinh đầu tiên trong ngành. Điện thoại đã trải qua loạt
							thử nghiệm nghiêm ngặt, mang tới tính thẩm mỹ cao lẫn chất lượng
							vượt trội. Nhờ vậy, mặt lưng Reno7 có khả năng chống trầy xước lẫn
							tróc da hiệu quả. Đồng thời, màu cam thời thượng còn là điểm nhấn
							để Reno7 nổi bật và hiện đại hơn. Về phiên bản Đen Vô Cực là thiết
							kế Glow sang trọng và đầy tinh tế.
						</p>
						<Image
							src="/images/product/oppo_8.jpg"
							width={960}
							height={640}
							alt="Oppo 1"
						/>
						<p className="mx-3 my-3">
							Tổng thể thiết kế còn tạo sự khác biệt với đèn LED bao quanh
							camera kính hiển vi. Khi có thông báo, cuộc gọi đến, đèn LED sẽ
							được bật sáng lấp lánh để bạn không bỏ lỡ bất kỳ thông tin nào.
						</p>
						<Image
							src="/images/product/oppo_9.jpg"
							width={960}
							height={640}
							alt="Oppo 1"
						/>
						<p className="mx-3 font-bold my-3">
							Sự đồng hành của hiệu năng mượt mà
						</p>
						<p className="mx-3 my-3">
							OPPO Reno7 được tích hợp vi xử lý Snapdragon 680, xây dựng trên
							tiến trình 6nm, đem tới hiệu năng mượt mà cho từng tác vụ, mà vẫn
							tiết kiệm điện năng hiệu quả. Điện thoại cũng hỗ trợ sẵn công nghệ
							mở rộng RAM đến 5GB, tổng RAM lên tới 13GB, giúp đa nhiệm hoàn hảo
							và sử dụng dài lâu hơn.
						</p>
						<Image
							src="/images/product/oppo_10.jpg"
							width={960}
							height={640}
							alt="Oppo 1"
						/>
						<p className="mx-3 my-3">
							OPPO Reno7 được tích hợp vi xử lý Snapdragon 680, xây dựng trên
							tiến trình 6nm, đem tới hiệu năng mượt mà cho từng tác vụ, mà vẫn
							tiết kiệm điện năng hiệu quả. Điện thoại cũng hỗ trợ sẵn công nghệ
							mở rộng RAM đến 5GB, tổng RAM lên tới 13GB, giúp đa nhiệm hoàn hảo
							và sử dụng dài lâu hơn.
						</p>
						<Image
							src="/images/product/oppo_11.jpg"
							width={960}
							height={640}
							alt="Oppo 1"
						/>
						<p className="mx-3 font-bold my-3">Màn hình bảo vệ mắt tối ưu</p>
						<p className="mx-3 my-3">
							Để bảo vệ mắt tối ưu, OPPO Reno7 có màn hình bảo vệ mắt AMOLED,
							giúp hạn chế tối đa các tia sáng xanh làm ảnh hưởng đến đôi mắt.
							Màn hình còn có khả năng giải trí cực tốt với kích thước 6.4 inch,
							FHD+ cho chi tiết sắc nét, rõ ràng và chân thực. Bên cạnh đó, sự
							góp mặt của tần số quét 90Hz sẽ giúp nâng tầm trải nghiệm, các
							thao tác diễn ra trong nháy mắt, mọi chuyển động đều được xử lý
							gọn gàng và nhanh chóng.
						</p>
						<Image
							src="/images/product/oppo_12.jpg"
							width={960}
							height={640}
							alt="Oppo 1"
						/>
						<p className="mx-3 font-bold my-3">Không lo cạn pin giữa ngày</p>
						<p className="mx-3 my-3">
							OPPO Reno7 sở hữu viên pin lớn 4.500 mAh cho thời lượng sử dụng
							thoải mái cả ngày dài. Chưa dừng lại đó, bạn sẽ không ngại hết pin
							nếu quên sạc. Điện thoại có hỗ trợ sạc nhanh Super VOOC 33W, chỉ
							với 5 phút sạc bạn đã có ngay 100 phút xem phim hay 15 phút để có
							32% pin.
						</p>
						<Image
							src="/images/product/oppo_13.jpg"
							width={960}
							height={640}
							alt="Oppo 1"
						/>
						<p className="mx-3 font-bold my-3">Độ bền vượt thời gian</p>
						<p className="mx-3 my-3">
							Không chỉ có những công nghệ vượt trội mà độ bền Reno7 còn tuyệt
							hảo. Điện thoại đã trải qua 6 bài kiểm tra chính, bao gồm thử
							nghiệm rơi, kháng nước, bức xạ, khí hậu, rơi nhẹ và tín hiệu, mang
							tới chất lượng tốt nhất cho người dùng. Khả năng kháng nước điện
							thoại ghi nhận là IPX4, cho phép điện thoại không bị ảnh hưởng bởi
							các giọt nước bắn từ bất kỳ hướng nào, giúp người dùng yên tâm hơn
							khi sử dụng điện thoại hằng ngày.
						</p>
						<Image
							src="/images/product/oppo_14.jpg"
							width={960}
							height={640}
							alt="Oppo 1"
						/>
					</div>
				</div>
				<div className="flex flex-col my-5 w-1/3">
					<div className="flex justify-between items-center container">
						<div className="mx-3 flex items-center mr-5">
							<h1 className="text-red-500 mx-3 text-2xl font-bold">
								{product.map((item: any, index) => {
									return (
										<div key={index}>
											{color === item.color && version === item.storage && (
												<span>
													{productId.price
														? numberWithCommas(productId.price)
														: numberWithCommas(item.price)}
													<sup>đ</sup>
												</span>
											)}
										</div>
									);
								})}
							</h1>
						</div>

						<span className="text-[#AAAAAA] ">Trả góp 0%</span>
					</div>

					<div className="my-8 text-center cursor-pointer grid grid-cols-2 gap-2">
						{product.map((item: any, index) => {
							return (
								<div
									className="bg-white rounded py-5 px-5 mx-3 text-center items-center"
									key={index}
								>
									<Radio
										value={index}
										className="items-center text-center"
										checked={version === item.storage && color === item.color}
										onChange={() => {
											setVersion(item.storage), setColor(item.color);
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

					<div className="my-3 gap-3">
						<div className="col-span-2 max-w-3xl bg-[#CA2A2A] py-3 items-center text-center cursor-pointer rounded-lg">
							<h3
								className="uppercase text-white text-center text-xl font-bold"
								onClick={handler}
							>
								MUA NGAY
								<Modal
									closeButton
									width="1280px"
									aria-labelledby="modal-title"
									open={visible}
									onClose={closeHandler}
								>
									{product.map((item: any, index) => {
										return (
											<div key={index}>
												{color === item.color && version === item.storage && (
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
							</h3>
							<span className="text-white text-center text-sm font-semibold justify-center">
								Giao hàng miễn phí hoặc giao tại shop
							</span>
						</div>
						<div className="max-w-xl bg-[#1B6BE3] py-3 items-center text-center cursor-pointer rounded-lg my-3">
							<h3 className="uppercase text-white text-center text-xl font-bold">
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
						</div>
					</div>

					<div className="bg-white my-5 flex flex-col rounded-lg">
						<div className="m-5 font-semibold">Thông số kỹ thuật</div>
						<div className="my-5">
							<table className="table-auto border-collapse w-10/12 justify-center items-center ml-5">
								{product.map((item: any, index) => {
									return (
										<tbody key={index}>
											{color === item.color && version === item.storage && (
												<>
													<tr className="odd:bg-white even:bg-slate-100 py-3 leading-10 text-sm">
														<td>Màn hình: </td>
														<td className="pl-3">{productId.screen}</td>
													</tr>
													<tr className="odd:bg-white even:bg-slate-100 py-3 leading-10 text-sm">
														<td>Hệ điều hành: </td>
														<td className="pl-3">
															{productId.operatingSystem}
														</td>
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
														<td className="pl-3">{item.color}</td>
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
														<td className="pl-3">{item.storage}</td>
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
									);
								})}
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
				<Comment name={productId.name} />
			</div>

			<Footer />
		</div>
	);
};

export default ProductDetail;
