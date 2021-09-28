import React from 'react';
import styles from './MHorizontalCard.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ACardIcon from '../A-CardIcon/ACardIcon';

const MHorizontalCard = ({ content, isTitleColorBlue, customClass, isHorizontalOnMobile }) => {
  return (
    <div className={classNames(
      styles.horizontalCard,
      customClass && [...customClass],
      { [styles.horizontalOnMobile]: isHorizontalOnMobile }
    )}>
      <div className={styles.iconWrapper}>
        <ACardIcon icoName={content.icon} className={styles.icon} />
      </div>

      <div className={styles.textWrapper}>
        <h4 className={classNames(styles.cardTitle, { [styles.isBlue]: isTitleColorBlue })}
        >
          {content.title}
        </h4>

        {content.copy && <p className={styles.paragraph}
          dangerouslySetInnerHTML={{ __html: content.copy }} />}
      </div>
    </div>
  )
};

MHorizontalCard.propTypes = {
  content: PropTypes.object.isRequired,
  isTitleColorblue: PropTypes.bool,
  customClass: PropTypes.array,
  isHorizontalOnMobile: PropTypes.bool,
}

export default MHorizontalCard;