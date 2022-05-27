import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { Sidebar } from '@/components/Sidebar';
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
						SellPhone là nhà nhập khẩu trực tiếp các sản phẩm Apple
					</h3>
					<p className="mb-3">
						Ngày 25 tháng 8 năm 2015, SellPhone chính thức ký hợp tác là đối tác
						toàn diện của Apple thông qua việc nhập khẩu trực tiếp iPhone –
						iPad. Điều này đồng nghĩa với việc SellPhone Retail đã nhập khẩu tất
						cả sản phẩm từ chính Apple. Qua đó khách hàng khi mua sản phẩm Apple
						tại SellPhone Shop sẽ được hưởng những chính sách ưu đãi cùng với
						các trải nhiệm mua sắm tốt nhất.
					</p>
					<Image
						src="/images/support/authorised-apple.jpg"
						alt="Authorised Apple"
						width={255}
						height={106}
						className="justify-center items-center mx-auto block mb-3"
					/>
					<div className="mt-5 ml-3">
						<ul className="list-decimal">
							<li>Hàng chính hãng được nhập trực tiếp từ Apple.</li>
							<li>Chính sách bảo hành 1 đổi 1 trong 12 tháng.</li>
							<li>
								Chính sách đổi trả miễn phí trong 30 ngày với lỗi do nhà sản
								xuất.
							</li>
							<li>
								Mang đến người dùng một sự trải nghiệm mua sắm hoàn hảo với khu
								trải nghiệm Apple Corner đạt tiêu chuẩn hãng và chuyên gia tư
								vấn được đào tạo chuyên nghiệp.
							</li>
						</ul>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Support;
