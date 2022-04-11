import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import Image from 'next/image';

const Slider = () => {
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
		setCurrentSlide(
			currentSlide === slideLength - 1 ? 0 : currentSlide + 1
		);
	};

	const prevSlide = () => {
		setCurrentSlide(
			currentSlide === 0 ? slideLength - 1 : currentSlide - 1
		);
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
		<div className="w-1/2 h-80 relative">
			<div className="flex">
				<Icon
					icon="ooui:previous-ltr"
					className="bg-zinc-50 text-black w-7 h-14 absolute cursor-pointer z-50 top-1/2 left-44 invisible lg:visible hover:bg-black hover:text-white"
					onClick={prevSlide}
				/>
				<Icon
					icon="ooui:previous-rtl"
					className="bg-zinc-50 text-black w-7 h-14 absolute cursor-pointer z-50 top-1/2 right-0 invisible lg:visible hover:bg-black hover:text-white"
					onClick={nextSlide}
				/>
			</div>

			{sliderData.map((slide, index) => {
				return (
					<div
						className={
							index === currentSlide
								? 'absolute top-0 my-10 px-5 md:mx-32 items-center w-full h-full ease-in-out duration-500 opacity-100 translate-x-0'
								: 'absolute top-0 my-10 px-5 md:mx-32 items-center w-full h-full opacity-0 -translate-x-1/2 ease-in-out duration-500'
						}
						key={index}
					>
						{index === currentSlide && (
							<>
								<Image
									src={slide.image}
									alt="Slider"
									width={830}
									height={300}
								/>
							</>
						)}
					</div>
				);
			})}
		</div>
	);
};

export default Slider;
