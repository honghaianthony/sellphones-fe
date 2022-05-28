import React from 'react';

// components

import { CardSettings } from '@/components/CardDetail';
import { CardProfile } from '@/components/CardDetail';

// layout for page

import Admin from '@/components/Layouts/AdminLayout';

export default function ProductManagement() {
	return (
		<Admin>
			<div className="flex flex-wrap mt-32">
				<div className="w-full px-4">
					<CardSettings />
				</div>
			</div>
		</Admin>
	);
}
