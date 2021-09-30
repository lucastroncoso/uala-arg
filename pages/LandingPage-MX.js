import Head from 'next/head';
import C01Navigation from '../components/C01-Navigation/C01Navigation';
import Hero from '../components/Hero/Hero';
import pageContent from '../data/SiteMXContent.json';
import { useAppContext } from '../store/context';
import DownloadAppModal from '../components/Modal/DownloadAppModal/DownloadAppModal';
import CardsWithVideoSection from '../components/CardsWithVideoSection/CardsWithVideoSection';
import C06CardsGridSection from '../components/C06-CardsGridSection/C06CardsGridSection';
import YoutubeModal from '../components/Modal/YoutubeModal/YoutubeModal';
import Footer from '../components/Footer/Footer';
import PartnersSection from '../components/PartnersSection/PartnersSection';
import StepsSection from '../components/StepsSection/StepsSection';
import CardsBackgroundSection from '../components/CardsBackgroundSection/CardsBackgroundSection';
import TextWithImageSection from '../components/TextWithImageSection/TextWithImageSection';

export default function MainPageMX() {
  const { locale } = useAppContext();

  return (
    <>
      <Head>
        <title>Uala Main Page MX</title>
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
        <CardsBackgroundSection content={pageContent[locale].cardsBackgroundSection} />
        <StepsSection content={pageContent[locale].stepsSection} />
        <PartnersSection content={pageContent[locale].partnersSection} />
        <C06CardsGridSection content={pageContent[locale].cardsGridSection} />
        <TextWithImageSection content={pageContent[locale].textWithImageSection} />
        <Footer content={pageContent[locale].footer} />
        <DownloadAppModal content={pageContent[locale].downloadApp} />
        <YoutubeModal />
      </main>
    </>
  );
}
