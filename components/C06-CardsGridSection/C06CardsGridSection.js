import React, { useEffect } from 'react';
import styles from './C06CardsGridSection.module.scss';
import PropTypes from 'prop-types';
import BlockWrapper from '../BlockWrapper/BlockWrapper';
import MHorizontalCard from '../M-HorizontalCard/MHorizontalCard';
import useScrollTrigger from '../utils/hooks/useScrollTrigger';
import gsap from 'gsap';

const C06CardsGridSection = ({ content }) => {
  const [sectionRef, childrenSelector, createTL] = useScrollTrigger();

  useEffect(() => {
    if (!sectionRef || !sectionRef.current) return;

    const title = childrenSelector('[data-animation="title"]');
    const cards = childrenSelector('[data-animation="horizontal-cards"]');

    createTL({ once: true, start: '0% 70%' })
      .fromTo(title, { x: 200, opacity: 0 }, { x: 0, opacity: 1 }, 0);

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
    <section className={styles.cardsGridSection} ref={sectionRef}>
      <BlockWrapper>
        <h2 data-animation="title" className={styles.mainTitle}>{content.title}</h2>
        <div className={styles.cardsWrapper}>
          {content.cards.map((card, cardIndex) => {
            return <MHorizontalCard content={card} isTitleColorBlue={true}
              customClass={[styles.card]} key={`card-${cardIndex}`} />;
          })}
        </div>
      </BlockWrapper>
    </section>
  )
};

C06CardsGridSection.propTypes = {
  content: PropTypes.object.isRequired,
}

export default C06CardsGridSection;
