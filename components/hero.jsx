import PropTypes from 'prop-types';
import Container from "./container";
import parser from 'bbcode-to-react';

export default function Hero({containerStyles, section, title, subtitle, img, reversed, ...props}) {
    return (
        <Container className={containerStyles || "bg-coral-wave md:min-h-screen"}>
            <div className="grid lg:mb-20 lg:mt-24 md:mb-0 mt-20 mb-12 md:grid-cols-2">
                <div className={`flex flex-wrap content-center mb-12 md:order-none ${reversed? 'order-2' : 'order-1'} md:mt-0 mt-8`}>
                    <div className="w-full">
                        <p className="text-xl w-5/6 ">
                            <div className="">{section}</div>
                        </p>
                    </div>
                    <div className="w-full">
                        <h1 className="title-1 md:w-5/6 mt-4">
                            <div className="">{title}</div>
                        </h1>
                    </div>
                    <div className="w-full mt-4">
                        <div className="md:w-5/6 subtitle-1 ">
                            {parser.toReact(subtitle)}
                        </div>

                    </div>
                </div>
                <div className={`flex items-center justify-center md:order-none ${reversed? 'order-1' : 'order-2'}`} >
                    <div className="rounded-3xl overflow-hidden flex">
                        {img}
                    </div>
                </div>
            </div>
        </Container>
    );
}


Hero.propTypes = {
    /**
     * Container styles
     */
     containerStyles: PropTypes.string,
    /**
     * Name of the section
     */
     section: PropTypes.string,
    /**
     * Name of the page
     */
     title: PropTypes.string,
    /**
     * Subtitle
     */
     subtitle: PropTypes.string,
    /**
     * Image
     */
     img: PropTypes.element,
    /**
     * Is the image first on mobile?
     */
     reversed: PropTypes.bool,
};
