import Slider from '../slider/slider';
import Image from "next/image";

export default function PromotionBannerSlider({banners}) {
    //const slides = [banners[0],banners[0],banners[0]]; // test for when there is only one banner
    if (!!banners && (banners.length > 1)) {
        return (
            <div className="sliderWithArrows">
                <Slider autoplaySpeed={5000} slidesToShow={1} infinite autoplay pauseOnHover arrows dots>
                    {
                        !!banners && banners.map( banner => (
                            <div key={ banner.description } className="w-full">
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
                        ))
                    }
                </Slider>
            </div>
        );
    }

    if (!!banners && (banners.length == 1)) {
        return (
            <> 
                <div className="w-full" onClick={ () => dataLayer.push(
                    { 
                    event: 'trackEvent',
                    eventCategory: 'Web Arg', 
                    eventAction: 'Pagina Promociones', 
                    eventLabel: 'Banner Header' 
                        }) }>
                    <div className="hidden md:block">
                        <Image 
                            layout="responsive"
                            src={ banners[0].desktopImage.url }
                            width={ banners[0].desktopImage.width }
                            height={ banners[0].desktopImage.height }
                            alt={ banners[0].description }
                        />
                    </div>

                    <div className="block md:hidden">
                        <Image 
                            layout="responsive"
                            src={ banners[0].mobileImage.url }
                            width={ banners[0].mobileImage.width }
                            height={ banners[0].mobileImage.height }
                            alt={ banners[0].description }
                        />
                    </div>
                </div> 
            </>
        );
    }

    else {
        return false;
    }
}