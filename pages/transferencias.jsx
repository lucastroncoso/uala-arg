import Container from "../components/container";
import Hero from "../components/hero";
import CardItem from "../components/cardItem";
import CardSmItem from "../components/cardSmItem";
import Card from "../components/card";
import CardSection from "../components/cardSection";
import Layout from "../components/layout";
import VideoTitle from "../components/videoTitle";
import Head from 'next/head';
import Image from "next/image";


export default function Pagos(props) {

    return (
        <>
            <Head>
                <title>Ualá</title>
            </Head>
            <Layout nav footer>
                <Hero
                    containerStyles="mt-12 bg-coral-wave"
                    section="Transferencias"
                    title="Transferí y recibí plata de tod@s"
                    subtitle="Enviá y recibí plata desde cualquier cuenta
                    bancaria y/o virtual, gratis y en el acto."
                    img={<Image src="/assets/images/transferencias/Hero_transferencias.jpg" width={1084} height={834} />}
                />

                <CardSection className="bg-red-degrade">
                    <Card img="/assets/images/transferencias/transferencias 1.png"
                        title="Transferencias entre usuarios"
                        text="Podés recibir o mandar plata a tus amig@s o familiares que tienen Ualá. Buscá su nombre de usuario en la sección “Transferencias” o escaneá el código de QR desde su app. Es gratis e instantáneo." />
                    <Card img="/assets/images/transferencias/SPEI 1.png"
                        title="Transferencias a cuentas bancarias y/o virtuales"
                        text="Podés recibir transferencias desde cualquier cuenta bancaria y/o virtual a tu CVU de Ualá. También podés mandar plata a otras cuentas desde la sección “Transferencias” de la app." />
                    <Card img="/assets/images/transferencias/SPEI 2.png"
                        title="Clave de seguridad"
                        text="Para hacer transferencias desde la app de Ualá necesitás la clave de 6 dígitos o clave de seguridad que creaste cuando validamos tu usuario. Si te la olvidaste podés recuperarla haciendo click en “Olvidé mi clave” antes de confirmar la transferencia o movimiento de plata." />

                </CardSection>


                <VideoTitle title="¿Cómo hacer transferencias?"
                    href="https://www.youtube.com/watch?v=YaH4MZUAlXA"
                    imgDesktop={<Image src="/assets/images/transferencias/thumbnail_transferencias_destkop.png" width={2453} height={1273} />}
                    imgMobile={<Image src="/assets/images/transferencias/thumbnail_transferencias_mobile.png" width={661} height={687} />}
                />

            </Layout>
        </>
    )

}