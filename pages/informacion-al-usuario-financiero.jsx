import { useState } from 'react';
import Container from '../components/container';
import Layout from '../components/layout';
import Head from 'next/head';
import Image from 'next/image';

export default function Nosotros(props) {
  return (
    <>
      <Head>
        <title>Ualá</title>
      </Head>
      <Layout nav footer>
        <Container className="mt-28 md:mt-36">
          <p className="text-xl">Legales</p>
          <h1 className="title-2">Información al Usuario Financiero</h1>
          <p>Pedi tu préstamo desde la App de Ualá.</p>
          <p>
            <span className="font-semibold block">Canales de atención de quejas y/o reclamos:</span>
            Chat online disponible en la aplicación para teléfonos móviles Ualá de lunes a viernes de 09:00 a 21:00 horas y sábados de 09:00 a 18:00hs.
            <br/>Correo electrónico a hola@uala.com.ar
          </p>
          <p>
            <span className="font-semibold block">
            Responsables de Atención al Usuario de Servicios Financieros:
            </span>
            Titular: Rodrigo Fernando Morales
            <br/>Suplente: Cynthia Alejandra Aiello
            <br/>Dirección: Nicaragua 4677, C1414BVG, Ciudad Autónoma de Buenos Aires, Argentina. 
            <br/>Teléfono: (011) 5263-3563 (De lunes a viernes de 09:00 a 18:00 horas). 
            <br/>Correo electrónico de atención: 
            <a target="_blank" className="link" href="mailto:proteccionusuarios@uala.com.ar">
              proteccionusuarios@uala.com.ar
            </a>
            .
          </p>
          <p className="break-words">
          Las quejas y/o reclamos de los usuarios deberán resolverse definitivamente en un plazo máximo de 10 días hábiles. La falta de respuesta o disconformidad en la resolución podrán ser informados al BCRA. Podés contactar a su área de Protección al Usuario de Servicios Financieros ingresando a 
            <a
              target="_blank"
              className="link"
              href="http://www.bcra.gob.ar/BCRAyVos/Usuarios_Financieros.asp"
            >
              www.bcra.gob.ar/BCRAyVos/Usuarios_Financieros.asp
            </a>
          </p>
          <div className="grid md:grid-cols-2  md:w-8/12 my-12">
            <Image
              src="/assets/images/legal/cartel-BCRA-baja-de-servicio.jpeg"
              width={1000}
              height={1414}
            />
            <Image
              src="/assets/images/legal/cartel-BCRA-contacto.jpeg"
              width={1000}
              height={1414}
            />
          </div>
        </Container>
      </Layout>
    </>
  );
}
