import Layout from "../components/layout";
import Container from "../components/container";
import Image from "next/image";
import Head from 'next/head';
import { BenefitsSlider } from "../components/Carrers/benefitsSlider";
import CarrersHero from "../components/Carrers/carrersHero";

export default function Carrers(props) {

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3.1,
        slidesToScroll: 1
    };

    return (
        <>
            <Head>
                <title>Ualá - Inversiones: invertí fácil y despertá tu plata</title>
            </Head>
            <Layout nav footer>
            <Container >
                <div className="grid lg:mb-8 lg:mt-24 md:mb-0 mt-20 mb-12 md:grid-cols-2 md:mt-40">
                    <div className="flex flex-wrap md:col-span-1 content-center mb-12 md:order-none order-1 md:mt-0 mt-8">
                        <div className="w-full">
                            <p className="text-xl w-5/6 ">
                                <div className="text-gray-150">Trabajar en Ualá</div>
                            </p>
                        </div>
                        <div className="w-full">
                            <h1 className="title-2 mt-4 md:mt-8">
                                <div className="text-gray-250">¿Por qué trabajar <br/>en Ualá?</div>
                            </h1>
                        </div>
                        <div className="w-full mt-4 md:mt-6">
                            <div className="md:w-6/6 md:mr-6 text-base md:text-lg leading-8 text-gray-150">
                            En Ualá somos un equipo de profesionales innovadores y comprometidos que viene a revolucionar el sistema financiero, para hacerlo abierto y para tod@s. Y lo mejoramos todos los días con gente como vos. Trabajamos en un ambiente dinámico en pleno crecimiento donde todos podemos intercambiar, proponer e impulsar ideas para que sucedan. Por eso, #SomosUalá
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center md:col-span-1 justify-center md:order-none order-2 " >
                        <div className="md:ml-6 rounded-3xl overflow-hidden flex md:w-6/6">
                            <Image src="/assets/images/trabajar/office/busquedas_laborales_hero.jpg" width={1389} height={1134} />
                        </div>
                    </div>
                </div>
            </Container>
            <div className="bg-blue-curve-gradient mt-12">
                <Container>
                {/* Qué te ofrecemos */}
                    <div className="text-3xl font-medium  text-gray-250">Qué te ofrecemos</div>
                    <div className="text-gray-250 mt-6 text-lg">
                        <p>Estos son algunos de los beneficios:</p>
                    </div>
                    <div className="block lg:hidden">
                        <BenefitsSlider settings={{...settings, slidesToShow:1.1}} />
                    </div>
                    <div className="hidden lg:block">
                        <BenefitsSlider settings={{...settings}} />
                    </div>
                </Container>
                <CarrersHero
                reverse
                title="Nuestras oficinas centrales en Argentina"
                subtitleFull="Creamos un espacio de trabajo moderno y abierto sin divisiones entre escritorios donde la interacción, el trabajo en equipo y la transparencia fueran sus principales características."
                src2="/assets/images/trabajar/office/busquedas_laborales_oficinas.jpg"
                w2="1389"
                h2="1134"
              />
            </div>
            <div className="bg-blue-degrade-trabajar">
                <CarrersHero
                title="Great Place to Work"
                subtitleFull="En 2021 obtuvimos la certificación de Great Place to Work® por ser uno de los mejores lugares para trabajar en Argentina. En 2020 fuimos reconocidos como una de las mejores empresas para trabajar para las mujeres y para los Millennials."
                image1={<Image src="/assets/images/trabajar/logo-gptw.svg" width={80} height={80} />}
                src2="/assets/images/trabajar/office/busquedas_laborales_GPTW.jpg"
                w2="1389"
                h2="1134"
              />
                <Container>
                    <div className="mt-12 md:mt-20 mb-14 md:mb-28">
                        <div className="text-center font-medium text-4xl text-gray-250">Oportunidades abiertas</div>
                        <div className="text-center mt-4 text-gray-250">
                            <div>Queremos que te sumes a esta revolución.</div>
                            <div>Porque mientras más seamos, mejor.</div>
                        </div>
                        <div className="mt-4 flex justify-center">
                            <button className="hover:bg-blue-250 text-blue-250 hover:text-white rounded-full border border-blue-250 text-blue-uala py-3 px-8 text-center bg-blue-trabajar-button"><a target="_blank" href="/sumate">Ver búsquedas laborales</a></button>
                        </div>
                    </div>
                </Container>
            </div>  
            <a 
                href="https://www.linkedin.com/company/ual%C3%A1" 
                target="_blank" rel="noopener noreferrer"
                className="bg-blue-450 p-8 text-white w-full block text-center text-2xl md:text-3xl"
            >
                Conocé más sobre nuestra cultura en <span className="underline">LinkedIn</span>
            </a>
            </Layout>
        </>
    )
}
