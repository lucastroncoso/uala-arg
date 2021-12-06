import Container from "./container";



export default function Hero(props) {
    return (
        <Container className={props.containerStyles || "bg-coral-wave md:min-h-screen"}>
            <div className="grid md:my-24 mt-20 mb-12 md:grid-cols-2">
                <div className="flex flex-wrap content-center mb-12 md:order-none order-2">
                    <div className="w-full">
                        <p className="text-xl w-5/6 ">
                            <div className="">{props.section}</div>
                        </p>
                    </div>
                    <div className="w-full">
                        <h1 className="title-1 md:w-5/6">
                            <div className="">{props.title}</div>
                        </h1>
                    </div>
                    <div className="w-full mt-4">
                        <div className="md:w-2/3 subtitle-1 ">
                            {props.subtitle}
                        </div>

                    </div>
                </div>
                <div className="flex items-center justify-center md:order-none order-1" >
                    <div>
                        {props.img}
                    </div>
                </div>
            </div>
        </Container>
    );
}
