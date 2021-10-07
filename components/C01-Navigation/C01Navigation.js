import React, { useCallback, useState, useEffect } from 'react';
import { useAppContext } from '/store/context';
import styles from './C01Navigation.module.scss';
import PropTypes from 'prop-types';
import BlockWrapper from '../BlockWrapper/BlockWrapper';
import LOGO_TEXT from '/public/assets/logos/uala-logo.png'
import LOGO_WAVE from '/public/assets/logos/uala-logo-wave.png'
import classNames from 'classnames';
import MSubMenu from './M-SubMenu/MSubMenu';
import useIsMobile from '../utils/hooks/useIsMobile';
import ArrowIcon from '../A-ArrowIcon/ArrowIcon';
import DownloadAppButton from '../DownloadAppButton/DownloadAppButton';

const C01Navigation = ({ content }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(-1);
  const [selectedItem, setSelectedItem] = useState(0);
  const isMobile = useIsMobile(768);
  const scrollPoint = isMobile ? 250 : 500;
  /* 
    This is going to be unused until multilanguage support is added.
    Remove comments to enable language selector
  */
  //const { _, setLocale } = useAppContext();

  //const onLanguageButtonClick = useCallback((event) => {
  //  const selectedLanguage = event.target.innerText.toLowerCase();
  //  setLocale(selectedLanguage);
  //}, [setLocale]);

  const closeSubMenu = () => {
    setIsSubMenuOpen(false)
    setActiveSubMenu(-1)
  }

  const menuButtonStyle = classNames(styles.mobileMenuButton, { [styles.isOpen]: isMobileNavOpen });
  const itemsWrapperStyle = classNames(
    styles.collapsibleWrapper,
    { [styles.isOpen]: isMobile && isMobileNavOpen },
    { [styles.scrolledNav]: !isMobile && isScrolled }
  );
  const downloadButtonStyle = classNames(
    styles.customClass,
    styles.downloadButton,
    { [styles.isVisible]: !isMobile && isScrolled }
  );
  /* 
    This is going to be unused until multilanguage support is added.
    Remove comments to enable language selector
  */
  //const languageSelectorStyle = classNames(
  //  styles.languageSelector,
  //  { [styles.isHidden]: !isMobile && isScrolled },
  //);

  useEffect(() => {
    setIsScrolled(window.pageYOffset > scrollPoint);

    const handleScroll = () => {
      setIsScrolled(window.pageYOffset >= scrollPoint);
    };
    const handleResize = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    if (isMobile & isMobileNavOpen)
      document.body.style.overflow = "hidden";
    else
      document.body.style.overflow = "auto";
  }, [isMobileNavOpen]);

  return (
    <nav
      className={styles.C01Navigation}
      onMouseLeave={closeSubMenu}
    >
      <BlockWrapper customClass={[styles.blockWrapper]}>
        <div className={styles.brandWrapper}>
          <img src={LOGO_TEXT.src}
            className={classNames(
              styles.logo, { [styles.isHidden]: isScrolled },
              styles.logoText, { [styles.isVisible]: !isScrolled }
            )}
            alt="logo-text" />

          <img src={LOGO_WAVE.src}
            className={classNames(
              styles.logo, { [styles.isHidden]: !isScrolled },
              styles.logoWave, { [styles.isVisible]: isScrolled }
            )}
            alt="logo-wave" />

          <button
            className={menuButtonStyle}
            onClick={() => { setIsMobileNavOpen(mobileNavOpen => !mobileNavOpen); }}
          >
            <span className={styles.buttonCopy}>{content.menuButtonCopy}</span>
            <span className={styles.crossIcon}>&times;</span>
          </button>
        </div>

        <div className={itemsWrapperStyle}>
          <ul className={styles.listWrapper}>
            {content.items.map((item, itemIndex) => {
              const hasSubMenu = Object.keys(item).includes("subMenu");
              const isCurrentItemActive = itemIndex === activeSubMenu;
              const buttonStyle = classNames(
                styles.itemButton,
                { [styles.isActive]: isCurrentItemActive }
              );
              const iconStyle = classNames(
                styles.arrowIcon,
                { [styles.isOpen]: isCurrentItemActive }
              );

              return (
                <li
                  className={styles.listItem}
                  key={`item-${itemIndex}`}
                >
                  <a className={buttonStyle}
                    {...hasSubMenu ?
                      isMobile ? {
                        onClick: () => {
                          setIsSubMenuOpen(isSubMenuOpen => !isSubMenuOpen)
                          if (isSubMenuOpen && isCurrentItemActive) {
                            setActiveSubMenu(-1);
                          } else {
                            setActiveSubMenu(itemIndex);
                          }
                        }
                      } : {
                        onMouseEnter: () => {
                          setIsSubMenuOpen(true)
                          setActiveSubMenu(itemIndex);
                          setSelectedItem(itemIndex);
                        },
                      }
                      : {
                        href: item.url,
                        onMouseEnter: closeSubMenu
                      }
                    }
                  >
                    {item.title}
                    {isMobile && hasSubMenu && <ArrowIcon className={iconStyle} />}
                  </a>
                  { isMobile && hasSubMenu &&
                    <MSubMenu content={item.subMenu} isOpen={isCurrentItemActive} />
                  }
                </li>
              )
            })}
          </ul>

          {
            /* 
              This is going to be unused until multilanguage support is added.
              Remove comments to enable language selector
            */

            /*<div className={languageSelectorStyle}>
              <span onClick={onLanguageButtonClick}>
                {content.languageButton[0]}
              </span>
  
              <span onClick={onLanguageButtonClick}>
                {content.languageButton[1]}
              </span>
            </div>*/
          }

          <DownloadAppButton
            copy={content.downloadAppButtonCopy}
            customClass={[downloadButtonStyle]} />

          {!isMobile &&
            <MSubMenu
              content={content.items[selectedItem].subMenu}
              isOpen={isSubMenuOpen}
            />
          }
        </div>
      </BlockWrapper>
    </nav>
  );
};

C01Navigation.propTypes = {
  content: PropTypes.object.isRequired,
};

export default C01Navigation;