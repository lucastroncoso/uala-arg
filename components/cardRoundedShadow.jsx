import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';

/**
 * UI component for cards with rounded borders and shadow all around
 */
export default function CardRoundedShadow({
  titleText,
  text,
  hasTitle,
  hasText,
  linkText,
  link,
  showImage,
  hasLink,
  image,
  shadowColor,
  roundXl,
  flexColumns,
  className,
  ...props
}) {
  return (
    <div
      className={`flex ${
        flexColumns ? 'flex-col w-80' : ' items-center  w-1/2		'
      }  m-4 border border-gray-100 shadow-${shadowColor} ${
        roundXl ? 'rounded-3xl' : 'rounded-xl'
      } ${className} 	`}
    >
      {showImage && (
        <div>
          <Image
            src={image}
            alt="image"
            width={flexColumns ? 100 : 80}
            height={flexColumns ? 100 : 80}
          />
        </div>
      )}

      <div className="">
        {hasTitle && (
          <p className={` text-2xl    ${flexColumns ? '' : 'ml-5 bold'} `}>{titleText}</p>
        )}
        {hasText && <p className="text-sm">{text}</p>}
        {hasLink && (
          <div>
            <Link href={link}>
              <a className="inline   underline text-blue-50 text-sm">{linkText}</a>
            </Link>
          </div>
        )}
      </div>

      {props.children}
    </div>
  );
}

CardRoundedShadow.propTypes = {
  flexColumns: PropTypes.bool,
  showImage: PropTypes.bool,
  image: PropTypes.string,
  hasTitle: PropTypes.bool,
  titleText: PropTypes.string,
  hasText: PropTypes.bool,
  text: PropTypes.string,
  hasLink: PropTypes.bool,
  linkText: PropTypes.string,
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
  flexColumns: true,
  showImage: true,
  image: '/assets/images/storybook/iconExample.png',
  hasTitle: false,
  titleText: 'Titular',
  hasText: false,
  text: 'Bajada en texto. Puede contener hasta 5 línas de texto. Bajada en texto. Puede contener hasta 5 línas de texto.',
  hasLink: false,
  linkText: 'Texto del link',
  link: '/',
  shadowColor: 'lightblue',
  roundXl: false,
};
