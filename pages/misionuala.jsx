import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from "../components/layout";
import Container from '../components/container';

export default function MisionUala(props) {
    const [sended, setSended] = useState(false);
    const [datos, setDatos] = useState({
        usuarioUala: '',
        dni: '',
        termsAcepted: false
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(datos);
        const url = 'https://cms.prod.websites.uala.com.ar:2082/ps5';

        let formData = new FormData(form);

        let object = {};
        formData.forEach(function (value, key) {
            object[key] = value;
        });

        const res = await fetch(url, {
            body: JSON.stringify(object),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(response => response.json())
            .then(() => setSended(true))


        if (res.type == "PS5_ADD_SUCCESS") {
            formButton.innerHTML = '¡Ya estas inscripto!';
            formButton.disabled = true;
            console.log(res)
        }
        else alert('Hay un error en el formulario')
    };

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value,
        });
    };

    const handleCheckboxChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value,
        });
        console.log(event.target.checked)
    };

    return (
        <>
            <Head>
                <title>Ualá</title>
            </Head>
            <Layout nav footer>

                <Container className="bg-header-misionuala mt-16 lg:mt-20 text-center  pt-4 lg:pt-0 ">
                    <div className="grid lg:mb-20 md:mb-0 mt-4 mb-12 md:grid-cols-2">
                        <div className="flex flex-wrap content-center mb-12 md:mt-0 mt-8">
                            <div className="w-full">
                                <p className="">
                                    <div className="">
                                        <Image
                                            src="/assets/images/misionuala/isologo.svg"
                                            width={64}
                                            height={71}
                                            alt="Ualá"
                                        />
                                    </div>
                                </p>
                            </div>
                            <div className="w-full">
                                <h1 className="title-1 md:w-5/6 mt-4">
                                    <div className="">
                                        <Image
                                            src="/assets/images/misionuala/title.png"
                                            width={420}
                                            height={83}
                                            alt="Misión Ualá"
                                        />
                                    </div>
                                </h1>
                            </div>
                            <div className="w-full mt-4">
                                <div className="md:w-5/6 subtitle-1 ">
                                    <p className=" text-white">¡Sorteamos una <strong>PlayStation®5</strong> todos los meses!</p>
                                </div>

                            </div>
                        </div>
                        <div className="flex items-center justify-center " >
                            <div className="rounded-3xl overflow-hidden flex">
                                <Image src="/assets/images/misionuala/PS5.png" width={320} height={339} />
                            </div>
                        </div>
                    </div>
                </Container>

                <Container>
                    <div className="lg:px-48 px-4">
                        <p
                            className="lg:text-center lg:text-4xl text-2xl mb-4 lg:mb-12 text-gray-800 font-semibold lg:leading-relaxed	animate-pop-in header-title">
                            Podés ganarte una Playstation 5 con tu próxima compra.
                        </p>

                        <p className="lg:text-center text-xl lg:text-3xl text-gray-800 mb-4 lg:mb-12"> Te explicamos cuáles son los
                        objetivos:
                        </p>
                    </div>
                    <div className="shadow-xl lg:p-12 lg:mx-32 rounded-2xl p-4 mx-4 border border-gray-100 mb-12">
                        <div className="flex mx-auto mb-4 items-center">
                            <img className="pr-4 lg:pr-10" src="assets/images/misionuala/icono1.svg " alt="" />
                            <p className="text-xl text-gray-600">Hacé una compra con tu tarjeta Ualá.
                            </p>
                        </div>
                        <div className="flex mx-auto items-center">
                            <img className="pr-4 lg:pr-10" src="assets/images/misionuala/icono2.svg" alt="" />
                            <p className="text-xl link ">
                                Completá el siguiente formulario.
                            </p>
                        </div>

                    </div>
                </Container>

                <Container className="bg-gradient-misionuala  py-12 lg:py-24">
                    <p className="text-3xl font-semibold text-center text-gray-800 mb-8">Completá con tus datos</p>
                    <form className="grid w-full grid-cols-2 mb-0 lg:mb-8" action="" method="POST" id="form" onSubmit={handleSubmit} >
                        <div className="col-span-2 lg:col-span-1">
                            <div className="w-full mx-auto lg:w-11/12 lg:ml-0">
                                <label for="usuarioUala"
                                    className="block w-2/4 lg:py-8 py-4 pl-0 mx-auto text-center lg:mr-0 lg:ml-4 lg:text-left lg:pl-4 text-xl text-gray-800"
                                >Usuario de Ualá</label>
                                <input type="text" required="required"
                                    id="usuarioUala"
                                    name="usuarioUala"
                                    placeholder="Ale.rodriguez"
                                    value={datos.usuarioUala}
                                    onChange={handleInputChange}
                                    className="block w-full py-4 pl-4 mx-auto text-center rounded-full lg:text-left"
                                />
                            </div>
                        </div>

                        <div className="col-span-2 lg:col-span-1">
                            <div className="w-full mx-auto lg:w-11/12 lg:ml-0">
                                <label for="dni"
                                    className="block w-2/4 lg:py-8 py-4 pl-0 mx-auto text-center lg:mr-0 lg:ml-4 lg:text-left lg:pl-4 text-xl text-gray-800 "
                                >DNI</label>
                                <input type="text" required="required" id="dni"
                                    name="dni" placeholder="xxxxxxxxx"
                                    pattern="[0-9]{8}" title="Debe poner 8 números"
                                    value={datos.name}
                                    onChange={handleInputChange}
                                    className="block w-full py-4 pl-4 mx-auto text-center rounded-full lg:text-left"
                                />
                            </div>
                        </div>

                        <div className="col-span-2 flex my-8">
                            <div className="mx-auto">
                                <input type="checkbox" required="required"
                                    className="ml-1 mr-2 lg:ml-0 "
                                    id="termsAcepted" name="termsAcepted" value="true"
                                    onChange={handleCheckboxChange}
                                />
                                <label forHtml="termsAcepted" className="mb-4 text-sm text-gray-800">
                                    He leído y acepto los <a className="link" href="/legalesmisionuala" target="_blank">Términos y Condiciones.</a>
                                </label>
                            </div>
                        </div>

                        <div className="col-span-2 flex mt-8">
                            <div className="mx-auto">
                                <button disabled={sended} type="submit" className={`text-white p-3 rounded-full outline-none px-24 text-xl justify-self-center bg-blue-250`}>{sended ? "¡Enviado!" : "Enviar"}</button>
                            </div>
                        </div>
                    </form>
                </Container>

                <Container>
                    <div class="container mx-auto w-full">
                        <div class="grid grid-cols-12 p-8 lg:p-12 ">
                            <div class=" col-span-12 lg:col-span-4 ">
                                <img src="assets/images/misionuala/PS5-consola.png" alt="" class="w-3/4 lg:w-5/6 mx-auto" />
                            </div>
                            <div class="col-span-12 lg:col-span-8 content-center flex flex-wrap lg:pr-10 text-center lg:text-left">
                                <p class="mb-8 text-2xl font-bold text-blue-250" >Apurate, porque tod@s la quieren.</p>
                                <p class="mb-8 text-gray-800">Una vez que completes todas los pasos de la Misión Ualá, ya estás participando por la PlayStation®5.</p>
                                <p class="mb-8 text-gray-800">¡Te estaremos avisando si ganaste o no vía mail, hasta 10 días después del cierre del mes!</p>
                            </div>
                        </div>
                    </div>
                    <div class="py-12 text-justify mx-8 lg:mx-0">
                        <div class="marginContainer  text-gray-600">
                            El titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los mismos en forma gratuita a intervalos no inferiores a seis meses, salvo que se acredite un interés legítimo al efecto conforme lo establecido en el artículo 14, inciso 3, de la Ley N° 25.326. Esto es obligatorio en formularios de recolección de datos personales.
                        </div>
                    </div>
                </Container>

            </Layout>

        </>
    );
}
