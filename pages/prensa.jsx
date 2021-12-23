import Layout from "../components/layout";
import Container from "../components/container";
import Image from "next/image";
import Head from 'next/head';
import ContactoInstitucional from "../components/contactoInstitucional";
import Link from 'next/link';

export default function Carrers(props) {

    const news = [
        { title: "Ualá alcanzó un nuevo hito: ya emitió 2 millones de tarjetas", date: "11 de mayo 2020" },
        { title: "Ualá recibe inversión de US$150M liderada por Tencent y SoftBank", date: "25 de noviembre 2020" },
        { title: "Pierpaolo Barbieri fue elegido “Joven Destacado”", date: "4 de mayo 2019" }
    ];

    const stories = [
        { image: "google.svg", text: "Las UAC permiten conectar con los usuarios más valiosos para cada app.", link: "https://www.thinkwithgoogle.com/intl/es-419/recursos-y-herramientas/aplicaciones/las-campanas-universales-de-aplicaciones-permiten-conectar-con-los-usuarios-mas-valiosos-para-cada-app/" },
        { image: "aws.svg", text: "Activate proporcionó los recursos necesarios para desarrollar la start up de Ualá.", link: "https://aws.amazon.com/es/solutions/case-studies/Uala/" },
        { image: "facebook.svg", text: "Más descargas de la app con anuncios en Facebook e Instagram Stories.", link: "https://www.facebook.com/business/success/uala" },
        { image: "twitter.svg", text: "Estrategia en la construcción de la relación a largo plazo entre la marca y los usuarios.", link: "https://www.youtube.com/watch?v=zTF6s5k2clw&feature=youtu.be" },
        { image: "ims.svg", text: "Reforzar nuestra penetración de mercado en segmentos muy importantes para nosotros.", link: "https://www.imscorporate.com/" }
    ]


    return (
    <>
        <Head>
                <title>Ualá</title>
        </Head>
        <Layout nav footer>
            <div className="bg-prensa h-96 flex items-center justify-center mt-20">
                <div className="text-white font-semibold pl-24 text-5xl w-full">Sobre Ualá</div>
            </div>
            <Container>
                <div className="my-24">
                    <div className="my-16">




                        {/* Últimos comunicados */}
                        <div className="py-8">
                            <div className="text-4xl font-medium text-gray-800">Últimos anuncios</div>
                            <div className="grid lg:grid-cols-3 gap-5 mt-8">
                                {

                                    news.map(notice => (
                                        <div className="shadow-md rounded-md p-6 border border-gray-100 flex flex-col">
                                            <div className="text-gray-500 font-medium mb-4">{notice.date}</div>
                                            <div className="text-gray-700 text-xl font-medium mb-4 flex-grow">{notice.title}</div>
                                            <div className="link">Leer más</div>
                                        </div>
                                    ))

                                }
                            </div>
                            <div className="mt-8">
                                <div className="link text-2xl">Mirá nuestros últimos anuncios</div>
                            </div>
                        </div>

                        <div className="py-12">

                            <div className="grid grid-cols-12">
                                <div className="col-span-full mb-4 lg:mb-0 lg:col-span-4">
                                    <Link href="/prensa-sobre">
                                        <a className="link text-3xl">Acerca de Ualá</a>
                                    </Link>
                                </div>
                                <div className="col-span-full mb-4 lg:mb-0 lg:col-span-8">
                                    <Link href="/prensa-pier">
                                        <a className="link text-3xl">Acerca de Pierpaolo Barbieri, fundador y CEO de Ualá</a>
                                    </Link>
                                </div>
                            </div>

                        </div>

                        <div className="py-8">
                            <div className="text-4xl font-medium text-gray-800">Descargá nuestro material institucional</div>
                            <div className="grid lg:grid-cols-12 mt-8 gap-4">
                                <div className="col-span-4 flex border border-blue-600 rounded-md p-4 items-center">
                                    <div className="flex-grow">
                                        <div className="link"><a href="https://drive.google.com/drive/folders/1p9oFw6tVSQix_1mSX5h7_46MEBsvSoeK?usp=sharing" target="_blank" >Logo de Ualá</a></div>
                                    </div>
                                    <div>
                                        <Image src="/assets/images/icono-descarga.svg" width={30} height={30} />
                                    </div>
                                </div>
                                <div className="col-span-4 flex border border-blue-600 rounded-md p-4 items-center">
                                    <div className="flex-grow">
                                        <div className="link"><a href="https://drive.google.com/drive/folders/1WU03reTPU0jtqysli6nKEsy7JBd14Pg0?usp=sharing" target="_blank" >Imágenes de producto</a> </div>
                                    </div>
                                    <div>
                                        <Image src="/assets/images/icono-descarga.svg" width={30} height={30} />
                                    </div>
                                </div>
                                <div className="col-span-4 flex border border-blue-600 rounded-md p-4 items-center">
                                    <div className="flex-grow">
                                        <div className="link"><a href="https://drive.google.com/drive/folders/1m1SjV7h-CVF018jpizmtUN8rsj1nPTCQ?usp=sharing" target="_blank" >Imágenes de las oficinas</a> </div>
                                    </div>
                                    <div>
                                        <Image src="/assets/images/icono-descarga.svg" width={30} height={30} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Ualá como caso de éxito */}
                        <div className="py-8">
                            <div className="text-4xl font-medium text-gray-800">Ualá como caso de éxito</div>
                            <div className="grid lg:grid-cols-3 gap-5 mt-8">
                                {

                                    stories.map(story => (
                                        <div className="shadow-md rounded-xl p-6 border border-gray-100 flex flex-col">
                                            <div className="h-12">
                                                <img src={`/assets/images/prensa/${story.image}`} alt="" />
                                            </div>
                                            <div className="text-gray-600 my-4 flex-grow">{story.text}</div>
                                            <div className="link"><a href={story.link} target="_blank">Leer más</a></div>
                                        </div>
                                    ))

                                }
                            </div>
                        </div>

                            

                    </div>
                </div>
            </Container>
            <ContactoInstitucional />
        </Layout>
    </>
    )

}