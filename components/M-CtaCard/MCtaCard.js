import React from 'react';
import styles from './MCtaCard.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ACardIcon from '../A-CardIcon/ACardIcon';

const MCtaCard = ({ content, customClass }) => {
  return (
    <a className={classNames(styles.card, customClass && [...customClass])}
      href={content.url}>
      <div className={styles.iconWrapper}>
        <ACardIcon icoName={content.icon} className={styles.icon} />
      </div>

      <h4 className={styles.cardTitle}>{content.title}</h4>

      <p className={styles.paragraph}>{content.copy}</p>

      <span className={styles.ctaCopy}>{content.ctaCopy}</span>
    </a>
  )
};

MCtaCard.propTypes = {
  content: PropTypes.object.isRequired,
  customClass: PropTypes.array,
}

export default MCtaCard;