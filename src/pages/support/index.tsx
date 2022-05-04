import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import React from 'react';

const Support = () => {
	return (
		<>
			<Navbar />
			<div className="flex flex-col lg:flex-row bg-gray-100">
				<Sidebar />
				<div className="my-5 lg:my-20 mx-14 xl:mr-72 xl:w-1/2">
					<h3 className="font-semibold text-2xl mb-3">
						Chính sách giao hàng và kinh doanh
					</h3>
					<div className="bg-[#f0eeee] p-5 rounded my-5">
						<h4 className="text-orange-400 font-semibold">63 Tỉnh thành</h4>
						<div className="flex items-center ml-5">
							<Icon
								icon="charm:tick"
								className="text-green-400 mx-2 text-xl font-bold text-xl font-bold"
							/>
							<p className="block">
								{'  '}
								SellPhone nhận giao hàng khắp 63 tỉnh thành trên toàn quốc.
							</p>
						</div>
					</div>
					<div className="bg-[#f0eeee] p-5 rounded my-5">
						<h4 className="text-orange-400 font-semibold">
							20 Km giao hàng miễn phí
						</h4>
						<div className="flex items-center ml-5">
							<Icon
								icon="charm:tick"
								className="text-green-400 mx-2 text-xl font-bold"
							/>
							<p className="block">
								{'  '}
								Miễn phí giao hàng trong bán kính 20km có đặt shop.
							</p>
						</div>
						<div className="flex items-center ml-5">
							<Icon
								icon="charm:tick"
								className="text-green-400 mx-2 text-xl font-bold"
							/>
							<p className="block">
								{'  '}
								Với khoảng cách lớn hơn 20km, nhân viên SellPhone sẽ tư vấn chi
								tiết về cách thức giao nhận thuận tiện nhất.
							</p>
						</div>
					</div>
					<div className="bg-[#f0eeee] p-5 rounded my-5">
						<h4 className="text-orange-400 font-semibold">Mua hàng online</h4>
						<div className="flex items-center ml-5">
							<Icon
								icon="charm:tick"
								className="text-green-400 mx-2 text-xl font-bold"
							/>
							<p className="block">
								{'  '}
								Cam kết 100% là hàng chính hãng, bảo hành, đổi trả trên toàn
								quốc.
							</p>
						</div>
						<div className="flex items-center ml-5">
							<Icon
								icon="charm:tick"
								className="text-green-400 mx-2 text-xl font-bold"
							/>
							<p className="block">
								{'  '}
								Hỗ trợ kỹ thuật online miễn phí qua tổng đài.
							</p>
						</div>
						<div className="flex items-center ml-5">
							<Icon
								icon="charm:tick"
								className="text-green-400 mx-2 text-xl font-bold"
							/>
							<p className="block">
								{'  '}
								Tiết kiệm thời gian, thỏa sức mua sắm 24/7.
							</p>
						</div>
						<div className="flex items-center ml-5">
							<Icon
								icon="charm:tick"
								className="text-green-400 mx-2 text-xl font-bold"
							/>
							<p className="block">
								{'  '}
								Khuyến mãi mới cập nhật liên tục.
							</p>
						</div>
						<div className="flex items-center ml-5">
							<Icon
								icon="charm:tick"
								className="text-green-400 mx-2 text-xl font-bold"
							/>
							<p className="block">
								{'  '}
								Chính sách đổi trả linh hoạt: Quý khách vui lòng đọc hướng dẫn
								tại đây.
							</p>
						</div>
						<div className="flex items-center ml-5">
							<Icon
								icon="charm:tick"
								className="text-green-400 mx-2 text-xl font-bold"
							/>
							<p className="block">
								{'  '}
								Đơn hàng key online không áp dụng giao hàng tại nhà. Sau khi
								hoàn tất thanh toán, Key sẽ được gửi về số điện thoại hoặc email
								của KH.
							</p>
						</div>
					</div>
					<div className="bg-[#f0eeee] p-5 rounded my-5">
						<h4 className="text-orange-400 font-semibold">
							Điều kiện và phương thức thanh toán
						</h4>
						<div className="flex items-center ml-5">
							<Icon
								icon="charm:tick"
								className="text-green-400 mx-2 text-xl font-bold"
							/>
							<p className="block">
								{'  '}
								Với những đơn hàng giao tại nhà và có giá trị từ 50 triệu đồng
								trở lên, Quý khách vui lòng thanh toán trước 100% giá trị đơn
								hàng. Quý khách có thể lựa chọn các hình thức thanh toán gồm:
								Tiền mặt, qua cổng thanh toán hoặc chuyển khoản.
							</p>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Support;
