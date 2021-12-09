import { useState } from "react"
import Container from "../components/container";
import Hero from "../components/hero";
import CardItem from "../components/cardItem";
import ImageItemsSection from "../components/imageItemsSection";
import VideoTitle from "../components/videoTitle";
import Calculator from "../components/calculator";
import Legal from "../components/legal";
import Layout from "../components/layout";
import Head from 'next/head';
import Image from "next/image";



export default function Inversiones(props) {

    return (
        <>
            <Head>
                <title>Ualá</title>
            </Head>
            <Layout nav footer>
                <Hero
                    containerStyles="bg-blue-wave mt-12"
                    section="Inversiones"
                    title="Hacemos que invertir sea fácil"
                    subtitle="Despertá tu plata a través de Ualá y mirá los resultados todos los días."
                    img={<Image src="/assets/images/prestamos/Rectangle 153.png" width={542} height={400} />}
                />


                <ImageItemsSection
                    reverse
                    bg="bg-blue-degrade"

                    pushImg="/assets/images/inversiones/push.png"
                    img={<Image src="/assets/images/inversiones/inversiones-invertir 1.png" width={1389} height={1134} />}
                    items={[
                        <CardItem text="Invertí y libertá tu plata al instante
                        con un solo click."
                            img="/assets/images/inversiones/icono-inversiones.png" />,
                        <CardItem text="Desde $1 y sin límites de inversión."
                            img="/assets/images/inversiones/icono-plata.png" />,
                        <CardItem text="Conocé los resultados de tu inversión todos los días desde la app."
                            img="/assets/images/inversiones/icono-resultados.png" />]}
                />

                <VideoTitle title="¿Cómo invertir a través de Ualá?"
                    href="https://www.youtube.com/watch?v=12gi-FVZ97o"
                    imgDesktop={<Image src="/assets/images/inversiones/thumbnail_inversiones_destkop.png" width={2453} height={1273} />}
                    imgMobile={<Image src="/assets/images/inversiones/thumbnail_prestamos_mobile 2 (1).png" width={661} height={687} />}
                />

                <ImageItemsSection
                    title="Tené el control de tu plata"
                    img={<Image src="/assets/images/inversiones/inversiones-liberar 1.png" width={1389} height={1134} />}
                    items={[
                        <CardItem text="Podés liberar tu plata en el acto. A cualquier hora y en cualquier lugar."
                            img="/assets/images/inversiones/icono-liberar-plata.png" />,
                        <CardItem text="Sin costos ocultos."
                            img="/assets/images/inversiones/icono-sin-costos.png" />]}
                />

                <Container className="my-12">
                    <div className=" mx-auto shadow-blue md:p-16 p-8 rounded-2xl">
                        <h2 className="title-2">Pasos para invertir</h2>
                        <div className="">
                            <ol>
                                <li className="pt-4">1. Entrá en la sección "Inversiones" de la app y respondé algunas preguntas. </li>
                                <li className="pt-4">2. Elegí el monto que querés suscribir.</li>
                                <li className="pt-4">3. Mirá los resultados de tu inversión en 48hs hábiles.
</li>
                            </ol>
                        </div>
                    </div>
                </Container>




            </Layout>
        </>
    )

}