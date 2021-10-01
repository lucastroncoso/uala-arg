import React from 'react';
import styles from './C06CardsGridSection.module.scss';
import PropTypes from 'prop-types';
import BlockWrapper from '../BlockWrapper/BlockWrapper';
import MHorizontalCard from '../M-HorizontalCard/MHorizontalCard';

const C06CardsGridSection = ({ content }) => {
  return (
    <section className={styles.cardsGridSection}>
      <BlockWrapper>
        <h2 className={styles.mainTitle}>{content.title}</h2>
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