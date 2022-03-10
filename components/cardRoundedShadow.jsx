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
  hasTitle: PropTypes.bool,
  hasText: PropTypes.bool,
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
  flexColumns: true,
  hasTitle: false,
  hasText: false,
  hasLink: false,
  titleText: 'Titular',
  text: 'Bajada en texto. Puede contener hasta 5 línas de texto. Bajada en texto. Puede contener hasta 5 línas de texto.',
  linkText: 'Texto del link',
  showImage: true,
  shadowColor: 'lightblue',
  roundXl: false,
  image: '/assets/images/storybook/iconExample.png',
  link: '/',
};
