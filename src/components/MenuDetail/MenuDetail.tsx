import * as React from 'react';
import Image from 'next/image';

export interface IMenuDetailProps {
	title: string;
	image: string;
	id: number;
}

export default function MenuDetail(props: IMenuDetailProps) {
	return (
		<div
			className="flex flex-col bg-white rounded items-center justify-center text-center py-3 hover:bg-yellow-400 cursor-pointer"
			key={props.id}
		>
			<div className="w-20 h-20 rounded-full bg-gray-300 mx-auto py-3">
				<Image src={props.image} width={60} height={60} alt={props.title} />
			</div>
			<div className="mx-auto py-3 text-xl font-semibold">
				<span>{props.title}</span>
			</div>
		</div>
	);
}
