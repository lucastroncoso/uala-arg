import Layout from '../components/layout';
import Container from '../components/container';
import Head from 'next/head';
import Image from 'next/image';
import Hero from '../components/hero';
import CardRoundedShadow from '../components/cardRoundedShadow';


export default function Costos2(props) {


  return (
    <>
      <Head>
        <title>Ualá</title>
      </Head>
      <Layout nav footer>
        <div className="md:mt-12 bg-blue-costos">
          <Hero
            containerStyles="md:min-h-screen"
            section="Costos"
            title="Disfrutá sin costos ocultos"
            subtitle="No tenemos letra chica ni costos ocultos."
            img={<Image src="/assets/images/costos/hero-costos.jpg" width={1389} height={1134} />}
          />
          <div className="bg-costos">
            <Container>
            <div className="text-9xl text-blue-250 font-bold block md:hidden text-center mt-16 mb-6">$0</div>
              <div className="grid md:grid-cols-3 pb-12 md:pb-20">
                <div className="text-center md:text-left md:col-span-2 md:col-start-2 col-span-3">
                    <p className="text-xl md:text-2xl text-blue-250">Descarga de la app</p>
                    <p className="text-xl md:text-2xl text-blue-250">Costo de apertura, mantenimiento y cierre</p>
                    <p className="text-xl md:text-2xl text-blue-250 -mb-1 md:mb-0">Comisión por consumos con la tarjeta</p>
                </div>
                <div className="col-span-1 grid grid-cols-3 hidden md:block">
                  <div className="col-span-1 row-span-3 hidden md:block text-9xl text-blue-250 text-right font-bold mr-10">$0</div>
                </div>
                <div className="col-span-2 col-start-2 grid grid-rows-3 hidden md:block">
                  <div className="my-12 row-start-2 text-xl md:text-2xl text-blue-250">Transferencias entre usuarios Ualá</div>
                </div>
                <div className="text-center md:text-left md:col-span-2 md:col-start-2 col-span-3">
                    <p className="text-xl md:text-2xl text-blue-250 block md:hidden">Transferencias entre usuarios Ualá</p>
                    <p className="text-xl md:text-2xl text-blue-250 md:-mt-1">Costo de envío</p>
                    <p className="text-xl md:text-2xl text-blue-250">Costo de renovación</p>
                    <p className="text-xl md:text-2xl text-blue-250">Cargas en efectivo*</p>
                    <p className="text-xl md:text-2xl text-blue-250">Carga por transferencia</p>
                    <p className="text-xl md:text-2xl text-blue-250">Costo por reposición de tarjeta*</p>
                </div>
              </div>
            </Container>
          </div>
        </div>
        <Container>
              <div className="py-8 md:py-16 grid md:grid-cols-3">
                <CardRoundedShadow className="m-4 md:col-span-1">
                  <div className="bg-white h-60 md:h-64 p-6 rounded-2xl" >
                    <div className="text-gray-250 font-bold text-lg">Retiros por cajero automático en la República Argentina</div>
                    <div className="flex flex-col mt-2">$105 + IVA por extracción.</div>
                  </div>
                </CardRoundedShadow>
                <CardRoundedShadow className="m-4 md:col-span-1 md:col-start-2">
                  <div className="bg-white h-60 md:h-64 p-6 rounded-2xl" >
                    <div className="text-gray-250 font-bold text-lg">Retiros por cajero automático en el exterior</div>
                    <div className="flex flex-col mt-2">US$6 + IVA cada una. <br/>Puede tener costo adicional del cajero.</div>
                    <div className="flex flex-col mt-2 text-xs text-red-350">Por el momento esta opción se encuentra inhabilitada</div>
                  </div>
                </CardRoundedShadow>  
                <CardRoundedShadow className="m-4 md:col-span-1 md:col-start-3">
                  <div className="bg-white h-60 md:h-64 p-6 rounded-2xl" >
                    <div className="text-gray-250 font-bold">Retiros por canales alternativos (Rapipago)</div>
                    <div className="flex flex-col mt-2">1 gratis por mes y $75 + IVA a partir de la segunda.</div>
                  </div>
                </CardRoundedShadow>
              </div>
              <div className="text-base text-gray-250 mb-20">*La primera reposición es gratuita. A partir de la segunda el valor es de 200ARS + IVA.</div>
        </Container>
      </Layout>
    </>
  );
}
