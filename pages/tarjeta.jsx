import Container from "../components/container";
import Hero from "../components/hero";
import CardItem from "../components/card-item";
import ImageItemsSection from "../components/imageItemsSection";
import ImageTextItem from "../components/tarjeta/imageTextItem";
import Layout from "../components/layout";
import VideoTitle from "../components/videoTitle";
import Head from 'next/head';
import Image from "next/image";


export default function Tarjeta(props) {

    return (
        <>
            <Head>
                <title>Ualá</title>
            </Head>
            <Layout nav footer>
                <Hero
                    section="Compras"
                    title="Una tarjeta para tod@s y para todo"
                    subtitle="Compra en cualquier comercio o página web del mundo que acepte Mastercard."
                    img={<Image src="/assets/images/tarjeta/tarjeta-3D 1.png" width={2132} height={2304} />}
                />

                {/* La tarjeta */}
                <ImageItemsSection
                    bg="bg-red-degrade"
                    title="La tarjeta"
                    subtitle="Una tarjeta prepaga Mastercard internacional diseñada para tener la mejor experiencia de compra."
                    img={<Image src="/assets/images/tarjeta/_EZ_9830_alta 1 (3).png" width={500} height={500} />}
                    items={[
                        <CardItem text="Al registrarte contarás con una tarjeta digital para hacer compras online. "
                            img="/assets/images/tarjeta/Icono compras.png" />,
                        <CardItem text="Con chip, para que tu información esté más protegida que nunca."
                            img="/assets/images/tarjeta/Icono chip.png" />,
                        <CardItem text="Con tecnología conctacless para que tus compras sean mucho más seguras."
                            img="/assets/images/tarjeta/Icono contactless.png" />]}
                />

                <ImageItemsSection
                    reverse
                    title="Pagá con QR donde quieras"
                    subtitle="En cualquier comercio que tenga QR, escaneá con Ualá y pagá con la plata que tengas en la cuenta."
                    img={<Image src="/assets/images/tarjeta/imagen QR.png" width={1852} height={1512} />}
                    items={[
                        <CardItem text="Entrás en el menú “Más” de la app."
                            img="/assets/images/tarjeta/item-1.png" />,
                        <CardItem text="Elegís la opción “Pagar con QR”."
                            img="/assets/images/tarjeta/item-2.png" />,
                        <CardItem text="Escaneás el código del comercio en donde estés, y ¡listo!"
                            img="/assets/images/tarjeta/item-3.png" />]}
                />

                <ImageItemsSection

                    title="Cargá tu Ualá gratis"
                    subtitle="En efectivo o por transferencia. Es simple y rápido."
                    img={<Image src="/assets/images/tarjeta/Imagen Cargar.png" width={1389} height={1184} />}
                    items={[
                        <CardItem text="En efectivo a través de Rapipago, Pago Fácil
                        Cobro Express y Telerecargas."
                            img="/assets/images/tarjeta/Icono efectivo.png" />,
                        <CardItem text="Por transferencia desde una cuenta bancaria
                        CBU hacia CVU."
                            img="/assets/images/tarjeta/Icono transferencia.png" />]}
                />
                <VideoTitle title="¿Cómo cargar tu Ualá?"
                    imgDesktop={<Image src="/assets/images/tarjeta/thumbnail-como-cargar-Uala.png" width={4668} height={2425} />}
                    imgMobile={<Image src="/assets/images/tarjeta/Mask Group (22).png" width={1268} height={1366} />}
                />

                <ImageItemsSection
                    bg="bg-red-degrade-oposite"
                    title="Lleva tu Ualá de viaje"
                    subtitle="Hacé el aviso de viaje a través de la app y comprá con tu Ualá en cualquier parte del mundo al cambio del día."
                    img={<Image src="/assets/images/tarjeta/Imagen-uala-de-viaje.png" width={1852} height={1512} />}

                />

                <Container className="pb-24 bg-red-250">
                    <h2 className="title-3">¿Perdiste o te robaron tu Ualá?</h2>
                    <div className="grid lg:grid-cols-2 py-8">
                        <ImageTextItem title="Congelá tu tarjeta" img="/assets/images/tarjeta/Item-1-coral.png">
                            <p className="text">Si no encontrás tu Ualá podés congelarla en el acto desde la app para inhabilitar las operaciones con la tarjeta. <br /> Si la encontrás en un bolsillo, la descongelás y la seguís usando como siempre.</p>
                        </ImageTextItem>
                        <ImageTextItem title="Hacé la denuncia " img="/assets/images/tarjeta/Item-2-coral.png">
                            <p className="text">Si perdiste o te robaron tu Ualá, hacé la denuncia desde la app y te mandamos una nueva dentro de los 15 días hábiles.</p>
                            <a className="underline text-blue-700" href="">Mira el tutorial acá</a>
                        </ImageTextItem>
                    </div>

                </Container>



            </Layout>
        </>
    )

}