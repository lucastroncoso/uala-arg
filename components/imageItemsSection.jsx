import PropTypes from 'prop-types';
import Container from "./container";

export default function ImageItemsSection({bg, href, reverse, img, pushImg, title, subtitle, items, ...props}) {
    return (
        <Container className={bg}>
            <a target="_blank" href={href}>
                <div className="grid md:my-24 my-12 lg:grid-cols-2 items-center gap-16 justify-items-center relative">
                    <div className={reverse ? "order-2 rounded-3xl flex relative" : "order-2 lg:order-none rounded-3xl flex relative"}>
                        <div className={reverse ? "order-2 rounded-3xl overflow-hidden flex" : "order-2 lg:order-none rounded-3xl overflow-hidden flex"}>
                            {img}
                        </div>
                        {pushImg &&
                            <div>
                                <img src={pushImg} style={{ height: "112px" }} alt="" className=" lg:bottom-8 lg:-left-24 -bottom-4 hidden lg:flex absolute" />
                                <img src={pushImg} style={{ height: "78px" }} alt="" className="absolute lg:bottom-8 lg:-left-24 -bottom-2 lg:hidden left-2/4 transform -translate-x-1/2 " />
                            </div>
                        }
                    </div>
                    <div className="flex flex-col  order-1 ">
                        <div>
                            {title && <div className="mb-4 title-2">{title}</div>}
                            {subtitle && <div className="subtitle-2">{subtitle}</div>}
                        </div>
                        <div className="flex flex-col justify-around h-full lg:mr-12">
                            {items && items.map((i) => i)}
                        </div>
                    </div>

                </div>
            </a>
        </Container>
    );
}

ImageItemsSection.propTypes = {
    /**
     * Background style
     */
     bg: PropTypes.string,
    /**
     * Link URL
     */
     href: PropTypes.string,
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
     * PushImage src
     */
      pushImg: PropTypes.string,
    /**
     * Are the columns reversed on mobile?
     */
     reverse: PropTypes.bool,
    /**
     * Items to show
     */
     items: PropTypes.arrayOf(PropTypes.element),
};