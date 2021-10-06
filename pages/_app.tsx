import type { AppProps } from 'next/app';
import MainLayout from '../layout';
import Head from 'next/head';
// Style__tailwind-ui
import '@material-tailwind/react/tailwind.css';
// Style__Material
import '@material-tailwind/react/tailwind.css';
// Style__Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Style__Swiper
import 'swiper/scss';
import 'swiper/scss/autoplay';
import 'swiper/scss/lazy';
// Style__Me
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<MainLayout>
			<Head>
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Мое резюме</title>
				<link
					rel="stylesheet"
					href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
				/>
				<link
					href="https://fonts.googleapis.com/icon?family=Material+Icons"
					rel="stylesheet"
				/>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
					integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
					crossOrigin="anonymous"
				/>
			</Head>
			<Component {...pageProps} />
		</MainLayout>
	);
}
export default MyApp;
