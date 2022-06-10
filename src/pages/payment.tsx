import MainLayout from '@/components/Layouts/MainLayout'
import { useRouter } from 'next/router'
import React from 'react'

function payment() {
  const router = useRouter();
  console.log(router.query);
  const { orderId, resultCode}: any = router.query;
  console.log(orderId, resultCode);
  return (
    <MainLayout>
      {resultCode == 0 ? (
        <div>Thanh toán cho đơn hàng {orderId} thành công</div>
      ): (
        <div>Thanh toán cho đơn hàng {orderId} thất bại</div>
      )}
    </MainLayout>
  )
}

export default payment