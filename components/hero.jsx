import Container from "./container";
import parser from 'bbcode-to-react';




export default function Hero(props) {
    return (
        <Container className={props.containerStyles || "bg-coral-wave md:min-h-screen"}>
            <div className="grid lg:mb-20 lg:mt-24 md:mb-0 mt-20 mb-12 md:grid-cols-2">
                <div className="flex flex-wrap content-center mb-12 md:order-none order-1 md:mt-0 mt-8">
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
                <div className="flex items-center justify-center md:order-none order-2 " >
                    <div className="rounded-3xl overflow-hidden flex">
                        {props.img}
                    </div>
                </div>
            </div>
        </Container>
    );
}
