import Hero from "../components/hero";
import Card from "../components/card";
import CardSection from "../components/cardSection";
import Layout from "../components/layout";
import VideoTitle from "../components/videoTitle";
import Head from 'next/head';
import Image from "next/image";
import PlayVideoButton from '../components/home/PlayVideoButton/PlayVideoButton';
import Container from "../components/container";

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
                <Container className="md:my-12 my-12">
                    <h2 className="title-2 text-center mb-6">¿Cómo pagar tus factuas?</h2>
                    <a className="hidden md:block" href="https://www.youtube.com/watch?v=CAd2AnOTsBU" target="_blank">
                        <PlayVideoButton
                            youtubeId="CAd2AnOTsBU"
                            previewVideoSrc="/assets/video/thumbnail-pagos-desktop.mp4"
                            isPreviewVideoScaled={false}
                        />
                    </a>
                    <a className="block md:hidden" href="https://www.youtube.com/watch?v=CAd2AnOTsBU" target="_blank">
                        <PlayVideoButton
                            youtubeId="CAd2AnOTsBU"
                            previewVideoSrc="/assets/video/thumbnail-pagos-317x329px.mp4"
                            isPreviewVideoScaled={false}
                        />
                    </a>
                </Container>
            </Layout>
        </>
    )

}