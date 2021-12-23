import Layout from "../components/layout";
import Container from "../components/container";
import Image from "next/image";
import Slider from "react-slick";

export default function Carrers(props) {

    const benefits = [
        { title: "Compensaciones y obra social", list: ["Prestaciones de ley", "Cobertura médica", "Premio por referidos", "Política de ajuste por inflación"] },
        { title: "Flexibilidad y descanso", list: ["Política de homeoffice", "15 días de vacaciones", "Día de cumpleaños libre", "Horario flexible"] },
        { title: "Bienestar", list: ["Subsidio para gimnasio", "Pago de servicio de internet", "Pago de Netflix y Spotify"] },
        { title: "Maternidad y paternidad", list: ["Extensión de licencia de maternidad y paternidad", "Apoyo a escolaridad para padres con niños"] },
        { title: "Desarrollo profesional", list: ["Subsidio para clases de inglés"] },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1
    };

    return (
        <Layout nav footer>
            <div className="bg-prensa h-96 flex items-center justify-center mt-20">
                <div className="text-white font-semibold pl-24 text-5xl w-full">Sobre Ualá</div>
            </div>
            <Container>
                <div className="my-24">
                    <div className="my-16">
                        {/* Por qué trabajar en Ualá */}
                        <div className="grid grid-cols-12 mb-12">
                            <div className="col-span-full mb-4 lg:mb-0 lg:col-span-4">
                                <div className="text-4xl font-medium text-gray-800">Por qué trabajar en Ualá</div>
                            </div>
                            <div className="col-span-full mb-4 lg:mb-0 lg:col-span-8">
                                <div className="text-gray-500 text-xl leading-8">
                                    En Ualá somos un equipo de profesionales innovador@s y comprometid@s que viene a revolucionar el sistema financiero, para hacerlo abierto y para tod@s. Y lo mejoramos todos los días con gente como vos. Trabajamos en un ambiente dinámico en pleno crecimiento donde tod@s podemos intercambiar, proponer e impulsar ideas para que sucedan.
                                </div>
                                <div className="mt-4 text-gray-500 text-xl">Por eso, #SomosUalá</div>
                            </div>
                        </div>



                        {/* Qué te ofrecemos */}
                        <div className="my-16">
                            <div className="text-4xl font-medium text-gray-800">Qué te ofrecemos</div>
                            <div className="text-gray-600 mt-6 text-lg">
                                <p>Estos son algunos de los beneficios:</p>
                            </div>
                            <div className="grid lg:grid-cols-3 gap-5">
                                {

                                    benefits.map(benefit => (
                                        <div className="shadow-md rounded-md p-6 border border-gray-100">
                                            <div className="text-gray-700 font-medium mb-4">{benefit.title}</div>
                                            <ul className="list-dot">{
                                                benefit.list.map(option => <li className="text-gray-600 mt-4">{option}</li>)
                                            }</ul>
                                        </div>
                                    ))

                                }
                            </div>
                        </div>

                        <div className="my-16">
                            <div className="text-4xl font-medium text-gray-800">Nuestras oficinas centrales en Argentina</div>
                            <div className="text-gray-600 mt-6 text-lg">
                                <p>Creamos un espacio de trabajo moderno y abierto sin divisiones entre escritorios donde la interacción, el trabajo en equipo y la transparencia fueran sus principales características.</p>
                            </div>
                            <div className="mt-8">
                                <Slider {...settings}>
                                    <div>
                                        <img className="rounded-md" src="/assets/images/trabajar/office/1.jpeg" width={516} height={346} />
                                    </div>
                                    <div>
                                        <img className="rounded-md" src="/assets/images/trabajar/office/2.jpeg" width={516} height={346} />
                                    </div>
                                    <div>
                                        <img className="rounded-md" src="/assets/images/trabajar/office/3.jpeg" width={516} height={346} />
                                    </div>
                                    <div>
                                        <img className="rounded-md" src="/assets/images/trabajar/office/4.jpeg" width={516} height={346} />
                                    </div>
                                </Slider>
                            </div>
                        </div>

                        <div className="py-12">
                            <div className="grid lg:grid-cols-2">
                                <div>
                                    <div>
                                        <Image src="/assets/images/trabajar/logo-gptw.svg" width={68} height={68} />
                                    </div>
                                    <div className="text-4xl mt-8">Great Place to Work</div>
                                    <div className="w-5/6"><p className="text">En 2019 logramos un lugar en el ranking de los mejores 20 lugares para trabajar en Argentina y en el 2020 fuimos reconocidos como una de las mejores empresas para trabajar para las mujeres y para los Millennials.</p></div>
                                </div>
                                <div>
                                    <div>
                                        <img className="rounded-md" src="/assets/images/trabajar/office/9.jpeg" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="py-12">
                            <div className="text-4xl font-medium text-gray-800">Esto pasa en Ualá</div>
                            <div className="mt-8">
                                <Slider {...settings}>
                                    {/* <div>
                                        <img className="rounded-md" src="/assets/images/office/5.jpeg" width={516} height={346} />
                                    </div> */}
                                    <div>
                                        <img className="rounded-md" src="/assets/images/trabajar/office/6.jpeg" width={516} height={346} />
                                    </div>
                                    <div>
                                        <img className="rounded-md" src="/assets/images/trabajar/office/7.jpeg" width={516} height={346} />
                                    </div>
                                    <div>
                                        <img className="rounded-md" src="/assets/images/trabajar/office/8.jpeg" width={516} height={346} />
                                    </div>
                                </Slider>
                            </div>
                        </div>

                        <div className="py-12">

                            <div className="text-center font-medium text-4xl">Oportunidades abiertas</div>
                            <div className="text-center mt-4 text-gray-600">
                                <div>Queremos que te sumes a esta revolución.</div>
                                <div>Porque mientras más seamos, mejor.</div>
                            </div>
                            <div className="mt-4 flex justify-center">
                                <div className="rounded-full border border-blue-600 text-blue-600 py-3 px-8 text-center"><a target="_blank" href="/sumate" className="link">Consultá las oportunidades aquí</a></div>
                            </div>
                        </div>


                    </div>
                </div>
            </Container>
        </Layout>
    )

}