import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { Sidebar } from '@/components/Sidebar';
import Image from 'next/image';
import React from 'react';
import { Icon } from '@iconify/react';
import { PageSEO } from '@/components/SEO';

const Support = () => {
	return (
		<>
			<PageSEO
				href="/support/common-questions"
				name="Câu hỏi thường gặp khi mua Apple"
			/>
			<Navbar />
			<div className="flex flex-col lg:flex-row bg-gray-100">
				<Sidebar />
				<div className="my-5 lg:my-20 mx-14 xl:mr-72 xl:w-1/2">
					<h3 className="font-semibold text-2xl mb-3">Câu hỏi thường gặp</h3>
					<Image
						src="/images/support/questions.webp"
						alt="Hướng dẫn mua hàng bước 1"
						width={844}
						height={350}
						className="justify-center items-center mx-auto block mb-3"
					/>
					<div className="bg-[#f0eeee] p-5 rounded my-5">
						<h4 className="text-orange-400 font-semibold">
							1. Mua sản phẩm SellPhone được bảo hành như thế nào?
						</h4>
						<div className="flex items-center ml-5">
							Để đảm bảo quyền lợi của quý khách hàng khi mua sản phẩm tại các
							cửa hàng thuộc hệ thống cửa hàng SellPhone. Chúng tôi cam kết tất
							cả các sản phẩm được tuân theo các điều khoản bảo hành của sản
							phẩm tại thời điểm xuất hóa đơn cho quý khách hàng. Các sản phẩm
							điện thoại sẽ có chính sách bảo hành khác nhau tùy thuộc vào hãng
							sản xuất.
							<br />
							<br />
							Khách hàng có thể bảo hành máy tại các cửa hàng SellPhone trên
							toàn quốc cũng như các trung tâm bảo hành chính hãng sản phẩm.
							Khách hàng có thể truy cập đường dẫn sau để tìm kiếm địa chỉ trung
							tâp bảo hoặc cửa hàng SellPhone gần nhất
						</div>
					</div>
					<div className="bg-[#f0eeee] p-5 rounded my-5">
						<h4 className="text-orange-400 font-semibold">
							2. Mua sản phẩm tại SellPhone có được đổi trả không? Nếu được thì
							phí đổi trả sẽ được tính như thế nào?
						</h4>
						<div className="flex items-center ml-5">
							Đối với các sản phẩm ĐTDĐ (Áp dụng bao gồm các sản phẩm Apple),
							sản phẩm cùng model, cùng màu, cùng dung lượng. Trong tình huống
							sản phẩm đổi hết hàng, khách hàng có thể đổi sang một sản phẩm
							khác tương đương hoặc cao hơn về giá trị so với sản phẩm lỗi.
							Trường hợp khách hàng muốn trả sản phẩm: SellPhone sẽ kiểm tra
							tình trạng máy và thông báo đến Khách hàng về giá trị thu lại sản
							phẩm ngay tại cửa hàng.
							<br />
							<br /> Để biết thêm thông tin chi tiết, quý khách hàng truy cập
							đường dẫn bên dưới để nắm được phí đổi trả chi tiết nhất.
						</div>
					</div>
					<div className="bg-[#f0eeee] p-5 rounded my-5">
						<h4 className="text-orange-400 font-semibold">
							3. SellPhone có chính sách giao hàng tận nhà không? Nếu giao hàng
							tại nhà mà không ưng sản phẩm có được trả lại không?
						</h4>
						<div className="flex items-center ml-5">
							SellPhone cam kết giao hàng toàn bộ 63 tỉnh thành, SellPhone nhận
							giao đơn hàng có thời gian hẹn giao tại nhà trước 20h00. Miễn phí
							giao hàng với các đơn hàng trong bán kính 20km có đặt shop (Với
							đơn hàng có giá trị nhỏ hơn 100.000đ sẽ thu phí 10.000đ) nhân viên
							SellPhone sẽ tư vấn chi tiết về cách thức giao nhận thuận tiện
							nhất.
							<br />
							<br /> Nếu quý khách hàng không ưng ý với sản phẩm khi nhận hàng,
							quý khách có thể từ chối mua hàng mà không mất bất cứ chi phí nào.
							Để biết thêm thông tin, quý khách có thể truy cập link bên dưới để
							biết thêm thông tin chi tiết.
							<br />
							<br /> Lưu ý:
							<br />
							<br /> Đối với các sản phẩm còn nguyên seal, khách hàng muốn bóc
							seal sẽ phải thanh toán 100% giá trị sản phẩm. Nếu không ưng,
							SellPhone sẽ hỗ trợ đổi sản phẩm cho khách hàng theo chính sách
							đổi trả.
							<br />
							<br /> Đối với các sản phẩm không seal, quý khách hàng có thể kiểm
							tra máy mà không phải chịu bất cứ chi phí nào nếu không mua.
						</div>
					</div>
					<div className="bg-[#f0eeee] p-5 rounded my-5">
						<h4 className="text-orange-400 font-semibold">
							4. Làm thế nào để được mua hàng theo chính sách SellPhone?
						</h4>
						<div className="flex items-center ml-5">
							Để được mua hàng và hưởng quyền lợi theo chính sách mua hàng
							SellPhone, quý khách hàng phải là hội viên. Để biết bạn có là hội
							viên hay không, bạn cần biết doanh nghiệp bạn đang công tác đã ký
							hợp đồng tham gia chương trình SellPhone hay chưa.
							<br />
							<br /> Điều kiện tiếp theo là bạn đã ký hợp đồng chính thức với
							doanh nghiệp đó chưa.
							<br />
							<br /> Nếu bạn đã là hội viên của chương trình này, bạn sẽ được
							hưởng ưu đãi trả thẳng giảm 3% khi mua sản phẩm. Để được trả góp
							bạn phải đủ 8 tháng công tác tại doanh nghiệp.
							<br />
							<br /> Để biết thêm thông tin chi tiết. Quý khách vui lòng truy
							cập vào đường link bên dưới
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Support;
