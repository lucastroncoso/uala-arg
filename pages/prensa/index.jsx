import { useState } from "react";
import { fetchContent } from '../../utils/contentful';
import Layout from "../../components/layout";
import Container from "../../components/container";
import Image from "next/image";
import Head from 'next/head';
import ContactoInstitucional from "../../components/contactoInstitucional";
import Link from 'next/link';

export async function getStaticProps() {
    const response = await fetchContent(`
    {
        argentinaPrensaCollection (limit:3) {
          items {
            cardDate
            cardTitle
            slug
          }
        }
    }
    `);

    return {
        props: { response },
        revalidate: 10
    }
}

export default function Prensa(props) {
    const [ news, setNews ] = useState( props.response.argentinaPrensaCollection.items ); // Lista completa de notas de prensa

    const stories = [
        { 
            image: "google.svg", 
            text: "Las UAC permiten conectar con los usuarios más valiosos para cada app.", 
            link: "https://www.thinkwithgoogle.com/intl/es-419/recursos-y-herramientas/aplicaciones/las-campanas-universales-de-aplicaciones-permiten-conectar-con-los-usuarios-mas-valiosos-para-cada-app/" 
        },
        { 
            image: "aws.svg", 
            text: "Activate proporcionó los recursos necesarios para desarrollar la start up de Ualá.", 
            link: "https://aws.amazon.com/es/solutions/case-studies/Uala/" 
        },
        { 
            image: "facebook.svg", 
            text: "Más descargas de la app con anuncios en Facebook e Instagram Stories.", 
            link: "https://www.facebook.com/business/success/uala" 
        },
        { 
            image: "twitter.svg", 
            text: "Estrategia en la construcción de la relación a largo plazo entre la marca y los usuarios.", 
            link: "https://www.youtube.com/watch?v=zTF6s5k2clw&feature=youtu.be" 
        },
        { 
            image: "ims.svg", 
            text: "Reforzar nuestra penetración de mercado en segmentos muy importantes para nosotros.", 
            link: "https://www.imscorporate.com/" 
        }
    ]


    return (
    <>
        <Head>
                <title>Ualá</title>
        </Head>
        <Layout nav footer>
            <Container className="">
                <div className="grid md:mb-0 mt-28 mb-12 md:grid-cols-2">
                    <div className="flex flex-wrap content-center md:mb-12 md:order-none order-2 md:mt-0 mt-8">
                        <div className="w-full">
                            <div className="text-xl w-5/6 ">
                                <div className="">Prensa</div>
                            </div>
                        </div>
                        <div className="w-full">
                            <h1 className="title-2 md:w-5/6 mt-4">
                                <div className="text-gray-250">Últimos anuncios</div>
                            </h1>
                        </div>
                    </div>
                </div>
            </Container>

            <Container className="bg-blue-wave-prensa w-full">
                <div className="grid lg:grid-cols-3 gap-5">
                    {
                        news !== undefined &&
                        news.map(notice => (
                            <div key={notice.slug} className="shadow-md rounded-2xl p-6 border border-gray-100 flex flex-col bg-white">
                                <div className="text-gray-500 font-medium mb-4">{notice.cardDate}</div>
                                <div className="text-gray-700 text-xl font-medium mb-4 flex-grow">{notice.cardTitle}</div>
                                <Link href={`/prensa/${notice.slug}`}>
                                    <a className="link">Leer más</a>
                                </Link>
                            </div>
                        ))

                    }
                </div>
                <div className="my-8">
                    <Link href="/anuncios">
                        <a className="link text-2xl">Mirá nuestros últimos anuncios</a>
                    </Link>
                </div>
            </Container>

            <Container className="mt-12 w-full">
                <div className="w-full">
                    <h1 className="title-2 md:w-5/6 my-4">
                        <div className="text-gray-250">Conocé más sobre Ualá</div>
                    </h1>
                </div>
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-full mb-4 lg:mb-0 lg:col-span-3">
                        <div className="shadow-md rounded-2xl p-6 border border-gray-100 flex flex-col bg-white">
                            <Link href="/prensa/sobre">
                                <a className="link">Acerca de Ualá →</a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-span-full mb-4 lg:mb-0 lg:col-span-7">
                        <div className="shadow-md rounded-2xl p-6 border border-gray-100 flex flex-col bg-white">
                            <Link href="/prensa/pier">
                                <a className="link">Acerca de Pierpaolo Barbieri, fundador y CEO de Ualá →</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>

            <Container className="mt-12 w-full">
                <div className="w-full">
                    <h1 className="title-2 md:w-5/6 my-4">
                        <div className="text-gray-250">Descargá nuestro material institucional</div>
                    </h1>
                </div>
                <div className="grid md:grid-cols-3 gap-5">

                    <div className="mb-4 lg:mb-0 ">
                        <div className="shadow-md rounded-2xl p-6 border border-gray-100 flex flex-col bg-white">
                            <div className="flex items-center">
                                <div className="flex-grow">
                                    <div className="link">
                                        <a href="https://drive.google.com/drive/folders/1p9oFw6tVSQix_1mSX5h7_46MEBsvSoeK?usp=sharing" target="_blank" >
                                            Logo de Ualá
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <Image src="/assets/images/icono-descarga.png" width={30} height={30} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-4 lg:mb-0 ">
                        <div className="shadow-md rounded-2xl p-6 border border-gray-100 flex flex-col bg-white">
                            <div className="flex items-center">
                                <div className="flex-grow">
                                    <div className="link">
                                        <a href="https://drive.google.com/drive/folders/1WU03reTPU0jtqysli6nKEsy7JBd14Pg0?usp=sharing" target="_blank" >
                                            Imágenes de producto
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <Image src="/assets/images/icono-descarga.png" width={30} height={30} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-4 lg:mb-0 ">
                        <div className="shadow-md rounded-2xl p-6 border border-gray-100 flex flex-col bg-white">
                            <div className="flex items-center">
                                <div className="flex-grow">
                                    <div className="link">
                                        <a href="https://drive.google.com/drive/folders/1m1SjV7h-CVF018jpizmtUN8rsj1nPTCQ?usp=sharing" target="_blank" >
                                            Imágenes de las oficinas
                                        </a> 
                                    </div>
                                </div>
                                <div>
                                    <Image src="/assets/images/icono-descarga.png" width={30} height={30} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Container>
            
            <Container>
                <div className="mt-16">
                    <div className="w-full">
                        <h1 className="title-2 md:w-5/6 my-4">
                            <div className="text-gray-250">Ualá como caso de éxito</div>
                        </h1>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-5 mt-8">
                        {

                            stories.map(story => (
                                <div key={story.link} className="shadow-md rounded-xl p-6 border border-gray-100 flex flex-col">
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
            </Container>

            <Container className="mt-12 w-full">
                <div className="w-full">
                    <h1 className="title-2 md:w-5/6 my-4">
                        <div className="text-gray-250">Mirá nuestro reporte de sustentabilidad</div>
                    </h1>
                </div>
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-full mb-4 lg:mb-0 lg:col-span-3">
                        <div className="shadow-md rounded-2xl p-6 border border-gray-100 flex flex-col bg-white">
                            <Link href="/prensa/">
                                <a className="link">Reporte 2021 →</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
            
            <ContactoInstitucional />

            <div className="w-full">
                <a href="https://blog.uala.com.ar/" target="_blank">
                    <div className="hidden md:block cursor-pointer">
                    <Image 
                            layout="responsive"
                            src="/assets/images/prensa/banner_blog_desktop.jpg"
                            width={3000}
                            height={730}
                            alt="Visita nuestro blog"
                        />
                    </div>

                    <div className="block md:hidden">
                        <Image 
                            layout="responsive"
                            src="/assets/images/prensa/banner_blog_mobile.jpg"
                            width={782}
                            height={949}
                            alt="Visita nuestro blog"
                        />
                    </div>
                </a>
            </div> 
        </Layout>
    </>
    )

}