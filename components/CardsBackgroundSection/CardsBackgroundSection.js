import React from 'react';
import styles from './CardsBackgroundSection.module.scss';
import PropTypes from 'prop-types';
import BlockWrapper from '../BlockWrapper/BlockWrapper';
import useIsMobile from '../utils/hooks/useIsMobile';

const CardsBackgroundSection = ({ content }) => {
  const viewport = useIsMobile(768) ? 'mobile' : 'desktop';

  return (
    <section className={styles.cardsBackgroundSection}>
      <BlockWrapper customClass={[styles.blockWrapper]}>
        {content.map((card, cardIndex) => {
          return <a className={styles.card} href={card.url} key={`card-${cardIndex}`}>
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
