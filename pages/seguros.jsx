import Container from "../components/container";
import Hero from "../components/hero";
import CardItem from "../components/cardItem";
import MapItemsSection from "../components/extracciones/mapItemsSection";
import CardChildren from "../components/cardChildren";
import CardSection from "../components/cardSection";
import Layout from "../components/layout";
import VideoTitle from "../components/videoTitle";
import Head from 'next/head';
import Image from "next/image";


export default function Seguros(props) {

    return (
        <>
            <Head>
                <title>Ualá</title>
            </Head>
            <Layout nav footer>
                <Hero
                    containerStyles="mt-12 bg-blue-wave"
                    section="Seguros"
                    title="Silenciá tus preocupaciones"
                    subtitle={"Podés contratar seguros y asistencias que ofrece Willis Towers Watson pagando con tu Ualá.\n\n Coberturas y servicios pensados para vos, súper accesibles y 100% online."}
                    img={<Image src="/assets/images/seguros/seguros_hero.jpg" width={1500} height={1295} />}
                />

                <CardSection className="bg-blue-degrade">
                    <CardChildren img="/assets/images/seguros/Icono-seguro-celular.png"
                        title="Seguro para celular">
                        <h2 className="text mb-4">Desde <span className="font-semibold">$492</span> por mes</h2>
                        <p className="py-2">👉 Cobertura del valor asegurado de tu celular ante robo o daño accidental</p>
                        <p className="py-2">👉 Reembolso por pérdida de llaves y documentación. </p>
                        <p className="py-2">👉 Asesoramiento ante robo y/o hurto de tarjetas y celular.</p>
                    </CardChildren>

                    <CardChildren img="/assets/images/seguros/Icono-seguro-Hogar.png"
                        title="Asistencia para el hogar">
                        <h2 className="text mb-4">Desde <span className="font-semibold">$240</span> por mes</h2>
                        <p className="py-2">👉 Revisión de estufas y aire acondicionado e instalación de equipos de frío/calor.</p>
                        <p className="py-2">👉 Reparación de electrodomésticos. </p>
                        <p className="py-2">👉 Servicios de emergencia las 24 hs y los 365 días del año.</p>
                    </CardChildren>

                    <CardChildren img="/assets/images/seguros/Icono-seguro-mascotas.png"
                        title="Asistencia para mascotas">
                        <h2 className="text mb-4">Desde <span className="font-semibold">$350</span> por mes</h2>
                        <p className="py-2">👉 Consultas virtuales 24x7 con especialistas. </p>
                        <p className="py-2">👉 Consulta en centros veterinarios.</p>
                        <p className="py-2"> 👉 Descuento en la compra de alimentos y accesorios.</p>
                        <p className="py-2">👉 Vacunación anual.</p>
                        <p className="py-2">👉 Baño para tu mascota.</p>
                    </CardChildren>

                    <CardChildren img="/assets/images/seguros/Icono-seguro-salud.png"
                        title="Asistencia de salud">
                        <h2 className="text mb-4">Desde <span className="font-semibold">$350</span> por mes</h2>
                        <p className="py-2">👉 Consultas médicas virtuales todo el día.</p>
                        <p className="py-2">👉 Chequeos médicos anuales.</p>
                        <p className="py-2">👉 Reintegro por medicamentos.</p>
                        <p className="py-2">👉 Personal trainer y nutricionista online.</p>
                    </CardChildren>

                    <CardChildren img="/assets/images/seguros/Icono-seguro-movilidad.png"
                        title="Asistencia de movilidad">
                        <h2 className="text mb-4">Desde <span className="font-semibold">$440</span> por mes</h2>
                        <p className="py-2">👉 Es un solo seguro para todos tus medios de transporte.</p>
                        <p className="py-2">👉 Incluye cobertura por robo y daño total.</p>
                        <p className="py-2">👉 Incluye cobertura por accidentes.</p>
                        <p className="py-2">👉 Incluye cobertura por robo de efectos.</p>
                    </CardChildren>

                </CardSection>

                <Container className="my-24">
                    <hr className="mb-12" />
                    <h2 className="text font-semibold">Bases y condiciones</h2>
                    <p className="text-sm">Alau Tecnología S.A.U. (Ualá) se limita a ofrecer servicios de pago y no se encuentra autorizado a operar como entidad financiera por el Banco Central de la República Argentina. Los fondos depositados en cuentas de pago no constituyen depósitos en una entidad financiera, ni cuentan con ninguna de las garantías que tales depósitos puedan gozar de acuerdo con la legislación y reglamentación aplicables en materia de depósitos en entidades financieras. Alau Tecnología S.A.U. (Ualá) no actúa como agente institorio ni ninguna otra figura contemplada por la Superintendencia de Seguros de la Nación autorizada para la comercialización de seguros y/o asistencias. Los seguros son ofrecidos por Willis Towers Watson Argentina S.A, CUIT 30-54179972-5, con sede en San Martín 344, piso 25° CABA, estatuto originario inscripto en RPC el 2/8/1967, Nro 2158, F 199, L 64, T A de estatutos nacionales. Willis Towers Watson Argentina S.A. es una sociedad de productores asesores de seguros inscripta ante la Superintendencia de Seguros de la Nación (SSN) www.ssn.gob.ar 0-800-666-8400, N° de matrícula: 59. Las asistencias son ofrecidas por WFD Consultores S.A. CUIT 30-71439847-0 Inscripción N° 537 del Libro 67 de Sociedades por Acciones”, con sede en San Martín 344, piso 25° CABA. El titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los mismos en forma gratuita a intervalos no inferiores a seis meses, salvo que se acredite un interés legítimo al efecto conforme lo establecido en el artículo 14, inciso 3 de la Ley Nº 25.326. Para ejercer su derecho de acceso ingreso al sitio web https://www.willistowerswatson.com/es-AR/notices/datos-personales. LA AGENCIA DE ACCESO A LA INFORMACIÓN PÚBLICA, en su carácter de Órgano de Control de la Ley N° 25.326, tiene la atribución de atender las denuncias y reclamos que interpongan quienes resulten afectados en sus derechos por incumplimiento de las normas vigentes en materia de protección de datos personales. PARA CONTACTAR A LA AGENCIA DE ACCESO A LA INFORMACIÓN PÚBLICA: AV. PTE. GRAL. JULIO A. ROCA 710, PISO 3, CIUDAD AUTÓNOMA DE BUENOS AIRES (C1067ABP), TEL (54- 11) 3988-3968- WWW.ARGENTINA.GOB.AR/AAIP - DATOSPERSONALES@AAIP.GOB.AR. <br /> <br />
Las asistencias son ofrecidas por WFD CONSULTORES S.A CUIT 30-71439847-0 con sede en San Martín 344, piso 25° CABA, Inscripción N° 537 del Libro 67 de Sociedades por Acciones. El titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los mismos en forma gratuita a intervalos no inferiores a seis meses, salvo que se acredite un interés legítimo al efecto conforme lo establecido en el artículo 14, inciso 3 de la Ley Nº 25.326. Para ejercer su derecho de acceso ingreso al sitio web https://www.willistowerswatson.com/es-AR/notices/datos-personales. LA AGENCIA DE ACCESO A LA INFORMACIÓN PÚBLICA, en su carácter de Órgano de Control de la Ley N° 25.326, tiene la atribución de atender las denuncias y reclamos que interpongan quienes resulten afectados en sus derechos por incumplimiento de las normas vigentes en materia de protección de datos personales. Para contactar a la AGENCIA DE ACCESO A LA INFORMACIÓN PÚBLICA: Av. Pte. Gral. Julio A. Roca 710, Piso 3, Ciudad Autónoma de Buenos Aires (C1067ABP), Tel (54- 11) 3988-3968- www.argentina.gob.ar/aaip - datospersonales@aaip.gob.ar.</p>

                </Container>





            </Layout>
        </>
    )

}