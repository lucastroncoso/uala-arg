import Slider from "../components/slider/slider";
import C01Navigation from '../components/home/C01-Navigation/C01Navigation';
import pageContent from '../data/SiteMXContent.json';
import { useAppContext } from '../store/context';
import Footer from '../components/home/Footer/Footer';





export default function Consignaciones(props) {
    const { locale } = useAppContext();

    return (
        <>
            <C01Navigation content={pageContent[locale].navbar} />
            <div className="grid w-full grid-cols-12 my-36 ">
                <div className="grid grid-cols-12 col-span-full bg-red-wave">
                    <div className="col-span-10 col-start-2 ">
                        <div className="grid grid-cols-2 col-span-full pb-28">
                            <div className="flex flex-wrap content-around w-10/12 py-8 pb-28">
                                <p className="w-full text-lg">Transferencias</p>
                                <h1 className="">Transfiere y recibe <br /> plata de tod@s</h1>
                                <h2 className="pb-6 text-xl">Envía y recibe plata desde cualquier cuenta bancaria y/o virtual, gratis y en el momento. También de tus amig@s o familiares que tengan Ualá.</h2>
                                <div className=""><div><a href="/cft" className="px-5 py-3 font-medium text-white bg-blue-600 rounded-full">¡Quiero ofrecer cuotas!</a></div></div>
                            </div>

                            <div className="col-span-2 lg:col-span-1">
                                <div className="flex justify-center"><img className="H-9/12" src="/assets/images/transferencias/_EZ_9146_alta 1.png" alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-red-250 col-span-full">
                    <Slider className="bg-blue-250">
                        <div className="mb-4 focus:outline-none card">
                            <div className="col-span-2 px-8 py-12 mx-8 my-8 bg-white border border-gray-100 shadow-blue md:col-span-1 lg:mt-12 lg:pr-16 rounded-3xl">
                                <div className="items-center lg:flex">
                                    <img className="w-1/2 mx-auto" src="/assets/images/ualabis/apichekout/Numero 01.png" alt="" />
                                    <p className="mt-6 text-lg text-center text-gray-500 lg:text-left lg:pl-6">Descargá Ualá en tu celular y accedé a la sección de “Cobros” para dar de alta tu comercio.</p>
                                </div>
                            </div>
                        </div>
                        <div className="pb-8 focus:outline-none card">
                            <div className="col-span-2 px-8 py-12 mx-8 mt-8 bg-white border border-gray-100 shadow-blue md:col-span-1 lg:mt-12 lg:pr-16 rounded-3xl">
                                <div className="items-center lg:flex">
                                    <img className="w-1/2 mx-auto" src="/assets/images/ualabis/apichekout/Numero 01.png" alt="" />
                                    <p className="mt-6 text-lg text-center text-gray-500 lg:text-left lg:pl-6">Descargá Ualá en tu celular y accedé a la sección de “Cobros” para dar de alta tu comercio.</p>
                                </div>
                                <div className="items-center spanded">
                                    <img className="w-1/2 mx-auto" src="/assets/images/ualabis/apichekout/Numero 01.png" alt="" />
                                    <p className="mt-6 text-lg text-center text-gray-500 lg:text-left lg:pl-6">Descargá Ualá en tu celular y accedé a la sección de “Cobros” para dar de alta tu comercio.</p>
                                </div>
                            </div>
                        </div>
                        <div className="focus:outline-none">
                            <div className="col-span-2 px-8 py-12 mx-8 mt-8 bg-white border border-gray-100 shadow-blue md:col-span-1 lg:mt-12 lg:pr-16 rounded-3xl">
                                <div className="items-center lg:flex">
                                    <img className="w-1/2 mx-auto" src="/assets/images/ualabis/apichekout/Numero 01.png" alt="" />
                                    <p className="mt-6 text-lg text-center text-gray-500 lg:text-left lg:pl-6">Descargá Ualá en tu celular y accedé a la sección de “Cobros” para dar de alta tu comercio.</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
                <div className="grid grid-cols-12 pt-24 col-span-full bg-red-degrade">
                    <div className="col-span-10 col-start-2 ">
                        <div className="w-5/12">
                            <h3>Mira cómo hacer <br /> transferencias desde Ualá</h3>
                        </div>
                        <img className="py-12 mx-auto" src="/assets/images/transferencias/Rectangle 120.png" alt="" />
                    </div>
                </div>
            </div>
            <Footer content={pageContent[locale].footer} />

        </>
    )
}