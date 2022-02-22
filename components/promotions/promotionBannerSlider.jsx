import Slider from '../slider/slider';
import Image from "next/image";

const BannerSlide = ({banner}) => (
    <>
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
    </>
);

export default function PromotionBannerSlider({banners}) {
    const clickBanner = () => {
        dataLayer.push(
            { 
                event: 'trackEvent',
                eventCategory: 'Web Arg', 
                eventAction: 'Pagina Promociones', 
                eventLabel: 'Banner Header' 
            }
        );
    }

    if (!!banners && (banners.length > 1)) {
        return (
            <div className="SliderPromotionBanner">
                <Slider autoplaySpeed={5000} slidesToShow={1} infinite autoplay pauseOnHover arrows dots>
                    {
                        !!banners && banners.map( banner => {
                            if (!!banner.url) {
                                return (
                                    <a href={ banner.url } key={ banner.url } onClick={clickBanner} className="w-full" target="_blank" rel="noopener noreferrer">
                                        <BannerSlide banner={banner}/>
                                    </a> 
                                );
                            }
                            return (
                                <div key={ banner.description } className="w-full" onClick={clickBanner}>
                                    <BannerSlide banner={banner}/>
                                </div> 
                            );
                        })
                    }
                </Slider>
            </div>
        );
    }

    if (!!banners && (banners.length == 1)) {
        if (!!banners[0].url) {
            return (
                <a href={ banners[0].url } onClick={clickBanner} className="w-full" target="_blank" rel="noopener noreferrer">
                    <BannerSlide banner={banners[0]}/>
                </a> 
            );
        }
        return (
            <div className="w-full" onClick={clickBanner}>
                <BannerSlide banner={banners[0]}/>
            </div> 
        );
    }

    else {
        return false;
    }
}