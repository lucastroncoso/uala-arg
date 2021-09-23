import Head from 'next/head';
import Hero from '../components/Hero/Hero';
import pageContent from '../data/SiteMXContent.json';
import { useAppContext } from '../store/context';
import DownloadAppModal from '../components/Modal/DownloadAppModal/DownloadAppModal';
import VideoSection from '../components/VideoSection/VideoSection';
import YoutubeModal from '../components/Modal/YoutubeModal/YoutubeModal';
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
        <Hero content={pageContent[locale].hero} />
        <VideoSection />
        <DownloadAppModal content={pageContent[locale].downloadApp} />
        <YoutubeModal />
      </main>
    </>
  );
}
