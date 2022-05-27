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
						Giới thiệu về máy đổi trả tại SellPhone
					</h3>
					<ul className="list-decimal">
						<li>
							<span className="font-bold">Máy đổi trả là gì?</span>
							<p>
								<span className="font-bold">Máy đổi trả</span> là những Điện
								thoại được bán ra tại SellPhone, miễn phí đổi sản phẩm tương
								đương trong 30 ngày đầu tiên nếu sản phẩm có lỗi nhà sản xuất.{' '}
								<span className="font-bold">SellPhone</span> chỉ thu lại những
								sản phẩm được bán ra tại SellPhone, không thu mua lại các sản
								phẩm nơi khác. Vì vậy, các sản phẩm đều là hàng chính hãng và có
								chất lượng tốt nhất. Tham khảo chi tiết chính sách đổi trả tại
								đây.
							</p>
						</li>
						<li>
							<span className="font-bold mb-5">Quy trình đổi trả</span>
							<Image
								src="/images/support/sodo.png"
								alt="Sơ đồ đổi trả"
								width={997}
								height={500}
								className="justify-center items-center mx-auto block mb-3"
							/>
						</li>
						<li>
							<span className="font-bold mb-5">Các sản phẩm Máy đổi trả</span>
							<p>
								Sau khi được kiểm tra về tình trạng, chất lượng của các sản
								phẩm, điện thoại, máy tính bảng, laptop được bảo quản và trưng
								bày trong tủ kính trang trọng để khách hàng có thể lựa chọn dễ
								dàng các sản phẩm phù hợp. Khách hàng có thể kiểm tra tình trạng
								máy, trải nghiệm các sản phẩm thỏa thích qua sự hướng dẫn nhiệt
								tình của nhân viên SellPhone .
							</p>
						</li>
						<li>
							<span className="font-bold mb-5">
								Hướng dẫn mua hàng Máy đổi trả
							</span>
							<p className="pb-3">
								- Quý khách có thể đến trực tiếp{' '}
								<span className="font-bold">SellPhone</span> để xem và mua máy,
								hoặc tìm kiếm máy đổi trả phù hợp về mức giá và nhu cầu sử dụng
								trên Website.
							</p>
							<p className="pb-3">
								- Nếu tìm thấy sản phẩm vừa ý trên website, Quý khách có thể đặt
								giữ hàng trong 24 tiếng.
							</p>
							<p className="pb-3">
								- Sau khi đặt hàng trên web, Quý khách sẽ trực tiếp đến{' '}
								<span className="font-bold">SellPhone</span> để kiểm tra máy,
								nhân viên tại shop sẽ nhiệt tình tư vấn thông tin về sản phẩm
								này, nếu Quý khách không hài lòng có thể chọn sang sản phẩm
								khác.
							</p>
						</li>
					</ul>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Support;
