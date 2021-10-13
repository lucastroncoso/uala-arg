import React from 'react';
import styles from './FooterColombia.module.scss';
import Image from 'next/image';
import PropTypes from 'prop-types';
import BlockWrapper from '../BlockWrapper/BlockWrapper';
import UALA_ISO from '../../public/assets/logos/uala-logo-wave.png';
import APP_STORE from '../../public/assets/images/app_store.png';
import GOOGLE_PLAY from '../../public/assets/images/google_play.png';
import SocialIcons from '../SocialIcons/SocialIcons';
import SUPERIN_LOGO from '../../public/assets/images/logo_superintendencia.png';
import FOGAFIN_LOGO from '../../public/assets/images/logo_fogafin.png';
import FooterBanner from '../FooterBanner/FooterBanner';
import classNames from 'classnames';

const FooterColombia = ({ content }) => {
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
          </div>
          <div>
            <ul className={styles.list}>
              {content.columnOne.menu.map((link) => (
                <li key={link.copy}>
                  <a className={styles.link} href={link.url}>
                    {link.copy}
                  </a>
                  {link.isNew && <span>{link.isNew}</span>}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className={styles.list}>
              {content.columnTwo.menu.map((link, index) => (
                <li key={link.copy}>
                  <a
                    className={classNames([
                      styles.link,
                      index === content.columnTwo.menu.length - 1 ? styles.lastItem : null,
                    ])}
                    href={link.url}
                  >
                    {link.copy}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <img className={styles.fogafinLogo} src={FOGAFIN_LOGO.src} />
          <img className={styles.superinLogo} src={SUPERIN_LOGO.src} />
        </BlockWrapper>
      </footer>
    </>
  );
};

FooterColombia.propTypes = {
  content: PropTypes.object.isRequired,
};

export default FooterColombia;
