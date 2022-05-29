import React from 'react';

const TableDropdown = () => {
	// dropdown props
	const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);

	const openDropdownPopover = () => {
		setDropdownPopoverShow(true);
	};
	const closeDropdownPopover = () => {
		setDropdownPopoverShow(false);
	};
	return (
		<>
			<a
				className="text-slate-500 py-1 px-3"
				href="#pablo"
				onClick={(e) => {
					e.preventDefault();
					dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
				}}
			>
				<i className="fas fa-ellipsis-v"></i>
			</a>
			<div
				className={
					(dropdownPopoverShow ? 'block ' : 'hidden ') +
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
					Action
				</a>
				<a
					href="#pablo"
					className={
						'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700'
					}
					onClick={(e) => e.preventDefault()}
				>
					Another action
				</a>
				<a
					href="#pablo"
					className={
						'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700'
					}
					onClick={(e) => e.preventDefault()}
				>
					Something else here
				</a>
			</div>
		</>
	);
};

export default TableDropdown;
