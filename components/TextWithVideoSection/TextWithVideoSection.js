import React, { useEffect } from 'react';
import styles from './TextWithVideoSection.module.scss';
import PropTypes from 'prop-types';
import BlockWrapper from '../BlockWrapper/BlockWrapper';
import PreviewVideo from '../PreviewVideo/PreviewVideo';
import useScrollTrigger from '../utils/hooks/useScrollTrigger';

const TextWithVideoSection = ({ content }) => {
  const [sectionRef, childrenSelector, createTL] = useScrollTrigger();

  useEffect(() => {
    const textElement = childrenSelector('[data-animation="text"]');
    const titleElement = childrenSelector('[data-animation="title"]');
    const videoElement = childrenSelector('[data-animation="video"]');

    const tl = createTL({ start: '0% 50%' });

    tl.fromTo(
      titleElement,
      { scaleY: 0, transformOrigin: '0% 100%' },
      { scaleY: 1, duration: 0.3, ease: 'Power4.Out' },
      0,
    )
      .from(textElement, { autoAlpha: 0, y: 20 })
      .fromTo(
        videoElement,
        { 'clip-path': 'circle(0%)' },
        { 'clip-path': 'circle(100%)', duration: 1.25, ease: 'Sine.InOut' },
        '-=0.25',
      );
  }, []);
  return (
    <section className={styles.textWithImageSection} ref={sectionRef}>
      <BlockWrapper customClass={[styles.blockWrapper]}>
        <div className={styles.textWrapper}>
          <h3 data-animation="title" className={styles.title}>
            {content.title}
          </h3>
          <div data-animation="text" className={styles.paragraphsWrapper}>
            {content.paragraphs.map((paragraph, index) => {
              return <p dangerouslySetInnerHTML={{ __html: paragraph }} key={index} />;
            })}
          </div>
        </div>
        <div data-animation="video" className={styles.videoWrapper}>
          {/* This image is a placeholder until we get the video */}
          <div className={styles.video}>
            <PreviewVideo assetPath={`assets/video/chat_web_${content.region}.mp4`} />
          </div>
        </div>
      </BlockWrapper>
    </section>
  );
};

TextWithVideoSection.propTypes = {
  content: PropTypes.object.isRequired,
};

export default TextWithVideoSection;
