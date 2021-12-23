import Layout from "../components/layout";
import Container from "../components/container";
import Head from 'next/head';
import Image from "next/image";


export default function Costos(props) {

    const charges = [
        { cost: "$0", title: "Descargá la app" },
        { cost: "$0", title: "Costo de apertura, mantenimiento y cierre" },
        { cost: "$0", title: "Comisión por consumos con la tarjeta" },
        { cost: "$0", title: "Transferencias entre usuarios Ualá " },
        { cost: "$0", title: "Costo de envío" },
        { cost: "$0", title: "Costo de renovación" },
        { cost: "$0", title: "Cargas en efectivo", description: "Si cargás más de $90,000 en el mes, se cobrará 2,5% + IVA sobre el importe de carga excedido." },
        { cost: "$0", title: "Carga por transferencia" },
        { cost: "$0", title: "Costo por reposición", description: "la primera y 200ARS + IVA a partir de la segunda." },
        { cost: "$105", title: "Retiros por cajero automático en la República Argentina", description: "+ IVA por extracción" },
        { cost: "US$6", title: "Retiros por cajero automático en el exterior", description: "+ IVA cada una. Puede tener costo adicional del cajero. Por el momento esta opción se encuentra inhabilitada" },
        { cost: "$0", title: "Retiros por canales alternativos (Rapipago)", description: "por mes y $75 + IVA a partir de la segunda" }
    ]

    return (
        <>
            <Head>
                <title>Ualá</title>
            </Head>
            <Layout nav footer>
                <Container className="md:mt-12 mt-24 bg-blue-wave-2 md:pb-44">
                    <div className="grid lg:grid-cols-2 lg:mt-8 mb-26">
                        <div className="flex content-center flex-wrap order-2">
                            <div className="">
                                <h1 className="title-1 ">
                                    <div className="lg:text-5xl lg:leading-normal mb-12">No tenemos letra chica ni costos ocultos</div>
                                </h1>
                            </div>
                        </div>
                        <div className="flex justify-center order-1 " >
                            <div className="lg:mt-16">
                                <Image src="/assets/images/charge.gif" width={500} height={400} />
                            </div>
                        </div>
                    </div>
                </Container>

                <div className="bg-blue-degrade mb-24 ">
                    <Container>
                        <div className="py-20 grid md:grid-cols-2 md:-mt-44">
                            {
                                charges.map(charge => (
                                    <div className="grid">
                                        <div className="bg-white rounded-md p-8 m-3 flex flex-col border-gray-5' rounded-2xl shadow-blue">
                                            <div className="text-blue-600 text-center text-2xl">{charge.title}</div>
                                            <div className="md:text-8xl text-5xl text-gray-800 text-center md:my-12 my-4 flex items-center justify-center">{charge.cost}</div>
                                            {charge.description && <div className="flex-grow  flex items-center text-gray-600 text-center">{charge.description}</div>}
                                        </div>
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