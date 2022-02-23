import { useState } from 'react';
import Layout from '../components/layout';
import Container from '../components/container';
import Head from 'next/head';
import Image from 'next/image';
import Hero from '../components/hero';
import CardRoundedShadow from '../components/cardRoundedShadow';
import { fetchContent } from '../utils/contentful';
import CostosCard from '../components/costosCard';

export async function getStaticProps() {
  const response = await fetchContent(`
  {
    argentinaCostosCardsCollection (order: [order_ASC]) {
      items {
        order,
        title,
        description,
        message
      }
    }
  }     
  `);

  return {
    props: { response },
    revalidate: 10,
  };
}

export default function Costos2(props) {
  const [data, setData] = useState(props.response.argentinaCostosCardsCollection.items);

  return (
    <>
      <Head>
        <title>Ualá - Costos: Sin letra chica ni costos ocultos</title>
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
              <div className="text-9xl text-blue-250 font-bold block md:hidden text-center mt-16 mb-6">
                $0
              </div>
              <div className="grid md:grid-cols-3 pb-12 md:pb-20">
                <div className="text-center md:text-left md:col-span-2 md:col-start-2 col-span-3">
                  <p className="text-xl md:text-2xl text-blue-250">Descarga de la app</p>
                  <p className="text-xl md:text-2xl text-blue-250">
                    Costo de apertura, mantenimiento y cierre
                  </p>
                  <p className="text-xl md:text-2xl text-blue-250 -mb-1 md:mb-0">
                    Comisión por consumos con la tarjeta
                  </p>
                </div>
                <div className="col-span-1 grid grid-cols-3 hidden md:block">
                  <div className="col-span-1 row-span-3 hidden md:block text-9xl text-blue-250 text-right font-bold mr-10">
                    $0
                  </div>
                </div>
                <div className="col-span-2 col-start-2 grid grid-rows-3 hidden">
                  <div className="my-12 row-start-2 text-xl md:text-2xl text-blue-250">
                    Transferencias entre usuarios Ualá
                  </div>
                </div>
                <div className="text-center md:text-left md:col-span-2 md:col-start-2 col-span-3">
                  <p className="text-xl md:text-2xl text-blue-250">
                    Transferencias entre usuarios Ualá
                  </p>
                  <p className="text-xl md:text-2xl text-blue-250 md:-mt-1">Costo de envío</p>
                  <p className="text-xl md:text-2xl text-blue-250">Costo de renovación</p>
                  <p className="text-xl md:text-2xl text-blue-250">Cargas en efectivo*</p>
                  <p className="text-xl md:text-2xl text-blue-250">Carga por transferencia</p>
                  <p className="text-xl md:text-2xl text-blue-250">
                    Costo por reposición de tarjeta**
                  </p>
                </div>
              </div>
            </Container>
          </div>
        </div>
        <Container>
          <div className="py-8 md:py-16 grid md:grid-cols-3">
            {data.length == 0 ? (
              <></>
            ) : (
              data.map((dat) => (
                <CostosCard
                  key={dat.title}
                  title={dat.title}
                  subtitle={dat.description}
                  message={dat.message}
                />
              ))
            )}
          </div>
        </Container>
      </Layout>
    </>
  );
}
