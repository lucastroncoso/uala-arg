import React, { useEffect } from 'react';
import styles from './Hero.module.scss';
import PropTypes from 'prop-types';
import BlockWrapper from '../BlockWrapper/BlockWrapper';
import DownloadAppButton from '../DownloadAppButton/DownloadAppButton';
import useScrollTrigger from '../utils/hooks/useScrollTrigger';
import gsap from 'gsap';
import classNames from 'classnames';
import { useAppContext } from '../../store/context';
import { TextPlugin } from 'gsap/dist/TextPlugin';
import useIsMobile from '../utils/hooks/useIsMobile';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(TextPlugin);
}

const Hero = ({ content }) => {
  const [sectionRef, childrenSelector] = useScrollTrigger();
  const { region } = useAppContext();
  const regionAr = region === 'ar';
  const isMobile = useIsMobile(768);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 2, yoyo: true });
    const firstPopupElement = childrenSelector('[data-animation="popup-1"]');
    const secondPopupElement = childrenSelector('[data-animation="popup-2"]');
    const cardElement = childrenSelector('[data-animation="floating-card"]');
    const cycleContainer = childrenSelector('[data-animation="cycle-container"]');
    const wordsToCycle = content.wordCycle;

    tl.fromTo(
      firstPopupElement,
      { scale: 0.5, autoAlpha: 0 },
      {
        scale: 1,
        autoAlpha: 1,
        ease: 'back.out',
        transformOrigin: '75% 50%',
        duration: 0.5,
      },
      1,
    ).fromTo(
      secondPopupElement,
      { scale: 0.5, autoAlpha: 0 },
      {
        scale: 1,
        autoAlpha: 1,
        ease: 'back.out',
        transformOrigin: '75% 63%',
        duration: 0.5,
      },
      '+=0',
    );

    const wordCycleTL = gsap.timeline({ repeat: -1 });
    wordsToCycle.forEach((word) => {
      let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
      tl.to(cycleContainer, { duration: 1, text: word, ease: 'slow (0.7, 0.4, false)' });
      wordCycleTL.add(tl);
    });

    const CardFloatTl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      yoyoDelay: 0.5,
      onRepeat: () => {
        CardFloatTl.timeScale(1.5);
      },
      onStart: () => {
        CardFloatTl.timeScale(1.75);
      },
    });
    CardFloatTl.fromTo(
      cardElement,
      { y: -20, x: -4, rotate: 1 },
      { rotate: -1, x: 2, duration: isMobile ? 8 : 5, y: 20, ease: 'sine.inOut' },
      0,
    );
  }, [isMobile]);

  return (
    <section
      className={classNames([styles.hero, regionAr ? styles.regionAr : null])}
      ref={sectionRef}
    >
      <div className={styles.background}>
        <img
          src={content.background[0].src}
          alt={content.background[0].alt}
          className={styles.backgroundImage}
        />
        <span className={styles.backgroundImage}>
          <img
            data-animation="floating-card"
            src={content.background[1].src}
            alt={content.background[1].alt}
          />
        </span>
        <span className={styles.popupNotification}>
          <img data-animation="popup-1" src={content.notificationsSrc[0]} />
        </span>
        <span className={styles.popupNotification}>
          <img data-animation="popup-2" src={content.notificationsSrc[1]} />
        </span>
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
        <h1 className={styles.title}>
          {content.titleFirstLine}
          <span className={styles.wordCycle}>
            <span data-animation="cycle-container" />
          </span>
          <br />
          {content.titleSecondLine}
        </h1>
        <p className={styles.paragraph}>{content.paragraph} </p>
        <DownloadAppButton isStyled>{content.buttonCopy}</DownloadAppButton>
      </BlockWrapper>
    </section>
  );
};

Hero.propTypes = {
  content: PropTypes.object.isRequired,
};

export default Hero;
