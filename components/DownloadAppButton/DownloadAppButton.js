import React, { useCallback } from 'react';
import styles from './DownloadAppButton.module.scss';
import classNames from 'classnames';
import { useAppContext } from '../../store/context';
import PropTypes from 'prop-types';
import useIsMobile from '../utils/hooks/useIsMobile';

const DownloadAppButton = ({ copy, customClass }) => {
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
          className={classNames(styles.button, customClass && [...customClass])}
        >
          <span>{copy}</span>
        </a>
      ) : (
        <button
          className={classNames(styles.button, customClass && [...customClass])}
          onClick={onDownloadButtonClick}
        >
          <span>{copy}</span>
        </button>
      )}
    </>
  );
};

DownloadAppButton.propTypes = {
  copy: PropTypes.string.isRequired,
  customClass: PropTypes.array,
};

export default DownloadAppButton;
