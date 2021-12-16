import '../styles/globals.css';
import '../styles/backgrounds.css';
import { AppContextProvider } from '../store/context';

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  );
}

export default MyApp;
