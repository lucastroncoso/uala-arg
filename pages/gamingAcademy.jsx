import { useState } from 'react';
import GamingHero from '../components/gaming/gamingHero';
import CardItem from '../components/cardItem';
import VideoTitleGaming from '../components/VideoTitleGaming/videoTitleGaming';
import Layout from '../components/layout';
import Head from 'next/head';
import Image from 'next/image';
import ImageItemsSectionGaming from '../components/imageItemsSectionGaming/imageItemsSectionGaming';
import styles from '../styles/newpampas.module.css';
import Link from 'next/link';
import CommonInput from '../components/commonInput/commonInput';
import { useFormik } from "formik";
import axios from "axios";

export default function Gaming2(props) {

  const validate = (values) => {
    const errors = {};

    if (!values.mail) {
      errors.mail = "Campo requerido";
    } else if (values.mail.includes("@") !== true) {
      errors.mail = "El mail no posee el formato correcto"
    }
    if (!values.dni) {
      errors.dni = "Campo requerido";
    } else if (values.dni.length < 8) {
      errors.dni = "Este campo debe poseer 8 numeros";
    }
    if (!values.name) {
      errors.name = "Campo requerido";
    }
    if (!values.lastname) {
      errors.lastname = "Campo requerido";
    }
    if (!values.steamUser) {
      errors.steamUser = "Campo requerido";
    }
    if (!values.game) {
      errors.game = "Campo requerido";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      dni: "",
      steamUser: "",
      game: "",
      mail: ""
    },
    validate,
    onSubmit: async (values) => {
      const response = await axios.post("https://cms.prod.websites.uala.com.ar:2082/cft", {
        name: values.name,
        lastname: values.lastname,
        dni: values.dni,
        steamUser: values.steamUser,
        game: values.game,
        mail: values.mail
      });
    },
  });

  return (
    <>
      <Head>
        <title>Ualá</title>
      </Head>
      <Layout nav footer banner>
        <div className="bg-gray-gaming">
          <div className="bg-gaming-academy pt-20 relative">
            <p className="subtitle-gaming-2 text-white ml-4 md:ml-8">
                <Link href="/gaming2">
                  <a className="underline text-base outline-none">
                      <i className="fas fa-chevron-left mr-2 md:mr-3"></i>Regresar
                  </a>
                </Link>
            </p>
            <div className="ml-8 hidden md:block">
              <Image src="/assets/images/gamingAcademy/Aro-hero.png" width={39} height={39} />
            </div>
            <div className="text-center">
              <Image
                src="/assets/images/gamingAcademy/Logo-UalaPampas.png"
                width={56}
                height={71}
              />
            </div>
            <div className="text-center hidden md:block">
              <Image src="/assets/images/gamingAcademy/Logo-GA.png" width={531} height={79} />
            </div>
            <div className="text-center block md:hidden mx-8">
              <Image src="/assets/images/gamingAcademy/Logo-GA-Mobile.png" width={602} height={302} />
            </div>
            <div className="grid grid-cols-3">
              <div className="subtitle-gaming-1 text-center col-span-3 mx-8 mt-4 md:mt-6 mb-12 md:mb-0 md:mx-0 md:col-span-1 md:col-start-2">
                ¡La oportunidad de jugar en un equipo profesional! Desde donde estés, 100% online.
              </div>
            </div>
            <div className="absolute top-36 right-0 md:top-60 md:right-0">
              <Image src="/assets/images/gamingAcademy/Aro-body-m2.png" width={37} height={48} />
            </div>
            <ImageItemsSectionGaming
              reverse
              title="¿Qué necesitás saber?"
              img={
                <Image
                  src="/assets/images/gamingAcademy/img-necesitassaber.jpg"
                  width={970}
                  height={636}
                />
              }
              subtitle="Ser mayor a 13 años y tener un usuario aprobado en Ualá."
            />
            <div className="absolute -bottom-0 left-0 hidden md:block">
              <Image src="/assets/images/gamingAcademy/circle-form-m.png" width={58} height={69} />
            </div>
          </div>
          <div className="bg-gaming-a-body pb-3">
            <ImageItemsSectionGaming
              title="Calendario"
              img={
                <div className="hidden md:block shadow grid grid-rows-7 bg-white rounded-2xl px-6 py-6 text-base">
                  <div className="row-span-3 grid grid-cols-5 border-b border-blue-250 pb-4">
                    <div className="col-span-3">
                      <span className="text-blue-250">League of legends</span> <br />
                      <span className="text-gray-700">Inscripción</span> <br />
                      <span className="text-gray-400">Hasta el 30 de Noviembre</span>
                    </div>
                    <div className="col-span-2 ml-4">
                      <br />
                      <span className="text-gray-700">Inicio</span> <br />
                      <span className="text-gray-400">Diciembre</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-5 row-span-4 row-start-4">
                    <div className="col-span-3">
                      <p className="text-blue-250">Fifa</p>
                      <p className="text-blue-250">Free Fire</p>
                      <p className="text-blue-250">CS:GO</p>
                    </div>
                    <div className="col-span-2 ml-4">
                      <p className="text-gray-400">Terminada</p>
                      <p className="text-gray-400">Terminada</p>
                      <p className="text-gray-400">Terminada</p>
                    </div>
                  </div>
                </div>
              }
              fullDiv={<div className="block md:hidden shadow grid grid-rows-7 bg-white  px-6 py-6 text-base">
              <div className="row-span-3 grid grid-cols-5 border-b border-blue-250 pb-4">
                <div className="col-span-3">
                  <span className="text-blue-250">League of legends</span> <br />
                  <span className="text-gray-700">Inscripción</span> <br />
                  <span className="text-gray-400">Hasta el 30 de Noviembre</span>
                </div>
                <div className="col-span-2 ml-4">
                  <br />
                  <span className="text-gray-700">Inicio</span> <br />
                  <span className="text-gray-400">Diciembre</span>
                </div>
              </div>
              <div className="grid grid-cols-5 row-span-4 row-start-4">
                <div className="col-span-3">
                  <p className="text-blue-250">Fifa</p>
                  <p className="text-blue-250">Free Fire</p>
                  <p className="text-blue-250">CS:GO</p>
                </div>
                <div className="col-span-2 ml-4">
                  <p className="text-gray-400">Terminada</p>
                  <p className="text-gray-400">Terminada</p>
                  <p className="text-gray-400">Terminada</p>
                </div>
              </div>
            </div>}
              subtitle="Todos los meses hay nuevos grupos para formarse y competir en CS:GO, Free Fire, League of Legends y más."
            />
          </div>
        </div>
        <div className="-mt-1 relative pb-20 md:pb-0 bg-gray-gaming">
          <ImageItemsSectionGaming
            reverse
            title="Sé parte del equipo"
            img={
              <Image src="/assets/images/gamingAcademy/img-separte.jpg" width={970} height={636} />
            }
            subtitle="Los ganadores ueden quedar seleccionados para formar parte de Ualá Pampas 😎 y llevarse premios exclusivos"
          />
          <div className="absolute hidden md:block bottom-80 right-16">
            <Image src="/assets/images/gamingAcademy/circle-form.png" width={46} height={46} />
          </div>
        </div>
        <div className={styles.bgGradient + ' px-12'}>
          <div className={styles.marginContainer + ' flex flex-wrap'}>
            <div className="mb-4 md:mb-12 mt-12 md:mt-24 mx-auto w-full">
              <h2 className="text-4xl text-center mb-8 mx-2 md:mx-0">¡Anotate para participar!</h2>
              <p className="text-center text-gray-600  mx-2 md:mx-0">
                Este mes jugamos: League of Legends
              </p>
              <p className="text-center text-gray-600  mx-2 md:mx-0">
                Inscripciones desde el 01/01 hasta el 30/01.
              </p>
            </div>

            <form
              className="grid w-full grid-cols-2 mb-0 md:mb-24"
              action=""
              method="POST"
              id="form"
              onSubmit={formik.handleSubmit}
            >
              <div className="col-span-2 md:col-span-1">
                <div className="w-full mx-auto md:w-11/12 md:ml-0">
                  <CommonInput onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} type="text" required="required" id="name" name="name" placeholder="Alejandro" htmlFor="name" children="Nombre" />
                  {formik.touched.name && formik.errors.name ? (
                    <div className="error">{formik.errors.name}</div>
                      ) : null}
                  <CommonInput onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastname} type="text" required="required" id="lastname" name="lastname" placeholder="Rodriguez" htmlFor="lastname" children="Apellido" />
                  {formik.touched.lastname && formik.errors.lastname ? (
                    <div className="error">{formik.errors.lastname}</div>
                      ) : null}
                  <CommonInput onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.mail} type="text" required="required" id="mail" name="mail" placeholder="arodriguez@uala.com.ar" htmlFor="mail" children="Mail" />
                  {formik.touched.mail && formik.errors.mail ? (
                    <div className="error">{formik.errors.mail}</div>
                      ) : null}
                </div>
              </div>

              <div className="flex flex-col col-span-2 md:col-span-1">
                <div className="w-full mx-auto md:w-11/12 md:ml-20 ">
                  <CommonInput onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.dni} type="text" required="required" id="dni" name="dni" placeholder="xxxxxxxxx" htmlFor="dni" pattern="[0-9]{8}" children="Dni" />
                  {formik.touched.dni && formik.errors.dni ? (
                    <div className="error">{formik.errors.dni}</div>
                      ) : null}
                  <label
                    htmlFor="game"
                    className="block w-2/4 py-2 pl-0 mx-auto text-center md:mx-0 md:text-left md:pl-4"
                  >
                    Juego
                  </label>
                  <div className="mx-auto md:mx-0 relative grid w-11/12">
                    <i className="absolute text-blue-250 right-0 mr-3 md:mr-4 place-self-center fas fa-chevron-down"></i>
                    <select
                      name="game"
                      required
                      id="select"
                      defaultValue="Selecciona un juego"
                      onChange={formik.handleChange}
                      className="appearance-none block py-3 pl-4 text-center bg-white rounded-full lg:mx-0 md:text-left focus:outline-none outline-none"
                      value={formik.values.game}
                      placeholder="Selecciona un juego"
                    >
                      <option disabled>Selecciona un juego</option>
                      <option>Fifa</option>
                      <option>League of Legends</option>
                      <option>Free Fire</option>
                      <option>CS:GO</option>
                    </select>
                  </div>
                  {formik.touched.game && formik.errors.game ? (
                    <div className="error">{formik.errors.game}</div>
                      ) : null}
                  <CommonInput onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.steamUser} type="text" required="required" id="steamUser" name="steamUser" placeholder="Steam / Garena ID" htmlFor="usuarioSteam" children="Usuario" />
                  {formik.touched.steamUser && formik.errors.steamUser ? (
                    <div className="error">{formik.errors.steamUser}</div>
                      ) : null}
                </div>
              </div>
              <div className="flex flex-wrap flex-col col-span-2 md:col-span-1 w-11/12 mx-auto mt-10 mb-6 md:mx-0 md:flex-nowrap ">
                <div className="flex mx-auto mb-2 md:mx-0">
                  <input
                    onChange={formik.handleChange}
                    type="checkbox"
                    required="required"
                    className="ml-1 mr-2 md:ml-0 "
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
              </div>
              <div className="flex flex-wrap  col-span-2 grid mb-4 md:mb-12 md:mb-0">
                <button
                  className={
                    'px-24 py-3 md:px-20 md:py-2 mx-auto rounded-full lg:mx-0 justify-self-center ' +
                    styles.formButton
                  }
                  type="submit"
                >
                  Enviar
                </button>
              </div>
              <div className="flex flex-wrap mt-8 md:mt-16 col-span-2 grid mb-12 md:mb-8">
                <p className="text-gray-600 text-sm md:text-base">
                  El titular de los datos personales tiene la facultad de ejercer el derecho de
                  acceso a los mismos en forma gratuita a intervalos no inferiores a seis meses,
                  salvo que se acredite un interés legítimo al efecto conforme lo establecido en el
                  artíulo 14, inciso 3 de la Ley N° 25.326. La DIRECCIÓN NACIONAL DE PROTECCIÓN DE
                  DATOS PERSONALES. Organo de Control de la Ley N° 25.326, tiene la atribución de
                  atender las denuncias y reclamos que se interpongan con relación al incumplimiento
                  de las normas sobre protección de datos personales.
                </p>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
}
