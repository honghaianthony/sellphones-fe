import React from 'react';
import { Icon } from '@iconify/react';

const Specifications = () => {
	return (
		<div className="container max-w-2xl bg-[#f8f9fa] h-32 rounded-lg">
			<div className="flex items-center">
				<Icon icon="bx:chip" className="mx-3" />
				<span className="text-[#6c757d]">Snapdragon695 5G</span>
			</div>
			<div className="my-3 flex">
				<div className="flex items-center mr-3">
					<Icon icon="cil:screen-smartphone" className="mx-3" />
					<span className="text-[#6c757d]">Màn hình: 6.43 inch</span>
				</div>
				<div className="flex items-center">
					<Icon icon="gg:smartphone-ram" className="mx-3" />
					<span className="text-[#6c757d]">8 GB</span>
				</div>
			</div>
			<div className="flex items-center">
				<Icon icon="clarity:hard-disk-solid" className="mx-3" />
				<span className="text-[#6c757d]">128 GB</span>
			</div>
		</div>
	);
};

export default Specifications;
