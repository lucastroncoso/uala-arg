import React, { useCallback } from 'react';
import styles from './DownloadAppButton.module.scss';
import classNames from 'classnames';
import { useAppContext } from '../../../store/context';
import PropTypes from 'prop-types';
import useIsMobile from '../utils/hooks/useIsMobile';

const DownloadAppButton = ({ children, isStyled, customClass, refProp, dataLayer }) => {
  const { setDownloadModalActiveState } = useAppContext();
  const isMobile = useIsMobile(768);

  const onDownloadButtonClick = useCallback(() => {
    setDownloadModalActiveState(true);
  }, [setDownloadModalActiveState]);

  return (
    <>
      {isMobile ? (
        <a
          href="https://uala.onelink.me/gqGz/30b751c4"
          className={classNames(isStyled && styles.button, customClass && [...customClass])}
          ref={refProp}
          onClick={ () => dataLayer.push(dataLayer) }
        >
          {children}
        </a>
      ) : (
        <button
          className={classNames(isStyled && styles.button, customClass && [...customClass])}
          onClick={ () => {
            dataLayer.push(dataLayer);
            onDownloadButtonClick();
            } }
          ref={refProp}
        >
          {children}
        </button>
      )}
    </>
  );
};

DownloadAppButton.propTypes = {
  children: PropTypes.node.isRequired,
  customClass: PropTypes.array,
  isStyled: PropTypes.bool,
  refProp: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any })]),
};

export default DownloadAppButton;
