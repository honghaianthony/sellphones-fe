import MainLayout from '@/components/Layouts/MainLayout';
import Router, { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { updatePaymentMethod } from '@/pages/api/orderApi'

function payment() {
	const updatePayment = async () => {
		await updatePaymentMethod({idOrder: orderId, method: 'Thanh toán MOMO', status: 1})
	}
	const router = useRouter();
	const { orderId, resultCode }: any = router.query;
	useEffect(() => {
		if (!orderId) {
			Router.push('/');
		} else {
			if(resultCode == 0 ) {
				updatePayment();
			}
		}
	}, []);
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
