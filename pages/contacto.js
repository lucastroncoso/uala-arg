import C01Navigation from '../components/home/C01-Navigation/C01Navigation';
import pageContent from '../data/SiteMXContent.json';
import { useAppContext } from '../store/context';
import Footer from '../components/home/Footer/Footer';





export default function Seguridad(props) {
    const { locale } = useAppContext();

    return (
        <>
            <C01Navigation content={pageContent[locale].navbar} />
            <div className="grid w-full grid-cols-12 my-24 md:my-36 ">
                <div className="grid grid-cols-12 col-span-full ">
                    <div className="col-span-10 col-start-2 ">
                        <div className="grid gap-8 md:grid-cols-2 gap-x-40 col-span-full ">
                            <div className=" col-span-full">
                                <p className="text-3xl font-semibold text-gray-250">
                                    ¿Necesitás ponerte en contacto con nosotr@s?
                                </p>
                                <p className="text-2xl text-gray-250">
                                    Te mostramos nuestros medios de contacto:
                                </p>
                            </div>
                            <div>
                                <div className="flex items-center" >
                                    <img className="mr-8" src="/assets/images/seguridad/Ellipse 10.png" alt="" />
                                    <p className="text-3xl font-semibold text-gray-250">
                                        Mail
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xl text-gray-250">
                                        Puedes escribirnos por mail a hola@uala.com.co cualquier día de la semana, a cualquier hora.
                                        Acuérdate de incluir tu número de identificación (cédula de ciudadanía/extranjería) y el detalle de tu consulta.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center" >
                                    <img className="mr-8" src="/assets/images/seguridad/Ellipse 10.png" alt="" />
                                    <p className="text-3xl font-semibold text-gray-250">
                                        Mail
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xl text-gray-250">
                                        Puedes escribirnos por mail a hola@uala.com.co cualquier día de la semana, a cualquier hora.
                                        Acuérdate de incluir tu número de identificación (cédula de ciudadanía/extranjería) y el detalle de tu consulta.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center" >
                                    <img className="mr-8" src="/assets/images/seguridad/Ellipse 10.png" alt="" />
                                    <p className="text-3xl font-semibold text-gray-250">
                                        Mail
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xl text-gray-250">
                                        Puedes escribirnos por mail a hola@uala.com.co cualquier día de la semana, a cualquier hora.
                                        Acuérdate de incluir tu número de identificación (cédula de ciudadanía/extranjería) y el detalle de tu consulta.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center" >
                                    <img className="mr-8" src="/assets/images/seguridad/Ellipse 10.png" alt="" />
                                    <p className="text-3xl font-semibold text-gray-250">
                                        Mail
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xl text-gray-250">
                                        Puedes escribirnos por mail a hola@uala.com.co cualquier día de la semana, a cualquier hora.
                                        Acuérdate de incluir tu número de identificación (cédula de ciudadanía/extranjería) y el detalle de tu consulta.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-12 mt-24 col-span-full bg-red-250 bg-seguridad">
                    <img className="col-span-12 md:hidden" src="/assets/images/contacto/MaskGroup5.png" alt="" />

                    <div className="grid col-span-10 md:col-span-11 col-start-2 md:col-start-2 md:grid-cols-2 ">
                        <div className="flex flex-wrap content-center order-2 text-gray-250 md:order-none">
                            <p className="w-full text-3xl font-semibold ">¿Perdiste o te robaron tu Ualá?</p>
                            <p className="text-xl font-semibold">Haz la denuncia y bloquea tu tarjeta</p>
                            <p className="text-lg">
                                Si perdiste o te robaron tu Ualá, puedes hacer  la denuncia desde la app o llamando  a la línea 01-800-5189600 a nivel nacional o en Bogotá 6009616
                                y te mandamos una nueva dentro de los próximos 15 días hábiles. Tendrás una reposición anual gratis, a partir de la segunda se cobrará una costo de COP$20.000  + IVA, el cual será descontado de tu cuenta, ten en cuenta
                                que debes contar con dinero en tu cuenta.
                            </p>

                        </div>
                        <div className="order-1 md:order-none">
                            <img className="hidden md:block" src="/assets/images/seguridad/Mask Group (2).png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer content={pageContent[locale].footer} />

        </>
    )
}