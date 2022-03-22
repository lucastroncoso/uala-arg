import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import CardRoundedShadow from './cardRoundedShadow';

/**
 * UI component for cards with rounded borders and shadow all around
 */
export default function CardRoundedShadowStory({
  width,
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
    <CardRoundedShadow
      width={width}
      className={className}
      shadowColor={shadowColor}
      roundXl={roundXl}
    >
      <div className={`flex ${flexColumns ? 'flex-col' : ' items-center'}  m-4 	`}>
        {showImage && (
          <div className="flex justify-start items-center">
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
          {hasText && <p className={`${!flexColumns && 'ml-5'}  text-sm `}>{text}</p>}
          {hasLink && (
            <div>
              <Link href={link}>
                <a
                  className={`inline   underline text-blue-50 text-sm  ${!flexColumns && 'ml-5'}  `}
                >
                  {linkText}
                </a>
              </Link>
            </div>
          )}
        </div>

        {props.children}
      </div>
    </CardRoundedShadow>
  );
}

CardRoundedShadowStory.propTypes = {
  width: PropTypes.oneOf(['64', '80', '1/2', 'auto']),
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

CardRoundedShadowStory.defaultProps = {
  width: 'auto',
  flexColumns: true,
  showImage: false,
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
