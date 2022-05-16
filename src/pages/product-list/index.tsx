import { CardDetail } from "@/components/CardDetail";
import MainLayout from "@/components/Layouts/MainLayout";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const ProductList: NextPage = () => {
  return (
		<>
			<Head>
				<title>Tất cả sản phẩm</title>
			</Head>
			<MainLayout>
				<div className="flex flex-row pt-12 pl-4 lg:pl-40 md:px-10">
					<Link href="/">
						<a className="hover:text-lightBlue-600">Trang chủ</a>
					</Link>
					{' - '}
					<Link href="/product-list">
						<a className="hover:text-lightBlue-600">Điện thoại OPPO</a>
					</Link>
				</div>
				<div className="mb-4">
					<Image
						src="/images/slider/slide4.png"
						width={600}
						height={200}
						alt="oppo"
					/>
				</div>

				<div className="container px-16">
					<div className="flex flex-row w-full">
						<div className="mx-8">
							<div className="mb-3">
								<h3 className="font-bold mb-1">Mức giá</h3>
								<div>
									<input type="checkbox" />
									<label className="ml-1">Dưới 2 triệu</label>
								</div>
								<div>
									<input type="checkbox" />
									<label className="ml-1">Từ 2 - 4 triệu</label>
								</div>
								<div>
									<input type="checkbox" />
									<label className="ml-1">Từ 4 - 7 triệu</label>
								</div>
								<div>
									<input type="checkbox" />
									<label className="ml-1">Từ 7 - 13 triệu</label>
								</div>
								<div>
									<input type="checkbox" />
									<label className="ml-1">Trên 13 triệu</label>
								</div>
							</div>
							<div className="mb-3">
								<h3 className="font-bold mb-1">Dung lượng pin</h3>
								<div>
									<input type="checkbox" />
									<label className="ml-1">Tất cả</label>
								</div>
								<div>
									<input type="checkbox" />
									<label className="ml-1">Dưới 3000mAH</label>
								</div>
								<div>
									<input type="checkbox" />
									<label className="ml-1">Từ 3000 - 7000mAH</label>
								</div>
								<div>
									<input type="checkbox" />
									<label className="ml-1">Trên 7000mAH</label>
								</div>
							</div>
							<div className="mb-3">
								<h3 className="font-bold mb-1">Màn hình</h3>
								<div>
									<input type="checkbox" />
									<label className="ml-1">Tất cả</label>
								</div>
								<div>
									<input type="checkbox" />
									<label className="ml-1">Dưới 5 inch</label>
								</div>
								<div>
									<input type="checkbox" />
									<label className="ml-1">Từ 5 - 6 inch</label>
								</div>
								<div>
									<input type="checkbox" />
									<label className="ml-1">Trên 6 inch</label>
								</div>
							</div>
							<div className="mb-3">
								<h3 className="font-bold mb-1">Camera</h3>
								<div>
									<input type="checkbox" />
									<label className="ml-1">Tất cả</label>
								</div>
								<div>
									<input type="checkbox" />
									<label className="ml-1">Quay phim slow motion</label>
								</div>
								<div>
									<input type="checkbox" />
									<label className="ml-1">AI camera</label>
								</div>
								<div>
									<input type="checkbox" />
									<label className="ml-1">Chụp 3d</label>
								</div>
								<div>
									<input type="checkbox" />
									<label className="ml-1">Hiệu ứng làm đẹp</label>
								</div>
								<div>
									<input type="checkbox" />
									<label className="ml-1">Zoom quang học</label>
								</div>
							</div>
							<div className="mb-3">
								<h3 className="font-bold mb-1">Trả góp</h3>
								<div>
									<input type="checkbox" />
									<label className="ml-1">Tất cả</label>
								</div>
								<div>
									<input type="checkbox" />
									<label className="ml-1">Trả góp 0%</label>
								</div>
								<div>
									<input type="checkbox" />
									<label className="ml-1">Trả góp 0đ</label>
								</div>
								<div>
									<input type="checkbox" />
									<label className="ml-1">Trả góp 0%/0đ</label>
								</div>
							</div>
						</div>

						<div className="mx-4 w-full">
							<div className="w-full bg-white rounded mb-8">
								<p className="py-4 pl-6 font-bold">
									Dòng điện thoại OPPO (12 sản phẩm)
								</p>
							</div>
							<div className="w-full bg-white rounded mb-8">
								<p className="py-4 pl-6 font-bold">Dòng sản phẩm</p>
								<div className="grid grid-cols-1 gap-8 px-32 md:grid-cols-2 lg:grid-cols-3">
									<CardDetail />
									<CardDetail />
									<CardDetail />
								</div>
							</div>
							<div className="w-full bg-white rounded mb-8">
								<p className="py-4 pl-6 font-bold">Ưu tiên xem</p>
								<div className="grid grid-cols-1 gap-8 px-32 md:grid-cols-2 lg:grid-cols-3">
									<CardDetail />
									<CardDetail />
									<CardDetail />
								</div>
							</div>
						</div>
					</div>
				</div>
			</MainLayout>
		</>
	);
}

export default ProductList;