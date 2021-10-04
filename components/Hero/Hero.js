import React, { useRef, useCallback } from 'react';
import styles from './Hero.module.scss';
import PropTypes from 'prop-types';
import HEROBG from '/public/hero_bkg.jpg';
import BlockWrapper from '../BlockWrapper/BlockWrapper';
import { useAppContext } from '../../store/context';
import DownloadAppButton from '../DownloadAppButton/DownloadAppButton';

const Hero = ({ content }) => {
  const { setDownloadModalActiveState } = useAppContext();

  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <img src={HEROBG.src} />
      </div>
      <BlockWrapper>
        <h1 className={styles.title}>{content.title}</h1>
        <p className={styles.paragraph}>{content.paragraph}</p>
        <DownloadAppButton copy={content.buttonCopy} />
      </BlockWrapper>
    </section>
  );
};

Hero.propTypes = {
  content: PropTypes.object.isRequired,
};

export default Hero;
