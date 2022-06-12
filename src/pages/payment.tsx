import MainLayout from '@/components/Layouts/MainLayout';
import Router, { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { updatePaymentMethod } from '@/pages/api/orderApi';
import Image from 'next/image';
import { Icon } from '@iconify/react';

function payment() {
	const updatePayment = async () => {
		await updatePaymentMethod({
			idOrder: orderId,
			method: 'Thanh toán MOMO',
			status: 1,
		});
	};
	const router = useRouter();
	const { orderId, resultCode }: any = router.query;
	useEffect(() => {
		if (!orderId) {
			Router.push('/');
		} else {
			if (resultCode == 0) {
				updatePayment();
			}
		}
	}, []);
	return (
		<MainLayout>
			{resultCode == 0 ? (
				<div className="container max-w-5xl mx-auto bg-white rounded-lg mt-12 my-5">
					<div className="flex mx-auto text-center justify-center py-5">
						<Image
							src="/images/home/success.png"
							width={500}
							height={657}
							alt="Thành công"
						/>
					</div>
					<div className="flex mx-auto text-center justify-center py-5">
						<span className="text-4xl font-bold">
							Thanh toán cho đơn hàng {orderId} thành công
							<Image
								src="/images/home/linhvatmm.png"
								width={110}
								height={139}
								alt="Thành công"
							/>
						</span>
					</div>
				</div>
			) : (
				<div className="container max-w-5xl mx-auto bg-white rounded-lg mt-12 my-5">
					<div className="flex mx-auto text-center justify-center py-5">
						<Image
							src="/images/home/fail.png"
							width={500}
							height={657}
							alt="Thất bại"
						/>
					</div>
					<div className="flex mx-auto text-center justify-center py-5">
						<span className="text-4xl font-bold">
							Thanh toán cho đơn hàng {orderId} thất bại
							<Image
								src="/images/home/linhvatmm.png"
								width={110}
								height={139}
								alt="Thất bại"
							/>
						</span>
					</div>
				</div>
			)}
		</MainLayout>
	);
}

export default payment;
