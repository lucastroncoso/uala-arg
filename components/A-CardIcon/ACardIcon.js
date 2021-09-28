import React from 'react';
import PropTypes from 'prop-types';

const svgContext = require.context('../../public/assets/svg/?inline', false, /\.svg/);

const ACardIcon = ({ icoName, className }) => {
  return (
    <span className={className}>
      {React.createElement(svgContext(`./${icoName}.svg`).default)}
    </span>
  );
};

ACardIcon.propTypes = {
  iconName: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ACardIcon;