import React from 'react';
import styles from './TextWithVideoSection.module.scss';
import PropTypes from 'prop-types';
import BlockWrapper from '../BlockWrapper/BlockWrapper';
import PreviewVideo from '../PreviewVideo/PreviewVideo';

const TextWithVideoSection = ({ content }) => {
  return (
    <section className={styles.textWithImageSection}>
      <div className={styles.background}>
        <span className={styles.circle} />
        <span className={styles.circle} />
        <span className={styles.circle} />
      </div>
      <BlockWrapper customClass={[styles.blockWrapper]}>
        <div className={styles.textWrapper}>
          <h3 className={styles.title}>{content.title}</h3>
          <div className={styles.paragraphsWrapper}>
            {content.paragraphs.map((paragraph, index) => {
              return <p dangerouslySetInnerHTML={{ __html: paragraph }} key={index} />;
            })}
          </div>
        </div>
        <div className={styles.videoWrapper}>
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
