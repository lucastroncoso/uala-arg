import React from 'react';
import styles from './MSubMenu.module.scss';
import classNames from 'classnames'
import PropTypes from 'prop-types';

const MSubMenu = ({ content, isOpen, isWrapped }) => {
  return (
    <ul className={classNames(
      styles.subMenu,
      { [styles.isOpen]: isOpen },
      { [styles.isWrapped]: isWrapped }
    )}>
      {content && content.map((item, itemIndex) => {
        return (
          <li key={`subItem-${itemIndex}`} className={styles.item}>
            <a target={item.target} href={item.url}>{item.copy}</a>
          </li>
        )
      })}
    </ul>
  )
};

MSubMenu.propTypes = {
  content: PropTypes.array.isRequired,
  isOpen: PropTypes.bool,
  isWrapped: PropTypes.bool,
};

export default MSubMenu;