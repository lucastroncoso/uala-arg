import React, { useRef, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import PropTypes from 'prop-types';
import BlockWrapper from '../BlockWrapper/BlockWrapper';
import ACardIcon from '../A-CardIcon/ACardIcon';
import styles from './StepsSection.module.scss';
import useIsMobile from '../utils/hooks/useIsMobile';
import useScrollTrigger from '../utils/hooks/useScrollTrigger';
import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}
const StepCard = ({ content }) => {
  return (
    <li className={styles.cardWrapper} data-animation="list-item">
      <ACardIcon iconName={content.icon} className={styles.icon} />
      <h5 className={styles.number}>0{content.index + 1}.</h5>
      <p>{content.copy}</p>
    </li>
  );
};

const StepsSection = ({ content }) => {
  const isMobile = useIsMobile(768);
  const [emblaRef] = useEmblaCarousel();
  const [sectionRef, childrenSelector, createTL] = useScrollTrigger();
  const desktopAnimation = (tl) => {
    tl.fromTo(
      childrenSelector('[data-animation="progress-line"]'),
      { scaleX: 0, transformOrigin: '0% 50%' },
      { scaleX: 1, duration: 2, ease: 'Power2.easeOut' },
      0,
    )
      .fromTo(
        childrenSelector('[data-animation="list-item"]'),
        { scaleY: 0, transformOrigin: '0% 35%', opacity: 1 },
        { duration: 0.75, scaleY: 1, stagger: 0.25, ease: 'back.out(1.25)', opacity: 1 },
        0,
      )
      .fromTo(
        childrenSelector('[data-animation="title"]'),
        { scaleY: 0, transformOrigin: '0% 100%' },
        { scaleY: 1, duration: 0.3, ease: 'Power4.Out' },
        '-=1.5',
      );
  };

  const mobileAnimation = (tl) => {
    tl.fromTo(
      sectionRef.current,
      { scaleX: 0, transformOrigin: '0% 50%' },
      { scaleX: 1, duration: 2, ease: 'Power2.easeOut' },
      0,
    );
  };
  useEffect(() => {
    if (!sectionRef || !sectionRef.current) return;

    createTL({ once: true });
    isMobile ? mobileAnimation(createTL()) : desktopAnimation(createTL());
  }, []);

  return (
    <section className={styles.stepsSection} ref={sectionRef}>
      <BlockWrapper>
        <h3 data-animation="title" className={styles.title}>
          {content.title}
        </h3>
        <div className={styles.carouselContainer} ref={isMobile ? emblaRef : null}>
          <ol className={styles.listWrapper}>
            {content.stepsItems.map((item, index) => (
              <StepCard content={{ ...item, index }} key={`step-card-${index}`} />
            ))}
          </ol>
          <span data-animation="progress-line" className={styles.progress} />
        </div>
      </BlockWrapper>
    </section>
  );
};

StepsSection.propTypes = {
  content: PropTypes.object.isRequired,
};

export default StepsSection;
