import Hero from "../components/hero";
import Card from "../components/card";
import CardSection from "../components/cardSection";
import Layout from "../components/layout";
import VideoTitle from "../components/videoTitle";
import Head from 'next/head';
import Image from "next/image";
import PlayVideoButton from '../components/home/PlayVideoButton/PlayVideoButton';
import Container from "../components/container";
import FaqsInSections from "../components/faqs/faqsInSections";
import { fetchContent } from '../utils/contentful'

export async function getStaticProps() {
    const response = await fetchContent(`
    {
        argentinaFaqCollection(order: [id_ASC], limit: 500) {
            items{
                categoryId {
                    faqCategoryId
                },
                id,
                question,
                answer
              section
            }
        }
    }    
    `);
  
    return {
      props: { response },
      revalidate: 10
    }
  }


export default function Pagos(props) {

    
    return (
        <>
            <Head>
                <title>Ualá - Pagos y recargas de servicios online</title>
                <meta name="description" content="Con la App de Ualá podés pagar todos los servicios online en Argentina: recargá tu celular, SUBE o TV y pagá tus facturas de forma online." />
            </Head>
            <Layout nav footer>
                <Hero
                    containerStyles="mt-12 bg-coral-wave"
                    section="Pagos y recargas"
                    title="Todos tus pagos en un mismo lugar"
                    subtitle="Recargá tus servicios prepagos, pagá tus facturas o cargá la SUBE gratis y sin moverte de tu casa."
                    img={<Image src="/assets/images/pagos/hero-pagosyrecargas.jpg" width={1084} height={834} />}
                />


                <CardSection className="bg-red-degrade">
                    <Card img="/assets/images/pagos/icono-recarga-celular.png"
                        title="Recargá tu celular o TV"
                        text="Usá tus servicios prepagos sin límites.
                        Recargá saldo en tu celular o TV prepaga de manera online desde la app y se acredita en el acto."/>
                    <Card img="/assets/images/pagos/icono-pago-facturas.png"
                        title="Pagá tus facturas online"
                        text="Hay más de 4.000 servicios disponibles
                        cuando quieras. Podés escanear la
                        factura o buscar por rubro o empresa."/>
                    <Card img="/assets/images/pagos/icono-recarga-SUBE.png"
                        title="Cargá tu SUBE"
                        text="No te quedes sin saldo en la SUBE. Cargala online desde la app y acreditá el monto en una terminal automática SUBE o dispositivo de conexión móvil." />

                </CardSection>
                <Container className="md:my-12 my-12">
                    <h2 className="title-2 text-center mb-6">¿Cómo pagar tus factuas?</h2>
                    <p className="text-center text-xl md:text-2xl mx-8 md:mx-20">Ingresá a la app y desde la sección "Pagos" vas a poder elegir entre más de 6 mil servicios diponibles. Mirá qué fácil es en el siguiente tutorial.</p>
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
                <FaqsInSections section="pagos" title="Preguntas frecuentes sobre los pagos onlines" response={props.response}/>
            </Layout>
        </>
    )

}