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
			<PageSEO href="/support/introduction" name="Giới thiệu về SellPhone" />
			<div className="flex flex-col lg:flex-row bg-gray-100">
				<Sidebar />
				<div className="my-5 lg:my-20 mx-14 xl:mr-72 xl:w-1/2">
					<h3 className="font-semibold text-2xl mb-3">
						Giới thiệu về SellPhone
					</h3>

					<p className="block mb-5">
						Chúng tôi là nhóm đồ án của môn Công nghệ Java. Trang web này được
						lập ra với mục đích học tập với các tính năng mà mình mong mong
						muốn. Hi vọng bạn có những phút giây thư giãn với trang web này.
					</p>
				</div>
			</div>
			<Footer />
		</MainLayout>
	);
};

export default Support;
