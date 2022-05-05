import Container from "../container";
import parser from 'bbcode-to-react';
import Image from "next/image";
import styles from "../../pages/gamingpass/gamingpass.module.css"



export default function LogoGamingpass(props) {
    return (
      <div id={styles.gridBack}>
        <Container className={props.containerStyles || "md:min-h-screen "}>
            <div className="  lg:mb-20 lg:mt-48 md:mb-0 mt-40  lg:mb-12 flex justify-center items-center flex-col  	">
        <Image src="/assets/images/gamingpass/Logo/logo_GamingPass.webp" width={486} height={279} />
        <h1 className="text-white lg:text-3xl text-2xl  font-semibold  lg:w-2/3 text-center my-14">La primera suscripción<br/> pensada 100% para gamers</h1>
                <div className="flex items-center justify-center md:order-none order-1 " >
                    <div className="rounded-3xl overflow-hidden flex">
                        {props.img}
                    </div>
                </div>
            </div>
        </Container>
        </div>
    );
}