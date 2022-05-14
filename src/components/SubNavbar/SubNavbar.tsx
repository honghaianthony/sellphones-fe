import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
const SubNavbar = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);
	return (
		<div className="sticky top-0 w-full bg-black flex-none">
			<nav className="max-w-7xl mx-auto py-3">
				<button
					className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
					type="button"
					onClick={() => setNavbarOpen(!navbarOpen)}
				>
					<Icon icon="fa:bars" className="text-white" />
				</button>
				<div
					className={
						'lg:flex flex-grow items-center bg-black lg:bg-opacity-0 lg:shadow-none lg:space-x-20 grid place-items-center' +
						(navbarOpen ? ' block rounded shadow-lg' : ' hidden')
					}
				>
					<Link href="/">
						<a className="flex space-x-3 items-center">
							<h5 className="text-lg font-medium text-white">Apple</h5>
						</a>
					</Link>
					<Link href="/">
						<a className="flex space-x-3 items-center">
							<h5 className="text-lg font-medium text-white">Samsung</h5>
						</a>
					</Link>
					<Link href="/">
						<a className="flex space-x-3 items-center">
							<h5 className="text-lg font-medium text-white">Oppo</h5>
						</a>
					</Link>
					<Link href="/">
						<a className="flex space-x-3 items-center">
							<h5 className="text-lg font-medium text-white">Vivo</h5>
						</a>
					</Link>
					<Link href="/">
						<a className="flex space-x-3 items-center">
							<h5 className="text-lg font-medium text-white">Xiaomi</h5>
						</a>
					</Link>
					<Link href="/">
						<a className="flex space-x-3 items-center">
							<h5 className="text-lg font-medium text-white">Nokia</h5>
						</a>
					</Link>
					<Link href="/">
						<a className="flex space-x-3 items-center">
							<h5 className="text-lg font-medium text-white">Realme</h5>
						</a>
					</Link>
					<Link href="/">
						<a className="flex space-x-3 items-center">
							<h5 className="text-lg font-medium text-white">Vsmart</h5>
						</a>
					</Link>
					<Link href="/">
						<a className="flex space-x-3 items-center">
							<h5 className="text-lg font-medium text-white">ASUS</h5>
						</a>
					</Link>
					<Link href="/">
						<a className="flex space-x-3 items-center">
							<h5 className="text-lg font-medium text-white">Hãng khác</h5>
						</a>
					</Link>
				</div>
			</nav>
		</div>
	);
};

export default SubNavbar;
