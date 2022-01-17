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
                            {props.img ? props.img : <div className="items-center grid grid-cols-4 gap-6"><div className="bg-white rounded-2xl w-20 h-20 px-1 flex items-center"><Image src={props.image1} width={props.w1} height={props.h1} className="col-span-1"/></div><div className="bg-white rounded-2xl w-20 h-20 px-1 flex items-center"><Image src={props.image2} width={props.w2} height={props.h2} className="col-span-1 col-start-2"/></div><div className="bg-white rounded-2xl w-20 h-20 px-1 flex items-center"><Image src={props.image3} width={props.w3} height={props.h3} className="col-span-1 col-start-3"/></div><div className="bg-white rounded-2xl w-20 h-20 px-1 flex items-center"><Image src={props.image4} width={props.w4} height={props.h4} className="col-span-1 col-start-4"/></div></div>}
                        </div>
                        {props.pushImg &&
                            <div>
                                <img src={props.pushImg} style={{ height: "112px" }} alt="" className=" lg:bottom-8 lg:-left-24 -bottom-4 hidden lg:flex absolute" />
                                <img src={props.pushImg} style={{ height: "78px" }} alt="" className="absolute lg:bottom-8 lg:-left-24 -bottom-2 lg:hidden left-2/4 transform -translate-x-1/2 " />
                            </div>
                        }
                    </div>
                    <div className="flex flex-col  order-1 ">
                        <div>
                            {props.title && <div className="mb-4 title-gaming-2 text-white">{props.title}</div>}
                            {props.subtitle && <div className="subtitle-gaming-2 text-white">{props.subtitle}</div>}
                            {props.link && <Link href={props.href}><span className="subtitle-gaming-2 underline text-white">{props.link}</span></Link>}

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
