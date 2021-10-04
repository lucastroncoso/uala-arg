import '../styles/globals.css';
import { AppContextProvider } from '../store/context';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  );
}

export default MyApp;
