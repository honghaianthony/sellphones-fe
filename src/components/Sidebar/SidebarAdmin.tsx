import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Icon } from '@iconify/react';

import { NotificationDropdown } from '@/components/Dropdowns';
import { UserDropdown } from '@/components/Dropdowns';
import Image from 'next/image';

export default function Sidebar() {
	const [collapseShow, setCollapseShow] = React.useState('hidden');
	const router = useRouter();
	return (
		<>
			<nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
				<div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
					{/* Toggler */}
					<button
						className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
						type="button"
						onClick={() => setCollapseShow('bg-white m-2 py-3 px-6')}
					>
						<Icon icon="fa:bars" />
					</button>
					{/* Brand */}
					<Link href="/">
						<a
							href="#pablo"
							className="md:block text-left md:pb-2 text-slate-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
						>
							<div className="flex flex-col child:mt-2">
								<span className="float-left">SellPhone</span>
								<span className="float-right ml-auto mr-0 text-red-600">
									Trang Admin
								</span>
							</div>
						</a>
					</Link>
					{/* User */}
					<ul className="md:hidden items-center flex flex-wrap list-none">
						<li className="inline-block relative">
							<NotificationDropdown />
						</li>
						<li className="inline-block relative">
							<UserDropdown />
						</li>
					</ul>
					{/* Collapse */}
					<div
						className={
							'md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded ' +
							collapseShow
						}
					>
						{/* Collapse header */}
						<div className="md:min-w-full md:hidden block pb-4 border-b border-solid border-slate-200 mb-10 ">
							<div className="flex flex-wrap">
								<div className="w-6/12">
									<Link href="/">
										<a
											href="#pablo"
											className="md:block text-left md:pb-2 text-slate-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
										>
											<div className="flex flex-col child:mt-2 items-center">
												<span className="float-left">SellPhone</span>
												<span className="float-right ml-auto mr-0 text-red-600">
													Trang Admin
												</span>
											</div>
										</a>
									</Link>
								</div>
								<div className="w-6/12 flex justify-end">
									<button
										type="button"
										className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
										onClick={() => setCollapseShow('hidden')}
									>
										<Icon icon="fa:close" />
									</button>
								</div>
							</div>
						</div>
						{/* Form */}
						<form className="mt-6 mb-4 md:hidden">
							<div className="mb-3 pt-0">
								<input
									type="text"
									placeholder="Search"
									className="px-3 py-2 h-12 border border-solid  border-slate-500 placeholder-slate-300 text-slate-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
								/>
							</div>
						</form>

						{/* Divider */}
						<hr className="my-4 md:min-w-full" />
						{/* Heading */}
						<h6 className="md:min-w-full text-slate-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
							Quản trị Admin
						</h6>
						{/* Navigation */}

						<ul className="md:flex-col md:min-w-full flex flex-col list-none z-10">
							<li className="items-center">
								<Link href="/admin/dashboard">
									<a
										href="#pablo"
										className={
											'text-xs uppercase py-3 font-bold block' +
											(router.pathname.indexOf('/admin/dashboard') !== -1
												? 'text-lightBlue-500 hover:text-lightBlue-600'
												: 'text-slate-700 hover:text-slate-500')
										}
									>
										<div className="flex">
											<Icon
												icon="ic:baseline-dashboard"
												className={
													'mr-2 text-sm flex' +
													(router.pathname.indexOf('/admin/dashboard') !== -1
														? 'opacity-75'
														: 'text-slate-300')
												}
											/>{' '}
											Tổng quan
										</div>
									</a>
								</Link>
							</li>

							<li className="items-center">
								<Link href="/admin/product-management">
									<a
										href="#pablo"
										className={
											'text-xs uppercase py-3 font-bold block ' +
											(router.pathname.indexOf('/admin/product-management') !==
											-1
												? 'text-lightBlue-500 hover:text-lightBlue-600'
												: 'text-slate-700 hover:text-slate-500')
										}
									>
										<div className="flex">
											<Icon
												icon="eos-icons:product-classes-outlined"
												className={
													'fas fa-tools mr-2 text-sm ' +
													(router.pathname.indexOf(
														'/admin/product-management'
													) !== -1
														? 'opacity-75'
														: 'text-slate-300')
												}
											/>{' '}
											Quản lý sản phẩm
										</div>
									</a>
								</Link>
							</li>

							<li className="items-center">
								<Link href="/admin/tables">
									<a
										href="#pablo"
										className={
											'text-xs uppercase py-3 font-bold block ' +
											(router.pathname.indexOf('/admin/tables') !== -1
												? 'text-lightBlue-500 hover:text-lightBlue-600'
												: 'text-slate-700 hover:text-slate-500')
										}
									>
										<div className="flex">
											<Icon
												icon="carbon:order-details"
												className={
													' mr-2 text-sm ' +
													(router.pathname.indexOf('/admin/tables') !== -1
														? 'opacity-75'
														: 'text-slate-300')
												}
											/>{' '}
											Đơn đặt hàng
										</div>
									</a>
								</Link>
							</li>

							<li className="items-center">
								<Link href="/admin/specification-management">
									<a
										href="#pablo"
										className={
											'text-xs uppercase py-3 font-bold block ' +
											(router.pathname.indexOf(
												'/admin/specification-management'
											) !== -1
												? 'text-lightBlue-500 hover:text-lightBlue-600'
												: 'text-slate-700 hover:text-slate-500')
										}
									>
										<div className="flex">
											<Icon
												icon="simple-line-icons:earphones"
												className={
													'mr-2 text-sm ' +
													(router.pathname.indexOf(
														'/admin/specification-management'
													) !== -1
														? 'opacity-75'
														: 'text-slate-300')
												}
											/>{' '}
											Quản lý đặc tả
										</div>
									</a>
								</Link>
							</li>
						</ul>

						{/* Divider */}
						<hr className="my-4 md:min-w-full" />
						{/* Heading
						<h6 className="md:min-w-full text-slate-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
							Auth Layout Pages
						</h6>
		
						<ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
							<li className="items-center">
								<Link href="/auth/login">
									<a
										href="#pablo"
										className="text-slate-700 hover:text-slate-500 text-xs uppercase py-3 font-bold block"
									>
										<div className="flex">
											<Icon
												icon="fa-solid:fingerprint"
												className="text-slate-400 mr-2 text-sm"
											/>{' '}
											Login
										</div>
									</a>
								</Link>
							</li>

							<li className="items-center">
								<Link href="/auth/register">
									<a
										href="#pablo"
										className="text-slate-700 hover:text-slate-500 text-xs uppercase py-3 font-bold block"
									>
										<div className="flex">
											<Icon
												icon="fa-solid:clipboard-list"
												className="text-slate-300 mr-2 text-sm"
											/>{' '}
											Register
										</div>
									</a>
								</Link>
							</li>
						</ul>

						<hr className="my-4 md:min-w-full" />
					
						<h6 className="md:min-w-full text-slate-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
							No Layout Pages
						</h6>
					

						<ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
							<li className="items-center">
								<Link href="/landing">
									<a
										href="#pablo"
										className="text-slate-700 hover:text-slate-500 text-xs uppercase py-3 font-bold block"
									>
										<div className="flex">
											<Icon
												icon="fa:newspaper-o"
												className="text-slate-400 mr-2 text-sm"
											/>{' '}
											Landing Page
										</div>
									</a>
								</Link>
							</li>

							<li className="items-center">
								<Link href="/profile">
									<a
										href="#pablo"
										className="text-slate-700 hover:text-slate-500 text-xs uppercase py-3 font-bold block"
									>
										<div className="flex">
											<Icon
												icon="fa:user-circle"
												className="text-slate-400 mr-2 text-sm"
											/>{' '}
											Profile Page
										</div>
									</a>
								</Link>
							</li>
						</ul>

			
						<hr className="my-4 md:min-w-full" />
			
						<h6 className="md:min-w-full text-slate-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
							Documentation
						</h6>
			
						<ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
							<li className="inline-flex">
								<a
									href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/colors/notus"
									rel="noreferrer"
									target="_blank"
									className="text-slate-700 hover:text-slate-500 text-sm block mb-4 no-underline font-semibold"
								>
									<div className="flex">
										<Icon
											icon="fa:paint-brush"
											className="mr-2 text-slate-300 text-base"
										/>
										Styles
									</div>
								</a>
							</li>

							<li className="inline-flex">
								<a
									href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus"
									rel="noreferrer"
									target="_blank"
									className="text-slate-700 hover:text-slate-500 text-sm block mb-4 no-underline font-semibold"
								>
									<div className="flex">
										<Icon
											icon="fa-brands:css3-alt"
											className="mr-2 text-slate-300 text-base"
										/>
										CSS Components
									</div>
								</a>
							</li>

							<li className="inline-flex">
								<a
									href="https://www.creative-tim.com/learning-lab/tailwind/angular/overview/notus"
									target="_blank"
									rel="noreferrer"
									className="text-slate-700 hover:text-slate-500 text-sm block mb-4 no-underline font-semibold"
								>
									<div className="flex">
										<Icon
											icon="fa-brands:angular"
											className="mr-2 text-slate-300 text-base"
										/>
										Angular
									</div>
								</a>
							</li>

							<li className="inline-flex">
								<a
									href="https://www.creative-tim.com/learning-lab/tailwind/js/overview/notus"
									target="_blank"
									rel="noreferrer"
									className="text-slate-700 hover:text-slate-500 text-sm block mb-4 no-underline font-semibold"
								>
									<div className="flex">
										<Icon
											icon="fa-brands:js"
											className="mr-2 text-slate-300 text-base"
										/>
										Javascript
									</div>
								</a>
							</li>

							<li className="inline-flex">
								<a
									href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus"
									target="_blank"
									rel="noreferrer"
									className="text-slate-700 hover:text-slate-500 text-sm block mb-4 no-underline font-semibold"
								>
									<div className="flex">
										<Icon
											icon="akar-icons:nextjs-fill"
											className="mr-2 text-slate-300 text-base"
										/>
										NextJS
									</div>
								</a>
							</li>

							<li className="inline-flex">
								<a
									href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus"
									target="_blank"
									rel="noreferrer"
									className="text-slate-700 hover:text-slate-500 text-sm block mb-4 no-underline font-semibold"
								>
									<div className="flex">
										<Icon
											icon="fa-brands:react"
											className="mr-2 text-slate-300 text-base"
										/>
										React
									</div>
								</a>
							</li>

							<li className="inline-flex">
								<a
									href="https://www.creative-tim.com/learning-lab/tailwind/svelte/overview/notus"
									target="_blank"
									rel="noreferrer"
									className="text-slate-700 hover:text-slate-500 text-sm block mb-4 no-underline font-semibold"
								>
									<div className="flex">
										<Icon
											icon="cib:svelte"
											className="mr-2 text-slate-300 text-base"
										/>
										Svelte
									</div>
								</a>
							</li>

							<li className="inline-flex">
								<a
									href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus"
									target="_blank"
									rel="noreferrer"
									className="text-slate-700 hover:text-slate-500 text-sm block mb-4 no-underline font-semibold"
								>
									<div className="flex">
										<Icon
											icon="fa-brands:vuejs"
											className="mr-2 text-slate-300 text-base"
										/>
										VueJS
									</div>
								</a>
							</li>
						</ul> */}
					</div>
				</div>
			</nav>
		</>
	);
}
