import PropTypes from 'prop-types';

/**
 * UI component for cards with rounded borders and shadow all around
 */
export default function CardRoundedShadow({ className, shadowColor, roundXl, width, ...props }) {
  return (
    <div
      className={`flex flex-col  m-4 border border-gray-100 shadow-${shadowColor} ${
        roundXl ? 'rounded-3xl' : 'rounded-xl'
      } ${className} 	w-${width}`}
    >
      {props.children}
    </div>
  );
}

CardRoundedShadow.propTypes = {
  width: PropTypes.oneOf(['80', '1/2', 'auto']),
  /**
   * What classes to use
   */
  roundXl: PropTypes.bool,
  /**
   * What classes to use
   */
  className: PropTypes.string,
  /**
   * What color should the shadow be?
   */
  shadowColor: PropTypes.oneOf(['lightblue', 'blue']),
};

CardRoundedShadow.defaultProps = {
  width: 'auto',
  shadowColor: 'lightblue',
  roundXl: false,
  className: PropTypes.string,
};
