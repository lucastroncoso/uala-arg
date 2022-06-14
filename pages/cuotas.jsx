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
import PlayVideoButton from '../components/home/PlayVideoButton/PlayVideoButton';
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


export default function Cuotas(props) {

    return (
        <>
            <Head>
                <title>Ualá - Cuotas: créditos pensados para vos</title>
                <meta name="description" content="¡Recuperá la plata de tus consumos! Pasá a cuotas un consumo que ya hiciste, y te devolvemos la plata en el momento para que sigas disfrutando." />
            </Head>
            <Layout nav footer>
                <Hero
                    containerStyles="bg-blue-wave mt-12"
                    section="Cuotas"
                    title="Créditos pensados para vos"
                    subtitle="Te ofrecemos más crédito para lo que necesites de la forma más fácil, rápida y transparente."
                    button
                    buttonCopy="Descargar la app"
                    mobileLink="https://uala.onelink.me/tTSW/wb7qvehk"
                    qr="/assets/images/sectionsQr/AR-Cuotas.jpg"
                    img={<Image src="/assets/images/prestamos/hero-creditos.jpg" width={1389} height={1184} />}
                />

                <Container className="bg-blue-150">
                    <div className="grid grid-cols-2 w-full gap-8">
                        <div className="  border-b border-blue-50">
                            <a href="/prestamos"
                                className="w-full block text-center subtitle-blue md:px-20 outline-none text-blue-50">Préstamos</a>
                        </div>
                        <div className=" border-b border-blue-250">
                            <a href="/cuotas"
                                className="w-full block text-center subtitle-blue md:px-20 outline-none">Cuotas</a>
                        </div>
                    </div>
                </Container>


                <ImageItemsSection
                    reverse
                    pushImg="/assets/images/cuotas/push.png"
                    bg="bg-blue-degrade"
                    title="Podés tener tu plata de vuelta"
                    subtitle="Pasá a cuotas un pago que ya hiciste y te devolvemos la plata en el momento."
                    img={<Image src="/assets/images/cuotas/cuotas-otorgadas 1.webp" width={1389} height={1134} />}
                    items={[
                        <CardItem text="Podés pasar a cuotas compras, recargas o pagos de facturas."
                            img="/assets/images/prestamos/icono_prestamos.png" />,
                        <CardItem text="La plata se deposita en el momento."
                            img="/assets/images/prestamos/icono-depositar-plata.png" />]}
                />
                <Container className="md:mt-12 mt-10">
                    <h2 className="title-2 text-center mb-6">¿Cómo pasar un consumo a cuotas?</h2>
                    <p className="text-center subtitle-2 mx-8 md:mx-20">Buscá los consumos que tengan un círculo verde en la home y seleccioná el que quieras pasar a cuotas. Conocé más en el siguiente video.</p>
                    <a className="hidden md:block" href="https://www.youtube.com/watch?v=cZJ9ki4-ZmU" target="_blank">
                        <PlayVideoButton
                            youtubeId="cZJ9ki4-ZmU"
                            previewVideoSrc="/assets/video/thumbnail-cuotas-desktop.mp4"
                            isPreviewVideoScaled={false}
                        />
                    </a>
                    <a className="block md:hidden" href="https://www.youtube.com/watch?v=cZJ9ki4-ZmU" target="_blank">
                        <PlayVideoButton
                            youtubeId="cZJ9ki4-ZmU"
                            previewVideoSrc="/assets/video/thumbnail-cuotas-317x329px.mp4"
                            isPreviewVideoScaled={false}
                        />
                    </a>
                </Container>
                <div className="md:-mt-10">
                    <ImageItemsSection
                        reverse
                        title="Servicios en cuotas"
                        subtitle="Podés pagar un servicio habilitado en cuotas con tu línea de crédito sin necesidad de tener plata en la cuenta de Ualá."
                        img={<Image src="/assets/images/cuotas/cuotas-servicios 1.webp" width={1389} height={1134} />}

                    />
                </div>
                <ImageItemsSection
                    title="Podés tener el control de los pagos"
                    img={<Image src="/assets/images/prestamos/Mask Group (24).webp" width={1389} height={1134} />}
                    items={[
                        <CardItem text="Elegí en cuántas cuotas querés pagarlo."
                            img="/assets/images/prestamos/icono-cuotas.png" />,
                        <CardItem text="Decidí qué día del mes hacer los pagos."
                            img="/assets/images/prestamos/icono_diadepago.png" />,
                        <CardItem text="Cancelá la deuda cuando quieras."
                            img="/assets/images/prestamos/icono_cancelar.png" />]}
                />

                <Container className="mt-12">
                    <div className=" mx-auto shadow-blue md:p-16 p-8 rounded-2xl">
                        <h2 className="title-3">¿Cuáles son los requisitos para cuotificar con Ualá?</h2>
                        <div className="grid md:grid-cols-2">
                            <ol>
                                <li className="pt-4">1. Ser ciudadano argentino o residente en el país. </li>
                                <li className="pt-4">2. Tener 18 años o más.</li>
                                <li className="pt-4">3. No tener deudas con atrasos registradas en los últimos 24 meses.</li>
                            </ol>
                        </div>
                    </div>
                </Container>
                <FaqsInSections section="cuotas" title="Preguntas frecuentes sobre los consumos en cuotas" response={props.response}/>
                <Legal main="La funcionalidad Cuotificación está disponible únicamente para usuarios seleccionados. La Tasa Nominal Anual (TNA), la Tasa Efectiva Anual (TEA) y el Costo Financiero Total (CFT) varían según el perfil crediticio del solicitante del préstamo y plazo elegido. Todos los préstamos son a tasa fija, en pesos y otorgados bajo el sistema de amortización francés con cuotas mensuales y consecutivas. En todos los casos la TNA, TEA y el CFT aplicable serán informados antes de la aceptación de la oferta de préstamo por parte del solicitante. TNA: Mínima: 89,17% - Máxima 114,16%. TEA: Mínima: 136,35% - Máxima 197,57%. El otorgamiento del crédito y la cantidad de cuotas disponibles para cada usuario están sujetos a evaluación crediticia."
                    secondary="Costo Financiero Total: Mínimo: 185,07% - Máximo 279,70%."
                />



            </Layout>
        </>
    )

}