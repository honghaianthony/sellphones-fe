const plugin = require('tailwindcss/plugin');

module.exports = {
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				josefin: ['Josefin Sans', 'sans-serif'],
			},
			colors: {
				yellow: {
					50: '#ffc107',
				},
				gray: {
					10: '#bfbfbf',
				},
			},
		},
	},
	plugins: [
		function ({ addVariant }) {
			addVariant('child', '& > *');
			addVariant('child-hover', '& > *:hover');
		},
	],
};
