import React, { useEffect } from 'react';
import styles from './Hero.module.scss';
import PropTypes from 'prop-types';
import BlockWrapper from '../BlockWrapper/BlockWrapper';
import DownloadAppButton from '../DownloadAppButton/DownloadAppButton';
import useScrollTrigger from '../utils/hooks/useScrollTrigger';
import gsap from 'gsap';
import classNames from 'classnames';
import { useAppContext } from '../../../store/context';
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
    const cycleContainer2 = childrenSelector('[data-animation="cycle-container2"]');
    const wordsToCycle = content.wordCycle;

    tl.fromTo(
      firstPopupElement,
      { scale: 0.5, autoAlpha: 0 },
      {
        scale: 1,
        autoAlpha: 1,
        ease: 'back.out',
        transformOrigin: '62% 50%',
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
        transformOrigin: '60% 63%',
        duration: 0.5,
      },
      '+=0',
    );


    let tl2 = gsap.timeline({ repeat: 0, yoyo: false, repeatDelay: 2 })
    tl2.to(cycleContainer, { duration: 1, text: "El lado bueno", ease: 'slow (0.7, 0.4, false)' }).to(
      cycleContainer2, { duration: 1, text: "de tu plata", ease: 'slow (0.7, 0.4, false)' }
    )


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
  }, []);

  return (
    <section
      className={classNames([styles.hero, regionAr ? styles.regionAr : null])}
      ref={sectionRef}
    >
      <div className={styles.background}>
        <img src={content.background[0].src} className={styles.backgroundImage} />
        <span className={styles.popupNotification}>
          <img data-animation="popup-1" src={content.notificationsSrc[0]} />
        </span>
        <span className={styles.popupNotification}>
          <img data-animation="popup-2" src={content.notificationsSrc[1]} />
        </span>
        <span className={styles.backgroundImage}>
          <img
            data-animation="floating-card"
            src={content.background[1].src}
            alt={content.background[1].alt}
          />
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
        <div className="hidden w-full grid-cols-12 md:grid mt-36 justify-items-between">
          <h1 data-animation="cycle-container" className={styles.title + " col-span-6 title-1"}>

          </h1>
          <h1 data-animation="cycle-container2" className={styles.titleRight + " col-span-6 title-1 xl:pl-72 lg:pl-56"}></h1>
        </div>
        <div className="hidden pt-2 md:block">
          <DownloadAppButton
            dataLayer={{
              event: 'trackEvent',
              eventCategory: 'Home', 
              eventAction: 'Primera Pantalla', 
              eventLabel: 'Boton Descargar' 
            }}
            customClass={["text-blue-250", "rounded-full", "border-blue-250", "border-2", "px-10", "py-2", "text-xl", "hover:text-white", "hover:bg-blue-250", "focus:outline-none"]}>
            {content.buttonCopy}
          </DownloadAppButton>
        </div>

        <div className="w-10/12 mx-auto md:hidden ">
          <h1 data-animation="cycle-container" className={styles.title + " title-1"}></h1>
          <h1 data-animation="cycle-container2" className={styles.title + " title-1"}></h1>

          <p className={styles.paragraph}>{content.paragraph} </p>
          <DownloadAppButton isStyled>{content.buttonCopy}</DownloadAppButton>
        </div>

      </BlockWrapper>
    </section>
  );
};

Hero.propTypes = {
  content: PropTypes.object.isRequired,
};

export default Hero;
