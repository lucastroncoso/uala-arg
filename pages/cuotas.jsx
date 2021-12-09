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



export default function Cuotas(props) {

    return (
        <>
            <Head>
                <title>Ualá</title>
            </Head>
            <Layout nav footer>
                <Hero
                    containerStyles="bg-blue-wave mt-12"
                    section="Créditos"
                    title="Créditos pensados para vos"
                    subtitle="Te ofrecemos más crédito para lo que necesites de la forma más fácil, rápido y transparente."
                    img={<Image src="/assets/images/prestamos/Rectangle 153.png" width={542} height={400} />}
                />

                <Container className="bg-blue-150">
                    <div className="grid grid-cols-2 w-full gap-8">
                        <div className="  border-b border-blue-250">
                            <a href="/prestamos"
                                className="w-full block text-center subtitle-blue md:px-20 outline-none text-blue-50">Préstamos</a>
                        </div>
                        <div className=" border-b border-blue-50">
                            <a href="/cuotas"
                                className="w-full block text-center subtitle-blue md:px-20 outline-none">Pasar a Cuotas</a>
                        </div>
                    </div>
                </Container>


                <ImageItemsSection
                    reverse
                    bg="bg-blue-degrade"
                    title="Podés tener tu plata de vuelta"
                    subtitle="Pasá a cuotas un pago que ya hiciste y te devolvemos la plata en el momento."
                    img={<Image src="/assets/images/cuotas/cuotas-otorgadas 1.png" width={1389} height={1134} />}
                    items={[
                        <CardItem text="Podés pasar compras, recargas o pago de facturas."
                            img="/assets/images/prestamos/icono_prestamos.png" />,
                        <CardItem text="La plata se deposita en el momento."
                            img="/assets/images/prestamos/icono-depositar-plata.png" />]}
                />

                <VideoTitle title="¿Cómo pasar a cuotas?"
                    href="https://www.youtube.com/watch?v=cZJ9ki4-ZmU"
                    imgDesktop={<Image src="/assets/images/cuotas/thumbnail_prestamos_destkop 1 (1).png" width={2453} height={1273} />}
                    imgMobile={<Image src="/assets/images/cuotas/thumbnail_prestamos_mobile 2.png" width={661} height={687} />}
                />

                <ImageItemsSection
                    reverse
                    title="Servicios en cuotas"
                    subtitle="Podés pagar un servicio habilitado en cuotas con tu línea de crédito sin necesidad de tener plata en la cuenta de Ualá."
                    img={<Image src="/assets/images/cuotas/cuotas-servicios 1.png" width={1389} height={1134} />}

                />

                <ImageItemsSection
                    title="Podés tener el control de los pagos"
                    img={<Image src="/assets/images/prestamos/Mask Group (24).png" width={1389} height={1134} />}
                    items={[
                        <CardItem text="Elegí en cuántas cuotas querés pagarlo."
                            img="/assets/images/prestamos/icono-cuotas.png" />,
                        <CardItem text="Decidí qué día del mes hacer los pagos."
                            img="/assets/images/prestamos/icono_diadepago.png" />,
                        <CardItem text="Cancelá la deuda cuando quieras."
                            img="/assets/images/prestamos/icono_cancelar.png" />]}
                />

                <Container className="my-12">
                    <div className=" mx-auto shadow-blue md:p-16 p-8 rounded-2xl">
                        <h2 className="title-2">Requisitos para pedir un préstamo</h2>
                        <div className="grid md:grid-cols-2">
                            <ol>
                                <li className="pt-4">1. Ser ciudadano argentino o residente en el país. </li>
                                <li className="pt-4">2. Tener 18 años o más.</li>
                                <li className="pt-4">3. No tener deudas con atrasos registradas en los últimos 24 meses.</li>
                            </ol>
                        </div>
                    </div>
                </Container>

                <Legal main=" La funcionalidad de Créditos está disponible únicamente para usuarios seleccionados. La Tasa Nominal Anual (TNA), la Tasa Efectiva Anual (TEA) y el Costo
                    Financiero Total (CFT) varían según el perfil crediticio del solicitante del préstamo y plazo elegido. Todos los préstamos son a tasa fija, en pesos y otorgados bajo el sistema de amortización francés con cuotas mensuales y consecutivas. En todos los casos, la TNA, TEA y el CFT aplicable serán informados antes de la aceptación de la oferta de préstamo por parte del solicitante.
                    Tasa Nominal Anual (TNA): Mínima: 50,00% - Máxima 85,00%. Tasa Efectiva Anual (TEA): Mínima: 63,21% - Máxima 127,33%."
                    secondary="Costo Financiero Total: Mínimo: 95,86% - Máximo 247,91%"
                />


            </Layout>
        </>
    )

}