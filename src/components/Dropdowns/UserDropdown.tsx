import React, { useState } from 'react';
import Image from 'next/image';
import { useAuth, actions } from '@/context/AuthContext'
import Link from 'next/link';

interface IUserDropdownProps {
	avatar?: any;
	username?: any;
}

const UserDropdown = (props: IUserDropdownProps) => {
	const [authState, dispatch] = useAuth()
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
					<span className="w-8 h-8 text-sm text-white bg-slate-200 inline-flex items-center justify-center rounded-full">
						<Image
							alt="Team1"
							className="w-full rounded-full align-middle border-none shadow-lg"
							src={props.avatar || '/images/anonymous.png'}
							width={400}
							height={400}
						/>
					</span>
					<div
						className={
							(dropdownPopoverShow ? 'block absolute mt-12 mr-8 ' : 'hidden ') +
							'bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48'
						}
					>
						<button
							className={
								'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700 text-left'
							}
							onClick={(e) => e.preventDefault()}
						>
							Quản lý tài khoản
						</button>
						<button
							className={
								'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700 text-left'
							}
							onClick={(e) => e.preventDefault()}
						>
							Thông tin tài khoản
						</button>
						{authState.role === 'ROLE_ADMIN' && (
							<Link href={'/admin/dashboard'}>
								<a
									className={
										'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700 text-left'
									}
								>
									Trang quản trị
								</a>
							</Link>
						)}
						{(authState.role === 'ROLE_STAFF' || authState.role === 'ROLE_ADMIN') && (
							<Link href={'/employee/overview'}>
								<a
									className={
										'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700 text-left'
									}
								>
									Trang nhân viên
								</a>
							</Link>
						)}

						<div className="h-0 my-2 border border-solid border-slate-100" />
						<button
							className={
								'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700 text-left'
							}
							onClick={(e) => {
								e.preventDefault();
								dispatch(actions.logout());
							}}
						>
							Đăng xuất
						</button>
					</div>
				</div>
			</a>
		</>
	);
};

export default UserDropdown;
