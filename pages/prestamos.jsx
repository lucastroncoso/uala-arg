import { useState } from 'react';
import Container from '../components/container';
import Hero from '../components/hero';
import CardItem from '../components/cardItem';
import ImageItemsSection from '../components/imageItemsSection';
import VideoTitle from '../components/videoTitle';
import Calculator from '../components/calculator';
import Legal from '../components/legal';
import Layout from '../components/layout';
import Head from 'next/head';
import Image from 'next/image';
import PlayVideoButton from '../components/home/PlayVideoButton/PlayVideoButton';
import FaqsInSections from '../components/faqs/faqsInSections';
import { fetchContent } from '../utils/contentful';
import useScrollTrigger from '../components/home/utils/hooks/useScrollTrigger';
import { useEffect } from 'react';

export async function getStaticProps() {
  const response = await fetchContent(`
    {
        argentinaFaqCollection(order: [id_ASC], limit: 500) {
            items{
                categoryId {
                    faqCategoryId
                },
                id,
                question,
                answer
              section
            }
        }
    }    
    `);

  return {
    props: { response },
    revalidate: 10,
  };
}

export default function Prestamos(props) {
  const [sectionRef, childrenSelector, createTL] = useScrollTrigger();

  useEffect(() => {
    if (!sectionRef || !sectionRef.current) return;

    const videoButton = childrenSelector('[data-animation="video-button"]');
    const videoElement = childrenSelector('[data-animation="video-element"]');

    const tl = createTL({
      scrub: 1,
      start: '0% 70%',
    });

    tl.fromTo(videoElement, { scale: 1 }, { scale: 1.2 }, 0).fromTo(
      videoButton,
      { scale: 0.8 },
      { scale: 1 },
      0,
    );
  }, []);

  return (
    <div ref={sectionRef}>
      <Head>
        <title>Ualá - Préstamos online para vos</title>
        <meta
          name="description"
          content="¡Pedí un préstamo online desde la app! Fácil, rápido y 100% online. Lo devolvés en cuotas fijas en pesos."
        />
      </Head>
      <Layout nav footer>
        <Hero
          containerStyles="bg-blue-wave mt-12"
          section="Créditos"
          title="Créditos online pensados para vos"
          subtitle="Te ofrecemos más crédito para lo que necesites de la forma más fácil, rápida y transparente."
          img={
            <Image src="/assets/images/prestamos/hero-creditos.jpg" width={1389} height={1184} />
          }
        />

        <Container className="bg-blue-150">
          <div className="grid grid-cols-2 w-full gap-8">
            <div className="  border-b border-blue-250">
              <a
                href="/prestamos"
                className=" w-full block text-center subtitle-blue md:px-20 outline-none"
              >
                Préstamos
              </a>
            </div>
            <div className=" border-b border-blue-50">
              <a
                href="/cuotas"
                className=" w-full block text-center subtitle-blue md:px-20 outline-none text-blue-50"
              >
                Cuotas
              </a>
            </div>
          </div>
        </Container>

           <ImageItemsSection
                    reverse
                    bg="bg-blue-degrade"
                    pushImg="/assets/images/prestamos/push.png"
                    title="Podés usarlo como quieras"
                    subtitle="Pedí tu préstamo online desde la app y usalo para tu emprendimiento, un viaje, tu hogar o para lo que quieras."
                    img={<Image src="/assets/images/prestamos/Mask Group (25).webp" width={1389} height={1134} />}
                    items={[
                        <CardItem text="Pedí hasta [b]$500.000[/b] en 24 cuotas fijas."
                            img="/assets/images/prestamos/icono_prestamos.png" />,
                        <CardItem text="La plata se deposita en tu cuenta de Ualá."
                            img="/assets/images/prestamos/icono-depositar-plata.png" />,
                        <CardItem text="Hacé la simulación en tiempo real."
                            img="/assets/images/prestamos/icono-tiemporeal.png" />]}
                />                    
                <Container className="md:my-12 my-6">
                    <h2 className="title-2 text-center mb-12">¿Cómo pedir un préstamo?</h2>
                    <a className="hidden md:block" href="https://www.youtube.com/watch?v=s54IFlhp87Y&t=4s" target="_blank">
                        <PlayVideoButton
                            youtubeId="s54IFlhp87Y&t"
                            previewVideoSrc="/assets/video/thumbnail-prestamos-desktop.mp4"
                            isPreviewVideoScaled={false}
                        />
                    </a>
                    <a className="block md:hidden" href="https://www.youtube.com/watch?v=s54IFlhp87Y&t=4s" target="_blank">
                        <PlayVideoButton
                            youtubeId="s54IFlhp87Y&t"
                            previewVideoSrc="/assets/video/thumbnail-prestamos-317x329px.mp4"
                            isPreviewVideoScaled={false}
                        />
                    </a>
                </Container>
                <ImageItemsSection
                    title="Podés tener el control de los pagos"
                    img={<Image src="/assets/images/prestamos/Mask Group (24).webp" width={1389} height={1134} />}
                    items={[
                        <CardItem text="Elegí en cuántas cuotas querés pagarlo."
                            img="/assets/images/prestamos/icono-cuotas.png" />,
                        <CardItem text="Decidí qué día del mes hacer los pagos."
                            img="/assets/images/prestamos/icono_diadepago.png" />,
                        <CardItem text="Cancelá la deuda cuando quieras."
                            img="/assets/images/prestamos/icono_cancelar.png" />]}
                />

        <Container className="my-12">
          <div className=" mx-auto shadow-blue md:p-16 p-8 rounded-2xl">
            <h2 className="title-3">¿Cuáles son los requisitos para pedir un préstamo en Ualá?</h2>
            <div className="grid md:grid-cols-2">
              <ol>
                <li className="pt-4">1. Ser ciudadano argentino o residente en el país. </li>
                <li className="pt-4">2. Tener 18 años o más.</li>
                <li className="pt-4">3. Tener cuenta bancaria propia.</li>
              </ol>
              <ol>
                <li className="pt-4">4. Tener ingresos comprobables mayores a $10.000.</li>
                <li className="pt-4">
                  5. No tener deudas con atrasos registradas en los últimos 24 meses.
                </li>
              </ol>
            </div>
          </div>
        </Container>

        <Calculator bg="bg-blue-degrade-calculator" />
        <FaqsInSections
          section="prestamos"
          title="Preguntas frecuentes sobre los préstamos"
          response={props.response}
        />
        <Legal
          main="La funcionalidad de Créditos está disponible únicamente para usuarios seleccionados. La Tasa Nominal Anual (TNA), la Tasa Efectiva Anual (TEA) y el Costo Financiero Total (CFT) varían según el perfil crediticio del solicitante del préstamo y plazo elegido. Todos los préstamos son a tasa fija, en pesos y otorgados bajo el sistema de amortización francés con cuotas mensuales y consecutivas. En todos los casos, la TNA, TEA y el CFT aplicable serán informados antes de la aceptación de la oferta de préstamo por parte del solicitante. Tasa Nominal Anual (TNA): Mínima: 61,80% - Máxima 107,00%. Tasa Efectiva Anual (TEA): Mínima: 82,69% - Máxima 178,70%."
          secondary="Costo Financiero Total: Mínimo: 108,65% - Máximo 247,84%"
        />
      </Layout>
    </div>
  );
}
