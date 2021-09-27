import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/newpampas.module.css';
import { data } from 'autoprefixer';

export default function Gaming(props) {
  //form state
  const [datos, setDatos] = useState({});
  //form
  const [sended, setSended] = useState(false);

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
    console.log(datos);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    // const response = await api.post("https://cms.prod.websites.uala.com.ar:2082/cft", datos)
    // response.type === "CFTUSER_ADD_SUCCESS" ? setSended(true) : alert("Hubo un problema al enviar el formulario!")
    console.log(datos);
  };

  return (
    <>
      <Head>
        <title>Ualá</title>
      </Head>

      <header className={styles.bgImageDesk + ' hidden lg:block pb-12 px-12'}>
        <div className={styles.marginContainer}>
          <div className="grid grid-cols-2 w-full py-8">
            <div className=" flex flex-row ">
              <div className="flex-1 pt-6">
                <div className="mt-8">
                  <img src="/assets/images/newpampas/logo-uala.svg" alt="" />
                </div>

                <div className="mt-20">
                  <span className=" text-white block text-4xl font-medium">Conocé Ualá</span>
                  <span className={'pt-2 block text-4xl font-medium ' + styles.colorPampa}>
                    New Pampas
                  </span>
                </div>
              </div>

              <div className=" flex-1">
                <img
                  src="/assets/images/newpampas/logo-uala-np.svg"
                  alt=""
                  className="mt-36 mb-28 mx-auto w-44"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className={styles.bgImageMobile + ' block lg:hidden'}>
        <div className="flex flex-wrap flex-col pt-14 ">
          <div className="block mx-auto">
            <img className="w-24" src="/assets/images/newpampas/logo-uala.svg" alt="" />
          </div>
          <div className="block mx-auto pt-10">
            <span className=" text-white block text-4xl ">Conocé Ualá</span>
            <span className="pt-4 text-white block text-4xl">New Pampas</span>
          </div>
          <div className="block pt-16 pb-36 lg:pb-48">
            <img src="/assets/images/newpampas/logo-uala-np.svg" alt="" className="mx-auto w-48" />
          </div>
        </div>
      </header>
      <div className={styles.marginContainer}>
        <div className="grid grid-cols-2 p-8 lg:p-0  lg:py-8 lg:mt-14">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex flex-wrap flex-col h-full">
              <h2 className="text-4xl pt-0 lg:pt-8 text-gray-800  lg:text-left">Sin límites</h2>
              <p className="py-8 text-lg text-gray-600 lg:text-left lg:w-5/6">
                <span className="font-bold">Ualá y New Pampas</span> se unieron para que cada vez
                mas gamers tengan mejores oportunidades y conozcan
                <span className="font-bold"> #ElLadoBuenoDeTuPlata</span>
              </p>
            </div>
            <hr className={'w-2/4  hidden lg:flex ' + styles.hrBlueRed} />
          </div>

          <div className="col-span-2 lg:col-span-1">
            <div className="flex justify-center">
              <a target="_BLANK" href="https://youtu.be/GTcxxiaN7K4">
                <img src="/assets/images/newpampas/video-thumbnail.png" alt="" />
              </a>
            </div>

            <hr className={'w-3/4 self-end mx-auto block lg:hidden mt-14 ' + styles.hrBlueRed} />
          </div>
        </div>
        <img
          src="/assets/images/newpampas/semi-gradient-1.png"
          alt=""
          className="absolute bottom-32 left-0 hidden lg:block w-20  "
        />
        <img
          src="/assets/images/newpampas/semi-gradient-2.png"
          alt=""
          className="absolute -bottom-40 right-0 hidden lg:block w-20 "
        />
      </div>

      <div className={styles.marginContainer}>
        <div className="grid grid-cols-2 mt-8 pt-0 lg:pt-24 p-8 lg:px-0 w-full mb-16">
          <div className="col-span-2 lg:col-span-1">
            <div className="mb-8 text-gray-600">
              <h2 className="text-3xl  lg:text-left text-gray-800">Sumate a la</h2>
              <img
                src="/assets/images/newpampas/logo-gaming-academy.svg"
                alt=""
                className=" -ml-5"
              />
              <hr className={'hidden lg:block  w-1/6 mt-8 mb-4 ' + styles.hrBlue} />
              <p className="text-lg pt-0 lg:pt-8  lg:text-left ">
                ¡La oportunidad de jugar en un equipo profesional! Desde donde estés, 100% online.
              </p>
              <p className={'text-xl pt-4 mb-2 lg:text-left ' + styles.ualaBlue}>¿Qué necesitás?</p>
              <p className="text-lg  lg:text-left  lg:mb-0">
                Ser mayor a 13 años y tener un usuario aprobado en Ualá
              </p>
              <p className="text-lg pt-4  lg:text-left">
                Todos los meses hay nuevos grupos para formarse y competir en CS:GO, Free Fire,
                League of Legends y más.
              </p>
              <p className="pt-4 text-lg  lg:text-left pb-8">
                Los ganadores pueden quedar seleccionados para formar parte de Ualá New Pampas 😎 y
                llevarse un mouse, un teclado, unos auriculares y una silla gamer.
              </p>
            </div>
          </div>

          <div className="col-span-2 lg:col-span-1 items-center flex ">
            <div className="w-full  lg:w-5/6 mx-auto lg:ml-20   rounded-md py-4 ">
              <div className="grid grid-cols-2 p-4 ">
                <hr
                  className={'w-8/12  mx-auto hidden lg:block  mb-8  col-span-2 ' + styles.hrBlueX}
                />
                <h3 className="text-2xl col-span-2 mx-auto pb-8 ">Calendario</h3>

                <div className=" items-end">
                  <h4 className={'text-xl col-span-2  mb-2 ' + styles.ualaBlue}>Free Fire</h4>
                  <p className="text-gray-800">Inscripción</p>
                  <p className="text-gray-500">Hasta el 29 de septiembre</p>
                </div>
                <div className=" flex-col pl-4">
                  <p className="text-xl text-white mb-2">A</p>
                  <p className="text-gray-800">Inicio</p>
                  <p className=" text-gray-500">Octubre</p>
                </div>

                <div className="flex justify-center col-span-2">
                  <hr className={styles.hrGraySm + ' my-4 mt-8 w-5/6'} />
                </div>

                <div className="">
                  <p className={styles.ualaBlue + ' py-2'}>Fifa</p>
                  <p className={styles.ualaBlue + ' py-2'}>CS:GO</p>
                  <p className={styles.ualaBlue + ' py-2'}>League of Legends</p>
                </div>
                <div className="pl-4">
                  <p className="py-2 text-gray-500">Abierta</p>

                  <p className="py-2 text-gray-500">Terminada</p>

                  <p className="py-2 text-gray-500">Octubre</p>
                </div>

                <hr
                  className={'w-8/12  mx-auto hidden lg:block  mt-14 col-span-2 ' + styles.hrBlueX}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={'mb-12 ' + styles.bgGradient}>
        <div className={styles.marginContainer + ' flex flex-wrap'}>
          <div className="mb-4 lg:mb-12 mt-12 lg:mt-24 mx-auto w-full">
            <h2 className="text-4xl text-center mb-8 mx-2 lg:mx-0">¡Anotate para participar!</h2>
            <p className="text-center text-gray-600  mx-2 lg:mx-0">
              Este mes jugamos: Free Fire y Fifa
            </p>
            <p className="text-center text-gray-600  mx-2 lg:mx-0">
              Inscripciones desde el 01/09 hasta el 29/09.
            </p>
          </div>

          <form
            className="grid w-full grid-cols-2 mb-0 lg:mb-24"
            action=""
            method="POST"
            id="form"
            onSubmit={handleSubmit}
          >
            <div className="col-span-2 lg:col-span-1">
              <div className="w-full mx-auto lg:w-11/12 lg:ml-0">
                <label
                  htmlFor="name"
                  className="block w-2/4 py-2 pl-0 mx-auto text-center lg:mx-0 lg:text-left lg:pl-4"
                >
                  Nombre
                </label>
                <input
                  onChange={handleInputChange}
                  type="text"
                  required="required"
                  id="name"
                  name="name"
                  placeholder="Alejandro"
                  className="block w-11/12 py-3 pl-4 mx-auto text-center rounded-full lg:mx-0 lg:text-left focus:outline-none"
                />
                <label
                  htmlFor="lastname"
                  className="block w-2/4 py-2 pl-0 mx-auto text-center lg:mx-0 lg:text-left lg:pl-4"
                >
                  Apellido
                </label>
                <input
                  onChange={handleInputChange}
                  type="text"
                  required="required"
                  id="lastname"
                  name="lastName"
                  placeholder="Rodriguez"
                  className="block w-11/12 py-3 pl-4 mx-auto text-center rounded-full lg:mx-0 lg:text-left focus:outline-none"
                />
                <label
                  htmlFor="mail"
                  className="block w-2/4 py-2 pl-0 mx-auto text-center lg:mx-0 lg:text-left lg:pl-4"
                >
                  Mail
                </label>
                <input
                  onChange={handleInputChange}
                  type="text"
                  required="required"
                  id="mail"
                  name="mail"
                  placeholder="ale@gmail.com"
                  className="block w-11/12 py-3 pl-4 mx-auto text-center rounded-full lg:mx-0 lg:text-left focus:outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col col-span-2 lg:col-span-1">
              <div className="w-full mx-auto lg:w-11/12 lg:ml-20 ">
                <label
                  htmlFor="dni"
                  className="block w-2/4 py-2 pl-0 mx-auto text-center lg:mx-0 lg:text-left lg:pl-4"
                >
                  DNI
                </label>
                <input
                  onChange={handleInputChange}
                  type="text"
                  required="required"
                  id="dni"
                  name="dni"
                  placeholder="xxxxxxxxx"
                  pattern="[0-9]{8}"
                  title="Debe poner 8 números"
                  className="block w-11/12 py-3 pl-4 mx-auto text-center rounded-full lg:mx-0 lg:text-left focus:outline-none"
                />

                <label
                  htmlFor="game"
                  className="block w-2/4 py-2 pl-0 mx-auto text-center lg:mx-0 lg:text-left lg:pl-4"
                >
                  Juego
                </label>
                <select
                  name="game"
                  required
                  id="select"
                  defaultValue="Selecciona un juego"
                  onChange={handleInputChange}
                  className="block w-11/12 py-3 pl-4 mx-auto text-center rounded-full lg:mx-0 lg:text-left focus:outline-none outline-none"
                >
                  <option disabled>Selecciona un juego</option>
                  <option>Free Fire</option>
                  <option>Fifa</option>
                </select>

                <label
                  htmlFor="usuarioSteam"
                  className="block w-2/4 py-2 pl-0 mx-auto text-center lg:mx-0 lg:text-left lg:pl-4"
                >
                  Usuario
                </label>
                <input
                  onChange={handleInputChange}
                  type="text"
                  required="required"
                  id="usuarioSteam"
                  name="usuarioSteam"
                  placeholder="Steam / Garena ID / PlayStation ID"
                  className="block w-11/12 py-3 pl-4 mx-auto text-center rounded-full lg:mx-0 lg:text-left focus:outline-none"
                />

                <div className="flex flex-wrap w-11/12 mx-auto my-10 lg:mx-0 lg:flex-nowrap ">
                  <div className="flex mx-auto mb-4 lg:mx-0">
                    <input
                      onChange={handleInputChange}
                      type="checkbox"
                      required="required"
                      className="ml-1 mr-2 lg:ml-0 "
                      value="true"
                      id="terms"
                      name="termsAcepted"
                    />
                    <label htmlFor="" className="mb-4 text-sm">
                      He leído y acepto los{' '}
                      <a
                        target="_blank"
                        className="underline text-blue-600"
                        href="https://uala.com.ar/gamingacademy"
                      >
                        Términos y Condiciones.
                      </a>
                    </label>
                  </div>

                  <button
                    className={
                      'self-start w-3/6 py-2 mx-auto rounded-full lg:mx-0 ' + styles.formButton
                    }
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <hr className={'block w-3/4 mx-auto mt-20 mb-6 lg:hidden ' + styles.hrBlueRed} />
      {/* FAQS */}
      <div className={'relative ' + styles.marginContainer}>
        <div className="grid w-full grid-cols-2">
          <div className="col-span-2 mx-auto mt-0 lg:mx-0 lg:mt-14">
            <h2 className="px-4 my-8 text-4xl text-center lg:text-left lg:px-0">
              Preguntas frecuentes
            </h2>
          </div>
          <div className="col-span-2 mb-20">
            <div className="text-lg accordion" id="accordionExample">
              <div className="w-11/12 mx-auto accordion-item lg:w-full">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="text-lg accordion-button "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    ¿Qué es la Ualá Gaming Academy?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="text-gray-500 accordion-body">
                    La Gaming Academy es un espacio donde cualquiera puede tener su primera
                    experiencia profesional para formar parte de Ualá New Pampas y aspirar a llegar
                    al Main Team de una determinada disciplina (CS:GO, LoL, Valorant y otras). Es,
                    en otra palabras, la reserva de un equipo de primera división, donde a los
                    jugadores se les brindan las herramientas técnicas y humanas (como cuerpo
                    técnico y deportivo) para que puedan desarrollar su potencial al máximo.
                  </div>
                </div>
              </div>
              <div className="h-6"></div>
              <div className="w-11/12 mx-auto accordion-item lg:w-full">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    ¿Cuáles son los requisitos de la Ualá Gaming Academy?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="text-gray-500 accordion-body">
                    Para anotarte solamente tenés que tener +13 años y tener un usuario aprobado de
                    Ualá. Tené en cuenta que para participar vas a necesitar un dispositivo desde el
                    cual jugar.
                  </div>
                </div>
              </div>
              <div className="h-6"></div>
              <div className="w-11/12 mx-auto accordion-item lg:w-full">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    ¿Tengo que pagar para entrar en la Ualá Gaming Academy?
                  </button>
                </h2>
                <div
                  className="accordion-collapse collapse"
                  id="collapseThree"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="text-gray-500 accordion-body">
                    No, las inscripciones son abiertas y gratuitas. Solamente tenés que tener tu
                    Ualá.
                  </div>
                </div>
              </div>
              <div className="h-6"></div>
              <div className="w-11/12 mx-auto accordion-item lg:w-full">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    ¿Cómo me entero si entré a la Ualá Gaming Academy?
                  </button>
                </h2>
                <div
                  className="accordion-collapse collapse"
                  id="collapseFour"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="text-gray-500 accordion-body">
                    Si quedaste seleccionado, el equipo de Ualá New Pampas te va a contactar por
                    mail para contarte cómo participar.
                  </div>
                </div>
              </div>
              <div className="h-6"></div>
              <div className="w-11/12 mx-auto accordion-item lg:w-full">
                <h2 className="accordion-header" id="headingFive">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  />
                  Si no me seleccionan este mes, ¿puedo volver a anotarme el mes que viene?
                </h2>
                <div
                  className="accordion-collapse collapse"
                  id="collapseFive"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="text-gray-500 accordion-body">
                    Sí, podés volverte a anotar las veces que quieras.
                  </div>
                </div>
              </div>
              <div className="h-6"></div>
              <div className="w-11/12 mx-auto accordion-item lg:w-full">
                <h2 className="accordion-header" id="headingSix">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  />
                  ¿Qué pasa al final de la Ualá Gaming Academy?
                </h2>
                <div
                  className="accordion-collapse collapse"
                  id="collapseSix"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="text-gray-500 accordion-body">
                    Al equipo seleccionado se le ofrecerá un contrato oficial con la organización y
                    Ualá New Pampas se encargará de inscribirlo en las competiciones de primer
                    nivel. Aún así, si un jugador resalta o tiene muy buenos resultados, tendrá la
                    posibilidad de hacer el salto al equipo Main o titular.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.marginContainer}>
        <a href="https://uala.onelink.me/tTSW/3a5f17a7">
          <div className="hidden lg:block mb-28">
            <img src="assets/images/newpampas/Gaming_Banner_Steam_Adq_V1_desktop.png" alt="" />
          </div>
          <div className="block p-6 mb-24 lg:hidden">
            <img src="assets/images/newpampas/Gaming_Banner_Steam_Adq_V1_mobile.png" alt="" />
          </div>
        </a>
      </div>

      <div className={'py-16 ' + styles.bgGradient}>
        <div className={styles.marginContainer}>
          <div className="px-4 mx-auto lg:px-24">
            <h2 id="calculadora" className="mb-8 text-4xl font-semibold text-center text-gray-800">
              Calculá cuánto sale tu juego
            </h2>
            <p className="mb-8 text-xl text-center text-gray-700">
              Utilizando esta calculadora podés conocer el precio final del juego{' '}
              <br className="hidden lg:block" /> para que sepas
              <span className="font-semibold">cuánto saldo cargar en Ualá.</span>
            </p>

            <label
              htmlFor="price"
              className="block w-2/4 py-2 pl-0 mx-auto text-xl text-center text-gray-700 lg:pl-4"
            >
              Precio del juego
            </label>
            <input
              type="number"
              required="required"
              id="price"
              name="price"
              placeholder="$2.500,00"
              className="block w-11/12 py-3 pl-4 mx-auto mb-4 text-xl text-center rounded-full appearance-none lg:w-8/12 focus:outline-none"
            />
            <label
              htmlFor="price"
              className="block w-2/4 py-2 pl-0 mx-auto text-xl text-center text-gray-700 lg:pl-4"
            >
              ¿Dónde vivís?
            </label>

            <select
              name="zone"
              required
              id="zone"
              style={{ textAlignLast: 'center' }}
              className="block w-11/12 py-3 pl-4 mx-auto mb-10 text-xl text-center rounded-full outline-none lg:w-8/12 focus:outline-none"
            >
              <option disabled></option>
              <option>Vivo en CABA o GBA</option>
              <option>No vivo en CABA o GBA</option>
            </select>

            <button
              id="exec"
              className={
                'block w-8/12 py-3 mx-auto mb-8 text-xl rounded-full  lg:w-5/12 ' +
                styles.formButton
              }
            >
              Calcular
            </button>

            <p className="block w-full py-2 pl-0 mx-auto text-xl text-center text-gray-700 lg:w-2/4 lg:pl-4">
              Precio final del juego
            </p>
            <div
              id="result"
              className="w-11/12 py-3 mx-auto mb-8 text-xl text-center text-gray-500 bg-white border rounded-full lg:w-8/12"
            >
              $0
            </div>
            <p className="text-center text-gray-500">
              El precio final tiene en cuenta el 21% del IVA, el 8% del impuesto PAIS, el 35% de
              impuesto a las Ganancias y el 2% de Ingresos Brutos en caso de que vivas en la Ciudad
              de Buenos Aires o en el Gran Buenos Aires
            </p>
          </div>
        </div>
      </div>

      <footer className={'relative block ' + styles.footer}>
        <div className={'z-0 ' + styles.marginContainer}>
          <div className="grid w-full grid-cols-2 p-8 pb-32 pt-28 lg:pb-60 ">
            <div className="col-span-2  lg:col-span-1">
              <h2 className="pt-4 text-4xl leading-tight text-center text-white lg:text-left">
                {' '}
                Comprá con tu Ualá
                <br />y no pares de jugar
              </h2>
              <hr className={'hidden w-1/6 mt-8 mb-4 lg:block ' + styles.hrWhite} />
              <p
                className={
                  'hidden pt-4 text-lg text-center text-white lg:text-left lg:block ' +
                  styles.footerP
                }
              >
                Usá tu tarjeta Ualá para pagar <br /> en los mejores juegos.
              </p>
              <p className="block pt-4 text-lg text-center text-white lg:hidden lg:text-left">
                Usá tu tarjeta Ualá para pagar <br /> en los mejores juegos.
              </p>
              <p className="hidden pt-4 text-lg text-white lg:block">
                Recordá calcular el 30% adicional de impuesto
                <br /> PAIS + el 35% de Percepción de Ganancias en <br /> tus compras en moneda
                extranjera.
              </p>
            </div>

            <div className="col-span-2  lg:col-span-1">
              <div className="flex flex-col flex-wrap content-center justify-center h-full px-4 mx-auto lg:justify-end">
                <div>
                  <img
                    src="/assets/images/newpampas/logo-steam.png"
                    alt=""
                    className="pt-8 pb-10 mx-auto lg:pt-0 lg:mx-0"
                  />
                </div>
                <div>
                  <img
                    src="/assets/images/newpampas/csgo-logo.png"
                    alt=""
                    className="w-48 pb-12 pl-0 mx-auto lg:mx-0"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-2 lg:hidden">
              <p className="block pt-12 text-lg text-center text-white lg:hidden ">
                Recordá calcular el 30% adicional de impuesto
                <br /> PAIS + el 35% de Percepción de Ganancias en <br /> tus compras en moneda
                extranjera.
              </p>
            </div>
          </div>
        </div>
        <img
          src="/assets/images/newpampas/esquinero-gradient.svg"
          alt=""
          className="absolute bottom-0 right-0 hidden lg:block"
        />
        <img
          src="/assets/images/newpampas/circulo-gradient.svg"
          alt=""
          className="absolute right-0 -top-9 lg:right-80 "
        />
        <img
          src="/assets/images/newpampas/cruz-grande.svg"
          alt=""
          className="absolute hidden top-2 left-4 lg:block "
        />
        <img
          src="/assets/images/newpampas/cruz-grande.svg"
          alt=""
          className="absolute right-0 hidden w-20 bottom-72 lg:block "
        />
        <img
          src="/assets/images/newpampas/cruz-chica.svg"
          alt=""
          className="absolute hidden bottom-28 left-72 lg:block "
        />
      </footer>

      <div className="px-4 py-12 text-justify bg-gray-100">
        <div className="text-gray-600 marginContainer">
          El titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los
          mismos en forma gratuita a intervalos no inferiores a seis meses, salvo que se acredite un
          interés legítimo al efecto conforme lo establecido en el artículo 14, inciso 3 de la Ley
          Nº 25.326. La DIRECCION NACIONAL DE PROTECCION DE DATOS PERSONALES, Organo de Control de
          la Ley Nº 25.326, tiene la atribución de atender las denuncias y reclamos que se
          interpongan con relación al incumplimiento de las normas sobre protección de datos
          personales
        </div>
      </div>
    </>
  );
}
