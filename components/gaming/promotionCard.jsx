import CardRoundedShadow from '../cardRoundedShadow';
import Link from 'next/link';
import Image from 'next/image';
import useScrollTrigger from '../home/utils/hooks/useScrollTrigger';
import gsap from 'gsap';
import React, { useEffect } from 'react';

export default function PromotionCard(props) {
  const [sectionRef, childrenSelector] = useScrollTrigger();

  useEffect(() => {
    if (!sectionRef || !sectionRef.current) return;
    const cards = childrenSelector('[data-animation="background-card"]');

    cards.forEach((card, index) => {
      gsap
        .timeline({ scrollTrigger: { trigger: card, start: '0% 65%' } })
        .fromTo(
          card,
          { x: index % 2 ? 150 : -150, transformOrigin: '50% 20%', opacity: 0 },
          { duration: 0.65, x: 0, ease: 'Power4.InOut', opacity: 1 },
        );
    });
  }, []);

  return (
    <div ref={sectionRef}>
      <a href={props.bannerUrl ? props.bannerUrl : ''} className="my-8 cursor-pointer">
        {/* <div className="flex justify-center">
                    <div>
                        <img className="max-h-16" src={props.logo ? props.logo.url : ''} alt="" />
                    </div>
                </div>
                <div className="flex items-center flex-grow mt-4 font-medium text-center">
                    <div className="w-full">{props.previewTitle}</div>
                </div>
                <div className="mt-4 text-sm text-center">{props.date}</div>
                <div className="mt-4 text-center">
                    <Link href={"/promociones/" + props.slug}>
                        <a className="link" onClick={() => dataLayer.push(
                            {
                                event: 'trackEvent',
                                eventCategory: 'Web Arg',
                                eventAction: 'Pagina Promociones',
                                eventLabel: 'Boton Ver Mas'
                            })}>Ver mas</a>
                    </Link>
                </div> */}
        <div data-animation="background-card" className="md:w-10/12 mx-auto ">
          <a src="/test" className="hidden md:block rounded-2xl overflow-hidden">
            <Image
              layout="responsive"
              src={props.desktopImage.url}
              width={props.desktopImage.width}
              height={props.desktopImage.height}
              alt={props.description}
            />
          </a>
          <div className="block md:hidden rounded-2xl overflow-hidden">
            <Image
              layout="responsive"
              src={props.mobileImage.url}
              width={props.mobileImage.width}
              height={props.mobileImage.height}
              alt={props.description}
            />
          </div>
        </div>
      </a>
    </div>
  );
}
