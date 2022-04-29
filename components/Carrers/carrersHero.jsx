import Container from "../container";
import Image from "next/image";

export default function CarrersHero(props) {
    return (
        <Container className={props.containerStyles || ""}>
            <div className="md:pt-14 grid md:mb-8 mt-12 mb-12 md:grid-cols-2 gap-12">
                <div className={props.reverse ? "flex flex-wrap content-center mb-12 md:order-1 order-1 md:mt-12 mt-8" : "flex flex-wrap content-center mb-12 md:order-2 order-1 md:mt-12 mt-8"}>
                    <div className="w-20 mb-3">
                        {props.image1}
                    </div>
                    <div className="w-full">
                        <h1 className="md:w-5/6 text-3xl font-medium text-gray-250">{props.title}</h1>
                    </div>
                    <div className="w-full mt-4">
                        <div className="md:w-5/6 text-base md:text-lg leading-8 text-gray-150">{props.subtitle}</div>
                    </div>
                    <div className="w-full mt-4">
                        <div   dangerouslySetInnerHTML={{ __html: props.subtitleFull }}className="md:w-6/6 text-base md:text-lg leading-8 text-gray-150"></div>
                    </div>
                </div>
                <div className={props.reverse ? "flex items-center justify-center md:order-2 order-2" : "flex items-center justify-center md:order-none order-2"} >
                    <div className="rounded-3xl overflow-hidden flex ">
                        <Image src={props.src2} width={props.w2} height={props.h2} />
                    </div>
                </div>
            </div>
        </Container>
    )
}