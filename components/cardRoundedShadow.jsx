import PropTypes from 'prop-types';

/**
 * UI component for cards with rounded borders and shadow all around
 */
export default function CardRoundedShadow({shadowColor, roundXl, className, ...props}) {

    return (
        <div className={`flex flex-col m-4 border border-gray-100 shadow-${shadowColor} ${ roundXl ? 'rounded-3xl' : 'rounded-xl' } ${className} `}>
            { props.children }
        </div>
    )
}


CardRoundedShadow.propTypes = {
    /**
     * Is this card very rounded?
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
    shadowColor: 'lightblue',
    roundXl: false,
};
  