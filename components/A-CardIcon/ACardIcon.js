import React from 'react';
import PropTypes from 'prop-types';

const svgContext = require.context('../../public/assets/svg/?inline', false, /\.svg/);

const ACardIcon = ({ iconName, className }) => {
  return (
    <span className={className}>
      {React.createElement(svgContext(`./${iconName}.svg`).default)}
    </span>
  );
};

ACardIcon.propTypes = {
  iconName: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ACardIcon;