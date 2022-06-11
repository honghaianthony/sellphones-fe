import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { Sidebar } from '@/components/Sidebar';
import Image from 'next/image';
import React from 'react';
import { PageSEO } from '@/components/SEO';
import MainLayout from '@/components/Layouts/MainLayout';

const Support = () => {
	return (
		<MainLayout>
			<PageSEO
				href="/support/warranty-policy"
				name="Chính sách bảo hành tại SellPhone"
			/>
			<div className="flex flex-col lg:flex-row bg-gray-100">
				<Sidebar />
				<div className="my-5 lg:my-20 mx-14 xl:mr-72 xl:w-1/2">
					<h3 className="font-semibold text-2xl mb-3">
						Chính sách bảo hành tại SellPhone
					</h3>
					<div className="bg-[#f0eeee] p-5 rounded my-5">
						<h4 className="text-orange-400 font-semibold italic">
							Đầu tiên, xin chân thành cảm ơn Quý khách đã tin tưởng và lựa chọn
							mua sắm tại SellPhone.
						</h4>
						<div className="items-center ml-5">
							<p className="my-3">
								Với phương châm “Quyền lợi của Khách hàng là quan trọng nhất”,
								tất cả các sản phẩm mua tại Hệ thống SellPhone trên toàn quốc và
								tại website https://sellphone.com.vn/ đều được áp dụng chính
								sách bảo hành theo đúng quy định của Hãng. ĐẶC BIỆT, đối với sản
								phẩm là Điện thoại di động, Khách hàng được hưởng chính sách
								riêng của SellPhone:
							</p>
							<p className="font-bold text-2xl text-red-500">
								“MIỄN PHÍ 1 ĐỔI 1 NẾU CÓ LỖI PHẦN CỨNG TRONG VÒNG 30 NGÀY ĐẦU
								TIÊN MUA HÀNG”.
							</p>
						</div>
					</div>
					<h5 className="text-xl font-bold">
						Quý khách vui lòng lưu ý 1 số nội dung sau:
					</h5>
					<ul className="list-decimal">
						<li>
							Chương trình bảo hành bắt đầu có hiệu lực từ thời điểm SellPhone
							xuất hóa đơn cho Quý khách.
						</li>
						<li>
							Với mỗi dòng sản phẩm khác nhau sẽ có chính sách bảo hành khác
							nhau tùy theo chính sách của Hãng/Nhà cung cấp.
						</li>
						<li>
							Để tìm hiểu thông tin chi tiết về chính sách bảo hành cho sản phẩm
							cụ thể, xin liên hệ bộ phận Chăm sóc Khách hàng của SellPhone:
							1900 0000
						</li>
					</ul>
					<h5 className="text-xl font-bold">
						Các trường hợp nằm ngoài chính sách bảo hành:
					</h5>
					<ul className="list-decimal">
						<li className="italic">
							Những trường hợp dưới đây sẽ không nằm trong chính sách bảo hành
							miễn phí của Nhà sản xuất:
							<ul className="list-disc">
								<li>
									Sản phẩm hết hạn bảo hành (Vui lòng tra cứu thời hạn bảo hành
									sản phẩm tại đây).
								</li>
								<li>
									Sản phẩm đã bị thay đổi, sửa chữa không thuộc các Trung Tâm
									Bảo Hành Ủy Quyền của Hãng.
								</li>
								<li>
									Sản phẩm lắp đặt, bảo trì, sử dụng không đúng theo hướng dẫn
									của Nhà sản xuất gây ra hư hỏng.
								</li>
								<li>
									Sản phẩm trong tình trạng bị khóa tài khoản cá nhân như: Tài
									khoản khóa máy/màn hình, khóa tài khoản trực tuyến Gmail,
									iCloud...
								</li>
								<li>
									Khách hàng sử dụng phần mềm, ứng dụng không chính Hãng, không
									bản quyền.
								</li>
								<li>Màn hình có từ bốn (04) điểm chết trở lên.</li>
							</ul>
						</li>
						<li>
							Ngoài ra, cơ chế bảo hành cũng không có hiệu lực đối với các lỗi
							thường thấy nhưng không đến từ nhà sản xuất như:
							<ul className="list-disc">
								<li>
									Sản phẩm lỗi do ngấm nước, chất lỏng và bụi bẩn. Quy định này
									áp dụng cho cả những thiết bị đạt chứng nhận chống bụi/chống
									nước cao nhất là IP68.
								</li>
								<li>
									Sản phẩm bị biến dạng, nứt vỡ, cấn móp, trầy xước nặng do tác
									động nhiệt, tác động bên ngoài.
								</li>
								<li>
									Sản phẩm có vết mốc, rỉ sét hoặc bị ăn mòn, oxy hóa bởi hóa
									chất.
								</li>
								<li>
									Sản phẩm bị hư hại do thiên tai, hỏa hoạn, lụt lội, sét đánh,
									côn trùng, động vật vào.
								</li>
							</ul>
						</li>
					</ul>
					<h5 className="text-xl font-bold">Một số lưu ý trước khi bảo hành</h5>
					<ul className="list-disc">
						<li>
							Trong quá trình thực hiện dịch vụ bảo hành, các nội dung lưu trữ
							trên sản phẩm của Quý khách sẽ bị xóa và định dạng lại. Do đó, Quý
							khách vui lòng tự sao lưu toàn bộ dữ liệu trong sản phẩm, đồng
							thời gỡ bỏ tất cả các thông tin cá nhân mà Quý khách muốn bảo mật.
							SellPhone không chịu trách nhiệm đối với bất kỳ mất mát nào liên
							quan tới các chương trình phần mềm, dữ liệu hoặc thông tin nào
							khác lưu trữ trên sản phẩm bảo hành.
						</li>
						<li>
							Vui lòng tắt tất cả các mật khẩu bảo vệ, SellPhone sẽ từ chối tiếp
							nhận bảo hành nếu thiết bị của bạn bị khóa bởi bất cứ phương pháp
							nào.
						</li>
					</ul>
					<h5 className="text-xl font-bold">Chính Sách Bảo Hành Apple</h5>
					<p>
						Sản phẩm có lỗi phần cứng thuộc phạm vi bảo hành sẽ được hưởng chính
						sách 1 đổi 1 trong vòng 01 tháng kể từ ngày mua máy; từ tháng thứ 02
						đến tháng thứ 12, sản phẩm sẽ được bảo hành theo đúng chính sách của
						Hãng Apple. Quý khách hàng vui lòng tham khảo chính sách bảo hành
						của Hãng Apple theo đường link sau:
						<a href="https://www.apple.com/legal/warranty/products/ios-warranty-rest-of-apac-vietnamese.html">
							https://www.apple.com/legal/warranty/products/ios-warranty-rest-of-apac-vietnamese.html
						</a>
						Hoặc liên hệ tổng đài Chăm sóc khách hàng của Apple tại Việt Nam để
						biết thêm chi tiết: 1800 1127
					</p>
				</div>
			</div>
			<Footer />
		</MainLayout>
	);
};

export default Support;
