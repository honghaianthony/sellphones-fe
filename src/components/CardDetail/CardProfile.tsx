import React from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';

// components

export default function CardProfile() {
	return (
		<>
			<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
				<div className="px-6">
					<div className="flex flex-wrap justify-center">
						<div className="w-full px-4 flex justify-center">
							<div className="relative">
								<Image
									alt="..."
									width={800}
									height={800}
									src="/images/product/avatar.png"
									className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-full"
								/>
							</div>
						</div>
						<div className="w-full px-4 text-center mt-20">
							<div className="flex justify-center py-4 lg:pt-4 pt-8">
								<div className="mr-4 p-3 text-center">
									<span className="text-xl font-bold block uppercase tracking-wide text-slate-600">
										22
									</span>
									<span className="text-sm text-slate-400">Friends</span>
								</div>
								<div className="mr-4 p-3 text-center">
									<span className="text-xl font-bold block uppercase tracking-wide text-slate-600">
										10
									</span>
									<span className="text-sm text-slate-400">Photos</span>
								</div>
								<div className="lg:mr-4 p-3 text-center">
									<span className="text-xl font-bold block uppercase tracking-wide text-slate-600">
										89
									</span>
									<span className="text-sm text-slate-400">Comments</span>
								</div>
							</div>
						</div>
					</div>
					<div className="text-center mt-12">
						<h3 className="text-xl font-semibold leading-normal mb-2 text-slate-700 mb-2">
							Jenna Stones
						</h3>
						<div className="text-sm leading-normal mt-0 mb-2 text-slate-400 font-bold uppercase">
							<Icon
								icon="fontisto:map-marker-alt"
								className="mr-2 text-lg text-slate-400"
							/>
							Los Angeles, California
						</div>
						<div className="mb-2 text-slate-600 mt-10">
							<Icon
								icon="bi:briefcase-fill"
								className="mr-2 text-lg text-slate-400"
							/>
							Solution Manager - Creative Tim Officer
						</div>
						<div className="mb-2 text-slate-600">
							<Icon
								icon="fa-solid:university"
								className="mr-2 text-lg text-slate-400"
							/>
							University of Computer Science
						</div>
					</div>
					<div className="mt-10 py-10 border-t border-gray-200 text-center">
						<div className="flex flex-wrap justify-center">
							<div className="w-full lg:w-9/12 px-4">
								<p className="mb-4 text-lg leading-relaxed text-slate-700">
									An artist of considerable range, Jenna the name taken by
									Melbourne-raised, Brooklyn-based Nick Murphy writes, performs
									and records all of his own music, giving it a warm, intimate
									feel with a solid groove structure. An artist of considerable
									range.
								</p>
								<a
									href="#pablo"
									className="font-normal text-blue-500"
									onClick={(e) => e.preventDefault()}
								>
									Show more
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
