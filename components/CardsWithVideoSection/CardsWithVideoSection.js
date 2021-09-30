import React, { useEffect } from 'react';
import styles from './CardsWithVideoSection.module.scss';
import PropTypes from 'prop-types';
import BlockWrapper from '../BlockWrapper/BlockWrapper';
import BackgroundSVG from '../../public/assets/svg/videosection-bg.svg';
import PlayVideoButton from '../PlayVideoButton/PlayVideoButton';
import MCtaCard from '../M-CtaCard/MCtaCard';
import useIsMobile from '../utils/hooks/useIsMobile';
import MEmblaCarousel from '../M-EmblaCarousel/MEmblaCarousel';
import useScrollTrigger from '../utils/hooks/useScrollTrigger';
import gsap from 'gsap';

const CardsWithVideoSection = ({ content }) => {
  const isMobile = useIsMobile(768);
  const [sectionRef, childrenSelector, createTL] = useScrollTrigger();

  useEffect(() => {
    if (!sectionRef || !sectionRef.current) return;

    const videoElement = childrenSelector('[data-animation="video-container"]');
    const cards = childrenSelector('[data-animation="cta-cards"]');
    const title = childrenSelector('[data-animation="title"]');

    const tl = createTL({ scrub: 1, onEnter: () => cardsTl.play(), start: '0% 60%' });
    const cardsTl = gsap.timeline({ paused: true });

    cardsTl.fromTo(
      [title, cards],
      { scaleY: 0, transformOrigin: '0% 35%', opacity: 0 },
      { duration: 0.55, scaleY: 1, stagger: 0.25, ease: 'back.out(1.25)', opacity: 1 },
      0,
    );

    tl.fromTo(videoElement, { scaleX: '0.9' }, { scaleX: '1' });
  }, []);

  return (
    <section className={styles.cardsWithVideosection} ref={sectionRef}>
      <div className={styles.background}>
        <div className={styles.gradient} />
        <BackgroundSVG />
      </div>
      <BlockWrapper customClass={[styles.blockWrapper]}>
        <h2
          data-animation="title"
          className={styles.title}
          dangerouslySetInnerHTML={{ __html: content.title }}
        />

        {isMobile ? (
          <MEmblaCarousel
            cards={content.cardsRow}
            wrapperStyle={styles.cardsRowWrapper}
            cardStyle={[styles.card]}
          />
        ) : (
          <div className={styles.cardsRowWrapper}>
            {content.cardsRow.map((card, cardIndex) => {
              return (
                <MCtaCard content={card} key={`card-${cardIndex}`} customClass={[styles.card]} />
              );
            })}
          </div>
        )}
        <div className="videoContainer" data-animation="video-container">
          <PlayVideoButton youtubeId={content.video.youtubeId} />
        </div>
      </BlockWrapper>
    </section>
  );
};

CardsWithVideoSection.propTypes = {
  content: PropTypes.object.isRequired,
};

export default CardsWithVideoSection;
