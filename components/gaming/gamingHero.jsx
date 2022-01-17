import Container from "../container";
import parser from 'bbcode-to-react';


export default function GamingHero(props) {
    return (
        <Container className={props.containerStyles || "md:min-h-screen"}>
            <div className="grid lg:mb-20 lg:mt-24 md:mb-0 mt-10 mb-12 md:grid-cols-2 flex flex-wrap-reverse">
                <div className="flex flex-wrap content-center mb-12 md:order-none md:mt-0 mt-8">
                    <div className="w-full">
                        <p className="text-xl w-5/6 text-white">
                            <div className="">{props.section}</div>
                        </p>
                    </div>
                    <div className="w-full">
                        <h1 className="title-gaming-1 md:w-5/6 mt-4">
                            <div className="">{props.title1}<br/>{props.title2}</div>
                        </h1>
                    </div>
                    <div className="w-full mt-4">
                        <div className="md:w-5/6 subtitle-gaming-1">
                            {parser.toReact(props.subtitle)}
                        </div>

                    </div>
                </div>
                <div className="flex items-center justify-center md:order-none order-1 " >
                    <div className="rounded-3xl overflow-hidden flex">
                        {props.img}
                    </div>
                </div>
            </div>
        </Container>
    );
}