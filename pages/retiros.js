import Slider from "../components/slider/slider";
import C01Navigation from '../components/home/C01-Navigation/C01Navigation';
import pageContent from '../data/SiteMXContent.json';
import { useAppContext } from '../store/context';
import Footer from '../components/home/Footer/Footer';




export default function Retiros(props) {
    const { locale } = useAppContext();

    return (
        <>
            <C01Navigation content={pageContent[locale].navbar} />
            <div className="grid w-full grid-cols-12 my-20 md:my-36">
                <div className="grid grid-cols-12 col-span-full bg-blue-wave">
                    <div className="col-span-10 col-start-2 ">
                        <div className="grid grid-cols-1 md:grid-cols-2 col-span-full md:pb-28">
                            <div className="flex flex-wrap content-around md:w-10/12 md:py-8 pb-28">
                                <p className="w-full text-lg">Retiros</p>
                                <h1 className="pb-4">Saca plata en<br />todo el país</h1>
                                <h2 className="pb-6 text-xl">¿Necesitas efectivo? Puede retirar plata de cualquier cajero atuomático con tu tarjeta Ualá en cualquier parte del país o también puedes acercarte a los puntos de Baloto y hacer tu retiro en efectivo.</h2>
                                <div className=""><div><a href="/cft" className="px-5 py-3 font-medium text-white bg-blue-600 rounded-full">Descarga la app</a></div></div>
                            </div>

                            <div className="hidden col-span-2 lg:col-span-1 lg:block">
                                <div className="flex justify-center"><img className="h-9/12" src="/assets/images/transferencias/_EZ_9146_alta 1.png" alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-blue-250 col-span-full">
                    <div className="p-8 mb-8 md:hidden">
                        <div className="flex justify-center"><img className="h-9/12" src="/assets/images/transferencias/_EZ_9146_alta 1.png" alt="" /></div>
                    </div>
                    <Slider className="bg-blue-250">
                        <div className="pb-8 focus:outline-none card">
                            <div className="col-span-2 px-8 py-12 mx-8 mt-8 bg-white border border-gray-100 shadow-blue md:col-span-1 lg:mt-12 lg:pr-16 rounded-3xl">
                                <div className="items-center lg:flex">
                                    <img className="w-1/2 mx-auto" src="/assets/images/ualabis/apichekout/Numero 01.png" alt="" />
                                    <p className="mt-6 text-lg text-center text-gray-500 lg:text-left lg:pl-6">1</p>
                                </div>
                                <div className="items-center spanded">
                                    <img className="w-1/2 mx-auto" src="/assets/images/ualabis/apichekout/Numero 01.png" alt="" />
                                    <p className="mt-6 text-lg text-center text-gray-500 lg:text-left lg:pl-6">1</p>
                                </div>
                            </div>
                        </div>
                        <div className="pb-8 focus:outline-none card">
                            <div className="col-span-2 px-8 py-12 mx-8 mt-8 bg-white border border-gray-100 shadow-blue md:col-span-1 lg:mt-12 lg:pr-16 rounded-3xl">
                                <div className="items-center lg:flex">
                                    <img className="w-1/2 mx-auto" src="/assets/images/ualabis/apichekout/Numero 01.png" alt="" />
                                    <p className="mt-6 text-lg text-center text-gray-500 lg:text-left lg:pl-6">2</p>
                                </div>
                                <div className="items-center spanded">
                                    <img className="w-1/2 mx-auto" src="/assets/images/ualabis/apichekout/Numero 01.png" alt="" />
                                    <p className="mt-6 text-lg text-center text-gray-500 lg:text-left lg:pl-6">2</p>
                                </div>
                            </div>
                        </div>
                        <div className="pb-8 focus:outline-none card">
                            <div className="col-span-2 px-8 py-12 mx-8 mt-8 bg-white border border-gray-100 shadow-blue md:col-span-1 lg:mt-12 lg:pr-16 rounded-3xl">
                                <div className="items-center lg:flex">
                                    <img className="w-1/2 mx-auto" src="/assets/images/ualabis/apichekout/Numero 01.png" alt="" />
                                    <p className="mt-6 text-lg text-center text-gray-500 lg:text-left lg:pl-6">3</p>
                                </div>
                                <div className="items-center spanded">
                                    <img className="w-1/2 mx-auto" src="/assets/images/ualabis/apichekout/Numero 01.png" alt="" />
                                    <p className="mt-6 text-lg text-center text-gray-500 lg:text-left lg:pl-6">3</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
                <div className="grid grid-cols-12 pt-8 md:pt-24 col-span-full bg-blue-degrade">
                    <div className="col-span-10 col-start-2 ">
                        <div className="md:w-5/12">
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