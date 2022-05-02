import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Image from 'next/image';
import React from 'react';

const Support = () => {
	return (
		<>
			<Navbar />
			<div className="flex flex-col lg:flex-row bg-gray-100">
				<Sidebar />
				<div className="my-5 lg:my-20 mx-14 xl:mr-72 xl:w-1/2">
					<h3 className="font-semibold text-2xl mb-3">Hướng dẫn mua hàng</h3>
					<p className="font-bold text-orange-500 mb-3">
						Kính chào quý khách hàng!
					</p>
					<p className="block mb-5">
						Chân thành cảm ơn quý khách đã tin tưởng và lựa chọn SellPhone là
						điểm đến mua sắm. Tuy nhiên, có một thắc mắc lớn nhất là “làm thế
						nào để mua sản phẩm mình ưa thích một cách nhanh chóng và tiện lợi
						nhất”? Để giải đáp thắc mắc này, chúng tôi xin gửi tới quý khách
						hình ảnh hướng dẫn các bước mua hàng như sau:
					</p>
					<p className="mb-5">
						<span className="font-bold text-orange-500">Bước 1:</span> Tại giao
						diện trang chủ của SellPhone
					</p>
					<Image
						src="/images/support/hdmh1.png"
						alt="Hướng dẫn mua hàng bước 1"
						width={702}
						height={736}
						className="justify-center items-center mx-auto block mb-3"
					/>
					<p className="block mb-3">
						Quý khách gõ vào thanh tìm kiếm sản phẩm mà mình quan tâm. Ví dụ quý
						khách đang muốn mua sản phẩm iPhone X 64GB, sau khi gõ hệ thống sẽ
						truy xuất ra các sản phẩm liên quan tới từ khóa mà quý khách muốn
						tìm
					</p>
					<p className="mb-5">
						<span className="font-bold text-orange-500">Bước 2:</span> Bây giờ
						bạn hãy click chọn sản phẩm mà quý khách muốn. Ví dụ quý khách chọn
						sản phẩm iPhone X 64GB, Sau khi click chọn sẽ hiện thị trang chi
						tiết sản phẩm như dưới.
					</p>
					<Image
						src="/images/support/hdmh2.png"
						alt="Hướng dẫn mua hàng bước 2"
						width={702}
						height={736}
						className="justify-center items-center mx-auto block mb-3"
					/>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Support;
