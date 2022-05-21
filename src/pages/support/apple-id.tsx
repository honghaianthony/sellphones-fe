import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { Sidebar } from '@/components/Sidebar';
import Image from 'next/image';
import React from 'react';
import { Icon } from '@iconify/react';

const Support = () => {
	return (
		<>
			<Navbar />
			<div className="flex flex-col lg:flex-row bg-gray-100">
				<Sidebar />
				<div className="my-5 lg:my-20 mx-14 xl:mr-72 xl:w-1/2">
					<h3 className="font-semibold text-2xl mb-3">
						Tài khoản iCloud (Apple ID)
					</h3>
					<p className="font-bold mb-3">iCloud là gì?</p>
					<p className="block mb-3">
						iCloud là dịch vụ lưu trữ công nghệ điện toán đám mây{' '}
						<span className="font-bold">MIỄN PHÍ</span> của Apple.
					</p>
					<p className="block mb-3">
						- iCloud lưu trữ nhạc, hình ảnh, các ứng dụng, danh bạ, lịch, và
						nhiều hơn nữa, đẩy chúng đến các thiết bị iDevices chạy hệ điều hành
						iOS 5.0 trở lên và đến máy tính của người dùng
					</p>
					<p className="block mb-3">
						- iCloud cũng là tài khoản để tải các ứng dụng và games trên Apps
						Store
					</p>
					<p className="block mb-3">
						- iCloud có tính bảo mật thiết bị cao trong trường hợp vô tình để
						quên ở đâu đó, người dùng có thể khoá/xoá/bật chuông/định vị thiết
						bị từ xa.
					</p>
					<p className="font-bold mb-3">
						Tại sao người dùng nên sở hữu riêng cho mình một tài khoản iCloud cá
						nhân?
					</p>
					<p className="block mb-3">
						- Tài khoản iCloud lưu trữ hầu hết các thông tin cá nhân của người
						dùng
					</p>
					<p className="block mb-3">
						- Người dùng nên sử dụng tài khoản iCloud cho thiết bị của mình,
						tránh việc vị kẻ gian lợi dụng đăng nhập tài khoản khác, dẫn tới
						việc bị chiếm quyền kiểm soát thiết bị (Vd: Khoá máy, đòi tiền
						chuộc)
					</p>
					<p className="block mb-3">
						- Người dùng cần lưu trữ hoặc ghi lại các thông tin liên quan tới
						tài khoản iCloud ra một nơi khác để sử dụng trong trường hợp quên
						mật khẩu hoặc cần thay đổi thông tin (Apple/SellPhone từ chối bảo
						hành với các thiết bị chưa được đăng xuất/xoá tài khoản iCloud)
					</p>
					<p className="font-bold mb-3">
						Cách tạo MIẼN PHÍ tài khoản iCloud (Apple ID)
					</p>
					<p className="mb-3">
						<span className="font-bold">Bước 1:</span> Từ màn hình chính của
						iPhone/iPad, truy cập theo đường dẫn sau App Store {'>'} chọn một
						ứng dụng Miễn Phí {'>'} Get (Nhận) {'>'} Install (Cài đặt) {'>'}{' '}
						Create New Apple ID (Tạo mới Apple ID) {'>'} Chọn nước là Vietnam{' '}
						{'>'} NEXT {'>'} Cần đồng ý với các điều khoản của Apple đưa ra và
						sau đó tới phần New Account, cần tiếp tục đồng ý với điều kiện của
						Apple, sau đó chọn NEXT {'>'} Tick chọn NONE và nhập các trường dữ
						liệu Apple yêu cầu (bỏ qua phần CODE) {'>'} NEXT {'>'} DONE
					</p>
					<p className="mb-3">
						<span className="font-bold">Bước 2:</span> Truy cập vào email đã
						dùng để đăng ký iCloud và tiến hành kích hoạt tài khoản, sau khi
						tiến hành kích hoạt, người dùng có thể sử dụng tài khoản iCloud để
						bảo mật, download và lưu trữ dữ liệu.
					</p>
					<p className="mb-3">
						<span className="font-bold">Bước 3:</span> Đăng nhập tài khoản
						iCloud vừa được kích hoạt vào máy: Settings (cài đặt) {'>'} iCloud.
					</p>
					<p className="mb-3">
						<span className="font-bold">Bước 4:</span> Kích hoạt tính năng bảo
						mật 2 lớp{' '}
						<span className="font-bold">
							(nên thực hiện bước này để tăng tính bảo mật)
						</span>
						<ul className="mt-3">
							<li className="items-center pb-3 flex">
								<Icon icon="bi:dot" className="ml-5 text-2xl" />
								<p className="italic">
									Truy cập trang https://appleid.apple.com/ và chọn Manage your
									Apple ID. Đăng nhập User Name và Password tài khoản Apple của
									bạn và chọn Sign In
								</p>
							</li>
							<li className="items-center pb-3 flex">
								<Icon icon="bi:dot" className="ml-5 text-2xl" />
								<p className="italic">
									Chọn Password and Security và chọn Get Started trong Two-Step
									Verification
								</p>
							</li>
							<li className="items-center pb-3 flex">
								<Icon icon="bi:dot" className="ml-5 text-2xl" />
								<p className="italic">
									Đồng ý với các điều khoản của Apple, bạn cần Add số điện thoại
									dùng để nhận Passcode từ Apple gửi về
								</p>
							</li>
							<li className="items-center pb-3 flex">
								<Icon icon="bi:dot" className="ml-5 text-2xl" />
								<p className="italic">
									Nhập số điện thoại và chọn Next, Apple sẽ gửi cho bạn một dãy
									Passcode gồm 4 số, nhập 4 số đó vào để Apple xác nhận đúng số
									điện thoại và kích hoạt.
								</p>
							</li>
							<li className="items-center pb-3 flex">
								<Icon icon="bi:dot" className="ml-5 text-2xl" />
								<p className="italic">
									Sau khi xác nhận đúng Số điện thoại và chọn Continue, Apple sẽ
									tạo một dãy số và chữ ngẫu nhiên, bạn cần phải ghi dãy số và
									chữ này lại để dùng khi quên password.
								</p>
							</li>
							<li className="items-center pb-3 flex">
								<Icon icon="bi:dot" className="ml-5 text-2xl" />
								<p className="italic">
									Sau khi dãy ký tự trên được xác nhận trùng khớp, bạn cần tiếp
									tục đồng ý với các Điều Khoản và Quy Định của Apple, Apple sẽ
									bật tính năng bảo mật 2 lớp cho tài khoản của bạn.
								</p>
							</li>
						</ul>
					</p>
					<p className="font-bold mb-3">
						Các lưu ý liên quan tới tài khoản iCloud:
					</p>
					<p className="block mb-3">
						- iCloud là tài khoản cá nhân của người dùng và chỉ duy nhất chủ sở
						hữu tài khoản có đầy đủ các thông tin liên quan tới tài khoản iCloud
					</p>
					<p className="block mb-3">
						- Người dùng cần đăng xuất/xoá thông tin tài khoản iCloud khỏi thiết
						bị trước khi chuyển tới Apple/FPTShop. Apple/FPTShop có quyền từ
						chối tiếp nhận bảo hành, hỗ trợ đối với các thiết bị quên thông tin
						tài khoản, mật khẩu, thiết bị đã bật chế độ báo mất (Lost Mode).
					</p>
					<p className="block mb-3">
						- Với trường hợp người dùng là chủ sở hữu thiết bị (iPhone/iPad)
						nhưng không nhớ các thông tin, mật khẩu liên quan tới tài khoản
						iCloud, người dùng cần chủ động liên hệ trực tiếp với Apple để nhận
						được sự hỗ trợ (Apple chỉ hỗ trợ trực tiếp cho người dùng) bằng cách
						sau:
						<ul className="mt-3">
							<li className="items-center pb-3 flex">
								<Icon icon="bi:dot" className="ml-5 text-2xl" />
								<p className="italic">
									Gọi trực tiếp tới Số điện thoại hỗ trợ của Apple: 12010288 sau
									khi có tiếng nghe máy, tiếp tục nhấn 8007085413 và chọn nhánh
									số 04
								</p>
							</li>
							<li className="items-center pb-3 flex">
								<Icon icon="bi:dot" className="ml-5 text-2xl" />
								<p className="italic">
									Cung cấp đầy đủ các thông tin cá nhân liên quan tới tài khoản
									iCloud khi Apple yêu cầu
								</p>
							</li>
							<li className="items-center pb-3 flex">
								<Icon icon="bi:dot" className="ml-5 text-2xl" />
								<p className="italic">
									Mọi cuộc điện thoại gọi tới Apple để yêu cầu hỗ trợ đều sử
									dụng Tiếng Anh và máy điện thoại của người dùng cần được kích
									hoạt tính năng gọi điện đi Quốc Tế (cuộc gọi tới Apple là hoàn
									toàn Miễn Phí)
								</p>
							</li>
						</ul>
					</p>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Support;
