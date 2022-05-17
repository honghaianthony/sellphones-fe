import { CartItem } from "../CardDetail";

const BuyModal = () => {
  return (
		<div className="container px-32">
			<div className="bg-white rounded-2xl">
				<div className="p-4 font-bold text-xl">Đặt mua sản phẩm</div>
				<hr />
				<CartItem />
				<hr />
				<div className="p-8">
					<div className="font-bold text-xl">Thông tin khánh hàng</div>
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
				<button className="bg-red-600 text-white p-4 text-2xl rounded-xl">
					Hoàn tất đặt hàng
				</button>
			</div>
		</div>
	);
}

export default BuyModal;