import Container from "./../container";
import { useState } from "react";



export default function ImageItemsSection(props) {
    const [map, setMap] = useState("rapipago")
    const handleClick = function (newMap) {
        setMap(newMap)
        console.log(newMap)
    }
    return (
        <Container className={props.bg}>
            <a target="_blank" href={props.href}>
                <div className="grid md:my-24 my-12 lg:grid-cols-2 items-center gap-8 justify-items-center relative">
                    <div className={props.reverse ? "order-2 rounded-3xl flex relative" : "order-2 lg:order-none rounded-3xl flex relative"}>
                        <div className={props.reverse ? "order-2 rounded-3xl overflow-hidden h-96 w-full lg:w-96" : "order-2 lg:order-none rounded-3xl overflow-hidden h-96 w-full lg:w-96"}>
                            {map === "rapipago" ? <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d51103.45233833307!2d-58.47704521197889!3d-34.610219270854834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1srapipago!5e0!3m2!1ses!2sar!4v1639420257311!5m2!1ses!2sar" width="100%" height="100%" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe> : ""}
                            {map === "banelco" ? <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d44243.221612618545!2d-58.44873431547112!3d-34.61305153732925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbanelco!5e0!3m2!1ses!2sar!4v1639426269974!5m2!1ses!2sar" width="100%" height="100%" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe> : ""}
                            {map === "link" ? <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d52538.454081546835!2d-58.44873433527754!3d-34.6129254674071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1slink!5e0!3m2!1ses!2sar!4v1639426319723!5m2!1ses!2sar" width="100%" height="100%" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe> : ""}
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
                            {props.title && <div className="mb-4 title-2">{props.title}</div>}
                            {props.subtitle && <div className="subtitle-2">{props.subtitle}</div>}
                        </div>
                        <div className="mt-8">
                            <button onClick={() => handleClick("link")} className="mr-6 outline-none subtitle-2 link">Red Link</button>
                            <button onClick={() => handleClick("banelco")} className="mr-6 outline-none subtitle-2 link">Banelco</button>
                            <button onClick={() => handleClick("rapipago")} className="mr-6 outline-none subtitle-2 link">Rapipago</button>
                        </div>
                    </div>

                </div>
            </a>
        </Container>
    );
}
