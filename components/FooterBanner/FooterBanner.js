import React, { useEffect, useCallback } from 'react';
import styles from './FooterBanner.module.scss';
import Image from 'next/image';
import PropTypes from 'prop-types';
import BlockWrapper from '../BlockWrapper/BlockWrapper';
import IMAGE from '../../public/assets/images/banner_adquisicion.png';
import gsap from 'gsap';
import useScrollTrigger from '../utils/hooks/useScrollTrigger';
import { useAppContext } from '../../store/context';

const FooterBanner = ({ content }) => {
  const [sectionRef, childrenSelector, createTL] = useScrollTrigger();
  const { setDownloadModalActiveState } = useAppContext();

  const onDownloadButtonClick = useCallback(() => {
    setDownloadModalActiveState(true);
  }, [setDownloadModalActiveState]);

  const desktopAnimation = (tl) => {
    tl.fromTo(
      childrenSelector('[data-animation="bubble"]'),
      { scale: 0 },
      { scale: 1, ease: 'Power2.out', stagger: 0.2 },
      0,
    )
      .fromTo(
        childrenSelector('[data-animation="product"]'),
        { y: '100%' },
        { y: 0, ease: 'Power1.out' },
        0,
      )
      .fromTo(
        childrenSelector('[data-animation="copy"]'),
        { x: 20, autoAlpha: 0 },
        { x: 0, autoAlpha: 1, duration: 0.5, ease: 'Power2.easeOut' },
        '-=0.50',
      );
  };

  useEffect(() => {
    if (!sectionRef || !sectionRef.current) return;

    const bubbles = childrenSelector('[data-animation="bubble"]');
    const bubblesTimeline = gsap.timeline({ paused: true });
    const mainTimeline = createTL({ once: true, start: '0% 70%' });
    desktopAnimation(mainTimeline);
    mainTimeline.then(bubblesTimeline.play());

    bubblesTimeline.to(
      bubbles,
      {
        duration: 20,
        y: -100,
        stagger: {
          each: gsap.utils.random(2, 4),
          from: 'random',
          repeat: -1,
          yoyo: true,
          ease: 'Power1.Out',
          yoyoEase: 'Power1.Out',
        },
      },
      0,
    );
  }, []);

  return (
    <button className={styles.footerBanner} ref={sectionRef} onClick={onDownloadButtonClick}>
      <div className={styles.background}>
        <span data-animation="bubble" className={styles.circle} />
        <span data-animation="bubble" className={styles.circle} />
        <span data-animation="bubble" className={styles.circle} />
        <span data-animation="bubble" className={styles.circle} />
      </div>
      <BlockWrapper customClass={[styles.footerWrapper]}>
        <div data-animation="copy">
          <h5 className={styles.title}>{content.title}</h5>
          <p className={styles.copy} dangerouslySetInnerHTML={{ __html: content.copy }} />
        </div>
        <div className={styles.image} data-animation="product">
          <Image src={IMAGE} width={409} height={362} />
        </div>
      </BlockWrapper>
    </button>
  );
};

FooterBanner.propTypes = {
  content: PropTypes.object.isRequired,
};

export default FooterBanner;
