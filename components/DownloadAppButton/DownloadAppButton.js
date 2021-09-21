import React, { useRef, useCallback } from 'react';
import styles from './DownloadAppButton.module.scss';
import { useAppContext } from '../../store/context';

const DownloadAppButton = ({ copy }) => {
  const { setDownloadModalActiveState } = useAppContext();

  const onDownloadButtonClick = useCallback(() => {
    setDownloadModalActiveState(true);
  }, [setDownloadModalActiveState]);

  return (
    <button className={styles.button} onClick={onDownloadButtonClick}>
      <span>{copy}</span>
    </button>
  );
};

export default DownloadAppButton;
