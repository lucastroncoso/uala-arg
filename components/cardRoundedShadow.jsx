import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';

/**
 * UI component for cards with rounded borders and shadow all around
 */
export default function CardRoundedShadow({
  titleText,
  text,
  linkText,
  link,
  showImage,
  hasLink,
  image,
  shadowColor,
  roundXl,
  className,
  ...props
}) {
  return (
    <div
      className={`flex flex-col m-4 border border-gray-100 shadow-${shadowColor} ${
        roundXl ? 'rounded-3xl' : 'rounded-xl'
      } ${className} w-80	`}
    >
      {showImage && (
        <div>
          <Image src={image} alt="image" width={100} height={100} />
        </div>
      )}
      <div className="grid grid-rows-3">
        <p className="text-2xl">{titleText}</p>
        <p>{text}</p>
        <div>
          {hasLink && (
            <Link href={link}>
              <a className="inline   underline text-blue-50">{linkText}</a>
            </Link>
          )}
        </div>
      </div>

      {props.children}
    </div>
  );
}

CardRoundedShadow.propTypes = {
  titleText: PropTypes.string,
  text: PropTypes.string,
  linkText: PropTypes.string,
  showImage: PropTypes.bool,
  image: PropTypes.string,
  hasLink: PropTypes.bool,
  link: PropTypes.string,
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
  hasLink: false,
  titleText: 'Titulo del texto',
  text: 'Texto',
  linkText: 'Texto del link',
  showImage: true,
  shadowColor: 'lightblue',
  roundXl: false,
  image: '/assets/images/storybook/iconExample.png',
  link: '/',
};
