import Container from "../container";
import Link from 'next/link';
import Image from "next/image";

export default function ImageItemsSectionGaming(props) {

    return (
        <>
        <Container className={props.bg}>
            <>
                <div className="grid md:my-24 my-12 lg:grid-cols-2 items-center gap-16 justify-items-center relative">
               
                        <div className={props.reverse ? "order-2 rounded-3xl flex relative" : "order-2 lg:order-none rounded-3xl flex relative"}>
                            <div className={(props.reverse && props.img) ? "order-2 rounded-3xl overflow-hidden flex" : "order-2 lg:order-none  overflow-hidden flex"}>
                                {props.img ? props.img : <div className="overflow-x-auto md:overflow-hidden items-center grid grid-cols-4 gap-6">
                                    {props.image1}
                                    {props.image2}
                                    {props.image3}
                                    {props.image4}
                                </div>
                                }
                            </div>
                            {props.pushImg &&
                                <div>
                                    <img src={props.pushImg} style={{ height: "112px" }} alt="" className=" lg:bottom-8 lg:-left-24 -bottom-4 hidden lg:flex absolute" />
                                    <img src={props.pushImg} style={{ height: "78px" }} alt="" className="absolute lg:bottom-8 lg:-left-24 -bottom-2 lg:hidden left-2/4 transform -translate-x-1/2 " />
                                </div>
                            }
                        </div>
                    <div className="flex flex-col order-1 ">
                        <div>
                            {props.title && <div className="mb-4 title-gaming-2 text-white">{props.title}</div>}
                            {props.subtitle && <div className="subtitle-gaming-2 text-white">{props.subtitle}</div>}
                            {props.link && <Link href={props.href}><button className="subtitle-gaming-2 underline text-white mt-4">{props.link}</button></Link>}

                        </div>
                        <div className="flex flex-col justify-around h-full lg:mr-12">
                            {props.items && props.items.map((i) => i)}
                        </div>
                    </div>

                </div>
            </>
        </Container>
        <div className={props.class}>{props.fullDiv}</div>
        </>
    );
}
