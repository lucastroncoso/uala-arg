import Container from "../components/container";
import Hero from "../components/hero";
import ImageItemsSection from "../components/imageItemsSection";
import Layout from "../components/layout";
import VideoTitle from "../components/videoTitle";
import Head from 'next/head';
import Image from "next/image";


export default function Gastos(props) {

    return (
        <>
            <Head>
                <title>Ualá</title>
            </Head>
            <Layout nav footer>
                <Hero
                    containerStyles="mt-12 bg-coral-wave-2"
                    section="Análisis de gastos"
                    title="Conocé como manejar tu plata"
                    subtitle="Todos tus consumos se agrupan automáticamente por categorías para que los puedas analizar de forma mensual o anual."
                    img={<Image src="/assets/images/gastos/analisis-de-gastos.jpg" width={1500} height={1295} />}
                />

                <ImageItemsSection
                    reverse
                    pushImg="/assets/images/gastos/Group 155 (3).png"
                    bg="bg-red-degrade"
                    title="Mirá el detalle de tus consumos"
                    subtitle="Cada vez que pagás con tu Ualá te llega una notificación en vivo y el consumo se categoriza para que puedas ver más claro en qué gastaste."
                    img={<Image src="/assets/images/gastos/notificacion-categorias.jpg" width={1389} height={1134} />}
                />

                <ImageItemsSection
                    bg="mb-24"
                    title="Cómo se categorizan tus consumos"
                    subtitle="Podés modificar la categoría de un consumo haciendo click en el movimiento desde la app y luego en el lápiz."
                    img={<Image src="/assets/images/gastos/analisis_de_gastos_animacion.jpg" width={2251} height={2251} />}
                />
            </Layout>
        </>
    )

}