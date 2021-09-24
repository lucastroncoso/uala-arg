import React, { useMemo, useRef } from 'react';
import styles from './YoutubeVideoIframe.module.scss';

const YoutubeVideoIframe = ({ videoId, title = 'Youtube iframe' }) => {
  const youtubePath = useMemo(() => {
    if (!videoId) return '';
    return `https://www.youtube.com/embed/${videoId}?autoplay=1` || '';
  }, [videoId]);
  const iframeRef = useRef(null);

  return (
    <div className={`${styles.youtubeVideo} ${styles.modalContent}`}>
      <iframe
        src={youtubePath}
        width="100%"
        height="100%"
        frameBorder="0"
        allow="autoplay"
        title={title}
        ref={iframeRef}
      />
    </div>
  );
};

export default YoutubeVideoIframe;
