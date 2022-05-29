import React, { useState } from 'react';
import Image from 'next/image';

const UserDropdown = () => {
	const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);

	const openDropdownPopover = () => {
		setDropdownPopoverShow(true);
	};
	const closeDropdownPopover = () => {
		setDropdownPopoverShow(false);
	};
	return (
		<>
			<a
				className="text-blueGray-500 block"
				href="#pablo"
				onClick={(e) => {
					e.preventDefault();
					dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
				}}
			>
				<div className="items-center flex flex-col">
					<span className="w-12 h-12 text-sm text-white bg-slate-200 inline-flex items-center justify-center rounded-full">
						<Image
							alt="Team1"
							className="w-full rounded-full align-middle border-none shadow-lg"
							src="/images/product/avatar.png"
							width={800}
							height={800}
						/>
					</span>
					<div
						className={
							(dropdownPopoverShow ? 'block absolute mt-12 mr-8 ' : 'hidden ') +
							'bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48'
						}
					>
						<a
							href="#pablo"
							className={
								'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700'
							}
							onClick={(e) => e.preventDefault()}
						>
							Quản lý tài khoản
						</a>
						<a
							href="#pablo"
							className={
								'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700'
							}
							onClick={(e) => e.preventDefault()}
						>
							Thông tin tài khoản
						</a>

						<div className="h-0 my-2 border border-solid border-slate-100" />
						<a
							href="#pablo"
							className={
								'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700'
							}
							onClick={(e) => e.preventDefault()}
						>
							Đăng xuất
						</a>
					</div>
				</div>
			</a>
		</>
	);
};

export default UserDropdown;
