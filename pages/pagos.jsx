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
                    section="Pagos y recargas"
                    title="Todos tus pagos en un solo lugar"
                    subtitle="Recargá tus servicios prepagos, pagá tus facturas o cargá la SUBE gratis y sin moverte de tu casa."
                    img={<Image src="/assets/images/pagos/hero-pagosyrecargas.jpg" width={1084} height={834} />}
                />


                <CardSection className="bg-red-degrade">
                    <Card img="/assets/images/pagos/icono-recarga-celular.png"
                        title="Recargá tu celular o TV"
                        text="Usá tus servicios prepagos sin límites.
                            Recargá saldo en tu celular o TV prepaga desde la app y se acredita en el acto."/>
                    <Card img="/assets/images/pagos/icono-pago-facturas.png"
                        title="Pagá tus facturas"
                        text="Hay más de 4.000 servicios disponibles
                        cuando quieras. Podés escanear la
                        factura o buscar por rubro o empresa."/>
                    <Card img="/assets/images/pagos/icono-recarga-SUBE.png"
                        title="Cargá tu SUBE"
                        text="No te quedes sin saldo en la SUBE. Cargala desde la app y acreditá el monto en una terminal automática SUBE o dispositivo de conexión móvil." />

                </CardSection>


                <VideoTitle title="¿Cómo pagar tus factuas?"
                    href="https://www.youtube.com/watch?v=CAd2AnOTsBU"
                    imgDesktop={<Image src="/assets/images/pagos/thumbnail_pagos_desktop.png" width={2453} height={1273} />}
                    imgMobile={<Image src="/assets/images/pagos/thumbnail_pagos_mobile.png" width={661} height={687} />}
                />





            </Layout>
        </>
    )

}