import '../styles/globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import { AuthProvider } from '@/context/AuthContext';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<NextUIProvider>
			<AuthProvider>
				<Component {...pageProps} />
			</AuthProvider>
		</NextUIProvider>
	);
}

export default MyApp;
