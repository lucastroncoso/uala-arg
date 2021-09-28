import React from 'react';
import styles from './MEmblaCarousel.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import MCtaCard from '../M-CtaCard/MCtaCard';
import useEmblaCarousel from 'embla-carousel-react';

const MEmblaCarousel = ({ cards, wrapperStyle, cardStyle }) => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className={wrapperStyle ?? ''}
      ref={emblaRef}>
      <div className={styles.container}>
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
