import Layout from "../components/layout";
import Container from "../components/container";
import Image from "next/image";
import Slider from "react-slick";
import CardRoundedShadow from "../components/cardRoundedShadow";
import Head from 'next/head';

const BenefitsSlider = ({settings}) => {
    const benefits = [
        { title: "Desarrollo profesional", list: ["Apoyo para clases de inglés del 50% en Wall Street English.", "Apoyo económico para capacitaciones técnicas.", "Bono anual por desempeño."] },
        { title: "Compensaciones y obra social", list: ["Afiliación a ARL con SURA.", "Afiliación a Caja de Compensación Familiar.", "Ajuste salarial por inflación.", "Pago de plan de medicina prepagada con Medisanitas.", "Bono Sodexo por 250.000 COP."] },
        { title: "Flexibilidad y descanso", list: ["Política de home office.", "15 días hábiles de vacaciones.", "Horario Flexible.", "Día de cumpleaños libre."] },
        { title: "Bienestar", list: ["Apoyo para pago de gimnasio mensual.", "Apoyo para Netflix, Spotify e Internet por mes.", "Programa de asistencia al empleado."] },
        { title: "Maternidad y paternidad", list: ["Apoyo a escolaridad para padres con niños entre 4 y 18 años.", "Licencia por maternidad y softlanding.", "Licencia por paternidad."] },
    ];
    
    return (
        <Slider {...settings}>
            {
                benefits.map((benefit, index) => (
                        <CardRoundedShadow key={ benefit.title } className={`m-8 ${ index === 0 ? 'ml-16' : '' } `}>
                            <div className="bg-white p-6 " >
                                <div className="text-gray-250 font-bold text-lg mb-4">{benefit.title}</div>
                                <div className="flex flex-col">{
                                    benefit.list.map(option => (
                                    <div key={option} className="mt-4 flex flex-row text-sm">
                                        <div><i className="fas fa-chevron-right mr-4 text-blue-150"></i></div>
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
        infinite: true,
        speed: 300,
        slidesToShow: 3.1,
        slidesToScroll: 1
    };

    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"></link>
            </Head>

            <Layout nav footer>

            <Container >
                <div className={`grid lg:mb-8 lg:mt-24 md:mb-0 mt-20 mb-12 md:grid-cols-2 md:mt-40`}>
                    <div className="flex flex-wrap content-center mb-12 md:order-none order-1 md:mt-0 mt-8">
                        <div className="w-full">
                            <p className="text-xl w-5/6 ">
                                <div className="text-gray-250">Búsquedas laborales</div>
                            </p>
                        </div>
                        <div className="w-full">
                            <h1 className="title-2 md:w-5/6 mt-4">
                                <div className="text-gray-250">¿Por qué trabajar en Ualá?</div>
                            </h1>
                        </div>
                        <div className="w-full mt-4">
                            <div className="md:w-5/6 subtitle-1 text-gray-250">
                                En Ualá somos un equipo de profesionales innovadores y comprometidos que venimos a revolucionar el sistema financiero. A hacerlo abierto y para tod@s. Y lo mejoramos todos los días con gente como tú. Trabajamos en un ambiente dinámico en pleno crecimiento donde tod@s podemos intercambiar, proponer e impulsar ideas para que sucedan. 
                                <br/><br/><strong>Por eso, #SomosUalá</strong>
                            </div>

                        </div>
                    </div>
                    <div className="flex items-center justify-center md:order-none order-2 " >
                        <div className="rounded-3xl overflow-hidden flex lg:w-5/6">
                            <Image src="/assets/images/trabajos/hero.png" width={1084} height={834} />
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

                    <div className="mt-8 block lg:hidden">
                        <BenefitsSlider settings={{...settings, slidesToShow:1.1}} />
                    </div>

                    <div className="mt-8 hidden lg:block">
                        <BenefitsSlider settings={{...settings}} />
                    </div>
                </Container>
                </div>

                <Container className="">
                    <div className="grid lg:mb-20 lg:mt-8 md:mb-0 mt-20 mb-12 md:grid-cols-2">
                        <div className="flex flex-wrap content-center mb-12 md:order-none order-1 md:mt-0 mt-8">
                            
                            <div className="w-full hidden md:block">
                                <h1 className=" md:w-5/6 text-3xl font-medium text-gray-250 mt-4">Nuestras oficinas en Argentina</h1>
                            </div>
                            <div className="w-full mt-4 hidden md:block">
                                <div className="md:w-5/6 subtitle-1 ">
                                    Creamos un espacio de trabajo moderno y abierto, sin divisiones entre escritorios, donde la interacción, el trabajo en equipo y la transparencia son las principales características.                                        
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center md:order-none order-2 " >
                            <div className="rounded-3xl overflow-hidden flex ">
                            <Image src="/assets/images/trabajos/oficinas.png" width={1122} height={864} />
                            </div>
                        </div>
                    </div>
                </Container>

            <div className="bg-gradient-to-b from-transparent to-blue-250">
                <Container className="">
                    <div className="grid lg:mb-20 lg:mt-0 md:mb-0 mt-20 mb-12 md:grid-cols-2 gap-12">
                        <div className="flex flex-wrap content-center mb-12 md:order-2 order-1 md:mt-0 mt-8 ">
                            <div className="w-20">
                                <Image src="/assets/images/trabajos/great-place-to-work-logo.png" width={160} height={160} />
                            </div>
                            <div className="w-full">
                                <h1 className=" md:w-5/6 text-3xl font-medium text-gray-250">Great Place to Work</h1>
                            </div>
                            <div className="w-full mt-4">
                                <div className="md:w-5/6 subtitle-1 ">
                                En 2019 logramos un lugar en el ranking de los mejores 20 lugares para trabajar en Argentina y en el 2020 fuimos reconocidos como una de las mejores empresas para trabajar para mujeres.                                  </div>

                            </div>

                        </div>
                        <div className="flex items-center justify-center md:order-none order-2 " >
                            <div className="rounded-3xl overflow-hidden flex ">
                            <Image src="/assets/images/trabajos/great-place-to-work.png" width={1084} height={834} />
                            </div>
                        </div>
                    </div>
                </Container>
                

                <Container>
                    <div className="mb-20">
                        <div className="text-center font-medium text-4xl text-gray-250">Oportunidades abiertas</div>
                        <div className="text-center mt-4 text-gray-250">
                            <div>Queremos que te sumes a esta revolución.</div>
                            <div>Porque mientras más seamos, mejor.</div>
                        </div>
                        <div className="mt-4 flex justify-center">
                            <div className="rounded-full border border-blue-uala text-blue-uala py-3 px-8 text-center bg-blue-100"><a target="_blank" href="/sumate" className="">Ver búsquedas laborales</a></div>
                        </div>
                    </div>
                </Container>
             </div>  
            </Layout>
        </>
    )

}