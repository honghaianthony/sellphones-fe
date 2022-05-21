import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { Sidebar } from '@/components/Sidebar';
import React from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { Icon } from '@iconify/react';
import Image from 'next/image';

const Support = () => {
	return (
		<>
			<Navbar />
			<div className="flex flex-col lg:flex-row bg-gray-100">
				<Sidebar />
				<div className="my-5 lg:my-20 mx-14 xl:mr-72 xl:w-1/2">
					<h3 className="font-semibold text-2xl mb-3">Câu hỏi thường gặp</h3>
					<div className="w-full px-4">
						<div className="w-full max-w-full rounded-2xl bg-white p-2">
							<Disclosure>
								{({ open }) => (
									<>
										<Disclosure.Button className="focus:outline-none flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
											<span>
												1. Tôi mua sản phẩm Apple tại SellPhone sẽ có khác biệt
												gì?
											</span>
											<Icon
												icon="akar-icons:chevron-up"
												className={`${
													open ? 'rotate-180 transform' : ''
												} h-5 w-5 text-purple-500`}
											/>
										</Disclosure.Button>
										<Transition
											enter="transition duration-100 ease-out"
											enterFrom="transform scale-95 opacity-0"
											enterTo="transform scale-100 opacity-100"
											leave="transition duration-75 ease-out"
											leaveFrom="transform scale-100 opacity-100"
											leaveTo="transform scale-95 opacity-0"
										>
											<Disclosure.Panel className="px-4 pt-4 pb-2 text-sm ">
												SellPhone là đại lý ủy quyền bán hàng Apple chính hãng
												tại Việt Nam, SellPhone chỉ bán 1 loại hàng hóa duy nhất
												là: <span className="font-bold">Hàng chính hãng</span>.
											</Disclosure.Panel>
										</Transition>
									</>
								)}
							</Disclosure>
							<Disclosure as="div" className="mt-2">
								{({ open }) => (
									<>
										<Disclosure.Button className="focus:outline-none flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
											<span>
												2. Tại sao hàng chính hãng lại đắt hơn hàng xách tay bán
												tại các cửa hàng khác?
											</span>
											<Icon
												icon="akar-icons:chevron-up"
												className={`${
													open ? 'rotate-180 transform' : ''
												} h-5 w-5 text-purple-500`}
											/>
										</Disclosure.Button>
										<Transition
											enter="transition duration-100 ease-out"
											enterFrom="transform scale-95 opacity-0"
											enterTo="transform scale-100 opacity-100"
											leave="transition duration-75 ease-out"
											leaveFrom="transform scale-100 opacity-100"
											leaveTo="transform scale-95 opacity-0"
										>
											<Disclosure.Panel className="px-4 pt-4 pb-2 text-sm ">
												Hàng chính hãng là hàng được kiểm định chất lượng bởi{' '}
												<span className="font-bold">Bộ TT {'&'} TT</span>, vì
												vậy chất lượng hàng hoá được{' '}
												<span className="font-bold">đảm bảo 100%</span> là hàng
												chuẩn, có nguồn gốc rõ ràng. Với hàng xách tay bán bên
												ngoài thị trường, giá tuy rẻ hơn nhưng chất lượng hoàn
												toàn không đảm bảo, không dán tem kiểm định của{' '}
												<span className="font-bold">Bộ TT {'&'} TT</span>
												cũng như tem của đơn vị nhập khẩu{' '}
												<span className="font-bold">(SellPhone)</span>, các linh
												kiện cấu thành thiết bị thường là những linh kiện kém
												chất lượng được mua về từ Trung Quốc theo số lượng lớn,
												các cửa hàng tự tiến hành lắp ghép bằng tay các linh
												kiện đó lại để tạo thành 1 sản phẩm sau đó bán cho người
												tiêu dùng.
											</Disclosure.Panel>
										</Transition>
									</>
								)}
							</Disclosure>
							<Disclosure as="div" className="mt-2">
								{({ open }) => (
									<>
										<Disclosure.Button className="focus:outline-none flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
											<span>
												3. Tôi sẽ được ưu đãi và khuyến mãi nào khi mua tại
												SellPhone ?
											</span>
											<Icon
												icon="akar-icons:chevron-up"
												className={`${
													open ? 'rotate-180 transform' : ''
												} h-5 w-5 text-purple-500`}
											/>
										</Disclosure.Button>
										<Transition
											enter="transition duration-100 ease-out"
											enterFrom="transform scale-95 opacity-0"
											enterTo="transform scale-100 opacity-100"
											leave="transition duration-75 ease-out"
											leaveFrom="transform scale-100 opacity-100"
											leaveTo="transform scale-95 opacity-0"
										>
											<Disclosure.Panel className="px-4 pt-4 pb-2 text-sm ">
												Tùy từng thời điểm, sản phẩm sẽ có những khuyến mại khác
												nhau. <span className="font-bold">FPT Shop</span> cam
												kết sẽ mang đến anh/chị những khuyến mại kèm những dịch
												vụ chăm sóc khách hàng tốt nhất. Để tìm hiểu về khuyến
												mại, anh / chị vui lòng gọi{' '}
												<span className="font-bold">1900 0000 (miễn phí)</span>{' '}
												để được tư vấn.
											</Disclosure.Panel>
										</Transition>
									</>
								)}
							</Disclosure>
							<Disclosure as="div" className="mt-2">
								{({ open }) => (
									<>
										<Disclosure.Button className="focus:outline-none flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
											<span>
												4. Những dịch vụ chăm sóc khách hàng của SellPhone là
												gì?
											</span>
											<Icon
												icon="akar-icons:chevron-up"
												className={`${
													open ? 'rotate-180 transform' : ''
												} h-5 w-5 text-purple-500`}
											/>
										</Disclosure.Button>
										<Transition
											enter="transition duration-100 ease-out"
											enterFrom="transform scale-95 opacity-0"
											enterTo="transform scale-100 opacity-100"
											leave="transition duration-75 ease-out"
											leaveFrom="transform scale-100 opacity-100"
											leaveTo="transform scale-95 opacity-0"
										>
											<Disclosure.Panel className="px-4 pt-4 pb-2 text-sm ">
												Sản phẩm có lỗi phần cứng thuộc phạm vi bảo hành sẽ được
												hưởng chính sách 1 đổi 1 trong vòng 01 tháng kể từ ngày
												mua máy; từ tháng thứ 02 đến tháng thứ 12, sản phẩm sẽ
												được bảo hành theo đúng chính sách của Hãng Apple. Miễn
												phí cài đặt ứng dụng/ game và bảo dưỡng trong quá trình
												sử dụng
											</Disclosure.Panel>
										</Transition>
									</>
								)}
							</Disclosure>
							<Disclosure as="div" className="mt-2">
								{({ open }) => (
									<>
										<Disclosure.Button className="focus:outline-none flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
											<span>
												5. SellPhone có giao hàng tại nhà không? Chất lượng sản
												phẩm có thay đổi không?
											</span>
											<Icon
												icon="akar-icons:chevron-up"
												className={`${
													open ? 'rotate-180 transform' : ''
												} h-5 w-5 text-purple-500`}
											/>
										</Disclosure.Button>
										<Transition
											enter="transition duration-100 ease-out"
											enterFrom="transform scale-95 opacity-0"
											enterTo="transform scale-100 opacity-100"
											leave="transition duration-75 ease-out"
											leaveFrom="transform scale-100 opacity-100"
											leaveTo="transform scale-95 opacity-0"
										>
											<Disclosure.Panel className="px-4 pt-4 pb-2 text-sm ">
												SellPhone giao hàng miễn phí trên toàn quốc, cam kết
												giao hàng trong 60 phút. Và chất lượng hoàn toàn đảm
												bảo, 100% hàng chính hãng - nguyên seal khi đến tận tay
												Anh/ chị. Anh/chị có thể ấn nút{' '}
												<span className="font-bold">Mua Ngay</span> hoặc{' '}
												<span className="font-bold">
													gọi số tổng đài 1900 0000 để được hỗ trợ
												</span>
											</Disclosure.Panel>
										</Transition>
									</>
								)}
							</Disclosure>
							<Disclosure as="div" className="mt-2">
								{({ open }) => (
									<>
										<Disclosure.Button className="focus:outline-none flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
											<span>6. Tôi muốn kiểm tra Imei máy?</span>
											<Icon
												icon="akar-icons:chevron-up"
												className={`${
													open ? 'rotate-180 transform' : ''
												} h-5 w-5 text-purple-500`}
											/>
										</Disclosure.Button>
										<Transition
											enter="transition duration-100 ease-out"
											enterFrom="transform scale-95 opacity-0"
											enterTo="transform scale-100 opacity-100"
											leave="transition duration-75 ease-out"
											leaveFrom="transform scale-100 opacity-100"
											leaveTo="transform scale-95 opacity-0"
										>
											<Disclosure.Panel className="px-4 pt-4 pb-2 text-sm ">
												<p>
													Để tìm IMEI của sản phẩm Apple mà bạn đang sử dụng hãy
													làm theo các bước sau nhé.
												</p>
												<p>
													<span className="font-bold">Bước 1:</span> Từ màn hình
													menu vào{' '}
													<span className="font-bold">Cài đặt (Settings)</span>
												</p>
												<Image
													src="/images/support/iphone1.jpg"
													width={320}
													height={569}
													alt="Imei 1"
												/>
												<p>
													<span className="font-bold">Bước 2:</span> Khi có giao
													diện màn hình{' '}
													<span className="font-bold">Cài đặt</span> chọn{' '}
													<span className="font-bold">
														Cài đặt chung (General)
													</span>
												</p>
												<Image
													src="/images/support/iphone2.jpg"
													width={320}
													height={569}
													alt="Imei 2"
												/>
												<p>
													<span className="font-bold">Bước 3:</span> Sau khi
													chọn
													<span className="font-bold">
														Cài đặt chung
													</span> chọn{' '}
													<span className="font-bold">Giới thiệu (About)</span>
												</p>
												<Image
													src="/images/support/iphone3.jpg"
													width={320}
													height={569}
													alt="Imei 3"
												/>
												<p>
													<span className="font-bold">Bước 4:</span> Kéo xuống
													dưới và tìm ô <span className="font-bold">IMEI</span>
												</p>
												<Image
													src="/images/support/iphone4.jpg"
													width={320}
													height={569}
													alt="Imei 4"
												/>
												<p>
													Sau khi tìm được mã IMEI sản phẩm, bạn hãy vào đây để
													kiểm tra hàng Apple chính hãng và thời gian bảo hành
													của máy nhé!
												</p>
											</Disclosure.Panel>
										</Transition>
									</>
								)}
							</Disclosure>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Support;
