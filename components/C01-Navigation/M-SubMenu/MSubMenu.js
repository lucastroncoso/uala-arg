import React from 'react';
import styles from './MSubMenu.module.scss';
import classNames from 'classnames'
import PropTypes from 'prop-types';

const MSubMenu = ({ content, isOpen }) => {
  return (
    <ul className={classNames(
      styles.subMenu,
      { [styles.isOpen]: isOpen }
    )}>
      {content && Object.keys(content).map((itemString, itemIndex) => {
        return (
          <li key={`subItem-${itemIndex}`} className={styles.item}>
            <a href={content[itemString]}>{itemString}</a>
          </li>
        )
      })}
    </ul>
  )
};

MSubMenu.propTypes = {
  content: PropTypes.object,
  isOpen: PropTypes.bool,
};

export default MSubMenu;