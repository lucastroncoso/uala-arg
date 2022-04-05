import Head from 'next/head';
import Layout from "../components/layout";
import Container from '../components/container';

export default function Legales(props) {
    
    return (
        <>
            <Head>
                <title>Ualá - Legales: información regulatoria</title>
                <meta name="description" content="Más información acerca de nuestros legales e información regulatoria" />
            </Head>
            
            <Layout nav footer>

                <Container className="mt-24 md:mt-36 mb-20">
                    <div className="text-xl w-5/6 ">
                        <div className="">Legales</div>
                    </div>

                    <h1 className="title-3 md:w-5/6 my-4">
                        <div className="">Información regulatoria de Ualá</div>
                    </h1>

                    
                    <div className="text-justify">
                        <p className="mb-2 text-justify">
                        De acuerdo a la normativa vigente del Banco Central de la República Argentina, Ualá es un Proveedor de Servicios de Pago (en adelante, “PSP”) inscripto bajo el número 33.549 en el Registro de Proveedores de Servicios de Pago que ofrecen cuentas de pago del Banco Central de la República Argentina. Asimismo, Ualá se encuentra en la categoría Proveedores No Financieros de Crédito e inscripto en el Registro Otros Proveedores No Financieros de Crédito del Banco Central de la República Argentina.
                        <br/>
                        No está autorizado por el para operar como una entidad financiera (como banco o como compañía financiera) en los términos de la Ley Nº 21.526.
                        <br/>Por ende los fondos depositados en las cuentas de pago no constituyen depósitos en una entidad financiera regulada y no cuentan con las garantías de depósitos en entidades financieras. A diferencia de esas entidades, Ualá no presta depósitos de sus usuarios.
                        </p>
                        
                        <h3 className="text-xl mt-8">Responsabilidad por los fondos</h3>
                        <p className="mb-2 mt-0 text-justify">
                        De acuerdo a la normativa BCRA, Ualá mantendrá los fondos de las cuentas de los Usuarios disponibles en cuentas corrientes a la vista, a su nombre, en entidades financieras autorizadas por el BCRA de la República Argentina.
                        <br/><br/>
                        El dinero de las cuentas de los Usuarios siempre está disponible para ser retirada cuando lo requieran. Ualá no será responsable en ningún caso por hechos que afecten la disponibilidad de los fondos y/o por la insolvencia de dichas entidades financieras reguladas.
                        <br/><br/>
                        Ualá, dado su carácter de PSP y al no ser una entidad financiera en los términos de la Ley N° 21.526, no realiza intermediación financiera. La intermediación financiera es la actividad que caracteriza a los Bancos, entre otras entidades, y se produce cuando se utiliza el dinero de los depositantes para otorgar préstamos. A diferencia de los bancos, Ualá no presta depósitos, por lo que sus préstamos son con capital propio.
                        </p>
                        
                        <h3 className="text-xl mt-8">Información sobre Fintech</h3>
                        <p className="mb-2 mt-0 text-justify">
                        Ualá es una empresa de la categoría Fintech. El término “Fintech” nace de la unión de las palabras Finanzas y Tecnología en inglés. El sentido de la unión de ambas palabras se genera porque las Fintech buscan ofrecer a las personas variados servicios financieros aprovechando la tecnología y, por lo tanto, haciendo que los productos y servicios ofrecidos sean más accesibles, para que más personas puedan tenerlos y más cómodos para que las personas puedan utilizarlos con más facilidad.
                        <br/><br/>
                        El principal servicio que ofrece Ualá es la tarjeta prepaga con una app. Es decir, es una tarjeta recargable que para poder usarla, primero se le debe cargar saldo. Para saber cómo cargar saldo en Ualá ingresar acá.
                        <br/><br/>
                        Una vez acreditada la carga en la cuenta, el Usuario tendrá su dinero disponible en todo momento: para hacer compras, cargar saldo a determinados servicios, invertir, transferir a cualquier cuenta bancaria o virtual y/ extraer los fondos por cajeros automáticos.
                        <br/><br/>
                        Además, los usuarios pueden acceder a préstamos que Ualá ofrece con capital propio.
                        </p>
                        
                        <h3 className="text-xl mt-8">Información sobre Prevención de Lavado de Dinero y Financiamiento del Terrorismo.</h3>
                        <p className="mb-2 mt-0 text-justify">
                        Ualá es un Sujeto Obligado de acuerdo con la Ley 25.246 y modificatorias (Art. 20). Por la actividad que realizamos estamos obligados a obtener datos de nuestros clientes y monitorear sus operaciones con el fin de informar a la Unidad de Información Financiera (UIF) y así prevenir el lavado de dinero y la financiación del terrorismo. Otros Sujetos Obligados son, por ejemplo, los Bancos, las Compañías de Seguros, los escribanos, entre otros.
                        <br/><br/>
                        Ualá cumple con todas las normas aplicables sobre prevención de lavado de activos y financiamiento del terrorismo, principalmente la Resolución UIF 76/2019.
                        </p>
                        
                        <h3 className="text-xl mt-8">Información sobre Anticorrupción</h3>
                        <p className="mb-2 mt-0 text-justify">
                        Ualá se compromete fuertemente con el cumplimiento de todas las normas aplicables en materia de anticorrupción, tales como la ley 27.401 de responsabilidad penal de las personas jurídicas. Ualá cuenta con un Plan de Integridad que abarca varios aspectos relacionados.
                        </p>

                        <p className="mb-2 text-justify">
                            <a href="https://blog.uala.com.ar/educacion-financiera/fintech-que-son-y-para-que-sirven/" target="_blank" className="link">Leé esta nota sobre Fintech en el Blog de Ualá</a>
                        </p>
                    </div>
                </Container>

            </Layout>

        </>
    );
}
