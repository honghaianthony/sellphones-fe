/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			'cdn.discordapp.com',
			'media.discordapp.net',
			'firebasestorage.googleapis.com',
		],
	},
};

module.exports = nextConfig;
