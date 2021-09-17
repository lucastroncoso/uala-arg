import styles from './BlockWrapper.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const BlockWrapper = ({ children, customClass }) => {
  return (
    <div className={classNames(styles.blockWrapper, customClass && [...customClass])}>
      {children}
    </div>
  );
};

BlockWrapper.PropTypes = {
  children: PropTypes.node.isRequired,
  customClass: PropTypes.array,
};

export default BlockWrapper;
