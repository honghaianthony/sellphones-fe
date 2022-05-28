import React, { useState } from 'react';
import { Input } from '@nextui-org/react';
import Tiptap from '@/components/TipTap';

// components

export default function CardAccessory() {
	const [content, setContent] = useState('');
	return (
		<>
			<div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-100 border-0">
				<div className="rounded-t bg-white mb-0 px-6 py-6">
					<div className="text-center flex justify-between">
						<h6 className="text-slate-700 text-xl font-bold">Đăng phụ kiện</h6>
						<button
							className="bg-slate-700 active:bg-slate-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
							type="button"
						>
							Đăng phụ kiện
						</button>
					</div>
				</div>
				<div className="flex-auto px-4 lg:px-10 py-10 pt-0">
					<form>
						<h6 className="text-slate-400 text-sm mt-3 mb-10 font-bold uppercase">
							Thông tin phụ kiện
						</h6>
						<div className="flex flex-wrap">
							<div className="w-full lg:w-6/12 px-4 mb-8">
								<div className="relative w-full mb-3">
									<Input
										fullWidth
										clearable
										bordered
										color="default"
										labelPlaceholder="Tên sản phẩm"
									/>
								</div>
							</div>
							<div className="w-full lg:w-6/12 px-4">
								<div className="relative w-full mb-3">
									<Input
										fullWidth
										clearable
										bordered
										color="default"
										labelPlaceholder="Loại"
									/>
								</div>
							</div>
							<div className="w-full lg:w-6/12 px-4 mb-8">
								<div className="relative w-full mb-3">
									<Input
										fullWidth
										clearable
										bordered
										color="default"
										labelPlaceholder="Xuất xứ"
									/>
								</div>
							</div>
							<div className="w-full lg:w-6/12 px-4">
								<div className="relative w-full mb-3">
									<Input
										fullWidth
										clearable
										bordered
										color="default"
										labelPlaceholder="Dung lượng pin"
									/>
								</div>
							</div>
							<div className="w-full lg:w-6/12 px-4">
								<div className="relative w-full mb-3">
									<Input
										fullWidth
										clearable
										bordered
										color="default"
										labelPlaceholder="Thời gian bảo hành"
									/>
								</div>
							</div>
						</div>

						<hr className="mt-6 border-b-1 border-slate-300" />

						<h6 className="text-slate-400 text-sm mt-3 mb-6 font-bold uppercase">
							Khuyến mãi
						</h6>
						<div className="flex flex-wrap">
							<div className="w-full px-4 my-8">
								<div className="relative w-full mb-3">
									<Input
										fullWidth
										clearable
										bordered
										color="default"
										labelPlaceholder="Khuyến mãi 1 (nếu có)"
									/>
								</div>
							</div>

							<div className="w-full px-4 mb-8">
								<div className="relative w-full mb-3">
									<Input
										fullWidth
										clearable
										bordered
										color="default"
										labelPlaceholder="Khuyến mãi 2 (nếu có)"
									/>
								</div>
							</div>
							<div className="w-full px-4">
								<div className="relative w-full mb-3">
									<Input
										fullWidth
										clearable
										bordered
										color="default"
										labelPlaceholder="Khuyến mãi 3 (nếu có)"
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
									<Tiptap setContent={setContent} />
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
