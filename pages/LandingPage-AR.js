import Head from 'next/head';
import C01Navigation from '../components/C01-Navigation/C01Navigation';
import Hero from '../components/Hero/Hero';
import C06CardsGrid from '../components/C06-CardsGrid/C06CardsGrid';
import pageContent from '../data/SiteMXContent.json';
import { useAppContext } from '../store/context';
import DownloadAppModal from '../components/Modal/DownloadAppModal/DownloadAppModal';
import VideoSection from '../components/VideoSection/VideoSection';
import YoutubeModal from '../components/Modal/YoutubeModal/YoutubeModal';
import Footer from '../components/Footer/Footer';

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
        <VideoSection />
        <C06CardsGrid content={pageContent[locale].cardsGrid} />
        <Footer content={pageContent[locale].footer} />
        <DownloadAppModal content={pageContent[locale].downloadApp} />
        <YoutubeModal />
      </main>
    </>
  );
}
