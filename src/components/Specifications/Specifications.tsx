import React from 'react';
import { Icon } from '@iconify/react';

const Specifications = (props: any) => {
	return (
		<div className="container max-w-2xl bg-[#f8f9fa] h-32 rounded-lg py-2">
			<div className="flex items-center">
				<Icon icon="bx:chip" className="mx-3" />
				<span className="text-[#6c757d] text-sm">{props.processor}</span>
			</div>
			<div className="my-3 flex">
				<div className="flex items-center mr-2">
					<Icon icon="cil:screen-smartphone" className="mx-3" />
					<span className="text-[#6c757d] text-sm">
						Màn hình: {props.screen}
					</span>
				</div>
				<div className="flex items-center">
					<Icon icon="gg:smartphone-ram" className="mr-3" />
					<span className="text-[#6c757d] text-sm flex items-center">
						{props.ram} <p className="mx-2">GB</p>
					</span>
				</div>
			</div>
			<div className="flex items-center">
				<Icon icon="ri:phone-camera-fill" className="mx-3" />
				<span className="text-[#6c757d] text-sm">{props.backCamera}</span>
			</div>
		</div>
	);
};

export default Specifications;
