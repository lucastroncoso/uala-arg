import React from 'react';
import styles from './Footer.module.scss';
import Image from 'next/image';
import PropTypes from 'prop-types';
import BlockWrapper from '../BlockWrapper/BlockWrapper';
import UALA_ISO from '../../public/assets/logos/uala-logo-wave.png';
import APP_STORE from '../../public/assets/images/app_store.png';
import GOOGLE_PLAY from '../../public/assets/images/google_play.png';
import SocialIcons from '../../components/SocialIcons/SocialIcons';
import PARTNER_LOGO from '../../public/assets/images/unodostres.png';
import FooterBanner from '../FooterBanner/FooterBanner';

const Footer = ({ content }) => {
  return (
    <>
      <FooterBanner content={content.footerBanner} />
      <footer className={styles.footer}>
        <BlockWrapper customClass={[styles.footerWrapper]}>
          <div className={styles.about}>
            <Image src={UALA_ISO} width={54} height={30} />
            <h5 className={styles.title}>{content.title}</h5>
            <div className={styles.appStoreWrapper}>
              <a href={'https://uala.onelink.me/gqGz/30b751c4'}>
                <Image src={GOOGLE_PLAY} width={110} height={34} />
              </a>
              <a href={'https://uala.onelink.me/gqGz/557eaed9'}>
                <Image src={APP_STORE} width={110} height={34} />
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
            <a className={styles.link} target="_blank" href={content.productContract.url}>
              {content.productContract.copy}
            </a>
            <br />
            <a className={styles.link} target="_blank" href={content.privacy.url}>
              {content.privacy.copy}
            </a>
          </div>
          <div>
            <ul className={styles.list}>
              <li className={styles.listTitle}>{content.functionabilities.title}</li>
              {content.functionabilities.submenu.map((link) => (
                <li key={link.copy} className={link.isNew ? styles.new : null}>
                  <a className={styles.link} href={link.url}>
                    {link.copy}
                  </a>
                  {link.isNew && <span>{link.isNew}</span>}
                </li>
              ))}
            </ul>
            <div className={styles.legalWrapper}>
              <a className={styles.listTitle} href={content.costs.url}>
                {content.costs.copy}
              </a>
              <a className={styles.listTitle} href={content.legal.url}>
                {content.legal.copy}
              </a>
              <a className={styles.listTitle} href={content.terms.url} target="_blank">
                {content.terms.copy}
              </a>
            </div>
          </div>
          <div>
            <ul className={styles.list}>
              <li className={styles.listTitle}>{content.about.title}</li>
              {content.about.submenu.map((link) => (
                <li key={link.copy}>
                  <a className={styles.link} href={link.url}>
                    {link.copy}
                  </a>
                </li>
              ))}
            </ul>
            <ul className={styles.list}>
              <li className={styles.listTitle}>{content.help.title}</li>
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
          <p
            className={styles.disclaimer}
            dangerouslySetInnerHTML={{ __html: content.disclaimer }}
          />
        </BlockWrapper>
      </footer>
    </>
  );
};

Footer.propTypes = {
  content: PropTypes.object.isRequired,
};

export default Footer;
