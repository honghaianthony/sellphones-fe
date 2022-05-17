import { BuyModal } from '@/components/BuyModal';
import { CartItem } from '@/components/CardDetail';
import MainLayout from '@/components/Layouts/MainLayout';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Icon } from '@iconify/react';

const Cart: NextPage = () => {
	return (
		<>
			<Head>
				<title>Giỏ hàng</title>
			</Head>
			<MainLayout>
				<div className="flex flex-row pt-12 pl-4 lg:pl-40 md:px-10 mb-4 items-center">
					<Link href="/">
						<a className="hover:text-lightBlue-600">Trang chủ</a>
					</Link>
					<Icon icon="ant-design:arrow-right-outlined" className="mx-3" />
					<Link href="/cart">
						<a className="hover:text-lightBlue-600">Giỏ hàng</a>
					</Link>
				</div>

				<BuyModal />
				{/* <div className="container px-32">
					<div className='bg-white rounded-2xl'>
            <div className='p-4 font-bold text-xl'>Đặt mua sản phẩm</div>
            <hr />
            <CartItem />
            <hr />
            <div className='p-8'>
              <div className='font-bold text-xl'>Thông tin khánh hàng</div>
              <div>Họ và tên: Nguyễn Văn A</div>
              <div>Giới tính: Nam</div>
              <div>Số điện thoại: 0123456789</div>
              <div>Địa chỉ: TP. Hồ Chí Minh</div>
              <div>Email: nguyenvana@gmail.com</div>
            </div>
            <hr />
            <div>
              <div>Tổng tiền: </div>
              <div>Giảm: </div>
              <div>Cần thanh toán: </div>
            </div>
            <button className='bg-red-600 text-white p-4 text-2xl rounded-xl'>Hoàn tất đặt hàng</button>
          </div>
				</div> */}
			</MainLayout>
		</>
	);
};

export default Cart;
