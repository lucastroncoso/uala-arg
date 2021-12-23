import { useState } from "react"
import Container from "../components/container";
import Hero from "../components/hero";
import ImageItemsSection from "../components/imageItemsSection";
import Layout from "../components/layout";
import Head from 'next/head';
import Image from "next/image";
import VideoTitleNosotros from "../components/nosotros/videoTitleNosotros";
import CardNosotros from "../components/nosotros/cardNosotros";



export default function Nosotros(props) {


    return (
        <>
            <Head>
                <title>Ualá</title>
            </Head>
            <Layout nav footer>
                <Hero
                    containerStyles="bg-blue-wave-onli-mobile md:bg-none mt-12"
                    section="Nosotr@s"
                    title="Somos Ualá"
                    subtitle="Somos la fintech que te permite manejar todas tus finanzas desde una app y una tarjeta"
                    img={<Image src="/assets/images/nosotros/oficinas-nica-2.jpg" width={1389} height={1134} />}
                />


                <ImageItemsSection
                    bg="bg-blue-wave-nosotros md:pt-20"
                    subtitle="El emprendedor argentino Pierpaolo Barbieri creó y lanzó Ualá en octubre de 2017 con el objetivo de mejorar la inclusión financiera en Argentina ofreciendo una experiencia innovadora, integrada, sin sucursales y de bajo costo. Hoy, Ualá es la solución financiera de millones de personas de todo el país."
                    img={<Image src="/assets/images/nosotros/oficinas-pasillo.jpg" width={1389} height={1134} />}

                />

                <VideoTitleNosotros
                    className="bg-blue-350 md:bg-white"
                    title="Así empezó todo"
                    subtitle="En 2015 empezamos a pensar en cómo revolucionar el sistema financiero. Conocé nuestra historia."
                    href="https://www.youtube.com/watch?v=_noKYrhsb3I"
                    imgDesktop={<Image src="/assets/images/nosotros/thumbnail_acerca_Uala.png" width={2448} height={1250} />}
                />

                <Container className="py-12 md:bg-none  bg-gradient-to-b  from-blue-350 to-white">
                    <h2 className="title-2 text-center mb-12">¿Por qué lo hacemos?</h2>

                    <div className=" mx-auto shadow-blue md:p-12 p-8 rounded-3xl bg-white">
                        <h2 className="title-3 text-center mb-6">Un mensaje de nuestro fundador</h2>
                        <div className="grid md:grid-cols-2 md:gap-16 ">
                            <ol>
                                <div className="flex flex-nowrap pb-4"><i className="fas fa-chevron-right text-blue-50 pt-2 pr-2"></i><li className=" text">Queremos que manejes toda tu plata desde una app: fácil, gratis y segura.</li></div>
                                <div className="flex flex-nowrap pb-4"><i className="fas fa-chevron-right text-blue-50 pt-2 pr-2"></i><li className=" text">Queremos que compres lo que quieras, donde quieras.</li></div>
                                <div className="flex flex-nowrap pb-4"><i className="fas fa-chevron-right text-blue-50 pt-2 pr-2"></i><li className=" text">Queremos que mandes plata a quien quieras, cuando quieras.</li></div>
                                <div className="flex flex-nowrap pb-4"><i className="fas fa-chevron-right text-blue-50 pt-2 pr-2"></i><li className=" text">Queremos que analices todos tus gastos, para así ahorrar mejor.</li></div>
                                <div className="flex flex-nowrap pb-4"><i className="fas fa-chevron-right text-blue-50 pt-2 pr-2"></i><li className=" text">Queremos que recibas el mejor soporte, por redes sociales, Comunidad, mail o chat en vivo.</li></div>
                            </ol>
                            <ol>
                                <div className="flex flex-nowrap pb-4"><i className="fas fa-chevron-right text-blue-50 pt-2 pr-2"></i><li className="text">Queremos cambiar paradigmas, sin costos escondidos, sucursales o filas eternas.</li></div>
                                <div className="flex flex-nowrap pb-4"><i className="fas fa-chevron-right text-blue-50 pt-2 pr-2"></i><li className=" text">Queremos que así más argentin@s accedan al crédito y al ahorro.</li></div >
                                <div className="flex flex-nowrap pb-4"><i className="fas fa-chevron-right text-blue-50 pt-2 pr-2"></i><li className=" text">Queremos ser esa generación que creció en el 2001 y que trabaja para que nunca se repita.</li></div >
                                <div className="flex flex-nowrap pb-4"><i className="fas fa-chevron-right text-blue-50 pt-2 pr-2"></i><li className=" text">Queremos que te sumes, para construir el futuro con vos – cuantos más seamos, mejor.</li></div >
                                <div className="flex flex-nowrap pb-4"><i className="fas fa-chevron-right text-blue-50 pt-2 pr-2"></i><li className=" text">Queremos estar siempre que nos necesites, empezando por mi.</li></div >
                                <li className="pt-6 md:pl-48 text "><span className="font-semibold">Pierpaolo Barbieri</span> <br /> Fundador  y CEO de Ualá</li>
                            </ol >
                        </div >
                    </div >
                </Container >

                <Container className="pt-64 pb-24 -mt-44  md:bg-blue-350">
                    <h2 className="title-2 text-center mb-4">¿En qué creemos?</h2>
                    <h3 className="subtitle-2 text-center">Tenemos 5 pilares que nos guían en cada una de las decisiones que tomamos:</h3>
                    <div className="grid md:grid-cols-2 gap-x-7 gap-y-12 py-8">
                        <CardNosotros title="La misión"
                            text="Nos motiva nuestro fin social de inclusión financiera."
                            img="/assets/images/nosotros/Icono-mision.png"
                        />
                        <CardNosotros title="Compromiso"
                            text="Con la excelencia de nuestro trabajo, obsesionados con las necesidades de los clientes."
                            img="/assets/images/nosotros/Icono-compromiso.png"
                        />
                        <CardNosotros title="Innovación "
                            text="Nos comprometemos a usar la mejor tecnología para crear el mejor producto."
                            img="/assets/images/nosotros/Icono-innovación.png"
                        />
                        <CardNosotros title="Confianza"
                            text="En el equipo que somos, para atraer y retener al mejor talento."
                            img="/assets/images/nosotros/Icono-confianza.png"
                        />
                        <CardNosotros title="Transparencia"
                            text="Con integridad hacia adentro y, más allá, con clientes, inversores y la sociedad."
                            img="/assets/images/nosotros/Icono-transparencia.png"
                            className="md:col-span-2 md:w-1/2 mx-auto"
                        />


                    </div>
                </Container>

            </Layout >
        </>
    )

}