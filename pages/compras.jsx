import Container from "../components/container";
import Hero from "../components/hero";
import CardItem from "../components/cardItem";
import CardSmItem from "../components/cardSmItem";
import ImageItemsSection from "../components/imageItemsSection";
import ImageTextItem from "../components/tarjeta/imageTextItem";
import Layout from "../components/layout";
import Head from 'next/head';
import Image from "next/image";
import PlayVideoButton from '../components/home/PlayVideoButton/PlayVideoButton';



export default function Tarjeta(props) {


    return (
        <>
            <Head>
                <title>Ualá - Tarjeta prepaga gratis: pedí tu tarjeta</title>
                <meta name="description" content="Tarjeta Prepaga Ualá Mastercard: Una tarjeta gratis para tod@s y para todo. Comprá en cualquier parte del mundo." />
            </Head>
            <Layout nav footer>
                <Hero
                    section="Compras"
                    title="Una tarjeta para tod@s y para todo"
                    subtitle="Comprá en cualquier comercio o página web del mundo que acepte Mastercard."
                    img={<Image src="/assets/images/tarjeta/tarjeta-3D 1.png" width={2132} height={2304} />}
                />

                {/* La tarjeta */}
                <ImageItemsSection
                    bg="bg-red-degrade"
                    title="La tarjeta"
                    subtitle="Una tarjeta prepaga Mastercard internacional diseñada para tener la mejor experiencia de compra."
                    img={<Image src="/assets/images/tarjeta/compras-tarjeta.jpg" width={1389} height={1134} />}
                    items={[
                        <CardItem text="Al registrarte contarás con una tarjeta digital para hacer compras online. "
                            img="/assets/images/tarjeta/Icono compras.png" />,
                        <CardItem text="Con chip, para que tu información esté más protegida que nunca."
                            img="/assets/images/tarjeta/Icono chip.png" />,
                        <CardItem text="Con tecnología contactless para que tus compras sean mucho más seguras."
                            img="/assets/images/tarjeta/Icono contactless.png" />]}
                />

                <ImageItemsSection
                    reverse
                    title="Pagá con QR donde quieras"
                    subtitle="En cualquier comercio que tenga QR, escaneá con Ualá y pagá con la plata que tengas en la cuenta."
                    img={<Image src="/assets/images/tarjeta/compras-QR.jpg" width={1389} height={1134} />}
                    items={[
                        <CardSmItem text="Entrás en el menú “Más” de la app."
                            img="/assets/images/tarjeta/item-1.png" />,
                        <CardSmItem text="Elegís la opción “Pagar con QR”."
                            img="/assets/images/tarjeta/item-2.png" />,
                        <CardSmItem text="Escaneás el código del comercio en donde estés, y ¡listo!"
                            img="/assets/images/tarjeta/item-3.png" />]}
                />

                <ImageItemsSection
                    title="Cargá tu Ualá gratis"
                    subtitle="En efectivo o por transferencia. Es simple y rápido."
                    img={<Image src="/assets/images/tarjeta/cargar-uala.jpg" width={1389} height={1184} />}
                    items={[
                        <CardItem text="En efectivo a través de Rapipago, Pago Fácil,
                        Cobro Express y Telerecargas."
                            img="/assets/images/tarjeta/Icono efectivo.png" />,
                        <CardItem text="Por transferencia desde una cuenta bancaria
                        CBU hacia CVU."
                            img="/assets/images/tarjeta/Icono transferencia.png" />]}
                />
                <Container className="md:my-12 my-12">
                     <h2 className="title-2 text-center mb-6">¿Cómo cargar tu Ualá?</h2>
                    <a className="hidden md:block" href="https://www.youtube.com/watch?v=6Bv0IdBFdDc" target="_blank">
                        <PlayVideoButton
                            youtubeId="6Bv0IdBFdDc"
                            previewVideoSrc="/assets/video/thumbnail-compras-deskstop.mp4"
                            isPreviewVideoScaled={false}
                        />
                    </a>
                    <a className="block md:hidden" href="https://www.youtube.com/watch?v=6Bv0IdBFdDc" target="_blank">
                        <PlayVideoButton
                            youtubeId="6Bv0IdBFdDc"
                            previewVideoSrc="/assets/video/thumbnail-compras-317x329px.mp4"
                            isPreviewVideoScaled={false}
                        />
                    </a>
                </Container>
                <ImageItemsSection
                    bg="bg-red-degrade-oposite"
                    title="Llevá tu tarjeta Ualá de viaje "
                    subtitle="Viajá y usa tu tarjeta Ualá en cualquier parte del mundo. Si aceptan Mastercard, aceptan Ualá. No es necesario dar aviso de viaje."
                    img={<Image src="/assets/images/tarjeta/uala-de-viaje.jpg" width={1389} height={1134} />}

                />
                <div id="robo"></div>
                <Container className="pb-24 bg-red-250">
                    <h2 className="title-2">¿Perdiste o te robaron tu Ualá?</h2>
                    <div className="grid lg:grid-cols-2 py-8">
                        <ImageTextItem title="Congelá tu tarjeta" img="/assets/images/tarjeta/Item-1-coral.png">
                            <p className="text">Si no encontrás tu Ualá podés congelarla en el acto desde la app para inhabilitar las operaciones con la tarjeta. <br /> Si la encontrás en un bolsillo, la descongelás y la seguís usando como siempre.</p>
                        </ImageTextItem>
                        <ImageTextItem title="Hacé la denuncia " img="/assets/images/tarjeta/Item-2-coral.png">
                            <p className="text">Si perdiste o te robaron tu Ualá, hacé la denuncia desde la app y te mandamos una nueva dentro de los 15 días hábiles.</p>
                            <br />
                            <a className="text underline text-blue-700" target="_blank" href="https://www.youtube.com/watch?v=xD7xz3jyZ2A">Mira el tutorial acá</a>
                        </ImageTextItem>
                    </div>
                </Container>
            </Layout>
        </>
    )

}