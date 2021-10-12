import Head from 'next/head';
import C01Navigation from '../components/C01-Navigation/C01Navigation';
import Hero from '../components/Hero/Hero';
import PartnersSection from '../components/PartnersSection/PartnersSection';
import pageContent from '../data/SiteARContent.json';
import { useAppContext } from '../store/context';
import DownloadAppModal from '../components/Modal/DownloadAppModal/DownloadAppModal';
import YoutubeModal from '../components/Modal/YoutubeModal/YoutubeModal';
import Footer from '../components/Footer/Footer';
import TextWithVideoSection from '../components/TextWithVideoSection/TextWithVideoSection';
import C06CardsGridSection from '../components/C06-CardsGridSection/C06CardsGridSection';
import CardsWithVideoSection from '../components/CardsWithVideoSection/CardsWithVideoSection';
import StepsSection from '../components/StepsSection/StepsSection';
import CardsBackgroundSection from '../components/CardsBackgroundSection/CardsBackgroundSection';

export default function MainPageAr() {
  const { locale } = useAppContext();

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
