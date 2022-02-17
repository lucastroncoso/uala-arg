import React, { useCallback } from 'react';
import styles from './DownloadAppButton.module.scss';
import classNames from 'classnames';
import { useAppContext } from '../../../store/context';
import PropTypes from 'prop-types';
import useIsMobile from '../utils/hooks/useIsMobile';

const DownloadAppButton = ({
  qr,
  mobileLink,
  children,
  isStyled,
  customClass,
  refProp,
  dataLayerInfo,
}) => {
  const { downloadModalActivestate, setDownloadModalActiveState } = useAppContext();
  const isMobile = useIsMobile(768);

  const onDownloadButtonClick = useCallback(
    (src) => {
      src
        ? setDownloadModalActiveState({ qr: src, state: true })
        : setDownloadModalActiveState({ ...downloadModalActivestate, state: true });
    },
    [setDownloadModalActiveState],
  );

  return (
    <>
      {isMobile ? (
        <div className="" onClick={() => dataLayer.push(dataLayerInfo)}>
          <a
            href={mobileLink ? mobileLink : 'https://uala.onelink.me/gqGz/30b751c4'}
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
            onDownloadButtonClick(qr);
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
