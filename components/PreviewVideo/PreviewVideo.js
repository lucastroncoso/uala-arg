import React, { useRef, useState, useEffect } from 'react';
import styles from './PreviewVideo.module.scss';

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

const PreviewVideo = () => {
  const videoRef = useRef(null);
  const [isPaused, setIsPaused] = useState();

  useEffect(() => {
    setIsPaused(videoRef.current.paused);
  }, []);

  const handlePlayPauseVideo = (event) => {
    if (videoRef.current.paused) {
      setIsPaused(false);
      videoRef.current.play();
    } else {
      setIsPaused(true);
      videoRef.current.pause();
    }
    event.stopPropagation();
  };

  return (
    <div className={styles.previewVideo}>
      <video
        ref={videoRef}
        src="assets/video/cash-hero-desktop.mp4"
        autoPlay
        muted
        playsInline
        loop
        aria-hidden="true"
        className={styles.video}
      />
      <PlayPauseIcon videoState={isPaused} handlePlayPauseVideo={handlePlayPauseVideo} />
    </div>
  );
};

export default PreviewVideo;
