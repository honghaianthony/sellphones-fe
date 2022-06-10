import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { Sidebar } from '@/components/Sidebar';
import Image from 'next/image';
import React from 'react';
import { PageSEO } from '@/components/SEO';

const Support = () => {
	return (
		<>
			<PageSEO
				href="/support/installment-policy"
				name="Chính sách trả góp tại SellPhone"
			/>
			<Navbar />
			<div className="flex flex-col lg:flex-row bg-gray-100">
				<Sidebar />
				<div className="my-5 lg:my-20 mx-14 xl:mr-72 xl:w-1/2">
					<h3 className="font-semibold text-2xl mb-3">
						Chính sách trả góp tại SellPhone
					</h3>
					<p className="font-bold text-orange-500 mb-3">
						Hiện nay SellPhone có chính sách trả góp các sản phẩm 0%. Muốn biết
						thêm thông tin chi tiết xin vui lòng liên hệ với chúng tôi.
					</p>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Support;
