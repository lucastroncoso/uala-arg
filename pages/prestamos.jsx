import { useState } from "react"
import Container from "../components/container";
import Hero from "../components/hero";
import CardItem from "../components/card-item";
import ImageItemsSection from "../components/imageItemsSection";
import ImageItemsSectionSlider from "../components/imageItemsSectionSlider";
import Slider from "../components/slider/slider";
import Layout from "../components/layout";
import Head from 'next/head';
import Image from "next/image";


export default function Prestamos(props) {
    const [page, pageSet] = useState("prestamos")

    return (
        <>
            <Head>
                <title>Ualá</title>
            </Head>
            <Layout nav footer>
                <Hero
                    section="Créditos"
                    title="Créditos pensados para vos"
                    subtitle="Rápido, seguro y 100% online."
                    img={<Image src="/assets/images/prestamos/Rectangle 153.png" width={542} height={400} />}
                />
                <div className="overflow-hidden">
                    <Slider>

                        <div className="px-4">
                            <h3 className="block text-center title-2 border-b-2 border-blue-250 px-4">Préstamos</h3>
                            <ImageItemsSectionSlider
                                reverse
                                bg="bg-red-degrade"
                                title="Usalo como quieras"
                                subtitle="Pedilo desde la app y usalo para tu emprendimiento, un viaje, tu hogar o para comprar lo que quieras."
                                img={<Image src="/assets/images/prestamos/Mask Group (21).png" width={1852} height={1512} />}
                                items={[
                                    <CardItem text="Al registrarte contarás con una tarjeta digital para hacer compras online. "
                                        img="/assets/images/tarjeta/Icono compras.png" />,
                                    <CardItem text="Con chip, para que tu información esté más protegida que nunca."
                                        img="/assets/images/tarjeta/Icono chip.png" />,
                                    <CardItem text="Con tecnología conctacless para que tus compras sean mucho más seguras."
                                        img="/assets/images/tarjeta/Icono contactless.png" />]}
                            />
                        </div>
                        <div className="px-4">
                            <h3 className="block text-center title-2 border-b-2 border-blue-250 px-4">Pasar a Cuotas</h3>
                        </div>
                        <div className="px-4">
                            <h3 className="block text-center title-2 border-b-2 border-blue-250 px-4">Servicios en cuotas</h3>
                        </div>


                    </Slider>
                </div>


                <ImageItemsSection
                    reverse
                    bg="bg-red-degrade"
                    title="Usalo como quieras"
                    subtitle="Pedilo desde la app y usalo para tu emprendimiento, un viaje, tu hogar o para comprar lo que quieras."
                    img={<Image src="/assets/images/prestamos/Mask Group (21).png" width={1852} height={1512} />}
                    items={[
                        <CardItem text="Al registrarte contarás con una tarjeta digital para hacer compras online. "
                            img="/assets/images/tarjeta/Icono compras.png" />,
                        <CardItem text="Con chip, para que tu información esté más protegida que nunca."
                            img="/assets/images/tarjeta/Icono chip.png" />,
                        <CardItem text="Con tecnología conctacless para que tus compras sean mucho más seguras."
                            img="/assets/images/tarjeta/Icono contactless.png" />]}
                />




            </Layout>
        </>
    )

}