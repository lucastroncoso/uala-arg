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
const StepsCard = ({ content }) => {
  return (
    <>
      <li className={styles.stepsCard}>
        <span className={styles.cardDot} />
        <div className={styles.cardWrapper} data-animation="list-item">
          <ACardIcon iconName={content.icon} className={styles.icon} />
          <h5 className={styles.number}>0{content.index + 1}.</h5>
          <p>{content.copy}</p>
        </div>
      </li>
    </>
  );
};

const StepsSection = ({ content }) => {
  const isMobile = useIsMobile(768);
  const [emblaRef] = useEmblaCarousel();
  const [sectionRef, childrenSelector, createTL] = useScrollTrigger();

  useEffect(() => {
    if (!sectionRef || !sectionRef.current) return;
    const cardsElArray = childrenSelector('[data-animation="list-item"]');
    const progressLineEl = childrenSelector('[data-animation="progress-line"]');
    const tl = createTL({ once: true, start: '0% 50%' });
    gsap.set(cardsElArray, { transformOrigin: '50% 35%' });
    gsap.set(progressLineEl, { scaleX: 0, transformOrigin: '0% 50%' });

    tl.fromTo(
      childrenSelector('[data-animation="title"]'),
      { scaleY: 0, transformOrigin: '0% 100%' },
      { scaleY: 1, duration: 0.3, ease: 'Power4.Out' },
      0,
    )
      .addLabel('step1', '+=0')
      .fromTo(
        cardsElArray[0],
        { scale: 0 },
        {
          duration: 0.5,
          scale: 1,
          ease: 'Sine.easeInOut',
        },
        'step1',
      )
      .to(progressLineEl, { scaleX: '+=34%', duration: 1, ease: 'Sine.easeInOut' }, 'step1+=0.25')
      .addLabel('step2', '+=0')
      .fromTo(
        cardsElArray[1],
        { scale: 0 },
        {
          duration: 0.5,
          scale: 1,
          ease: 'Sine.easeInOut',
        },
        'step2',
      )
      .to(progressLineEl, { scaleX: '+=34%', duration: 1, ease: 'Sine.easeInOut' }, 'step2+=0.25')
      .addLabel('step3', '+=0')
      .fromTo(
        cardsElArray[2],
        { scale: 0 },
        {
          duration: 0.5,
          scale: 1,
          ease: 'Sine.easeInOut',
        },
        'step3',
      )
      .to(progressLineEl, { scaleX: '+=32%', duration: 1, ease: 'Sine.easeInOut' }, 'step3+=0.25')
      .addLabel('step4', '+=0')
      .fromTo(
        cardsElArray[3],
        { scale: 0 },
        {
          duration: 0.5,
          scale: 1,
          ease: 'Sine.easeInOut',
        },
        'step4',
      );
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
              <StepsCard content={{ ...item, index }} key={`step-card-${index}`} />
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
