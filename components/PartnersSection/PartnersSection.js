import React, { useCallback, useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styles from './PartnersSection.module.scss';
import PropTypes from 'prop-types';
import BlockWrapper from '../BlockWrapper/BlockWrapper';
// import { useAppContext } from '../../store/context';
import Image from 'next/image';
import MHorizontalCard from '../M-HorizontalCard/MHorizontalCard';
import LOGO_PAYNET from '../../public/assets/images/paynet.png';
import useIsMobile from '../utils/hooks/useIsMobile';

const PartnersSection = ({ content }) => {
  const isMobile = useIsMobile(768);
  const [emblaRef, emblaApi] = useEmblaCarousel({ skipSnaps: false });
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

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

  return (
    <section className={styles.partnersSection}>
      <BlockWrapper>
        <h3 className={styles.title}>{content.title}</h3>
        <div className={styles.buttonsWrapper}>
          {content.buttons.map((button) => (
            <a href={button.url} key={button.title} className={styles.buttonLink}>
              <MHorizontalCard
                content={{ title: button.title }}
                customClass={[styles.partnersButtonsCard]}
              />
            </a>
          ))}
        </div>
        <div className={styles.partnersLogos}>
          <Image src={LOGO_PAYNET} width={156} height={74} />
          <p className={styles.partnersCopy}>{content.partnersCopy}</p>
          <div className={styles.logoGrid}>
            <div className={styles.sliderContainer} ref={isMobile ? emblaRef : null}>
              <div className={styles.sliderInner}>
                {content.partnersLogos.map((logo) => {
                  return (
                    <img
                      className={isMobile ? styles.carouselImg : ''}
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
          <a href={content.viewMoreCTA.url} target="_blank" className={styles.viewMore}>
            {content.viewMoreCTA.copy}
          </a>
        </div>
      </BlockWrapper>
    </section>
  );
};

PartnersSection.propTypes = {
  content: PropTypes.object.isRequired,
};

export default PartnersSection;
