import React, { useState, useEffect } from 'react';
import type { NextPage, GetServerSideProps } from 'next';
import { Input } from '@nextui-org/react';
// import Tiptap from '@/components/TipTap';
import Select from 'react-select';
import { toast } from 'react-toastify';
import { getCategories } from '@/pages/api/categoryApi';
import {
	addProduct,
	getProductInfoById,
	updateProduct,
	getAllProducts,
} from '@/pages/api/productApi';
import { uploadFile, deleteFile } from '@/firebase/util';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/router';
import Admin from '@/components/Layouts/AdminLayout';
import {
	getSpecificationDetail,
	getSpecificationDetailById,
	updateSpecificationDetail,
} from '@/pages/api/specificationApi';

const UpdateSpecification: NextPage = () => {
	const router = useRouter();
	const { slug } = router.query;

	const [product, setProduct] = useState([]);
	const [defaultValue, setDefaultValue] = useState();
	const [quantity, setQuantity] = useState();
	const [storage, setStorage] = useState();
	const [price, setPrice] = useState();
	const [color, setColor] = useState();

	const buildDataProduct = (data: any) => {
		let result: any = [];

		if (data && data.length > 0) {
			data.map((item: any) => {
				let object: any = {};
				object.label = item.name;
				object.value = item._id;
				result.push(object);
			});
		}
		return result;
	};

	const buildDataProduct2 = (data: any) => {
		let object: any = {};
		object.label = data.name;
		object.value = data._id;

		return object;
	};

	useEffect(() => {
		const asyncFetchDailyData = async () => {
			const fetchData: any = await getSpecificationDetailById(slug);
			const getAllProductsInfo: any = await getAllProducts();

			const findPhone = getAllProductsInfo.find((item: any, index: any) => {
				return item._id === fetchData.productId;
			});

			setDefaultValue(buildDataProduct2(findPhone));
		};

		asyncFetchDailyData();
	}, [slug]);

	useEffect(() => {
		const asyncFetchDailyData = async () => {
			const fetchData: any = await getSpecificationDetailById(slug);

			setQuantity(fetchData.quantity);
		};

		asyncFetchDailyData();
	}, [slug]);

	useEffect(() => {
		const asyncFetchDailyData = async () => {
			const fetchData: any = await getSpecificationDetailById(slug);

			setStorage(fetchData.quantity);
		};

		asyncFetchDailyData();
	}, [slug]);

	useEffect(() => {
		const asyncFetchDailyData = async () => {
			const fetchData: any = await getSpecificationDetailById(slug);

			setPrice(fetchData.price);
		};

		asyncFetchDailyData();
	}, [slug]);

	useEffect(() => {
		const asyncFetchDailyData = async () => {
			const fetchData: any = await getSpecificationDetailById(slug);

			setColor(fetchData.color);
		};

		asyncFetchDailyData();
	}, [slug]);

	useEffect(() => {
		const asyncFetchDailyData = async () => {
			const fetchData: any = await getAllProducts();

			setProduct(buildDataProduct(fetchData));
		};

		asyncFetchDailyData();
	}, []);

	console.log(defaultValue);

	const handleChangeSelect = (selectedOption: any) => {
		setDefaultValue(selectedOption);
	};

	const handleUpdateSpecification = async () => {
		const body = {
			_id: slug,
			productId: defaultValue.value,
			quantity: quantity,
			storage: storage,
			price: price,
			color: color,
		};
		const res = await updateSpecificationDetail(body);
		if (res) {
			toast.success('Cập nhật đặc tả thành công');
		} else {
			toast.error('Cập nhật đặc tả thất bại');
		}
	};
	return (
		<Admin>
			<div className="flex flex-wrap mt-32">
				{' '}
				<div className="w-full px-4">
					<div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-100 border-0">
						<div className="rounded-t bg-white mb-0 px-6 py-6">
							<div className="text-center flex justify-between">
								<h6 className="text-slate-700 text-xl font-bold">
									Cập nhật đặc tả
								</h6>
								<button
									className="bg-slate-700 active:bg-slate-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
									type="button"
									onClick={handleUpdateSpecification}
								>
									Cập nhật đặc tả
								</button>
							</div>
						</div>
						<div className="flex-auto px-4 lg:px-10 py-10 pt-0">
							<form>
								<h6 className="text-slate-400 text-sm mt-3 mb-10 font-bold uppercase">
									Thông tin đặc tả
								</h6>
								<div className="flex flex-wrap">
									<div className="w-full lg:w-6/12 px-4 mb-8">
										<div className="relative w-full mb-3 z-10">
											<Select
												value={defaultValue}
												onChange={handleChangeSelect}
												placeholder="Chọn sản phẩm"
											/>
										</div>
									</div>
									<div className="w-full lg:w-6/12 px-4 mb-8">
										<div className="relative w-full mb-3 z-0">
											<Input
												fullWidth
												clearable
												bordered
												color="default"
												labelPlaceholder="Số lượng"
												value={quantity}
												onChange={(e: any) => setQuantity(e.target.value)}
											/>
										</div>
									</div>
									<div className="w-full lg:w-6/12 px-4 mb-8">
										<div className="relative w-full mb-3 z-0">
											<Input
												fullWidth
												clearable
												bordered
												color="default"
												labelPlaceholder="Bộ nhớ (Storage)"
												value={storage}
												onChange={(e: any) => setStorage(e.target.value)}
											/>
										</div>
									</div>
									<div className="w-full lg:w-6/12 px-4 mb-8">
										<div className="relative w-full mb-3 z-0">
											<Input
												fullWidth
												clearable
												bordered
												color="default"
												labelPlaceholder="Giá cả"
												value={price}
												onChange={(e: any) => setPrice(e.target.value)}
											/>
										</div>
									</div>
									<div className="w-full lg:w-6/12 px-4">
										<div className="relative w-full mb-3 z-0">
											<Input
												fullWidth
												clearable
												bordered
												color="default"
												labelPlaceholder="Màu sắc"
												value={color}
												onChange={(e: any) => setColor(e.target.value)}
											/>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</Admin>
	);
};

export default UpdateSpecification;
