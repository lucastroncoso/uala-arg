
import Layout from "../components/layout";
import Head from 'next/head';


export default function Tarjeta(props) {

    const registerUser = async (e) => {
        e.preventDefault()
        const registerButton = document.querySelector('#registerButton')

        const res = await fetch(
            'https://cms.prod.websites.uala.com.ar:2082/suscription',
            {
                body: JSON.stringify({
                    pais: "Argentina",
                    mail: e.target.mail.value
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            }
        )
            .then(() => {
                registerButton.classList.remove('bg-gray-300')
                registerButton.classList.add('bg-blue-250')
                registerButton.innerHTML = '¡Listo!'
                registerButton.disabled = true
            })
            .catch(() => {
                alert('Hay un error en el formulario')
            })
    }

    return <>
        <Head>
            <title>Ualá</title>
        </Head>
        <Layout nav footer>
            <div>
                <div className="grid grid-cols-12 w-screen overflow-hidden relative z-0 md:mt-12">
                    {/* <!-- HEADER --> */}
                    <div className="col-span-12 grid grid-cols-12 lg:mt-8 pt-24 lg:pt-0 lg:px-12"
                        style={{ backgroundColor: "rgba(222, 232, 255, 0.3)" }}>
                        <div className="col-span-10 col-start-2 grid grid-cols-2">
                            <div className="lg:order-none order-2  col-span-2 lg:col-span-1">
                                <div className=" my-12">
                                    <img className="rounded-xl w-full" src="/assets/images/aula/Aula Ualá_1.png" alt="" />
                                </div>
                            </div>
                            <div className="flex justify-center items-center lg:order-none order-1 col-span-2 lg:col-span-1">
                                <div className="lg:px-24">
                                    <img src="/assets/images/aula/Logo Aula Ualá.png" alt="" className="w-9/12" />
                                    <p className="text-2xl color-gray font-light">Nuestro espacio de educación
                                        financiera. ¡Hablamos de finanzas, pero fácil!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- CARDS --> */}
                    <div className="col-span-12 grid grid-cols-12 mt-8 lg:px-12">
                        <div className="col-span-10 col-start-2 mt-12 title-2 text-center">
                            El lado fácil de tus finanzas
                        </div>

                        <div className="col-span-10 col-start-2 grid grid-cols-2 gap-8 mt-12">
                            <a target="_blank" href="https://blog.uala.com.ar/"
                                className="rounded-xl grid grid-cols-12 shadow-2xl border border-gray-100 lg:p-12 p-8 lg:pr-18 px-4 col-span-2 lg:col-span-1 transform hover:scale-105 transition duration-300 ">
                                <div className="lg:col-span-4 col-span-12 w-full">
                                    <img src="/assets/images/aula/Ilus_Blog.png" alt=""
                                        className="mx-auto pb-2 lg:pb-0 w-6/12 lg:w-full" />
                                </div>
                                <div className="lg:col-span-8 col-span-12 flex items-center flex-wrap lg:pl-8">
                                    <h2 className="text-xl color-black font-semibold mx-auto lg:mx-0 pb-2 lg:pb-0">Nuestro blog</h2>
                                    <p className="text-xl color-gray text-center lg:text-left">Escribimos sobre finanzas, emprendedurismo y más. <br />
                                         ¡Leé nuestros artículos!
                                         </p>
                                </div>
                            </a>

                            <a target="_blank" href="/aula-form" className="rounded-xl grid grid-cols-12 shadow-2xl border border-gray-100 lg:p-12 p-8 lg:pr-18 px-4 col-span-2 lg:col-span-1 transform hover:scale-105 transition duration-300">
                                <div className="lg:col-span-4 col-span-12 w-full">
                                    <img src="/assets/images/aula/Ilus_Charlas.png" alt=""
                                        className="mx-auto pb-2 lg:pb-0 w-6/12 lg:w-full" />
                                </div>
                                <div target="_blank" href="/aula-form"
                                    className="lg:col-span-8 col-span-12 flex items-center flex-wrap lg:pl-8">
                                    <h2 className="text-xl color-black font-semibold mx-auto lg:mx-0 pb-2 lg:pb-0">Charlas online</h2>
                                    <p className="text-xl color-gray text-center lg:text-left">Visitamos virtualmente escuelas de nivel
                                         secundario. <br /> ¡Anotá la tuya!
                                         </p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-span-12 grid grid-cols-12 mb-8 lg:px-12">
                        <div className="col-span-10 col-start-2 grid grid-cols-2 gap-8 my-12">
                            <a target="_blank" href="https://www.youtube.com/playlist?list=PLg1PUEcEHPues3DMXQgZAiesv_osLdKEY&jct=ea2vyU346NXz_SvCyjHtaDHp2U9oXQ" className="rounded-xl grid grid-cols-12 shadow-2xl border border-gray-100 lg:p-12 p-8 lg:pr-18 px-4 col-span-2 lg:col-span-1 transform hover:scale-105 transition duration-300">
                                <div className="lg:col-span-4 col-span-12 w-full">
                                    <img src="/assets/images/aula/Ilus_Videos.png" alt=""
                                        className="mx-auto pb-2 lg:pb-0 w-6/12 lg:w-full" />
                                </div>
                                <div className="lg:col-span-8 col-span-12 flex items-center flex-wrap lg:pl-8">
                                    <h2 className="text-xl color-black font-semibold mx-auto lg:mx-0 pb-2 lg:pb-0">Videos educativos</h2>
                                    <p className="text-xl color-gray text-center lg:text-left">Un canal de YouTube con excelentes
                                            tutoriales. <br />
                                            ¡Miralos todos!
                                         </p>
                                </div>
                            </a>
                            <a target="_blank" href="http://www.cursosaula.uala.com.ar/" className="rounded-xl grid grid-cols-12 shadow-2xl border border-gray-100 lg:p-12 p-8 lg:pr-18 px-4 col-span-2 lg:col-span-1 transform hover:scale-105 transition duration-300">
                                <div className="lg:col-span-4 col-span-12 w-full">
                                    <img src="/assets/images/aula/Ilus_Cursos.png" alt=""
                                        className="mx-auto pb-2 lg:pb-0 w-6/12 lg:w-full" />
                                </div>
                                <div className="lg:col-span-8 col-span-12 flex items-center flex-wrap lg:pl-8">
                                    <h2 className="text-xl color-black font-semibold mx-auto lg:mx-0 pb-2 lg:pb-0">
                                        Cursos gratuitos online
                                        </h2>
                                    <p className="text-xl color-gray text-center lg:text-left">Una plataforma online con cursos gratuitos
                                            sobre finanzas.  <br /> ¡Inscribite ahora!
                                        </p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* <!-- RED SECTION --> */}
                    <div className="col-span-12 grid grid-cols-12 py-12" style={{ backgroundColor: "rgba(255, 103, 102, 0.07)" }}>
                        <div className="col-span-10 col-start-2 grid lg:grid-cols-2 grid-cols-1 lg:text-left text-center">
                            <div className="flex justify-center items-center">
                                <div className="lg:px-12">
                                    <h2 className="text-3xl font-medium  color-black mb-6">Material descargable</h2>
                                    <h3 className="text-xl color-gray font-medium pb-2 px-12 lg:px-0">
                                        ¿Querés ser un experto en finanzas personales?
                                        </h3>
                                    <p className="text-xl color-gray font-light lg:pr-24 pb-8 px-4 lg:px-0">
                                        Bajate nuestro programa completo donde encontrarás todo en un mismo documento.</p>
                                    <a target="_blank" href="/assets/images/aula/Aula Ualá - PDF.pdf"
                                        className="border-none text-xl rounded-3xl py-3 lg:px-10 px-8 mt-8 outline-none bg-blue-250 text-white">
                                        Descargar programa</a>
                                </div>
                            </div>
                            <div>
                                <div className=" my-12">
                                    <img className="rounded-xl w-full px-8" src="/assets/images/aula/Aula Ualá_3.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- LAST SECTION --> */}

                    <div className="col-span-12 grid grid-cols-12 lg:mx-12 my-12">
                        <div className="col-span-10 col-start-2 grid lg:grid-cols-2 grid-cols-1">
                            <div className="col-span-2 lg:col-span-1">
                                <div className=" my-12">
                                    <img className="rounded-xl w-full" src="/assets/images/aula/Aula Ualá_2.png" alt="" />
                                </div>
                            </div>
                            <div className="flex justify-center items-center col-span-2 lg:col-span-1">
                                <div className="lg:pr-8 lg:pl-12 w-full">
                                    <h2 className="text-3xl font-medium  color-black mb-6 text-center lg:text-left">¿Querés enterarte de las
                                            <br className="hidden lg:block" /> novedades de Aula Ualá?
                                        </h2>
                                    <p className="lg:text-2xl text-xl color-gray font-light mb-6 text-center lg:text-left">Suscribite a
                                            nuestro <br />  newsletter de educación   financiera.
                                        </p>
                                    <form onSubmit={registerUser} className="flex flex-wrap my-6" id="form">
                                        <div className="lg:w-8/12 w-full">
                                            <label className="text-xl block text-blue-250" htmlFor="mail">Mi mail es:</label>
                                            <input onchange="ValidateEmail(this)" type="email" name="mail" id="mail"
                                                placeholder="ejemplo@email.com"
                                                className="text-blue-250-3 border-b border-uala-3 w-11/12 leading-8 focus:outline-none "
                                                id="mailInput" required />
                                        </div>
                                        <button id="registerButton"
                                            className="bg-gray-300 text-white rounded-full px-6 py-4 text-lg lg:w-4/12 w-6/12 mt-6 lg:mt-0 mx-auto outline-none">Suscribirme</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-10 col-start-2 grid grid-cols-1 lg:grid-cols-2 lg:my-20 lg:text-left text-center lg:relative lg:py-12 pb-12">
                        <div className="flex justify-center items-center">
                            <div className="lg:pr-8 lg:pl-12 w-full">
                                <h2 className="text-3xl font-medium  color-black mb-6">
                                    ¿Por qué en Ualá apostamos <br /> por la educación financiera?
                                    </h2>
                                <p className="text-xl color-gray font-light mb-6">Aula Ualá es nuestro espacio de educación financiera.
                                Apostamos por la educación porque así generamos un círculo virtuoso que mejora la vida de las
                                personas.
                                    </p>
                                <p className="text-xl color-gray font-light mb-6"> En Ualá ofrecemos un producto para manejar tu plata pero
                                mucho más fácil, apostando por la
                                inclusión financiera y educando para que tomes las mejores decisiones.
                                    </p>
                                <p className="text-xl color-gray font-semibold">Por cualquier consulta, escribinos a <a className="link" href="mailto:aulauala@ua.la">aulauala@ua.la</a></p>
                            </div>
                        </div>
                        <div>
                            <div className=" my-12 mt-24 md:mt-12  relative flex justify-end ">
                                <img className=" lg:w-8/12 w-10/12 lg:mr-12 mr-2" src="/assets/images/aula/Group 6 (2).png" alt="" />
                                <p className="absolute text-lg -top-8 md:-top-6 right-12 text-blue-250">Un <span className="font-semibold">producto</span>
                                       para manejar <br /> tu plata mucho más fácil
                                    </p>
                                <p className="absolute text-lg lg:left-16 -left-6 top-2/4 text-red-350">que <span
                                    className="font-semibold">educa</span>
                                    <br />   y empodera
                                    </p>
                                <p className="absolute text-lg lg:right-36 -right-6 -bottom-4 lg:-bottom-6 text-blue-250">que <span
                                    className="font-medium">incluye</span>
                                    <br /> financieramente
                                    </p>
                            </div>
                        </div>
                        <img src="/assets/images/aula/BG1.png" alt="" className="absolute hidden md:flex -bottom-20 -right-80 w-9/12" />
                        <img src="/assets/images/bg/Background-arrows.png" alt="" className="absolute bottom-0 md:hidden   " />
                    </div>


                </div>
                <div className="grid grid-cols-12">
                    <div className="col-span-10 col-start-2 my-16">
                        <img src="/assets/images/aula/Group 138.png" alt="" className="md:w-4/12 mx-auto" />
                    </div>
                </div>

            </div>
        </Layout>
    </>

}