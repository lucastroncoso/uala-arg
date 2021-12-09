import Container from "./container";


export default function ImageItemsSection(props) {
    return (
        <Container className={props.bg}>
            <a target="_blank" href={props.href}>
                <div className="grid md:my-24 my-12 lg:grid-cols-2 items-center gap-16 justify-items-center relative">
                    <div className={props.reverse ? "order-2 rounded-2xl overflow-hidden flex" : "order-2 lg:order-none rounded-2xl overflow-hidden flex"}>
                        {props.img}
                    </div>
                    <div className="flex flex-col  order-1 ">
                        <div>
                            <div className="mb-4 title-2">{props.title}</div>
                            <div className="subtitle-2">{props.subtitle}</div>
                        </div>
                        <div className="flex flex-col justify-around h-full">
                            {props.items && props.items.map((i) => i)}
                        </div>
                    </div>
                    {props.pushImg && <div className="absolute w-5/12 top-64 right-40">
                        <img src={props.pushImg} alt="" />
                    </div>}
                </div>
            </a>
        </Container>
    );
}
