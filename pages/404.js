import Image from 'next/image';
import Head from 'next/head';
import Layout from "../components/layout";
import Link from 'next/link';


export default function Custom404(props) {
    return (
        <>
            <Head>
                <title>Ualá</title>
            </Head>
            <Layout nav footer>

            <div className="mt-12 hidden md:block">
                <div className="grid md:my-24 my-12 md:grid-cols-2 items-center justify-items-center relative">
                    <div className="ml-8 order-2 md:order-none">
                        <div className="flex flex-col">
                            <div className="mb-4 text-gray-150 text-4xl font-bold w-full lg:w-3/4">
                                Página no encontrada
                            </div>
                            <div className="text-gray-150 w-full">
                                No hemos podido encontrar la sección. 
                                <br/>Es posible que no exista o se haya modificado.
                            </div>
                            <div className="mt-8">
                                <Link href="/">
                                    <a className="text-white bg-blue-uala p-2 px-12 rounded-full">Visitar la home</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 md:order-none rounded-3xl flex relative">
                        <div className="order-2 lg:order-none rounded-3xl overflow-hidden flex w-1/2 m-auto">
                            <Image src="/assets/images/pagina-no-encontrada.png" width={768} height={768} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-16 block md:hidden">
                <div className="flex flex-col">
                    <div className="bg-error-mobile-img">
                        <div className="w-1/2 m-auto">
                            <Image src="/assets/images/pagina-no-encontrada.png" width={768} height={768} />
                        </div>
                    </div>
                    <div className="bg-error-mobile-text">
                        <div className="flex flex-col p-8 sm:w-3/4 mx-auto">
                            <div className="mb-4 text-gray-150 text-4xl font-bold w-3/4">
                                Página no encontrada
                            </div>
                            <div className="text-gray-150 w-full">
                                No hemos podido encontrar la sección. 
                                <br/>Es posible que no exista o se haya modificado.
                            </div>
                            <div className="my-8">
                                <Link href="/">
                                    <a className="text-white bg-blue-uala p-2 px-12 rounded-full">Visitar la home</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </Layout>
        </>
    )

}