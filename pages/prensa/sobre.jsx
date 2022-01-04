import Layout from "../../components/layout";
import Container from "../../components/container";
import Head from 'next/head';
import ContactoInstitucional from "../../components/contactoInstitucional";
import Link from 'next/link';

export default function PrensaSobre(props) {


    return (
    <>
        <Head>
                <title>Ualá</title>
        </Head>
        <Layout nav footer>
            <Container>
                <div className="cursor-pointer flex flex-row items-center mb-12 lg:mb-20 mt-32">
                    <Link href="/prensa">
                      <a className="link outline-none">
                        <i className="fas fa-chevron-left mr-4"></i>Regresar a prensa
                      </a>
                    </Link>
                  </div>
            </Container>

            <Container>
                <div className=" lg:px-20">
                    <h2 className="title-2">Acerca de Ualá</h2>
                    <p className="text">Ualá es la fintech que está revolucionando las finanzas en América Latina. Fue fundada por el emprendedor argentino Pierpaolo Barbieri y lanzada en octubre de 2017 con la misión de llevar los servicios financieros al siglo XXI. A través de una aplicación móvil y una tarjeta prepaga internacional Mastercard, ofrece un ecosistema financiero con una experiencia innovadora, integrada, segura, 100% digital, fácil de usar y de bajo costo. 
                    </p>
                    <p className="text">
                    Puede utilizarse para hacer compras en cualquier sitio web o comercio del mundo que acepte Mastercard y para realizar una gran variedad de transacciones financieras como enviar y recibir dinero a cualquier CBU o CVU, retirar efectivo en cajeros, pagar más de 4.000 servicios, cargar la SUBE y recargar saldo en celulares. También es posible solicitar préstamos personales, cuotificar consumos, invertir en un fondo común de inversión, pagar seguros y asistencias exclusivos contratados a través de Willis Towers Watson y, cobrar productos y/o servicios a través de mPOS, link de pago, QR e integración con tiendas online.
                    </p>
                    <p className="text">
                    Con más de 3,5 millones de tarjetas emitidas en América Latina, Ualá está disponible en toda la Argentina para cualquier persona mayor de 13 años y en México, para mayores de 18 años, a través de sistemas operativos iOS y Android.
                    </p>
                </div>    

            </Container>
            <ContactoInstitucional />
        </Layout>
    </>
    )

}