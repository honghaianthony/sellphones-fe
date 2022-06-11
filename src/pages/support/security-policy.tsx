import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { Sidebar } from '@/components/Sidebar';
import { Icon } from '@iconify/react';
import React from 'react';
import { PageSEO } from '@/components/SEO';
import MainLayout from '@/components/Layouts/MainLayout';

const Support = () => {
	return (
		<MainLayout>
			<PageSEO
				href="/support/security-policy"
				name="Chính sách bảo mật tại SellPhone"
			/>
			<div className="flex flex-col lg:flex-row bg-gray-100">
				<Sidebar />
				<div className="my-5 lg:my-20 mx-14 xl:mr-72 xl:w-1/2">
					<h3 className="font-semibold text-2xl mb-3">Chính sách bảo mật</h3>
					<p className="font-bold italic mb-3">
						SellPhone cam kết sẽ bảo mật những thông tin mang tính riêng tư của
						bạn. Bạn vui lòng đọc bản “Chính sách bảo mật” dưới đây để hiểu hơn
						những cam kết mà chúng tôi thực hiện, nhằm tôn trọng và bảo vệ quyền
						lợi của người truy cập.
					</p>
					<ul className="list-decimal">
						<li className="font-bold mb-3">Mục đích và phạm vi thu thập?</li>
						<p className="mb-3">
							Để truy cập và sử dụng một số dịch vụ tại SellPhone, bạn có thể sẽ
							được yêu cầu đăng ký với chúng tôi thông tin cá nhân (Email, Họ
							tên, Số ĐT liên lạc…). Mọi thông tin khai báo phải đảm bảo tính
							chính xác và hợp pháp. SellPhone không chịu mọi trách nhiệm liên
							quan đến pháp luật của thông tin khai báo.
						</p>
						<p className="mb-3">
							Chúng tôi cũng có thể thu thập thông tin về số lần viếng thăm, bao
							gồm số trang bạn xem, số links (liên kết) bạn click và những thông
							tin khác liên quan đến việc kết nối đến site SellPhone. Chúng tôi
							cũng thu thập các thông tin mà trình duyệt Web (Browser) bạn sử
							dụng mỗi khi truy cập vào SellPhone, bao gồm: địa chỉ IP, loại
							Browser, ngôn ngữ sử dụng, thời gian và những địa chỉ mà Browser
							truy xuất đến.
						</p>
						<li className="font-bold mb-3">Phạm vi sử dụng thông tin</li>
						<p className="mb-3">
							SellPhone thu thập và sử dụng thông tin cá nhân bạn với mục đích
							phù hợp và hoàn toàn tuân thủ nội dung của “Chính sách bảo mật”
							này. Khi cần thiết, chúng tôi có thể sử dụng những thông tin này
							để liên hệ trực tiếp với bạn dưới các hình thức như: gởi thư ngỏ,
							đơn đặt hàng, thư cảm ơn, sms, thông tin về kỹ thuật và bảo mật…
						</p>
						<li className="font-bold mb-3">Thời gian lưu trữ thông tin</li>
						<p className="mb-3">
							Dữ liệu cá nhân của Thành viên sẽ được lưu trữ cho đến khi có yêu
							cầu hủy bỏ hoặc tự thành viên đăng nhập và thực hiện hủy bỏ. Còn
							lại trong mọi trường hợp thông tin cá nhân thành viên sẽ được bảo
							mật trên máy chủ của SellPhone.
						</p>
						<li className="font-bold mb-3">
							Phương tiện và công cụ để người dùng tiếp cận và chỉnh sửa dữ liệu
							cá nhân
						</li>
						<p className="mb-3">
							Hiện website chưa triển khai trang quản lý thông tin cá nhân của
							thành viên, vì thế việc tiếp cận và chỉnh sửa dữ liệu cá nhân dựa
							vào yêu cầu của khách hàng bằng cách hình thức sau:
							<ul className="mb-3">
								<li className="flex items-center">
									<Icon
										icon="charm:tick"
										className="text-xl text-green-500 mr-3"
									/>
									<p>
										Gọi điện thoại đến tổng đài chăm sóc khách hàng 1900 0000,
										bằng nghiệp vụ chuyên môn xác định thông tin cá nhân và nhân
										viên tổng đài sẽ hỗ trợ chỉnh sửa thay người dùng
									</p>
								</li>
								<li className="flex items-center">
									<Icon
										icon="charm:tick"
										className="text-xl text-green-500 mr-3"
									/>
									<p>
										Để lại bình luận hoặc gửi góp ý trực tiếp từ website
										SellPhone, quản trị viên kiểm tra thông tin và xem xét nội
										dung bình luận có phù hợp với pháp luật và chính sách của
										SellPhone
									</p>
								</li>
							</ul>
						</p>
						<li className="font-bold mb-3">
							Cam kết bảo mật thông tin cá nhân khách hàng
						</li>
						<p className="mb-3">
							Thông tin cá nhân của thành viên trên SellPhone được SellPhone cam
							kết bảo mật tuyệt đối theo chính sách bảo vệ thông tin cá nhân của
							SellPhone. Việc thu thập và sử dụng thông tin của mỗi thành viên
							chỉ được thực hiện khi có sự đồng ý của khách hàng đó trừ những
							trường hợp pháp luật có quy định khác.
						</p>
						<p className="mb-3">
							Không sử dụng, không chuyển giao, cung cấp hay tiết lộ cho bên thứ
							3 nào về thông tin cá nhân của thành viên khi không có sự cho phép
							đồng ý từ thành viên.
						</p>
						<p className="mb-3">
							Trong trường hợp máy chủ lưu trữ thông tin bị hacker tấn công dẫn
							đến mất mát dữ liệu cá nhân thành viên, SellPhone sẽ có trách
							nhiệm thông báo vụ việc cho cơ quan chức năng điều tra xử lý kịp
							thời và thông báo cho thành viên được biết.
						</p>
						<p className="mb-3">
							Bảo mật tuyệt đối mọi thông tin giao dịch trực tuyến của Thành
							viên bao gồm thông tin hóa đơn kế toán chứng từ số hóa tại khu vực
							dữ liệu trung tâm an toàn cấp 1 của SellPhone.
						</p>
						<p className="mb-3">
							Hệ thống thanh toán thẻ được cung cấp bởi các đối tác cổng thanh
							toán (“Đối Tác Cổng Thanh Toán”) đã được cấp phép hoạt động hợp
							pháp tại Việt Nam. Theo đó, các tiêu chuẩn bảo mật thanh toán thẻ
							tại SellPhone đảm bảo tuân thủ theo các tiêu chuẩn bảo mật ngành.
						</p>
						<p className="mb-3">
							Ban quản lý SellPhone yêu cầu các cá nhân khi đăng ký/mua hàng là
							thành viên, phải cung cấp đầy đủ thông tin cá nhân có liên quan
							như: Họ và tên, địa chỉ liên lạc, email, số chứng minh nhân dân,
							điện thoại, số tài khoản, số thẻ thanh toán …., và chịu trách
							nhiệm về tính pháp lý của những thông tin trên. Ban quản lý
							SellPhone không chịu trách nhiệm cũng như không giải quyết mọi
							khiếu nại có liên quan đến quyền lợi của Thành viên đó nếu xét
							thấy tất cả thông tin cá nhân của thành viên đó cung cấp khi đăng
							ký ban đầu là không chính xác.
						</p>
						<li className="font-bold mb-3">
							Làm cách nào để yêu cầu xóa dữ liệu?
						</li>
						<p className="mb-3">
							Bạn có thể gửi yêu cầu xóa dữ liệu qua email Trung tâm hỗ trợ của
							chúng tôi: sellphone@gmail.com. Vui lòng cung cấp càng nhiều thông
							tin càng tốt về dữ liệu nào bạn muốn xóa. Yêu cầu sẽ được chuyển
							đến nhóm thích hợp để đánh giá và xử lý. Chúng tôi sẽ liên hệ từng
							bước để cập nhật cho bạn về tiến trình xóa.
						</p>
					</ul>
				</div>
			</div>
			<Footer />
		</MainLayout>
	);
};

export default Support;
