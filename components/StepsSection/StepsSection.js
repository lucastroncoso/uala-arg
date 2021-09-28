import React from 'react';
import styles from './StepsSection.module.scss';
import PropTypes from 'prop-types';
import BlockWrapper from '../BlockWrapper/BlockWrapper';
import DownloadAppButton from '../DownloadAppButton/DownloadAppButton';

const StepCard = ({ content }) => {
  return (
    <div className={styles.cardWrapper}>
      <h5>{content.index + 1}</h5>
      <p>{content.copy}</p>
    </div>
  );
};

const StepsSection = ({ content }) => {
  return (
    <section className={styles.stepsSection}>
      <BlockWrapper>
        <h3 className={styles.title}>{content.title}</h3>

        {content.stepsItems.map((item, index) => (
          <StepCard content={{ ...item, index }} />
        ))}
      </BlockWrapper>
    </section>
  );
};

StepsSection.propTypes = {
  content: PropTypes.object.isRequired,
};

export default StepsSection;
