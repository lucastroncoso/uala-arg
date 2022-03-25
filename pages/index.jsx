import React, { useEffect } from 'react';
import Head from 'next/head';
import C01Navigation from '../components/home/C01-Navigation/C01Navigation';
import Hero from '../components/home/Hero/Hero';
import PartnersSection from '../components/home/PartnersSection/PartnersSection';
import pageContent from '../data/SiteARContent.json';
import { useAppContext } from '../store/context';
import DownloadAppModal from '../components/home/Modal/DownloadAppModal/DownloadAppModal';
import YoutubeModal from '../components/home/Modal/YoutubeModal/YoutubeModal';
import Footer from '../components/home/Footer/Footer';
import TextWithVideoSection from '../components/home/TextWithVideoSection/TextWithVideoSection';
import C06CardsGridSection from '../components/home/C06-CardsGridSection/C06CardsGridSection';
import CardsWithVideoSection from '../components/home/CardsWithVideoSection/CardsWithVideoSection';
import StepsSection from '../components/home/StepsSection/StepsSection';
import CardsBackgroundSection from '../components/home/CardsBackgroundSection/CardsBackgroundSection';

export default function MainPageAr() {
  const { locale, setRegion } = useAppContext();

  useEffect(() => {
    setRegion('ar');
  }, []);

  return (
    <>
      <Head>
        <title>Ualá - El Lado Bueno de tu Plata</title>
        <meta name="description" content="Una App y una Tarjeta Prepaga Mastercard Internacional para vos. Podés comprar, vender, invertir, pagar servicios, acceder a créditos y Mucho Más." />
        <link rel="alternate" hreflang="es-ar" href="https://www.uala.com.ar/" />
        <link rel="alternate" hreflang="es-mx" href="https://www.uala-abc.com.mx/" />
        <link rel="alternate" hreflang="es-co" href="https://www.uala.com.co/" />
        <link rel="alternate" hreflang="x-default" href=" https://www.uala.com.ar/" />
      </Head>
      <main>
        <C01Navigation content={pageContent[locale].navbar} />
        <Hero content={pageContent[locale].hero} />
        <CardsWithVideoSection content={pageContent[locale].cardsWithVideoSection} />
        <StepsSection content={pageContent[locale].stepsSection} />
        <PartnersSection content={pageContent[locale].partnersSection} />
        <CardsBackgroundSection content={pageContent[locale].cardsBackgroundSection} />
        <C06CardsGridSection content={pageContent[locale].cardsGridSection} />
        <TextWithVideoSection content={pageContent[locale].textWithVideoSection} />
        <Footer banner content={pageContent[locale].footer} />
        <DownloadAppModal content={pageContent[locale].downloadApp} />
        <YoutubeModal />
      </main>
    </>
  );
}
