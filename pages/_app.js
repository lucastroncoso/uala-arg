import '../styles/globals.css';
import '../styles/backgrounds.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AppContextProvider } from '../store/context';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Head>
        <title>Ualá</title>
      </Head>
      <Component {...pageProps} />
    </AppContextProvider>
  );
}

export default MyApp;
