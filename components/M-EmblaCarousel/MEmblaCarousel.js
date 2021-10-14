import React, { useEffect } from 'react';
import styles from './MEmblaCarousel.module.scss';
import useScrollTrigger from '../utils/hooks/useScrollTrigger';
import PropTypes from 'prop-types';
import MCtaCard from '../M-CtaCard/MCtaCard';
import useEmblaCarousel from 'embla-carousel-react';

const MEmblaCarousel = ({ cards, wrapperStyle, cardStyle }) => {
  const [emblaRef] = useEmblaCarousel();
  const [sectionRef, childrenSelector, createTL] = useScrollTrigger();

  useEffect(() => {
    if (!sectionRef || !sectionRef.current) return;
    const ctaCards = childrenSelector('[data-animation="cta-cards"]');

    createTL({ once: true, start: '0% 65%' }).fromTo(
      ctaCards,
      { y: 100, transformOrigin: '50% 20%', opacity: 0 },
      { duration: 0.55, y: 0, stagger: 0.25, ease: 'power4.inOut', opacity: 1 },
      '-=0.5',
    );
  }, []);

  return (
    <div className={wrapperStyle ?? ''}
      ref={emblaRef}>
      <div className={styles.container} ref={sectionRef}>
        {cards.map((card, cardIndex) => {
          return <MCtaCard content={card}
            customClass={[styles.slide, cardStyle && [...cardStyle]]} key={`card-${cardIndex}`} />
        })}
      </div>
    </div>
  );
};

MEmblaCarousel.propTypes = {
  cards: PropTypes.array.isRequired,
  wrapperStyle: PropTypes.string,
  cardStyle: PropTypes.array
};

export default MEmblaCarousel;
