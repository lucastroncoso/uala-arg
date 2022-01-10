
import Layout from '../components/layout';
import Head from 'next/head';
import { useEffect } from 'react'


export default function Tarjeta(props) {
    useEffect(() => {
        const registerButton = document.querySelector('#registerButton')
        const lastInput = document.getElementById('lastInput');
        //cambio de color del boton
        lastInput.addEventListener('keydown', (event) => {
            if (event.target.value.length > 5) {
                registerButton.classList.add("bg-blue-250")
                registerButton.classList.remove("bg-gray-300")
                registerButton.disabled = false
            } else {
                registerButton.classList.remove("bg-blue-250")
                registerButton.classList.add("bg-gray-300")
                registerButton.disabled = true
            }
        })
    })


    const registerUser = async (e) => {
        e.preventDefault()
        let form = document.getElementById('form');
        let formData = new FormData(form);
        let bodyObject = {};

        formData.forEach(function (value, key) {
            bodyObject[key] = value;
        });
        bodyObject.pais = 'Argentina'


        const res = await fetch(
            'https://cms.prod.websites.uala.com.ar:2082/charlas',
            {
                body: JSON.stringify(bodyObject),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            }
        )
            .then((res) => {
                registerButton.classList.remove('bg-gray-300')
                registerButton.classList.add('bg-blue-250')
                registerButton.innerHTML = '¡Listo!'
                registerButton.disabled = true
                console.log(res)
            })
            .catch(() => {
                alert('Hay un error en el formulario')
            })
    }

    return (
        <>
            <Head>
                <title>Ualá</title>
            </Head>
            <Layout nav footer>

                <div className="grid grid-cols-12 w-screen pt-12 my-16">
                    <div className="col-span-10 col-start-2 grid grid-cols-2 ">
                        <div className="col-span-2 lg:pr-72">
                            <h1 className="color-black text-4xl py-8 pt-12 lg:pt-0 ">Charlas en escuelas de manera online</h1>
                            <h2 className="color-gray text-xl pb-8">Visitamos escuelas de nivel secundario de manera virtual. Les contamos
                            qué
                <br />
                es
                Ualá y por qué es
                importante la educación financiera en América Latina.
                    </h2>
                            <h2 className="color-gray text-xl lg:pb-12">Si sos docente o directivo y querés coordinar una charla online,
                 <br /> te pedimos la siguiente información:
                    </h2>
                        </div>
                        <form onSubmit={registerUser} className="col-span-2 grid grid-cols-2 lg:gap-12 gap-0 mt-8 lg:mt-0" id="form">
                            <div className="col-span-2 lg:col-span-1 lg:pr-6">
                                <div className="flex-wrap my-2 ">
                                    <label for="nombre" className="block w-full mb-2 text-xl color-black">Tu nombre y apellido</label>
                                    <input required="required" type="text" placeholder="Andrés Rodriguez"
                                        className="w-full p-3 mx-auto mb-6 lg:text-xl text-lg border border-gray-400 rounded-full outline-none"
                                        name="nombre"></input>
                                </div>
                                <div className="flex-wrap my-2">
                                    <label for="mail" className="block w-full mb-2 text-xl color-black">Mail</label>
                                    <input required="required" type="text" placeholder="arodriguez@gmail.com"
                                        className="w-full p-3 mx-auto mb-6 lg:text-xl text-lg border border-gray-400 rounded-full outline-none"
                                        name="mail"></input>
                                </div>
                                <div className="flex-wrap my-2">
                                    <label for="telefono" className="block w-full mb-2 text-xl color-black">Teléfono de contacto</label>
                                    <input required="required" type="text" placeholder="12345678"
                                        className="w-full p-3 mx-auto mb-6 lg:text-xl text-lg border border-gray-400 rounded-full outline-none"
                                        name="telefono"></input>
                                </div>
                                <div className="flex-wrap my-2 ">
                                    <label for="rol" className="block w-full mb-2 text-xl color-black">¿Cuál es tu rol en el establecimiento
                        educativo?</label>
                                    <input required="required" type="radio" value="Soy docente" name="rol" style={{ transform: "scale(2)" }}
                                        className="mt-4 mb-4 lg:mr-4 mr-2 lg:ml-4"></input>
                                    <label for="si" className="lg:mr-20 mr-4 text-lg color-gray ">Soy docente</label>
                                    <input required="required" type="radio" value="Soy directivo" name="rol" style={{ transform: "scale(2)" }}
                                        className="mt-4 mb-6 lg:mr-4 mr-2"></input>
                                    <label for="no" className="text-lg color-gray">Soy directivo</label>
                                </div>
                                <div className="flex-wrap my-2">
                                    <label for="espacio" className="block w-full mb-2 text-xl color-black">¿En qué espacio se brindará la
                        charla?</label>
                                    <input required="required" type="text" placeholder="Contanos si es una materia en particular"
                                        className="w-full p-3 mx-auto mb-6 lg:text-xl text-lg border border-gray-400 rounded-full outline-none"
                                        name="espacio"></input>
                                </div>
                                <div className="flex-wrap my-2">
                                    <label for="nivel" className="block w-full mb-2 text-xl color-black">¿A qué nivel educativo estará
                        dirigida?</label>
                                    <input required="required" type="text" placeholder="Contanos curso, edad y otros datos relevantes."
                                        className="w-full p-3 mx-auto mb-6 lg:text-xl text-lg border border-gray-400 rounded-full outline-none"
                                        name="nivel"></input>
                                </div>
                            </div>
                            {/* <!-- segunda columna --> */}
                            <div className="col-span-2 lg:col-span-1 lg:pr-6">
                                <div className="flex-wrap my-2">
                                    <label for="establecimiento" className="block w-full mb-2 text-xl color-black">Nombre del
                                    establecimiento
                        educativo</label>
                                    <input required="required" type="text" placeholder="La escuela"
                                        className="w-full p-3 mx-auto mb-6 lg:text-xl text-lg border border-gray-400 rounded-full outline-none"
                                        name="establecimiento"></input>
                                </div>
                                <div className="flex-wrap my-2">
                                    <label for="localidad" className="block w-full mb-2 text-xl color-black">Provincia y localidad en donde
                                    está
                        ubicado</label>
                                    <input required="required" type="text" placeholder="Buenos Aires, La Matanza" id="lastInput"
                                        className="w-full p-3 mx-auto mb-6 lg:text-xl text-lg border border-gray-400 rounded-full outline-none"
                                        name="localidad"></input>
                                </div>
                                <div className="flex-wrap my-2">
                                    <label for="web" className="block w-full mb-2 text-xl color-black">Sitio web del establecimiento
                                    educativo
                        (opcional)</label>
                                    <input type="text" placeholder="www.laescuela.com.ar"
                                        className="w-full p-3 mx-auto mb-6 lg:text-xl text-lg border border-gray-400 rounded-full outline-none"
                                        name="web"></input>
                                    <label for="conocido" className="block w-full mb-2 text-xl color-black">¿Conocés alguna persona que
                                    trabaje
                                    en
                        Ualá? <br /> <span className="text-lg color-gray">De ser así, dejanos su nombre y
                            apellido</span></label>
                                    <input type="text" placeholder="Andrés Rodriguez"
                                        className="w-full p-3 mx-auto mb-6 lg:text-xl text-lg border border-gray-400 rounded-full outline-none"
                                        name="conocido"></input>
                                </div>
                                <div className="flex-wrap my-2 lg:mb-0 ">
                                    <label for="comentario" className="block w-full mb-4 text-xl color-black">¿Querés dejarnos algún
                        comentario/aclaración?</label>
                                    <textarea rows="4" placeholder="Podes escribirlo acá"
                                        className="w-full p-3 mx-auto mb-6 lg:text-xl text-lg border border-gray-400 outline-none rounded-xl"
                                        name="comentario"></textarea>
                                </div>
                                <div classNameName="flex mx-auto mt-2 lg:col-start-2">
                                    <button type="submit" id="registerButton" disabled
                                        className="text-white p-3 rounded-full bg-gray-300   outline-none px-20 text-xl justify-self-center ">Enviar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </Layout>
        </>
    )
}