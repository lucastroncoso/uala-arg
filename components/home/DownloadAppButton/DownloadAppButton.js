import React, { useCallback } from 'react';
import styles from './DownloadAppButton.module.scss';
import classNames from 'classnames';
import { useAppContext } from '../../../store/context';
import PropTypes from 'prop-types';
import useIsMobile from '../utils/hooks/useIsMobile';

const DownloadAppButton = ({ children, isStyled, customClass, refProp, fireDataLayer }) => {
  const { setDownloadModalActiveState } = useAppContext();
  const isMobile = useIsMobile(768);

  const onDownloadButtonClick = useCallback(() => {
    setDownloadModalActiveState(true);
  }, [setDownloadModalActiveState]);

  return (
    <>
      {isMobile ? (
        <div className="">
          <a onClick={ fireDataLayer }
            className={classNames(isStyled && styles.button, customClass && [...customClass])}
            ref={refProp}
          >
            {children}
          </a>
        </div>
      ) : (
        <button
          className={classNames(isStyled && styles.button, customClass && [...customClass])}
          onClick={ () => {
            fireDataLayer();
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
