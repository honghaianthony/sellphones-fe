import React from 'react';

// components

import { CardSettings } from '@/components/CardDetail';
import { CardProfile } from '@/components/CardDetail';

// layout for page

import Admin from '@/components/Layouts/AdminLayout';

export default function Settings() {
	return (
		<Admin>
			<div className="flex flex-wrap mt-32">
				<div className="w-full lg:w-8/12 px-4">
					<CardSettings />
				</div>
				<div className="w-full lg:w-4/12 px-4">
					<CardProfile />
				</div>
			</div>
		</Admin>
	);
}

Settings.layout = Admin;
