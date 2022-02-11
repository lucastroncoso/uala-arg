import React, { useEffect } from 'react';
import C01Navigation from './home/C01-Navigation/C01Navigation';
import Footer from './home/Footer/Footer';
import { useAppContext } from '../store/context';
import pageContent from '../data/SiteARContent.json';
import Head from "next/head"
import DownloadAppModal from './home/Modal/DownloadAppModal/DownloadAppModal';

export default function Container(props) {
  const { locale, setRegion } = useAppContext();

  useEffect(() => {
    setRegion('ar');
  }, []);

  return (
    <>
      <Head>
        {props.head}
      </Head>
      <div>
        {props.nav && <C01Navigation content={pageContent[locale].navbar} />}
        {props.children}
        {props.footer && (
          props.banner 
          ? <Footer content={pageContent[locale].footer} banner />
          : <Footer content={pageContent[locale].footer} />
        )}
        {props.nav && <DownloadAppModal content={pageContent[locale].downloadApp} />}
      </div>
    </>
  );
}
