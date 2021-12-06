import { useState } from "react"
import Container from "../components/container";
import Hero from "../components/hero";
import CardItem from "../components/cardItem";
import ImageItemsSection from "../components/imageItemsSection";
import VideoTitle from "../components/videoTitle";
import Layout from "../components/layout";
import Head from 'next/head';
import Image from "next/image";


export default function Prestamos(props) {
    const [page, pageSet] = useState("prestamos")
    const handleClick = function (page) {
        pageSet(page)
    }

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
                    subtitle="Rápido, seguro y 100% online."
                    img={<Image src="/assets/images/prestamos/Rectangle 153.png" width={542} height={400} />}
                />

                <Container className="bg-blue-150">
                    <div className="grid grid-cols-2 w-full gap-8">
                        <div className="  border-b border-blue-250">
                            <button onClick={() => handleClick("prestamos")}
                                className=" w-full block text-center subtitle-blue px-20 outline-none">Préstamos</button>
                        </div>
                        <div className=" border-b border-blue-250">
                            <button onClick={() => handleClick("cuotas")}
                                className=" w-full block text-center subtitle-blue px-20 outline-none">Pasar a Cuotas</button>
                        </div>
                    </div>
                </Container>

                {page === "prestamos" ?
                    <div>
                        <ImageItemsSection
                            reverse
                            bg="bg-blue-degrade"
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
                        <VideoTitle title="¿Cómo cargar tu Ualá?"
                            imgDesktop={<Image src="/assets/images/tarjeta/thumbnail_cargar_destkop.png" width={2453} height={1273} />}
                            imgMobile={<Image src="/assets/images/tarjeta/thumbnail_cargar_mobile.png" width={661} height={687} />}
                        />
                    </div> :
                    <div>
                        <ImageItemsSection
                            reverse
                            bg="bg-blue-degrade"
                            title="Podés tener tu plata de vuelta"
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
                }




            </Layout>
        </>
    )

}