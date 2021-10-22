import React, { useCallback, useEffect } from 'react';
import styles from './PlayVideoButton.module.scss';
import PropTypes from 'prop-types';
import { useAppContext } from '../../store/context';
import PlayIcon from '../../public/assets/svg/play-icon.svg';
import PreviewVideo from '../PreviewVideo/PreviewVideo';

const PlayVideoButton = ({ youtubeId, previewVideoSrc, isPreviewVideoScaled }) => {
  const { setYoutubeModalVideoId } = useAppContext();

  const onPlayButtonClick = useCallback(() => {
    setYoutubeModalVideoId(youtubeId);
  }, [setYoutubeModalVideoId, youtubeId]);

  return (
    <button className={styles.button} onClick={onPlayButtonClick} data-animation="video-button">
      <PreviewVideo assetPath={previewVideoSrc} isVideoScaled={isPreviewVideoScaled}/>
      <PlayIcon className={styles.playIcon} />
    </button>
  );
};

PlayVideoButton.propTypes = {
  youtubeId: PropTypes.string,
};

export default PlayVideoButton;
