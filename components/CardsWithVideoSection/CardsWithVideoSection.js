import React from 'react';
import styles from './CardsWithVideoSection.module.scss';
import PropTypes from 'prop-types';
import BlockWrapper from '../BlockWrapper/BlockWrapper';
import BackgroundSVG from '../../public/assets/svg/videosection-bg.svg';
import PlayVideoButton from '../PlayVideoButton/PlayVideoButton';
import MCtaCard from '../M-CtaCard/MCtaCard';
import useIsMobile from '../utils/hooks/useIsMobile';
import MEmblaCarousel from '../M-EmblaCarousel/MEmblaCarousel';

const CardsWithVideoSection = ({ content }) => {
  const isMobile = useIsMobile(768);

  return (
    <section className={styles.cardsWithVideosection}>
      <div className={styles.background}>
        <div className={styles.gradient} />
        <BackgroundSVG />
      </div>
      <BlockWrapper customClass={[styles.blockWrapper]}>
        <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: content.title }} />

        {isMobile ? (
          <MEmblaCarousel cards={content.cardsRow}
            wrapperStyle={styles.cardsRowWrapper} cardStyle={[styles.card]} />
        ) : (
          <div className={styles.cardsRowWrapper}>
            {content.cardsRow.map((card, cardIndex) => {
              return <MCtaCard content={card} key={`card-${cardIndex}`}
                customClass={[styles.card]} />
            })}
          </div>
        )}

        <PlayVideoButton youtubeId={content.video.youtubeId} />
      </BlockWrapper>
    </section>
  );
};

CardsWithVideoSection.propTypes = {
  content: PropTypes.object.isRequired,
};

export default CardsWithVideoSection;
