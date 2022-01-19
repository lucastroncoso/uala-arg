import Layout from "../components/layout";
import Container from "../components/container";
import Image from "next/image";
import Slider from "react-slick";
import CardRoundedShadow from "../components/cardRoundedShadow";
import Head from 'next/head';

const BenefitsSlider = ({settings}) => {
    const benefits = [
        { title: "Desarrollo profesional", list: ["Subsidio para clases de inglés"] },
        { title: "Compensaciones y obra social", list: ["Prestaciones de ley.", "Cobertura médica.", "Premio por referidos.", "Política de ajuste por inflación.", "Préstamos con tasa diferencial."] },
        { title: "Flexibilidad y descanso", list: ["Política de home office.", "15 días de vacaciones.", "Horario Flexible.", "Día de cumpleaños libre."] },
        { title: "Bienestar", list: ["Subsidio para gimnasio.", "Pago de servicio de internet.", "Pago de Netflix y Spotify."] },
        { title: "Maternidad y paternidad", list: ["Extensión de licencia de maternidad y paternidad.", "Apoyo a escolaridad para padres con niños."] },
    ];
    
    return (
        <Slider {...settings}>
            {
                benefits.map((benefit, index) => (
                        <CardRoundedShadow key={ benefit.title } className={`m-4 ${ index === 0 ? 'ml-4' : '' } `}>
                            <div className="bg-white h-72 md:h-80 p-6 rounded-2xl" >
                                <div className="text-gray-250 font-bold text-lg">{benefit.title}</div>
                                <div className="flex flex-col">{
                                    benefit.list.map(option => (
                                    <div key={option} className="mt-4 flex flex-row text-sm">
                                        <div><i className="fas fa-chevron-right mr-4 text-blue-250"></i></div>
                                        <div className="text-gray-250 ">{option}</div>
                                        
                                    </div>))
                                }</div>
                            </div>
                        </CardRoundedShadow>
                    ))
            }
        </Slider>
    );
}


export default function Carrers(props) {

    const settings = {
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3.1,
        slidesToScroll: 1
    };

    return (
        <>
            <Head>
                <title>Ualá</title>
            </Head>

            <Layout nav footer>

            <Container >
                <div className={`grid lg:mb-8 lg:mt-24 md:mb-0 mt-20 mb-12 md:grid-cols-2 md:mt-40`}>
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
          

            <div className="bg-blue-curve-gradient">
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
            </div>

                <Container className="md:mt-14">
                    <div className="grid lg:mb-20 lg:mt-8 md:mb-0 md:mt-20 mb-12 md:grid-cols-2">
                        <div className="flex flex-wrap content-center mb-12 md:order-none order-1 md:mt-0 mt-8">
                            
                            <div className="w-full">
                                <h1 className=" md:w-5/6 text-3xl font-medium text-gray-250 mt-4">Nuestras oficinas centrales en Argentina</h1>
                            </div>
                            <div className="w-full mt-4 hidden md:block">
                                <div className="md:w-5/6 text-base md:text-lg leading-8 text-gray-150">
                                Creamos un espacio de trabajo moderno y abierto sin divisiones entre escritorios donde la interacción, el trabajo en equipo y la transparencia fueran sus principales características.                                        
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center md:order-none order-2 " >
                            <div className="rounded-3xl overflow-hidden flex ">
                            <Image src="/assets/images/trabajar/office/busquedas_laborales_oficinas.jpg" width={1389} height={1134} />
                            </div>
                        </div>
                    </div>
                </Container>
            <div className="bg-blue-degrade-trabajar">
                <Container className="md:mt-14">
                    <div className="grid lg:mb-20 lg:mt-0 md:mb-0 mt-20 mb-12 md:grid-cols-2 gap-12">
                        <div className="flex flex-wrap content-center mb-12 md:order-2 order-1 md:mt-12 mt-8 ">
                            <div className="w-20 mb-3">
                                <Image src="/assets/images/trabajar/logo-gptw.svg" width={80} height={80} />
                            </div>
                            <div className="w-full">
                                <h1 className=" md:w-5/6 text-3xl font-medium text-gray-250">Great Place to Work</h1>
                            </div>
                            <div className="w-full mt-4">
                                <div className="md:w-6/6 text-base md:text-lg leading-8 text-gray-150">En 2019 logramos un lugar en el ranking de los mejores 20 lugares para trabajar en Argentina y en el 2020 fuimos reconocidos como una de las mejores empresas para trabajar para las mujeres, para los Millennials y de Servicios Financieros y Seguros.</div>
                            </div>

                        </div>
                        <div className="flex items-center justify-center md:order-none order-2 " >
                            <div className="rounded-3xl overflow-hidden flex ">
                            <Image src="/assets/images/trabajar/office/busquedas_laborales_GPTW.jpg" width={1389} height={1134} />
                            </div>
                        </div>
                    </div>
                </Container>
                <Container>
                    <div className="mt-8 mb-14 md:mb-28">
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
            </Layout>
        </>
    )
}
