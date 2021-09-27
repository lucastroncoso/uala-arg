import React, { useRef, useEffect } from 'react';
import styles from './PartnersSection.module.scss';
import PropTypes from 'prop-types';
import BlockWrapper from '../BlockWrapper/BlockWrapper';
// import { useAppContext } from '../../store/context';
import Image from 'next/image';
import MHorizontalCard from '../M-HorizontalCard/MHorizontalCard';
import LOGO_PAYNET from '../../public/assets/images/paynet.png';

const PartnersSection = ({ content }) => {
  return (
    <section className={styles.partnersSection}>
      <BlockWrapper>
        <h1 className={styles.title}>{content.title}</h1>
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
            {content.partnersLogos.map((logo) => {
              return <img src={`/assets/images/partnersLogos/${logo}.png`} key={logo} alt={logo} />;
            })}
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
