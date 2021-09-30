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

    const videoButton = childrenSelector('[data-animation="video-button"]');
    const videoElement = childrenSelector('[data-animation="video-element"]');
    const cards = childrenSelector('[data-animation="cta-cards"]');
    const title = childrenSelector('[data-animation="title"]');

    const tl = createTL({ scrub: 1, onEnter: () => cardsTl.play(), start: '0% 60%' });
    const cardsTl = gsap.timeline({ paused: true });

    cardsTl
      .fromTo(title, { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0 }, 0)
      .fromTo(
        cards,
        { scale: 0, transformOrigin: '50% 20%', opacity: 0 },
        { duration: 0.55, scale: 1, stagger: 0.15, ease: 'Power4.InOut', opacity: 1 },
        '-=0.5',
      );

    tl.fromTo(videoElement, { scale: 1 }, { scale: 1.2 }, 0).fromTo(
      videoButton,
      { scale: 0.9 },
      { scale: 1.1 },
      0,
    );
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
        <PlayVideoButton youtubeId={content.video.youtubeId} />
      </BlockWrapper>
    </section>
  );
};

CardsWithVideoSection.propTypes = {
  content: PropTypes.object.isRequired,
};

export default CardsWithVideoSection;
