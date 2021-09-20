import { useEffect } from 'react';
import Head from 'next/head';
import Hero from '../components/Hero/Hero';
import pageContent from '../data/SiteMXContent.json';
import useGlobal from '../store';

export default function MainPageAr() {
  const [{ locale }, { setLocale }] = useGlobal();

  //Para rendear de nuevo la pagina cuando el estado global cambia desde un componente hijo tuve que agregar esto.
  useEffect(() => {
    setLocale(locale);
  }, [locale]);

  return (
    <>
      <Head>
        <title>Uala Main Page AR</title>
        <meta name="description" content="Ualá" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <Hero content={pageContent[locale].hero} />
      </main>
    </>
  );
}
