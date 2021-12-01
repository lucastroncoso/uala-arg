import React, { useEffect } from 'react';
import C01Navigation from './home/C01-Navigation/C01Navigation';
import Footer from './home/Footer/Footer';
import { useAppContext } from '../store/context';
import pageContent from '../data/SiteARContent.json';



export default function Container(props) {
  const { locale, setRegion } = useAppContext();

  useEffect(() => {
    setRegion('ar');
  }, []);

  return (
    <div>
      {props.nav && <C01Navigation content={pageContent[locale].navbar} />}
      { props.children}
      {props.footer && <Footer content={pageContent[locale].footer} />}
    </div>

  );
}
