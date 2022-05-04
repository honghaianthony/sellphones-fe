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
					<h3 className="font-semibold text-2xl mb-3">
						Chính sách khui hộp sản phẩm
					</h3>
					<p className="mb-3">
						Áp dụng cho các sản phẩm bán ra tại SellPhone bao gồm ĐTDĐ.
					</p>
					<p className="block mb-5">
						Nội dung chính sách:
						<ul className="list-disc ml-10">
							<li>
								Sản phẩm bắt buộc phải khui seal/mở hộp và kích hoạt bảo hành
								điện tử (Active) ngay tại shop hoặc ngay tại thời điểm nhận hàng
								khi có nhân viên giao hàng tại nhà.
							</li>
							<li>
								Đối với các sản phẩm bán nguyên seal khách hàng cần phải thanh
								toán trước 100% giá trị đơn hàng trước khi khui seal sản phẩm.
							</li>
						</ul>
					</p>
					<p className="block mb-5 font-bold">Lưu ý:</p>
					<p className="mb-3">
						Trước khi kích hoạt bảo hành điện tử (Active) sản phẩm khách hàng
						cần kiểm tra các lỗi ngoại quan của sản phẩm (Cấn_Trầy thân máy, bụi
						trong camera, bụi màn hình, hở viền…). Nếu phát hiện các lỗi trên
						khách hàng sẽ được đổi 1 sản phẩm khác hoặc hoàn tiền.
					</p>
					<p className="mb-3">
						Ngay sau khi kiểm tra lỗi ngoại quan, tiến hành bật nguồn để kiểm
						tra đến lỗi kỹ thuật; nếu sản phẩm có lỗi kỹ thuật của nhà sản xuất
						khách hàng sẽ được đổi 1 sản phẩm mới tương đương tại SellPhone.
					</p>
					<p className="mb-3">
						Nếu quý khách báo lỗi ngoại quan sau khi sản phẩm đã được kích hoạt
						bảo hành điện tử (Active) hoặc sau khi nhân viên giao hàng rời đi
						SellPhone chỉ hỗ trợ chuyển sản phẩm của khách hàng đến hãng để thẩm
						định và xử lý.
					</p>
					<p className="mx-auto font-bold">
						Một số hình ảnh sản phẩm bị lỗi thẩm mỹ.
					</p>

					<Image
						src="/images/support/unboxing.jpg"
						alt="Khui hàng 1"
						width={622}
						height={453}
						className="justify-center items-center mx-auto block mb-3"
					/>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Support;
