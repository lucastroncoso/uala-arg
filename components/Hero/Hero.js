import React, { useRef, useCallback } from 'react';
import styles from './Hero.module.scss';
import PropTypes from 'prop-types';
import HEROBG from '/public/hero_bkg.jpg';
import BlockWrapper from '../BlockWrapper/BlockWrapper';
import useGlobal from '../../store';

const Hero = ({ content }) => {
  const [{ locale }, { setLocale }] = useGlobal();

  const onDownloadButtonClick = useCallback(() => {
    setLocale('en');
  }, [setLocale]);

  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <img src={HEROBG.src} />
      </div>
      <BlockWrapper>
        <h1 className={styles.title}>{content.title}</h1>
        <p className={styles.paragraph}>{content.paragraph}</p>
        <button className={styles.button} onClick={onDownloadButtonClick}>
          {content.buttonCopy}
        </button>
      </BlockWrapper>
    </section>
  );
};

Hero.propTypes = {
  content: PropTypes.object,
};

export default Hero;
