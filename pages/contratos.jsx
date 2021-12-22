import Layout from "../components/layout";
import Container from "../components/container";
import Head from 'next/head';
import Image from "next/image";


export default function Contratos(props) {

    const charges = [
        { href: "/assets/legales/TyC-de-uso-de-la-app.pdf", title: "Términos de Uso de la App" },
        { href: "/assets/legales/Contrato Tarjeta Prepaga.pdf", title: "Contrato Tarjeta Prepaga" },
        { href: "/assets/legales/Términos y Condiciones Inversiones (2).pdf", title: "Términos y condiciones: Inversiones" },
        { href: "/assets/legales/Oferta Préstamos (2).pdf", title: "Términos y condiciones: Préstamos" },
        { href: "/assets/legales/Resumen condiciones préstamo (2).pdf", title: "Resumen condiciones: Préstamos" },
        { href: "/assets/legales/Oferta Cuotificaciones (1).pdf", title: "Términos y condiciones: Cuotificaciones" },
        { href: "/assets/legales/Resumen condiciones cuotificaciones (1).pdf", title: "Resumen condiciones: Cuotificaciones" },
        { href: "/assets/legales/Términos y condiciones_ Cobros.pdf", title: "Términos y condiciones: Cobros" }
    ]

    return (
        <>
            <Head>
                <title>Ualá</title>
            </Head>
            <Layout nav footer>
                <Container className=" mt-24 bg-blue-wave-2 md:pb-44">
                    <div className="lg:mt-8 mb-26">
                        <div className="flex content-center flex-wrap ">
                            <div className="">
                                <p className="">
                                    Contratos
                                </p>
                                <h1 className="title-2 ">
                                    <div className="  mb-12">Contratos de Adhesión - Ley N° 24.240 de Defensa del Consumidor</div>
                                </h1>
                            </div>
                        </div>

                    </div>
                </Container>

                <div className="mb-24 ">
                    <Container>
                        <div className="py-20 grid md:grid-cols-3 md:-mt-44">
                            {
                                charges.map(charge => (

                                    <div className="bg-white px-8 py-4 m-3 flex flex-col border-gray-5' rounded-2xl shadow-blue justify-between	">
                                        <div className="text-xl">{charge.title}</div>
                                        <a href={charge.href} className="link cursor-pointer  text-gray-600 ">Leer</a>
                                    </div>

                                ))
                            }
                        </div>
                    </Container>
                </div>
            </Layout>
        </>
    )

}