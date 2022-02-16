import React, { useCallback } from 'react';
import styles from './DownloadAppButton.module.scss';
import classNames from 'classnames';
import { useAppContext } from '../../../store/context';
import PropTypes from 'prop-types';
import useIsMobile from '../utils/hooks/useIsMobile';

const DownloadAppButton = ({ children, isStyled, customClass, refProp, dataLayerInfo }) => {
  const { setDownloadModalActiveState } = useAppContext();
  const isMobile = useIsMobile(768);

  const onDownloadButtonClick = useCallback(
    (location) => {
      console.log(location);
      setDownloadModalActiveState({ src: location, state: true });
    },
    [setDownloadModalActiveState],
  );

  return (
    <>
      {isMobile ? (
        <div className="" onClick={() => dataLayer.push(dataLayerInfo)}>
          <a
            href={
              dataLayerInfo?.eventAction === 'Menu'
                ? 'https://uala.onelink.me/tTSW/debd1ee8'
                : dataLayerInfo?.eventAction === 'Primera Pantalla'
                ? 'https://uala.onelink.me/tTSW/7470090a'
                : 'https://uala.onelink.me/gqGz/30b751c4'
            }
            className={classNames(isStyled && styles.button, customClass && [...customClass])}
            ref={refProp}
          >
            {children}
          </a>
        </div>
      ) : (
        <button
          className={classNames(isStyled && styles.button, customClass && [...customClass])}
          onClick={() => {
            dataLayer.push(dataLayerInfo);
            onDownloadButtonClick(dataLayerInfo?.eventAction);
          }}
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
