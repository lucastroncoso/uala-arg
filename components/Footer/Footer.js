import React, { useRef, useCallback } from 'react';
import styles from './Footer.module.scss';
import Image from 'next/image';
import PropTypes from 'prop-types';
import BlockWrapper from '../BlockWrapper/BlockWrapper';
import UALA_ISO from '../../public/assets/logos/uala-logo-wave.png';
import APP_STORE from '../../public/assets/images/app_store.png';
import GOOGLE_PLAY from '../../public/assets/images/google_play.png';
import SocialIcons from '../../components/SocialIcons/SocialIcons';
import PARTNER_LOGO from '../../public/assets/images/unodostres.png';

const Footer = ({ content }) => {
  return (
    <footer className={styles.footer}>
      <BlockWrapper customClass={[styles.footerWrapper]}>
        <div className={styles.about}>
          <Image src={UALA_ISO} width={54} height={30} />
          <h5 className={styles.title}>{content.title}</h5>
          <div className={styles.appStoreWrapper}>
            <a href={'https://uala.onelink.me/tTSW/7470090a?af_qr=true'}>
              <Image src={APP_STORE} width={110} height={34} />
            </a>
            <a href={'https://uala.onelink.me/tTSW/7470090a?af_qr=true'}>
              <Image src={GOOGLE_PLAY} width={110} height={34} />
            </a>
          </div>
          <div className={styles.socialLinksWrapper}>
            {content.socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                aria-label={`social link ${link.name}`}
                target="_blank"
              >
                <SocialIcons icon={link.name} />
              </a>
            ))}
          </div>
          <a className={styles.link} href={content.productContract.url}>
            {content.productContract.copy}
          </a>
          <br />
          <a className={styles.link} href={content.privacy.url}>
            {content.privacy.copy}
          </a>
        </div>
        <div>
          <ul className={styles.list}>
            <li className={styles.liTitle}>{content.functionabilities.title}</li>
            {content.functionabilities.submenu.map((link) => (
              <li key={link.copy}>
                <a className={styles.link} href={link.url}>
                  {link.copy}
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.legalWrapper}>
            <a className={styles.liTitle} href={content.costs.url}>
              {content.costs.copy}
            </a>
            <a className={styles.liTitle} href={content.legal.url}>
              {content.legal.copy}
            </a>
            <a className={styles.liTitle} href={content.terms.url}>
              {content.terms.copy}
            </a>
          </div>
        </div>
        <div>
          <ul className={styles.list}>
            <li className={styles.liTitle}>{content.about.title}</li>
            {content.about.submenu.map((link) => (
              <li key={link.copy}>
                <a className={styles.link} href={link.url}>
                  {link.copy}
                </a>
              </li>
            ))}
          </ul>
          <ul className={styles.list}>
            <li className={styles.liTitle}>{content.help.title}</li>
            {content.help.submenu.map((link) => (
              <li key={link.copy}>
                <a className={styles.link} href={link.url}>
                  {link.copy}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <img className={styles.partnerLogo} src={PARTNER_LOGO.src} />
        <p className={styles.disclaimer}>{content.disclaimer}</p>
      </BlockWrapper>
    </footer>
  );
};

Footer.propTypes = {
  content: PropTypes.object.isRequired,
};

export default Footer;
