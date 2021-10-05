import React, { useEffect } from 'react';
import styles from './CardsBackgroundSection.module.scss';
import PropTypes from 'prop-types';
import BlockWrapper from '../BlockWrapper/BlockWrapper';
import useIsMobile from '../utils/hooks/useIsMobile';
import useScrollTrigger from '../utils/hooks/useScrollTrigger';
import gsap from 'gsap';

const CardsBackgroundSection = ({ content }) => {
  const viewport = useIsMobile(480) ? 'mobile' : 'desktop';
  const [sectionRef, childrenSelector] = useScrollTrigger();

  useEffect(() => {
    if (!sectionRef || !sectionRef.current) return;
    const cards = childrenSelector('[data-animation="background-card"]');

    cards.forEach((card, index) => {
      gsap.timeline(
        { scrollTrigger: { trigger: card, start: '0% 65%' } }
      ).fromTo(card,
        { x: index % 2 ? 150 : -150, transformOrigin: '50% 20%', opacity: 0 },
        { duration: 0.65, x: 0, ease: 'Power4.InOut', opacity: 1 },
      );
    });
  }, []);

  return (
    <section className={styles.cardsBackgroundSection} ref={sectionRef}>
      <BlockWrapper customClass={[styles.blockWrapper]}>
        {content.map((card, cardIndex) => {
          return <a className={styles.card} href={card.url}
            key={`card-${cardIndex}`} data-animation="background-card"
          >
            <img src={`/assets/images/cardImages/${card.image}-${viewport}.jpg`}
              alt={card.image} className={styles.backgroundImg} />
            <h3 className={styles.title}>{card.title}</h3>
            <span className={styles.ctaCopy}>{card.ctaCopy}</span>
          </a>
        })}
      </BlockWrapper>
    </section>
  )
};

CardsBackgroundSection.propTypes = {
  content: PropTypes.array.isRequired,
}

export default CardsBackgroundSection;
