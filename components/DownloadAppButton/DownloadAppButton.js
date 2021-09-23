import React, { useCallback } from 'react';
import styles from './DownloadAppButton.module.scss';
import classNames from 'classnames';
import { useAppContext } from '../../store/context';
import PropTypes from 'prop-types';

const DownloadAppButton = ({ copy, customClass }) => {
  const { setDownloadModalActiveState } = useAppContext();

  const onDownloadButtonClick = useCallback(() => {
    setDownloadModalActiveState(true);
  }, [setDownloadModalActiveState]);

  return (
    <button className={classNames(
      styles.button, customClass && [...customClass]
    )}
      onClick={onDownloadButtonClick}
    >
      <span>{copy}</span>
    </button>
  );
};

DownloadAppButton.propTypes = {
  copy: PropTypes.string.isRequired,
  customClass: PropTypes.array,
};

export default DownloadAppButton;
