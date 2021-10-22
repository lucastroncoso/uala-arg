import React, { useRef, useState } from 'react';
import styles from './PreviewVideo.module.scss';
import useIsMobile from '../utils/hooks/useIsMobile';
import classNames from 'classnames';

const PlayPauseIcon = ({ videoState, handlePlayPauseVideo }) => {
  return (
    <div className={styles.playPauseButton} onClick={(event) => handlePlayPauseVideo(event)}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <path
          fill="currentColor"
          d={videoState ? 'M14.6 13.2v21.6l18.8-11.6z' : 'M13.5 8h8v32h-8zM26.5 8h8v32h-8z'}
        />
      </svg>
    </div>
  );
};

const PreviewVideo = ({ assetPath }) => {
  const videoRef = useRef(null);
  const [isPaused, setIsPaused] = useState();
  const isMobile = useIsMobile(768);

  const handlePlayPauseVideo = (event) => {
    if (event.type === 'playing') {
      setIsPaused(false);
    } else {
      if (videoRef.current.paused) {
        setIsPaused(false);
        videoRef.current.play();
      } else {
        setIsPaused(true);
        videoRef.current.pause();
      }
      event.stopPropagation();
    }
  };

  return (
    <div className={styles.previewVideo}>
      <video
        data-animation = 'video-element'
        ref={videoRef}
        src={assetPath}
        muted
        autoPlay
        playsInline
        loop
        aria-hidden="true"
        className={classNames(styles.video, {[styles.mobilePosition]: isMobile})}
        onPlaying={handlePlayPauseVideo}
      />
      <PlayPauseIcon videoState={isPaused} handlePlayPauseVideo={handlePlayPauseVideo} />
    </div>
  );
};

export default PreviewVideo;
