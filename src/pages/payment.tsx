import MainLayout from '@/components/Layouts/MainLayout';
import Router, { useRouter } from 'next/router';
import React, { useEffect } from 'react';

function payment() {
	const router = useRouter();
	const { orderId, resultCode }: any = router.query;
	useEffect(() => {
		if (!orderId) {
			Router.push('/');
		}
	}, []);
	console.log(router.query);
	console.log(orderId, resultCode);
	return (
		<MainLayout>
			{resultCode == 0 ? (
				<div>Thanh toán cho đơn hàng {orderId} thành công</div>
			) : (
				<div>Thanh toán cho đơn hàng {orderId} thất bại</div>
			)}
		</MainLayout>
	);
}

export default payment;
