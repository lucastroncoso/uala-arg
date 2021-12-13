import Container from "../components/container";
import Hero from "../components/hero";
import CardItem from "../components/cardItem";
import MapItemsSection from "../components/extracciones/mapItemsSection";
import Card from "../components/card";
import CardSection from "../components/cardSection";
import Layout from "../components/layout";
import VideoTitle from "../components/videoTitle";
import Head from 'next/head';
import Image from "next/image";


export default function Extracciones(props) {

    return (
        <>
            <Head>
                <title>Ualá</title>
            </Head>
            <Layout nav footer>
                <Hero
                    containerStyles="mt-12 bg-coral-wave-2"
                    section="Extracciones"
                    title="Sacá plata en todo el país"
                    subtitle="Podés extraer efectivo en cualquier sucursal de Rapipago o en cajeros de la red Link o Banelco."
                    img={<Image src="/assets/images/extracciones/extracciones-uala.jpg" width={1500} height={1295} />}
                />

                <CardSection className="bg-red-degrade">
                    <Card img="/assets/images/extracciones/Icono-extracciones-cajero.png"
                        title="Red Link o Banelco"
                        text="Para extraer plata en cualquier cajero, primero necesitás el PIN. Una clave de 4 dígitos que generás desde la sección “Tarjeta” de la app." >
                        <img src="/assets/images/extracciones/red-link 1.png" className="w-2/12 mr-4 inline" alt="" />
                        <img src="/assets/images/extracciones/banelco 1.png" className="w-5/12 inline" alt="" />
                    </Card>
                    <Card img="/assets/images/extracciones/Icono-extracciones-cajero.png"
                        title="Extraer en Rapipago"
                        text="Para extraer plata en una sucursal de Rapipago, primero necesitás generar un código de extracción desde la sección “Tarjeta” de la app." >
                        <img src="/assets/images/extracciones/rappipago.png" className="w-5/12 inline" alt="" />
                    </Card>
                    <Card img="/assets/images/transferencias/SPEI 2.png"
                        title="Montos de extracción"
                        text="Red Link: $8.500 cada 24hs.
                        Banelco: $8.500 cada 24hs.
                        Rapipago: Hasta dos extracciones de $15,000 por día y hasta 8 extracciones por mes." />

                </CardSection>

                <MapItemsSection
                    reverse
                    title="Dónde retirar efectivo"
                    subtitle="Podés retirar desde cualquier cajero automático de la red Link o Banelco y en las sucursales de Rapipago de todo el país."

                />


                <VideoTitle title="¿Cómo sacar plata del cajero?"
                    href="https://www.youtube.com/watch?v=YaH4MZUAlXAhttps://www.youtube.com/watch?v=08HLUarWD5Q"
                    imgDesktop={<Image src="/assets/images/extracciones/icono_extracciones_destkop.png" width={2453} height={1273} />}
                    imgMobile={<Image src="/assets/images/extracciones/icono_extracciones_mobile.png" width={661} height={687} />}
                />





            </Layout>
        </>
    )

}