import React, { useState } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import SubNavbar from '@/components/SubNavbar';
import Footer from '@/components/Footer';
import { Icon } from '@iconify/react';
import { Radio } from '@nextui-org/react';
import Slider from 'react-slick';
import CardVivo from '@/components/CardDetail/CardVivo';
import Rating from '@/components/Rating';
import Comment from '@/components/Comment';

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
	const settings = {
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
	const [mainImage, setMainImage] = useState(productData[0]);
	return (
		<div className="bg-gray-100 h-full">
			<Navbar />

			<div className="container mx-auto px-4 my-8 flex flex-col lg:flex-row ">
				<div className="flex flex-col mr-7">
					<div className="flex flex-row my-5 items-center">
						<h3 className="font-bold mx-5">Điện thoại OPPO Reno7 Z 5G</h3>
						{[...Array(5)].map((star, i) => {
							return (
								<label key={i}>
									<input type="radio" name="rating" className="hidden" />
									<Icon icon="emojione:star" className="mx-1" />
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
											alt={'Handmade bag number 5-' + index}
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
					<div className="container max-w-3xl grid grid-cols-2 my-4 auto-cols-min">
						<div className="flex flex-row w-9/12 pb-3">
							<Icon
								icon="fluent:wallet-24-regular"
								className="text-2xl text-blue-500 mx-3"
							/>
							<p>
								Hư gì đổi nấy <span className="font-bold">12 tháng</span> tại
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
									{' '}
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
								Bộ sản phẩm gồm: Hộp, Sách hướng dẫn, Cây lấy sim, Ốp lưng, Cáp
								Type C, Củ sạc nhanh rời đầu Type A{' '}
								<a href="/" className="text-blue-500">
									Xem hình
								</a>
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
				<div className="max-w-7xl flex flex-col my-5">
					<div className="flex justify-between items-center container">
						<div className="mx-3 flex items-center mr-5">
							<h1 className="text-red-500 mx-3 text-2xl font-bold">
								10.490.000<sup>đ</sup>
							</h1>
							<h1 className="text-[#AAAAAA] line-through">
								11.490.000<sup>đ</sup>
							</h1>
						</div>

						<span className="text-[#AAAAAA] ">Trả góp 0%</span>
					</div>

					<div className="my-8 text-center cursor-pointer">
						<Radio.Group value="1" row>
							<div className="bg-white rounded py-5 px-5 mx-3 text-center items-center ">
								<Radio value="1" className="items-center text-center">
									Reno7z
									<Radio.Description>10.490.000đ</Radio.Description>
								</Radio>
							</div>
							<div className="bg-white rounded py-5 px-5 mx-3 text-center items-center">
								<Radio value="2" className="items-center text-center">
									Reno7z 5G
									<Radio.Description>11.490.000đ</Radio.Description>
								</Radio>
							</div>
						</Radio.Group>
					</div>
					<div className="my-8 text-center cursor-pointer">
						<Radio.Group value="1" row>
							<div className="bg-white rounded py-5 px-5 mx-3 text-center items-center">
								<Radio value="1" className="items-center text-center">
									<Image
										src="/images/product/oppo-den.webp"
										width={40}
										height={40}
										alt="Color"
									/>
									<Radio.Description>Đen</Radio.Description>
								</Radio>
							</div>
							<div className="bg-white rounded py-5 px-5 mx-3 text-center items-center">
								<Radio value="2" className="items-center text-center">
									<Image
										src="/images/product/oppo-cam.webp"
										width={40}
										height={40}
										alt="Color"
									/>
									<Radio.Description>Cam</Radio.Description>
								</Radio>
							</div>
						</Radio.Group>
					</div>

					<div className="max-w-3xl bg-white my-5 flex flex-col">
						<div className="flex flex-col bg-[##F5F5F5] mx-3 pt-3 pb-5">
							<span className="font-bold">Khuyến mãi</span>
							<span className="font-semibold text-[#ff0000]">
								Giá và khuyến mãi dự kiến áp dụng đến 23:59 30/04
							</span>
						</div>
						<div className="flex flex-col my-3">
							<div className="flex items-center mx-3 pb-5">
								<div className="w-8 h-8 rounded-full flex justify-center items-center bg-[#424FC2] mx-3">
									<span className="text-sm text-white">1</span>
								</div>
								<div className="font-semibold">
									Nhập mã DMX100 giảm 3% tối đa 100,000đ khi thanh toán quét
									QRcode qua App của ngân hàng
								</div>
							</div>
							<div className="flex items-center mx-3 pb-5">
								<div className="w-8 h-8 rounded-full flex justify-center items-center bg-[#424FC2] mx-3">
									<span className="text-sm text-white">2</span>
								</div>
								<div className="font-semibold">
									Nhập mã DMX100 giảm 3% tối đa 100,000đ khi thanh toán quét
									QRcode qua App của ngân hàng
								</div>
							</div>
							<div className="flex items-center mx-3 pb-5">
								<div className="w-8 h-8 rounded-full flex justify-center items-center bg-[#424FC2] mx-3">
									<span className="text-sm text-white">3</span>
								</div>
								<div className="font-semibold">
									Nhập mã DMX100 giảm 3% tối đa 100,000đ khi thanh toán quét
									QRcode qua App của ngân hàng
								</div>
							</div>
						</div>
					</div>

					<div className="my-3 grid grid-cols-2 gap-3">
						<div className="col-span-2 max-w-3xl bg-[#CA2A2A] py-3 items-center text-center cursor-pointer">
							<h3 className="uppercase text-white text-center text-2xl font-bold">
								MUA NGAY
							</h3>
							<span className="text-white text-center text-sm font-semibold justify-center">
								Giao hàng miễn phí hoặc giao tại shop
							</span>
						</div>
						<div className="max-w-xl bg-[#1B6BE3] py-3 items-center text-center cursor-pointer">
							<h3 className="uppercase text-white text-center text-2xl font-bold">
								TRẢ GÓP 0%
							</h3>
							<span className="text-white text-center text-sm font-semibold justify-center">
								Duyệt nhanh qua điện thoại
							</span>
						</div>
						<div className="max-w-xl bg-[#1B6BE3] py-3 items-center text-center cursor-pointer">
							<h3 className="uppercase text-white text-center text-2xl font-bold">
								TRẢ GÓP QUA THẺ
							</h3>
							<span className="text-white text-center text-sm font-semibold justify-center">
								Visa, Master Card, JCB
							</span>
						</div>
					</div>

					<div className="max-w-3xl bg-white my-5 flex flex-col">
						<div className="m-5 font-semibold">Thông số kỹ thuật</div>
						<div className="my-8">
							<table className="table-auto border-collapse w-10/12 justify-center items-center ml-5">
								<tbody>
									<tr className="odd:bg-white even:bg-slate-100 py-3 leading-10">
										<td>Màn hình: </td>
										<td>AMOLED, 6.43", Full HD+</td>
									</tr>
									<tr className="odd:bg-white even:bg-slate-100 py-3 leading-10">
										<td>Hệ điều hành: </td>
										<td>Android 11</td>
									</tr>
									<tr className="odd:bg-white even:bg-slate-100 py-3 leading-10">
										<td>Camera sau: </td>
										<td>Chính 64 MP & Phụ 2 MP, 2 MP</td>
									</tr>
									<tr className="odd:bg-white even:bg-slate-100 py-3 leading-10">
										<td>Camera trước: </td>
										<td>16 MP</td>
									</tr>
									<tr className="odd:bg-white even:bg-slate-100 py-3 leading-10">
										<td>Chip: </td>
										<td>Snapdragon 695 5G 8 nhân</td>
									</tr>
									<tr className="odd:bg-white even:bg-slate-100 py-3 leading-10">
										<td>Ram: </td>
										<td>8 GB</td>
									</tr>
									<tr className="odd:bg-white even:bg-slate-100 py-3 leading-10">
										<td>Bộ nhớ trong: </td>
										<td>128 GB</td>
									</tr>
									<tr className="odd:bg-white even:bg-slate-100 py-3 leading-10">
										<td>SIM: </td>
										<td>2 Nano SIM (SIM 2 chung khe thẻ nhớ), Hỗ trợ 5G</td>
									</tr>
									<tr className="odd:bg-white even:bg-slate-100 py-3 leading-10">
										<td>Pin, Sạc: </td>
										<td>4500 mAh, 33 W</td>
									</tr>
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
			</div>

			<div className="container max-w-7xl mx-auto px-4 my-16">
				<Rating />
			</div>
			<div className="container max-w-7xl mx-auto px-4 my-16">
				<Comment />
			</div>

			<Footer />
		</div>
	);
};

export default ProductDetail;
