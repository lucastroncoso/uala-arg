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
    const ctaCards = childrenSelector('[data-animation="cta-cards"]');
    const backgroundCards = childrenSelector('[data-animation="background-card"]');
    const title = childrenSelector('[data-animation="title"]');
    const titleTl = gsap.timeline({ paused: true });

    const tl = createTL({
      scrub: 1,
      onEnter: () => titleTl.play(),
      start: '0% 70%',
    });

    tl.fromTo(videoElement, { scale: 1 }, { scale: 1.2 }, 0).fromTo(
      videoButton,
      { scale: 0.8 },
      { scale: 1 },
      0,
    );

    titleTl.fromTo(
      title,
      { scaleY: 0, transformOrigin: '0% 100%' },
      { scaleY: 1, duration: 0.3, ease: 'power4.out' },
      0,
    );

    gsap.timeline({ scrollTrigger: { trigger: ctaCards, start: '0% 80%' } }).fromTo(
      ctaCards,
      { y: 100, transformOrigin: '50% 20%', opacity: 0 },
      { duration: 0.55, y: 0, stagger: 0.2, ease: 'power4.inOut', opacity: 1 },
      '-=0.5',
    );

    backgroundCards.forEach((card, index) => {
      gsap
        .timeline({ scrollTrigger: { trigger: card, start: '0% 65%' } })
        .fromTo(
          card,
          { x: index % 2 ? 150 : -150, transformOrigin: '50% 20%', opacity: 0 },
          { duration: 0.65, x: 0, ease: 'Power4.InOut', opacity: 1 },
        );
    })
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
          className={styles.mainTitle}
          dangerouslySetInnerHTML={{ __html: content.title }}
        />

        {content.cardsGrid &&
          <div className={styles.cardsGrid}>
            {content.cardsGrid.map((card, cardIndex) => {
              return <a className={styles.card} href={card.url}
                key={`card-${cardIndex}`} data-animation="background-card"
              >
                <img src={card.image.src}
                  alt={card.image.alt} className={styles.backgroundImg} />
                <h3 className={styles.title}>{card.title}</h3>
                <span className={styles.ctaCopy}>{card.ctaCopy}</span>
              </a>
            })}
          </div>
        }

        {isMobile ? (
          <MEmblaCarousel
            cards={content.cardsRow}
            wrapperStyle={styles.cardsRow}
            cardStyle={[styles.card]}
          />
        ) : (
          <div className={styles.cardsRow}>
            {content.cardsRow.map((card, cardIndex) => {
              return (
                <MCtaCard content={card} key={`card-${cardIndex}`} customClass={[styles.card]} />
              );
            })}
          </div>
        )}
        <PlayVideoButton
          youtubeId={content.video.youtubeId}
          previewVideoSrc={content.video.previewVideoSrc}
        />
      </BlockWrapper>
    </section>
  );
};

CardsWithVideoSection.propTypes = {
  content: PropTypes.object.isRequired,
};

export default CardsWithVideoSection;
