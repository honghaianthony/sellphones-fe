import { NextSeo } from 'next-seo';

const PageSEO = ({ name, href }: { name: string; href: string }) => {
	const title = `${name} | SellPhone`;
	const url = `http:/localhost:3000/${href}`;
	return (
		<NextSeo
			title={title}
			openGraph={{
				title: title,
				url,
				site_name: 'SellPhone',
			}}
		/>
	);
};

export default PageSEO;
