import Layout from "../components/layout";
import Container from "../components/container";
import Head from 'next/head';
import Link from 'next/link';
import CardItem from "../components/cardItem";
import CardSmItem from "../components/cardSmItem";
import ImageItemsSection from "../components/imageItemsSection";
import ImageTextItem from "../components/tarjeta/imageTextItem";
import VideoTitle from "../components/videoTitle";
import Image from "next/image";

export default function RondasDeInversion(props) {

    const links = [
        { 
            title: "Logo de Ualá", 
            url: {
                url: "https://drive.google.com/drive/folders/1p9oFw6tVSQix_1mSX5h7_46MEBsvSoeK",
                text: "Descargar"
            }
        },
        { 
            title: "Comunicado de prensa", 
            url: {
                url: "https://drive.google.com/file/d/1sHD-jsDmMZ9hwLGnh9NhNckQAHE8fkHf/view",
                text: "Versión ESP"
            },
            url2: {
                url: "https://drive.google.com/file/d/1sEd0Ex6XBmeAYkmoYwcvzznFo-yhfXA7/view",
                text: "ENG Version"
            },
        },
        { 
            title: "Video", 
            url: {
                url: "https://www.youtube.com/watch?v=HJv2bOXKX_Q",
                text: "Versión AR"
            },
            url2: {
                url: "https://www.youtube.com/watch?v=Qc2jFm2PpxQ",
                text: "Versión MX"
            },
        },
        { 
            title: "Infografía", 
            url: {
                url: "https://drive.google.com/drive/folders/1WUeLv2TVwlbSAbGh8YwSNHVeT2YsdBYU",
                text: "Descargar"
            }
        },
        { 
            title: "Imágenes", 
            url: {
                url: "https://drive.google.com/drive/folders/1ecZBXTcQ4mx53qGujasw38q35DW0ctoW?usp=sharing",
                text: "Descargar"
            }
        },
        { 
            title: "La nota del fundador y CEO de Ualá", 
            url: {
                url: "https://blog.uala.com.ar/equipo-uala/la-serie-d-de-uala/la-serie-d-de-uala",
                text: "Ver más"
            }
        }
    ];

    const blogLinks = [
        { 
            title: "Qué es una ronda de inversión", 
            url: {
                url: "https://bit.ly/3CPzwcm",
                text: "Versión AR"
            },
            url2: {
                url: "https://bit.ly/3g2qBKz",
                text: "Versión MX"
            }
        },
        { 
            title: "¿Qué es el Venture Capital o capital de riesgo?", 
            url: {
                url: "https://bit.ly/3lYNand",
                text: "Versión AR"
            },
            url2: {
                url: "https://bit.ly/2VXb4ox",
                text: "Versión MX"
            }
        },
        { 
            title: "¿Qué es una empresa unicornio?", 
            url: {
                url: "https://bit.ly/3jQunYB",
                text: "Versión AR"
            },
            url2: {
                url: "https://bit.ly/3sevc1a",
                text: "Versión MX"
            }
        },
        { 
            title: "¿Qué es el capital semilla?", 
            url: {
                url: "https://bit.ly/3AAFonE",
                text: "Versión AR"
            },
            url2: {
                url: "https://bit.ly/3AGSMa4",
                text: "Versión MX"
            }
        },
        { 
            title: "¿Qué significa Oferta Pública Inicial o IPO?", 
            url: {
                url: "https://bit.ly/3iFF3dk",
                text: "Versión AR"
            },
            url2: {
                url: "https://bit.ly/3sc9zi8",
                text: "Versión MX"
            }
        },
        { 
            title: "¿Qué es una incubadora de empresas?", 
            url: {
                url: "https://bit.ly/2VUUs0c",
                text: "Versión AR"
            },
            url2: {
                url: "https://bit.ly/3CVBnMP",
                text: "Versión MX"
            }
        },
        { 
            title: "¿Qué es un inversor ángel?", 
            url: {
                url: "https://bit.ly/3xIsxhy",
                text: "Versión AR"
            },
            url2: {
                url: "https://bit.ly/3xMd5AK",
                text: "Versión MX"
            }
        }
    ];

    return (
        <>
            <Head>
                <title>Ualá</title>
            </Head>
            <Layout nav footer>
                <Container className="bg-blue-150">
                    <div className="grid lg:mb-20 lg:mt-24 md:mb-0 mt-20 mb-12 md:grid-cols-2">
                        <div className="flex flex-wrap content-center mb-12 md:order-none order-2 md:mt-0 mt-8">
                            <div className="w-full">
                                <h1 className="title-1 md:w-5/6 mt-8">
                                    <div className="text-black">Ualá recibió inversión de US$350 M de SoftBank y Tencent</div>
                                </h1>
                            </div>
                        </div>
                        <div className="flex items-center justify-center md:order-none order-1 " >
                            <div className="rounded-3xl overflow-hidden flex">
                                <Image src="/assets/images/rondasdeinversion/ecosistema.png" width={1676} height={1470} />
                            </div>
                        </div>
                    </div>
                </Container>

                <Container>
                    <div className="py-8">
                        <div className="md:w-5/6">
                            <p className="text" >La fintech alcanza una valuación de <strong>2.450 millones de dólares.</strong> Representa la ronda de inversión privada más grande que ha recibido una empresa argentina.</p>
                        </div>
                        <div className="w-full">
                            <h1 className="title-2 md:w-5/6 mb-4 mt-8">
                                <div className="text-gray-250">Descargá el kit de prensa</div>
                            </h1>
                        </div>
                    </div>
                
                    <div className="grid lg:grid-cols-3 gap-5 mb-8">
                        {
                            links !== undefined &&
                            links.map(link => (
                                <div key={link.url.url} className="shadow-md rounded-2xl py-8 px-12 border border-gray-100 flex flex-col items-center justify-center bg-white">
                                    <div className="text-blue-250 text-2xl font-semibold text-center mb-4 ">{link.title}</div>
                                    <div className={` flex flex-row w-full link ${ !!link.url2 ? 'justify-between' : 'justify-center'}`}>
                                        <a href={link.url.url} target="_blank">{link.url.text}</a>
                                        { !!link.url2 &&
                                            <a href={link.url2.url} target="_blank">{link.url2.text}</a>
                                        }
                                    </div>
                                </div>
                            ))

                        }
                    </div>
                </Container>

                <Container className="bg-gray-100 ">
                    <div className="grid lg:mb-20 lg:mt-24 md:mb-0 mb-12 md:grid-cols-2 gap-x-12">
                        <div className="flex flex-col justify-around py-4 md:order-none order-1 md:mt-0 mt-8">
                            
                                <h1 className="title-3 md:w-5/6 ">
                                    <div className="">Acerca de Pierpaolo Barbieri, Fundador y CEO de Ualá</div>
                                </h1>
                                <div className="rounded-3xl overflow-hidden flex">
                                    <Image src="/assets/images/rondasdeinversion/Pierpaolo_Barbieri_Uala.png" width={1756} height={1232} />
                                </div>
                            
                        </div>
                        <div className="flex flex-col items-left md:order-none order-2 " >
                            <div className="subtitle-1 w-5/6 mb-3">
                                <div className=" text-blue-250">Versión Español</div>
                            </div>
                            <div className="text ">
                                <div className=" ">
                                    Pierpaolo Barbieri es Historiador Económico y fundador y CEO de Ualá, la fintech que está revolucionando las finanzas en América Latina a través de una app y una tarjeta. Creció en Buenos Aires, estudió Historia y Economía de grado en Harvard y de posgrado en Cambridge.
                                </div>
                            </div>
                            <div className="subtitle-1 w-5/6  mb-3 mt-4">
                                <div className=" text-blue-250">English version</div>
                            </div>
                            <div className="text ">
                                <div className=" ">
                                Pierpaolo Barbieri is the CEO and founder of Ualá, the fintech that is revolutionizing finance in Latin America. He grew up in Buenos Aires, studied History and Economics for his undergraduate degree at Harvard and earned a postgraduate degree at Cambridge.                                </div>
                            </div>
                        </div>
                    </div>
                </Container>

                <Container>
                    <div className="py-8">
                        <div className="w-full">
                            <h1 className="title-2 md:w-5/6 mb-4 mt-8">
                                <div className="text-gray-250">Contenido de nuestro Blog para conocer un poco más sobre rondas de inversión</div>
                            </h1>
                        </div>
                    </div>
                
                    <div className="grid lg:grid-cols-3 gap-5 mb-8">
                        {
                            blogLinks !== undefined &&
                            blogLinks.map(link => (
                                <div key={link.url.url} className="shadow-md rounded-2xl py-8 px-12 border border-gray-100 flex flex-col bg-white">
                                    <div className=" text-2xl font-semibold text-left mb-4 flex-grow">{link.title}</div>
                                    <div className={` flex flex-row w-full link `}>
                                        <a href={link.url.url} target="_blank"><span className="link">{link.url.text}</span> →</a>
                                            
                                        

                                        { !!link.url2 &&
                                            <a href={link.url2.url} target="_blank"><span className="link ml-4">{link.url2.text}</span> →</a>
                                        }
                                        
                                    </div>
                                </div>
                            ))

                        }
                    </div>

                    <div className="w-full">
                        <div className="textmd:w-5/6 mt-20 mb-28">
                            <div className="">Contacto de prensa <span className="link">comms@ua.la</span></div>
                        </div>
                    </div>
                </Container>
            </Layout>
        </>
    )

}