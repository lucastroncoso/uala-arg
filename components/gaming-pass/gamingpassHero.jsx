import Container from "../container";
import parser from 'bbcode-to-react';
import styles from "../../pages/gaming-pass/gaming-pass.module.css"


export default function GamingpassHero(props) {
    return (
      <div   >
        <Container className={props.containerStyles}>
            <div className=" grid lg:mb-20 md:mb-0 mt-10 mb-12 md:grid-cols-2 flex ">
                <div className="flex items-center justify-center md:order-none order-1 " >
                    <div className="rounded-3xl overflow-hidden flex lg:mr-14">
                        {props.img}
                    </div>
                </div>
                <div className="flex flex-wrap content-center mb-12 md:order-none  order-2 md:mt-0 lg:mt-8">
                    <div className="w-full">
                        <p className="text-xl w-5/6 text-white">
                            <div className="">{props.section}</div>
                        </p>
                    </div>
                    <div className="w-full">
                        <h2 className=" text-white lg:text-3xl  text-2xl text-center lg:text-left font-semibold leading-snug mt-4">
                            <div className="">{props.title1}<br/>{props.title2}</div>
                        </h2>
                           <h2 className=" lg:text-left text-center text-red-350 lg:text-3xl  text-xl font-semibold leading-snug my-4">
                          {props.title3}
                        </h2>
                    </div>
                    <div className="w-full">
                        <div className="md:w-5/6 subtitle-gaming-1 lg:text-left text-center">
                            {parser.toReact(props.subtitle)}
                        </div>

                    </div>
                </div>
              
            </div>
            
        </Container>
        </div>
    );
}