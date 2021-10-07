import React, { useRef, useCallback } from 'react';
import styles from './Hero.module.scss';
import PropTypes from 'prop-types';
import HEROBG from '/public/hero_bkg.jpg';
import BlockWrapper from '../BlockWrapper/BlockWrapper';
import DownloadAppButton from '../DownloadAppButton/DownloadAppButton';

const Hero = ({ content }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <img src={HEROBG.src} className={styles.video} />
        <div className={styles.svgBottom}>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1920 400"
            preserveAspectRatio="none"
          >
            <path
              fill="#EEF3FF"
              d="M1293.4,215.6c-341.7,0-589.5-105-653.9-138.6S482.6,0,369.2,0S76.5,75.1,0,190.9c0,23.8,0,47.2,0,69.1
            c0,78.1,0,138.2,0,138.2v1.8h1920v-1.8V260V45.5C1920,45.5,1635,215.6,1293.4,215.6z"
            />
          </svg>
        </div>
      </div>
      <BlockWrapper customClass={[styles.heroContent]}>
        <h1 className={styles.title}>{content.title}</h1>
        <p className={styles.paragraph}>{content.paragraph} </p>
        <DownloadAppButton copy={content.buttonCopy} />
      </BlockWrapper>
    </section>
  );
};

Hero.propTypes = {
  content: PropTypes.object.isRequired,
};

export default Hero;
