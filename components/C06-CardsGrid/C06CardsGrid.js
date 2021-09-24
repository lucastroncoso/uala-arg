import React from 'react';
import styles from './C06CardsGrid.module.scss';
import PropTypes from 'prop-types';
import BlockWrapper from '../BlockWrapper/BlockWrapper';
import MHorizontalCard from '../M-HorizontalCard/MHorizontalCard';

const C06CardsGrid = ({ content }) => {
  return (
    <section className={styles.cardsGrid}>
      <BlockWrapper customClass={[styles.customClass, styles.blockWrapper]}>
        <h2 className={styles.mainTitle}>{content.title}</h2>
        <div className={styles.cardsWrapper}>
          {content.cards.map(card => {
            return <MHorizontalCard content={card} isTitleColorblue={true}
              customClass={[styles.customClass, styles.card]} />;
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
