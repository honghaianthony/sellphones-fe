import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Slider from 'react-slick';

function SampleNextArrow(props: any) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{
				...style,
				display: 'block',
			}}
			onClick={onClick}
		>
			<Icon
				icon="akar-icons:chevron-right"
				className="bg-zinc-50 text-black w-8 h-14 absolute cursor-pointer hover:bg-black hover:text-white top-0 bottom-0 -ml-9"
			/>
		</div>
	);
}

function SamplePrevArrow(props: any) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{
				...style,
				display: 'block',
				zIndex: '10',
			}}
			onClick={onClick}
		>
			<Icon
				icon="akar-icons:chevron-left"
				className="bg-zinc-50 text-black w-8 h-14 absolute cursor-pointer hover:bg-black hover:text-white top-0 bottom-0 ml-6"
			/>
		</div>
	);
}

const Slide = () => {
	const sliderData = [
		{
			image: '/images/slider/slide1.png',
		},
		{
			image: '/images/slider/slide2.png',
		},
		{
			image: '/images/slider/slide4.png',
		},
		{
			image: '/images/slider/slide3.png',
		},
	];
	const [currentSlide, setCurrentSlide] = useState(0);
	const slideLength = sliderData.length;
	const autoScroll = true;
	let slideInterval = 0;
	let intervalTime = 5000;

	const nextSlide = () => {
		setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
	};

	const prevSlide = () => {
		setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
	};

	function autoSlide() {
		slideInterval = window.setInterval(nextSlide, intervalTime);
	}

	useEffect(() => {
		setCurrentSlide(0);
	}, []);

	useEffect(() => {
		if (autoScroll) {
			autoSlide();
		}
		return () => clearInterval(slideInterval);
	}, [currentSlide]);
	return (
		<div className="h-40 space-y-0.5 md:space-y-2">
			<div className="group relative">
				{/* <Icon
					icon="akar-icons:chevron-left"
					className="bg-zinc-50 text-black w-7 h-14 absolute cursor-pointer left-20 z-10 ml-4 mt-40 invisible lg:visible hover:bg-black hover:text-white top-0 bottom-0 "
					onClick={prevSlide}
				/> */}
				<div className="flex items-center md:p-2">
					{sliderData.map((slide, index) => {
						return (
							<div
								className={
									index === currentSlide
										? 'absolute top-0 my-10 px-5 items-center w-full h-full ease-in-out duration-500 opacity-100 translate-x-0'
										: 'absolute top-0 my-10 px-5 md:mx-16 items-center w-full h-full opacity-0 -translate-x-1/2 ease-in-out duration-500'
								}
								key={index}
							>
								{index === currentSlide && (
									<>
										<Image
											src={slide.image}
											alt="Slider"
											width={690}
											height={250}
											className="rounded-lg"
										/>
									</>
								)}
							</div>
						);
					})}
				</div>
				{/* <Icon
					icon="akar-icons:chevron-right"
					className="bg-zinc-50 text-black w-7 h-14 absolute cursor-pointer left-96 ml-96 z-10 mt-40 m-auto invisible lg:visible hover:bg-black hover:text-white top-0 bottom-0"
					onClick={nextSlide}
				/> */}
			</div>
		</div>
	);
};

export default Slide;
