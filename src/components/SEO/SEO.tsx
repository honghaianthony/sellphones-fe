import { DefaultSeo } from 'next-seo';

const SEO = () => {
	return (
		<DefaultSeo
			title="SellPhone"
			description="Website đặt mua điện thoại SellPhone"
			openGraph={{
				type: 'website',
				url: 'http://locahost:3000/',
				site_name: 'SellPhone',
				images: [
					{
						url: '/images/logo.png',
						width: 460,
						height: 460,
						alt: 'Site image',
					},
				],
			}}
		/>
	);
};

export default SEO;
