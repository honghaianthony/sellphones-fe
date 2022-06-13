import React, { Children, useState } from 'react';
import { toast } from 'react-toastify';

interface PopupModalProps {
	show: Boolean;
	setShow: Function;
  title: String;
  children: any
}
function PopupModal(props: PopupModalProps) {
	return (
		<>
			{props.show ? (
				<>
					<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
						<div className="relative w-96 my-6 mx-auto max-w-3xl">
							<div className="z-50">
								<div className="relative p-4 w-full max-w-md h-full md:h-auto">
									<div className="relative bg-white rounded-lg shadow ">
										<button
											type="button"
											className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
											onClick={() => {
												props.setShow(false);
											}}
										>
											<svg
												className="w-5 h-5"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
													clipRule="evenodd"
												></path>
											</svg>
										</button>
										<div className="py-6 px-6 lg:px-8">
											<h3 className="mb-4 text-xl font-medium text-gray-900 ">
												{props.title}
											</h3>
											{props.children}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
				</>
			) : null}
		</>
	);
}

export default PopupModal;
