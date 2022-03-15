import Image from 'next/image';
import PropTypes from 'prop-types';

export default function ImageBanner({banner}) {

    return (
        <div className="w-full">
            <div className="hidden md:block">
                <Image 
                    layout="responsive"
                    src={ banner.desktopImage.url }
                    width={ banner.desktopImage.width }
                    height={ banner.desktopImage.height }
                    alt={ banner.description }
                />
            </div>

            <div className="block md:hidden">
                <Image 
                    layout="responsive"
                    src={ banner.mobileImage.url }
                    width={ banner.mobileImage.width }
                    height={ banner.mobileImage.height }
                    alt={ banner.description }
                />
            </div>
        </div> 
    );
}


ImageBanner.propTypes = {
    banner: PropTypes.shape({
        /**
         * Description of image, used as ALT attribute
         */
        description: PropTypes.string.isRequired,
        /**
         * Name of the section
         */
        desktopImage: PropTypes.shape({
            src: PropTypes.string.isRequired,
            width: PropTypes.number.isRequired,
            height: PropTypes.number.isRequired,
        }),
        /**
         * Name of the page
         */
        mobileImage: PropTypes.shape({
            src: PropTypes.string.isRequired,
            width: PropTypes.number.isRequired,
            height: PropTypes.number.isRequired,
        }),
    }),
};


ImageBanner.defaultProps = {
    banner: {
        description: "Homepage hero banner",
        desktopImage: {
          url: "https://images.ctfassets.net/t5yal6u1wvnw/5VY67Xb6l9EG2Zj69xIiZf/b2da9e39d2570444c4abb1ebef3b8f90/hero_web_corporativa-01_1.png",
          width: 2880,
          height: 1174
        },
        mobileImage: {
          url: "https://images.ctfassets.net/t5yal6u1wvnw/dM9XiYWSa0mK8XTdNKVuW/32a6e70001ba79feea2ed297e54d03d0/hero_web_corporativa-02_1.png",
          width: 750,
          height: 789
        }
    }
};
  