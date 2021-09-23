import React from 'react';
import PropTypes from 'prop-types';

const ArrowIcon = ({ className }) => {
  return (
    <span className={className}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 7">
        <path d="M10.608 1.017L6.277 5.348a.303.303 0 01-.428 0l-4.332-4.33" stroke-width="1.5" stroke="currentColor"
          fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </span>
  );
};

ArrowIcon.PropTypes = {
  className: PropTypes.string,
};

export default ArrowIcon;