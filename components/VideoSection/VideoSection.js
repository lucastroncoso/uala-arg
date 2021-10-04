import React, { useRef, useCallback } from 'react';
import styles from './VideoSection.module.scss';
import BlockWrapper from '../BlockWrapper/BlockWrapper';
import BackgroundSVG from '../../public/assets/svg/videosection-bg.svg';
import PlayVideoButton from '../PlayVideoButton/PlayVideoButton';

const VideoSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <BackgroundSVG />
      </div>
      <BlockWrapper className={[styles.videoWrapper]}>
        <PlayVideoButton youtubeId={'tGtXlU1QE6k'} />
      </BlockWrapper>
    </section>
  );
};

export default VideoSection;
