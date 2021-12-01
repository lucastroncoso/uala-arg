import Container from '../components/container';
import Head from 'next/head';
import Image from 'next/image';
import C01Navigation from '../components/home/C01-Navigation/C01Navigation';
import pageContent from '../data/SiteMXContent.json';
import { useAppContext } from '../store/context';

export default function Tarjeta(props) {
  const { locale } = useAppContext();

  const charges = [
    { cost: '$0', title: 'Descarga' },
    { cost: '$0', title: 'Costo de apertura y mantenimiento' },
    { cost: '$0', title: 'Costo de cierre' },
    { cost: '$0', title: 'Comisión por consumos con la tarjeta' },
    { cost: '$0', title: 'Transferencias Ualá' },
    { cost: '$0', title: 'Envío de la tarjeta' },
    { cost: '$0', title: 'Costo de renovación' },
    { cost: '$0', title: 'Costo de recargas de tiempo aire' },
    { cost: '$0', title: 'Costo por transferencia electrónica (SPEI)' },
    {
      cost: '$0',
      title: 'Costo por depósitos a través de Paynet',
      description:
        'Ualá te bonifica íntegra la comisión que puedan cobrarte los establecimientos por dicha operación. Cuando no podamos conocer el monto de la comisión que se cobra por el comisionista serán bonificados $8 pesos.',
    },
    {
      cost: '$0',
      title: 'Costo por reposición',
      description:
        'La primera reposición del año no tiene costo. A partir de la segunda reposición anual, $130 MX + IVA (para solicitarla deberás tener disponible en tu cuenta al menos el costo de la reposición que es de $130 MX + IVA, de lo contrario no podremos procesar tu solicitud y enviarte la reposición de tu tarjeta.',
    },
    {
      cost: '$0',
      title: 'Retiros en ATM’s en México',
      description:
        'Ualá te bonifica 2 veces al mes hasta $25 pesos la comisión que los bancos cobran por el retiro.',
    },
    {
      cost: '$0',
      title: 'Retiros en cajero automático en el exterior',
      description:
        'por comisión de Ualá + comisión que el banco emisor cobre por retiro en ATM del extranjero.',
    },
    {
      cost: '$0',
      title: 'Reclamación por cargo no reconocido improcedente',
      description: '* Solo en caso de ser improcedente tendrá un costo de $300 + iva',
    },
  ];

  return (
    <>
      <Head>
        <title>Ualá</title>
      </Head>
      <C01Navigation content={pageContent[locale].navbar} />

      <Container>
        <div className="grid lg:grid-cols-2 lg:mt-8 mb-26">
          <div className="flex content-center flex-wrap order-2">
            <div className="">
              <h1 className="title-1 lg:w-2/3">
                <div className="lg:text-5xl lg:leading-normal mb-12">
                  No tenemos letra chica ni costos ocultos
                </div>
              </h1>
            </div>
          </div>
          <div className="flex justify-center order-1 ">
            <div className="lg:mt-16">
              <Image src="/assets/images/charge.gif" width={500} height={400} />
            </div>
          </div>
        </div>
      </Container>

      <div className="bg-blue-wave mb-24">
        <Container>
          <div className="my-20 grid lg:grid-cols-2">
            {charges.map((charge) => (
              <div className="grid">
                <div className="bg-white rounded-md p-8 m-3 flex flex-col">
                  <div className="text-blue-600 text-center text-2xl">{charge.title}</div>
                  <div className="text-8xl text-gray-800 text-center my-12 flex items-center justify-center">
                    {charge.cost}
                  </div>
                  {charge.description && (
                    <div className="flex-grow  flex items-center text-gray-600 text-center">
                      {charge.description}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}
