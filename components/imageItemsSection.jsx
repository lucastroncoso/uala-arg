import Container from "./container";


export default function ImageItemsSection(props) {
    return (
        <Container className={props.bg}>
            <div className="grid md:my-24 my-12 lg:grid-cols-2 items-center gap-16 justify-items-center">

                <div className={props.reverse ? "order-2" : "order-2 lg:order-none"}>
                    {props.img}
                </div>

                <div className="flex flex-col items-center  order-1">
                    <div>
                        <div className="mb-4 title-3">{props.title}</div>
                        <div className="title-4">{props.subtitle}</div>
                    </div>
                    <div className="flex flex-col justify-around h-full">
                        {props.items && props.items.map((i) => i)}
                    </div>


                </div>
            </div>
        </Container>
    );
}
