import React, { useRef, useEffect } from 'react';
import styles from './FooterBanner.module.scss';
import Image from 'next/image';
import PropTypes from 'prop-types';
import BlockWrapper from '../BlockWrapper/BlockWrapper';
import IMAGE from '../../public/assets/images/banner_adquisicion.png';
import gsap from 'gsap';

const FooterBanner = ({ content }) => {
  const backgroundRef = useRef(null);

  useEffect(() => {
    if (!backgroundRef) return;
    const bubbles = Array.from(backgroundRef.current.children);
    const tl = gsap.timeline();

    tl.to(
      bubbles,
      {
        duration: 10,
        y: '-=40px',
        rotate: '360deg',
        stagger: {
          each: 1,
          from: 'center',
          grid: 'auto',
          repeat: -1,
          repeatDelay: 1,
          yoyo: true,
        },
      },
      0,
    );
  }, []);

  return (
    <section className={styles.footerBanner}>
      <div ref={backgroundRef} className={styles.background}>
        <span className={styles.circle} />
        <span className={styles.circle} />
        <span className={styles.circle} />
        <span className={styles.circle} />
      </div>
      <BlockWrapper customClass={[styles.footerWrapper]}>
        <h5 className={styles.title}>{content.title}</h5>
        <p className={styles.copy} dangerouslySetInnerHTML={{ __html: content.copy }} />
        <div className={styles.image}>
          <Image src={IMAGE} width={409} height={362} />
        </div>
      </BlockWrapper>
    </section>
  );
};

FooterBanner.propTypes = {
  content: PropTypes.object,
};

export default FooterBanner;
