import Layout from "../components/layout";
import Container from "../components/container";
import Image from "next/image";
import Head from 'next/head';
import ContactoInstitucional from "../components/contactoInstitucional";
import Link from 'next/link';

export default function PrensaPier(props) {


    return (
    <>
        <Head>
                <title>Ualá</title>
        </Head>
        <Layout nav footer>
            <Container>
                <div className="cursor-pointer flex flex-row items-center mb-12 lg:mb-20 mt-32">
                    <Link href="/prensa">
                      <a className="link outline-none">
                        <i className="fas fa-chevron-left mr-4"></i>Regresar a prensa
                      </a>
                    </Link>
                  </div>
            </Container>

            <Container>
                <div className="pb-20">
                    <div className="flex flex-row">
                        <div className="w-7/12 pr-4">
                            <h2 className="title-2">Acerca de Pierpaolo Barbieri, fundador y CEO de Ualá</h2>

                            <p className="text">
                            Pierpaolo Barbieri es un emprendedor argentino de 34 años y el fundador de Ualá. Fue becado para estudiar Historia y Economía en la Universidad de Harvard a los 17 años y luego continuó sus estudios de posgrado en Cambridge.
                            </p>
                            <p className="text">
                            Pierpaolo también es Director Ejecutivo de Greenmantle, una consultora geopolítica y macroeconómica basada en Nueva York.
                            </p>
                            <p className="text">
                            En 2015, publicó el libro La Sombra de Hitler, un análisis sobre los vínculos económicos que existieron entre la Alemania de Hitler y la España de Franco.                            </p>
                        </div>
                        <div className="w-5/12">
                            <div className="w-full h-auto rounded-2xl overflow-hidden">
                            <Image src="/assets/images/prensa/imagen_pierpaolo_barbieri.png" width={926} height={756} layout="responsive" />
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