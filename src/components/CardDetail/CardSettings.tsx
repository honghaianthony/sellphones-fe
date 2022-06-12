import React, { useState, useEffect } from 'react';
import { Input } from '@nextui-org/react';
// import Tiptap from '@/components/TipTap';
import Select from 'react-select';
import { toast } from 'react-toastify';
import { getCategories } from '@/pages/api/categoryApi';
import { addProduct } from '@/pages/api/productApi';
import { uploadFile, deleteFile } from '../../firebase/util';
import { Icon } from '@iconify/react';
import { CKEditor } from 'ckeditor4-react';

// components

export default function CardSettings() {
	const [url, setUrl] = useState<any[]>([]);
	const [category, setCategory] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState();
	const [progress, setProgress] = useState(0);
	const [content, setContent] = useState('');
	const [name, setName] = useState();
	const [price, setPrice] = useState();
	const [weight, setWeight] = useState();
	const [processor, setProcessor] = useState();
	const [gpu, setGPU] = useState();
	const [ram, setRam] = useState();
	const [screen, setScreen] = useState();
	const [frontCamera, setFrontCamera] = useState();
	const [backCamera, setBackCamera] = useState();
	const [sensor, setSensor] = useState();
	const [security, setSecurity] = useState();
	const [connect, setConnect] = useState();
	const [battery, setBattery] = useState();
	const [charge, setCharge] = useState();
	const [operatingSystem, setOperatingSystem] = useState();
	const [accessories, setAccessories] = useState();
	const [sim, setSim] = useState();
	const [origin, setOrigin] = useState();
	const [releaseDate, setReleaseDate] = useState();

	function handleEditorChange({ editor }: any) {
		setContent(editor.getData());
	}

	const buildDataCategory = (data: any) => {
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

	useEffect(() => {
		const asyncFetchDailyData = async () => {
			const fetchData: any = await getCategories();

			setCategory(buildDataCategory(fetchData));
		};

		asyncFetchDailyData();
	}, []);

	const handleChange = (e: any) => {
		if (e.target.files[0]) {
			uploadFile(
				e.target.files[0],
				(progress: any) => {
					setProgress(progress);
				},
				(url1: any) => {
					setUrl([...url, url1]);
				}
			);
		}
	};
	const handleDelete = (url1: any) => {
		deleteFile(
			url1,
			() => {
				alert('Xóa thành công');
				const newUrl = url.filter((i) => i !== url1);
				setUrl(newUrl);
			},
			(error: any) => {
				alert(error);
			}
		);
	};

	const Images = () => {
		return (
			<div>
				<label
					htmlFor="image"
					className="uppercase text-slate-600 text-xs font-bold mb-2 w-fit"
				>
					<span className="bg-slate-700 active:bg-slate-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150">
						Nhấn để thêm ảnh
					</span>
					<input
						type="file"
						accept="image/*"
						hidden={true}
						id="image"
						onChange={handleChange}
					/>
				</label>
				<br />
				<div className="flex mt-5">
					{url.length > 0 &&
						url.map((i, index) => {
							return (
								<div className="relative w-fit p-1" key={index}>
									<img src={i} alt="firebase" />
									<Icon
										icon="ci:off-close"
										onClick={() => {
											handleDelete(i);
										}}
									/>
								</div>
							);
						})}
				</div>
			</div>
		);
	};

	const handleCreateProduct = async () => {
		const body = {
			categoryId: selectedCategory.value,
			name: name,
			image: url,
			price: price,
			description: content,
			weight: weight,
			processor: processor,
			gpu: gpu,
			ram: ram,
			screen: screen,
			frontCamera: frontCamera,
			backCamera: backCamera,
			sensor: sensor,
			security: security,
			connect: connect,
			battery: battery,
			charge: charge,
			operatingSystem: operatingSystem,
			accessories: accessories,
			sim: sim,
			origin: origin,
			releaseDate: releaseDate,
		};
		const res = await addProduct(body);
		if (res) {
			toast.success('Tạo sản phẩm thành công');
		} else {
			toast.error('Tạo sản phẩm thất bại');
		}
	};

	const handleChangeSelect = (selectedOption: any) => {
		setSelectedCategory(selectedOption);
	};

	return (
		<>
			<div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-100 border-0">
				<div className="rounded-t bg-white mb-0 px-6 py-6">
					<div className="text-center flex justify-between">
						<h6 className="text-slate-700 text-xl font-bold">Đăng sản phẩm</h6>
						<button
							className="bg-slate-700 active:bg-slate-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
							type="button"
							onClick={handleCreateProduct}
						>
							Đăng sản phẩm
						</button>
					</div>
				</div>
				<div className="flex-auto px-4 lg:px-10 py-10 pt-0">
					<form>
						<h6 className="text-slate-400 text-sm mt-3 mb-10 font-bold uppercase">
							Thông tin sản phẩm
						</h6>
						<div className="flex flex-wrap">
							<div className="w-full lg:w-6/12 px-4 mb-8">
								<div className="relative w-full mb-3 z-0">
									<Input
										fullWidth
										clearable
										bordered
										color="default"
										labelPlaceholder="Tên sản phẩm"
										value={name}
										onChange={(e: any) => setName(e.target.value)}
									/>
								</div>
							</div>
							<div className="w-full lg:w-6/12 px-4 mb-8 z-10">
								<div className="relative w-full mb-3 z-0">
									<Select
										options={category}
										value={selectedCategory}
										placeholder="Chọn hãng"
										onChange={handleChangeSelect}
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
										labelPlaceholder="Xuất xứ"
										value={origin}
										onChange={(e: any) => setOrigin(e.target.value)}
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
										labelPlaceholder="Thời gian ra mắt"
										value={releaseDate}
										onChange={(e: any) => setReleaseDate(e.target.value)}
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
										labelPlaceholder="Trọng lượng"
										value={weight}
										onChange={(e: any) => setWeight(e.target.value)}
									/>
								</div>
							</div>
						</div>

						<hr className="mt-6 border-b-1 border-slate-300" />

						<h6 className="text-slate-400 text-sm mt-3 mb-6 font-bold uppercase">
							Thông tin phần cứng
						</h6>
						<div className="flex flex-wrap">
							<div className="w-full lg:w-4/12 px-4 mb-8">
								<div className="relative w-full mb-3 z-0">
									<Input
										fullWidth
										clearable
										bordered
										color="default"
										className="z-0"
										value={screen}
										onChange={(e: any) => setScreen(e.target.value)}
										labelPlaceholder="Màn hình"
									/>
								</div>
							</div>
							<div className="w-full lg:w-4/12 px-4 mb-8">
								<div className="relative w-full mb-3 z-0">
									<Input
										fullWidth
										clearable
										bordered
										color="default"
										className="z-0"
										value={backCamera}
										onChange={(e: any) => setBackCamera(e.target.value)}
										labelPlaceholder="Camera sau"
									/>
								</div>
							</div>
							<div className="w-full lg:w-4/12 px-4 mb-8">
								<div className="relative w-full mb-3 z-0">
									<Input
										fullWidth
										clearable
										bordered
										color="default"
										className="z-0"
										value={frontCamera}
										onChange={(e: any) => setFrontCamera(e.target.value)}
										labelPlaceholder="Camera trước"
									/>
								</div>
							</div>
							<div className="w-full lg:w-4/12 px-4 mb-8">
								<div className="relative w-full mb-3 z-0">
									<Input
										fullWidth
										clearable
										bordered
										color="default"
										labelPlaceholder="Chip(Processor)"
										value={processor}
										onChange={(e: any) => setProcessor(e.target.value)}
									/>
								</div>
							</div>
							<div className="w-full lg:w-4/12 px-4 mb-8">
								<div className="relative w-full mb-3 z-0">
									<Input
										fullWidth
										clearable
										bordered
										color="default"
										labelPlaceholder="RAM"
										value={ram}
										onChange={(e: any) => setRam(e.target.value)}
									/>
								</div>
							</div>
							<div className="w-full lg:w-4/12 px-4 mb-8">
								<div className="relative w-full mb-3 z-0">
									<Input
										fullWidth
										clearable
										bordered
										color="default"
										labelPlaceholder="GPU"
										value={gpu}
										onChange={(e: any) => setGPU(e.target.value)}
									/>
								</div>
							</div>
							<div className="w-full lg:w-4/12 px-4 mb-8">
								<div className="relative w-full mb-3 z-0">
									<Input
										fullWidth
										clearable
										bordered
										color="default"
										labelPlaceholder="Dung lượng pin"
										value={battery}
										onChange={(e: any) => setBattery(e.target.value)}
									/>
								</div>
							</div>
							<div className="w-full lg:w-4/12 px-4 mb-8">
								<div className="relative w-full mb-3 z-0">
									<Input
										fullWidth
										clearable
										bordered
										color="default"
										labelPlaceholder="Hệ điều hành"
										value={operatingSystem}
										onChange={(e: any) => setOperatingSystem(e.target.value)}
									/>
								</div>
							</div>
							<div className="w-full lg:w-4/12 px-4 mb-8">
								<div className="relative w-full mb-3 z-0">
									<Input
										fullWidth
										clearable
										bordered
										color="default"
										labelPlaceholder="Cảm biến"
										value={sensor}
										onChange={(e: any) => setSensor(e.target.value)}
									/>
								</div>
							</div>
							<div className="w-full lg:w-4/12 px-4 mb-8">
								<div className="relative w-full mb-3 z-0">
									<Input
										fullWidth
										clearable
										bordered
										color="default"
										labelPlaceholder="Bảo mật"
										value={security}
										onChange={(e: any) => setSecurity(e.target.value)}
									/>
								</div>
							</div>
							<div className="w-full lg:w-4/12 px-4 mb-8">
								<div className="relative w-full mb-3 z-0">
									<Input
										fullWidth
										clearable
										bordered
										color="default"
										labelPlaceholder="Hỗ trợ kết nối"
										value={connect}
										onChange={(e: any) => setConnect(e.target.value)}
									/>
								</div>
							</div>
							<div className="w-full lg:w-4/12 px-4 mb-8">
								<div className="relative w-full mb-3 z-0">
									<Input
										fullWidth
										clearable
										bordered
										color="default"
										labelPlaceholder="Sạc"
										value={charge}
										onChange={(e: any) => setCharge(e.target.value)}
									/>
								</div>
							</div>
							<div className="w-full lg:w-4/12 px-4 mb-8">
								<div className="relative w-full mb-3 z-0">
									<Input
										fullWidth
										clearable
										bordered
										color="default"
										labelPlaceholder="Phụ kiện kèm theo"
										value={accessories}
										onChange={(e: any) => setAccessories(e.target.value)}
									/>
								</div>
							</div>
							<div className="w-full lg:w-4/12 px-4 mb-8">
								<div className="relative w-full mb-3 z-0">
									<Input
										fullWidth
										clearable
										bordered
										color="default"
										labelPlaceholder="SIM"
										value={sim}
										onChange={(e: any) => setSim(e.target.value)}
									/>
								</div>
							</div>
						</div>

						<hr className="mt-6 border-b-1 border-slate-300" />

						<h6 className="text-slate-400 text-sm mt-3 mb-6 font-bold uppercase">
							Mô tả sản phẩm
						</h6>
						<div className="flex flex-wrap">
							<div className="w-full lg:w-12/12 px-4">
								<div className="relative w-full mb-3">
									<label
										className="block uppercase text-slate-600 text-xs font-bold mb-2"
										htmlFor="grid-password"
									>
										Mô tả sản phẩm
									</label>
									<CKEditor
										config={{
											extraPlugins: `justify`,
										}}
										onChange={(editor: any) => {
											handleEditorChange(editor);
										}}
									/>
								</div>
							</div>
						</div>

						<hr className="mt-6 border-b-1 border-slate-300" />

						<div className="w-full px-4 mt-5">
							<Images />
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
