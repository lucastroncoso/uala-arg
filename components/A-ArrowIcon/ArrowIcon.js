import React from 'react';
import PropTypes from 'prop-types';

const ArrowIcon = ({ className }) => {
  return (
    <span className={className}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 7">
        <path
          d="M10.608 1.017L6.277 5.348a.303.303 0 01-.428 0l-4.332-4.33"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
};

ArrowIcon.propTypes = {
  className: PropTypes.string,
};

export default ArrowIcon;
