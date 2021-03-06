import React, { useCallback, useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styles from './PartnersSection.module.scss';
import PropTypes from 'prop-types';
import BlockWrapper from '../BlockWrapper/BlockWrapper';
import Image from 'next/image';
import MHorizontalCard from '../M-HorizontalCard/MHorizontalCard';
import classNames from 'classnames';
import useIsMobile from '../utils/hooks/useIsMobile';
import useScrollTrigger from '../utils/hooks/useScrollTrigger';
import useAppContext from '../../../store/context';
import gsap from 'gsap';

const PartnersSection = ({ content }) => {
  const isMobile = useIsMobile(768);
  const [emblaRef, emblaApi] = useEmblaCarousel({ skipSnaps: false });
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [sectionRef, childrenSelector, createTL] = useScrollTrigger();
  const { region } = useAppContext();
  const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);

  useEffect(() => {
    if (!sectionRef || !sectionRef.current) return;
    const logosElemArray = childrenSelector('[data-animation="partner-logos"]');
    const logosTL = gsap.timeline({ paused: true });
    const title = childrenSelector('[data-animation="title"]');
    const cards = childrenSelector('[data-animation="horizontal-cards"]');
    const logosContainer = childrenSelector('[data-animation="logos-container"]');
    logosTL.fromTo(
      logosElemArray,
      { autoAlpha: 0, y: -20 },
      { autoAlpha: 1, y: 0, stagger: { each: 0.15, from: 'left', ease: 'circ' } },
      0,
    );
    const tl = createTL({
      onLeave: () => logosTL.play(),
      start: '0% 60%',
      end: '+=40%',
    });

    tl.fromTo(
      title,
      { scaleY: 0, transformOrigin: '0% 100%' },
      { scaleY: 1, duration: 0.3, ease: 'Power4.Out' },
      0,
    ).fromTo(
      [cards, logosContainer],
      { y: 100, transformOrigin: '50% 20%', opacity: 0 },
      { duration: 0.55, y: 0, stagger: 0.15, ease: 'Power4.InOut', opacity: 1 },
      '-=0.5',
    );
  }, []);

  return (
    <section className={styles.partnersSection} ref={sectionRef}>
      <BlockWrapper>
        <h3 data-animation="title" className={styles.title}>
          {content.title}
        </h3>
        <div className={styles.cardsWrapper}>
          {content.cards.map((button, index) => (
            <MHorizontalCard
              key={index}
              isHorizontalOnMobile={true}
              content={{ title: button.title, icon: button.icon }}
              customClass={[styles.partnersCard]}
            />
          ))}
        </div>
        <div className={styles.partnersLogos} data-animation="logos-container">
          {content.paynetLogo && (
            <div data-animation="partner-logos">
              <Image
                className={styles.logoPaynet}
                src={`/assets/images/${content.paynetLogo}.png`}
                width={156}
                height={74}
              />
            </div>
          )}
          {content.partnersCopy && (
            <p
              className={classNames(styles.partnersCopy, region === 'co' ? styles.coCopy : '')}
              data-animation="partner-logos"
            >
              {content.partnersCopy}
            </p>
          )}
          {content.logosCarousel && (
            <div className={styles.logoGrid}>
              <div className={styles.sliderContainer} ref={isMobile ? emblaRef : null}>
                <div data-animation="partner-logos" className={styles.sliderInner}>
                  {content.logosCarousel.map((logo) => {
                    return (
                      <img
                        data-animation="partner-logos"
                        className={isMobile ? styles.carouselImage : ''}
                        src={`/assets/images/partnersLogos/${logo}.png`}
                        key={logo}
                        alt={logo}
                      />
                    );
                  })}
                </div>
                {isMobile && (
                  <div className={styles.sliderDots}>
                    {scrollSnaps.map((_, index) => (
                      <button
                        key={index}
                        aria-label={`show logo number ${index}`}
                        className={index === selectedIndex ? styles.selected : ''}
                        onClick={() => scrollTo(index)}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {content.logosStatic && (
            <div data-animation="partner-logos" className={styles.logosStatic}>
              {content.logosStatic.map((logo) => {
                return (
                  <img
                    data-animation="partner-logos"
                    src={`/assets/images/partnersLogos/${logo}.png`}
                    key={logo}
                    alt={logo}
                  />
                );
              })}
            </div>
          )}
          {content.viewMoreCTA && (
            <a
              data-animation="partner-logos"
              href={content.viewMoreCTA.url}
              target="_blank"
              className={styles.viewMore}
            >
              {content.viewMoreCTA.copy}
            </a>
          )}
        </div>
      </BlockWrapper>
    </section>
  );
};

PartnersSection.propTypes = {
  content: PropTypes.object.isRequired,
};

export default PartnersSection;
