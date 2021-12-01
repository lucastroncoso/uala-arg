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
        <title>Uala Main Page AR</title>
        <meta name="description" content="Ualá" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
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
        <Footer content={pageContent[locale].footer} />
        <DownloadAppModal content={pageContent[locale].downloadApp} />
        <YoutubeModal />
      </main>
    </>
  );
}
