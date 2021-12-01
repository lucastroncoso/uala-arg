import C01Navigation from '../components/home/C01-Navigation/C01Navigation';
import pageContent from '../data/SiteMXContent.json';
import { useAppContext } from '../store/context';
import Footer from '../components/home/Footer/Footer';





export default function Seguridad(props) {
    const { locale } = useAppContext();

    return (
        <>
            <C01Navigation content={pageContent[locale].navbar} />
            <div className="grid w-full grid-cols-12 my-36 ">
                <div className="grid grid-cols-12 col-span-full bg-red-wave">
                    <div className="col-span-10 col-start-2 ">
                        <div className="grid grid-cols-2 col-span-full pb-28">
                            <div className="flex flex-wrap content-around w-10/12 py-8 pb-28">
                                <p className="w-full text-lg font-semibold text-gray-150">Seguridad</p>
                                <h1 className="">Tu seguridad  <br /> es lo más importante</h1>
                                <h2 className="pb-6 pr-16 text-xl">Sigue estos consejos para operar de forma segura con Ualá.</h2>
                                <div className=""><div><a href="/cft" className="px-8 py-3 text-xl font-medium text-white bg-blue-600 rounded-full">Descarga la app</a></div></div>
                            </div>

                            <div className="col-span-2 lg:col-span-1">
                                <div className="flex justify-center"><img className="h-9/12" src="/assets/images/transferencias/_EZ_9146_alta 1.png" alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-red-250 col-span-full h-72">
                </div>
                <div className="relative grid grid-cols-12 pt-24 col-span-full bg-red-degrade mb-150">
                    <div className="absolute grid grid-cols-2 col-span-10 col-start-2 gap-10 -top-80 ">
                        <div className="px-4">
                            <div className="mb-4 focus:outline-none card">
                                <div className="col-span-2 px-2 py-12 mx-8 my-8 bg-white border border-gray-100 shadow-blue md:col-span-1 lg:mt-12 lg:pr-16 rounded-3xl">
                                    <div className="items-center lg:flex">
                                        <p className="mt-6 text-lg text-center text-gray-500 lg:text-left lg:pl-6">Bloquea el acceso a tu celular con un código de bloqueo, patrón o con algún mecanismo de biometría (cara, huella dactilar, etc). Actualiza regularmente tus aplicaciones y sistema operativo de tu celular para tener las últimas actualizaciones de seguridad. Nunca instales aplicaciones por fuera de Play Store, Huawei App Gallery o App Store, no se puede garantizar que sean legítimas. Evita conectarte frecuentemente a redes WiFi públicas o de acceso gratuito. Evita ingresar a páginas web desconocidas, crear perfiles en estos sitios y aceptar el uso de todas las cookies desde el navegador de tu equipo. Utiliza navegadores web nativos del sistema operativo o que sean reconocidos</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-4 focus:outline-none card">
                                <div className="col-span-2 px-2 py-12 mx-8 my-8 bg-white border border-gray-100 shadow-blue md:col-span-1 lg:mt-12 lg:pr-16 rounded-3xl">
                                    <div className="items-center lg:flex">
                                        <p className="mt-6 text-lg text-center text-gray-500 lg:text-left lg:pl-6">Las claves que usas para operar en Ualá son datos confidenciales. Nunca las compartas con nadie, incluso si parece que te las pide Ualá. Tampoco muestres los números que están atrás de la tarjeta. Cuando crees o modifiques tus claves, evita usar información personal que pueda ser fácil de adivinar (fecha de nacimiento, número de documento u otra información similar). Si olvidaste alguna de tus claves y seguiste los pasos para recuperarla, no compartas con nadie los códigos que te enviamos para resetearla. Para crear tus claves no utilices números consecutivos ni números repetidos. Intenta memorizar tus claves y no las escribas en ningún lugar. Cambia tus claves por lo menos una vez al mes. Evita utilizar dispositivos de personas desconocidas o que no te generen confianza para realizar transacciones.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-4">
                            <div className="mb-4 focus:outline-none card">
                                <div className="col-span-2 px-2 py-12 mx-8 my-8 bg-white border border-gray-100 shadow-blue md:col-span-1 lg:mt-12 lg:pr-16 rounded-3xl">
                                    <div className="items-center lg:flex">
                                        <p className="mt-6 text-lg text-center text-gray-500 lg:text-left lg:pl-6">Las claves que usas para operar en Ualá son datos confidenciales. Nunca las compartas con nadie, incluso si parece que te las pide Ualá. Tampoco muestres los números que están atrás de la tarjeta. Cuando crees o modifiques tus claves, evita usar información personal que pueda ser fácil de adivinar (fecha de nacimiento, número de documento u otra información similar). Si olvidaste alguna de tus claves y seguiste los pasos para recuperarla, no compartas con nadie los códigos que te enviamos para resetearla. Para crear tus claves no utilices números consecutivos ni números repetidos. Intenta memorizar tus claves y no las escribas en ningún lugar. Cambia tus claves por lo menos una vez al mes. Evita utilizar dispositivos de personas desconocidas o que no te generen confianza para realizar transacciones.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-4 focus:outline-none card">
                                <div className="col-span-2 px-2 py-12 mx-8 my-8 bg-white border border-gray-100 shadow-blue md:col-span-1 lg:mt-12 lg:pr-16 rounded-3xl">
                                    <div className="items-center lg:flex">
                                        <p className="mt-6 text-lg text-center text-gray-500 lg:text-left lg:pl-6">Bloquea el acceso a tu celular con un código de bloqueo, patrón o con algún mecanismo de biometría (cara, huella dactilar, etc). Actualiza regularmente tus aplicaciones y sistema operativo de tu celular para tener las últimas actualizaciones de seguridad. Nunca instales aplicaciones por fuera de Play Store, Huawei App Gallery o App Store, no se puede garantizar que sean legítimas. Evita conectarte frecuentemente a redes WiFi públicas o de acceso gratuito. Evita ingresar a páginas web desconocidas, crear perfiles en estos sitios y aceptar el uso de todas las cookies desde el navegador de tu equipo. Utiliza navegadores web nativos del sistema operativo o que sean reconocidos</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 mt-48 col-span-full bg-red-250 bg-seguridad">

                    <div className="grid grid-cols-2 col-span-11 col-start-2 ">
                        <div className="flex flex-wrap content-center text-gray-250">
                            <p className="w-full text-3xl font-semibold ">¿Perdiste o te robaron tu Ualá?</p>
                            <p className="text-xl font-semibold">Haz la denuncia y bloquea tu tarjeta</p>
                            <p className="text-lg">
                                Si perdiste o te robaron tu Ualá, puedes hacer  la denuncia desde la app o llamando  a la línea 01-800-5189600 a nivel nacional o en Bogotá 6009616
                                y te mandamos una nueva dentro de los próximos 15 días hábiles. Tendrás una reposición anual gratis, a partir de la segunda se cobrará una costo de COP$20.000  + IVA, el cual será descontado de tu cuenta, ten en cuenta
                                que debes contar con dinero en tu cuenta.
                            </p>

                        </div>
                        <div>
                            <img src="/assets/images/seguridad/bannerSeguridad.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer content={pageContent[locale].footer} />

        </>
    )
}