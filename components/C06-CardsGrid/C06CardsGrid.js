import React from 'react';
import styles from './C06CardsGrid.module.scss';
import PropTypes from 'prop-types';
import BlockWrapper from '../BlockWrapper/BlockWrapper';
import MHorizontalCard from '../M-HorizontalCard/MHorizontalCard';

const C06CardsGrid = ({ content }) => {
  return (
    <section className={styles.cardsGrid}>
      <BlockWrapper>
        <h2 className={styles.mainTitle}>{content.title}</h2>
        <div className={styles.cardsWrapper}>
          {content.cards.map((card, cardIndex) => {
            return <MHorizontalCard content={card} isTitleColorBlue={true}
              customClass={[styles.customClass, styles.card]} key={`card-${cardIndex}`} />;
          })}
        </div>
      </BlockWrapper>
    </section>
  )
};

C06CardsGrid.propTypes = {
  content: PropTypes.object,
}

export default C06CardsGrid;
