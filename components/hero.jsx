import Container from "./container";
import parser from 'bbcode-to-react';
import useScrollTrigger from "../components/home/utils/hooks/useScrollTrigger"
import gsap from 'gsap';
import { useEffect } from 'react';
import useIsMobile from './home/utils/hooks/useIsMobile';




export default function Hero(props) {
   const [sectionRef, childrenSelector, createTL] = useScrollTrigger();
    const isMobile = useIsMobile(480) 


    useEffect(() => {
    if (!sectionRef || !sectionRef.current) return;

    const animateItems = childrenSelector('[data-animation="animate-item"]');
    const title = childrenSelector('[data-animation="title"]');
    const titleTl = gsap.timeline({ paused: true });

    const tl = createTL({
      scrub: 1,
      onEnter: () => titleTl.play(),
      start: '0% 70%',
    });

    titleTl.fromTo(
      title,
      { scaleY: 0, transformOrigin: '0% 100%' },
      { scaleY: 1, duration: 0.3, ease: 'power4.out' },
      0,
    );

    const direction =  (index) => {
      let number = isMobile?30:150
      
      if (props.reverse) {
 return   index % 2 ? -number : number
      } else {
         return   index % 2 ? number : -number
      }    
    }

    animateItems.forEach((card, index) => {
      gsap
        .timeline({ scrollTrigger: { trigger: card, start: '0% 100%' } })
        .fromTo(
          card,
          { x:direction(index) , transformOrigin: '50% 20%', opacity: 0 },
          { duration: 0.65, x: 0, ease: 'Power4.InOut', opacity: 1 },
        );
    });
  }, [isMobile]);


    return (
        <Container className={props.containerStyles || "bg-coral-wave md:min-h-screen"}>
            <div   ref={sectionRef} className="grid lg:mb-20 lg:mt-24 md:mb-0 mt-20 mb-12 md:grid-cols-2">
                <div    data-animation="animate-item"
 className="flex flex-wrap content-center mb-12 md:order-none order-1 md:mt-0 mt-8">
                    <div className="w-full">
                        <p className="text-xl w-5/6 ">
                            <div className="">{props.section}</div>
                        </p>
                    </div>
                    <div className="w-full">
                        <h1 className="title-1 md:w-5/6 mt-4">
                            {props.title}
                        </h1>
                    </div>
                    <div className="w-full mt-4">
                        <h2 className="md:w-5/6 subtitle-1 ">
                            {parser.toReact(props.subtitle)}
                        </h2>

                    </div>
                </div>
                <div    data-animation="animate-item"
 className="flex items-center justify-center md:order-none order-2 " >
                    <div className="rounded-3xl overflow-hidden flex">
                        {props.img}
                    </div>
                </div>
            </div>
        </Container>
    );
}
