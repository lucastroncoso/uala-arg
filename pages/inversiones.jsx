import { useState } from 'react';
import Container from '../components/container';
import Hero from '../components/hero';
import CardItem from '../components/cardItem';
import ImageItemsSection from '../components/imageItemsSection';
import VideoTitle from '../components/videoTitle';
import Layout from '../components/layout';
import Head from 'next/head';
import Image from 'next/image';
import Faqs from '../components/faqs';
import PlayVideoButton from '../components/home/PlayVideoButton/PlayVideoButton';
import useScrollTrigger from '../components/home/utils/hooks/useScrollTrigger';
import { useEffect } from 'react';

export default function Inversiones(props) {
  let faqs = [
    {
      faqsid: 1,
      category: 1,
      question: '¿Qué significa invertir en un FCI (Fondo Común de Inversión)?',
      answer:
        'Un fondo común de inversión (FCI) es un instrumento de inversión colectiva compuesto por diferentes activos financieros (por ejemplo, bonos o plazos fijos) administrado por un profesional. Cuando suscribís plata a un Fondo Común de Inversión, lo que hacés es comprar pequeñas partes del fondo a un valor determinado. Esas partes, se llaman cuotapartes y cuando su precio cambia varía el resultado de tu inversión. El administrador del FCI procura generar el mejor resultado comprando y vendiendo los activos que componen el fondo.',
    },
    {
      faqsid: 2,
      category: 1,
      question: '¿Dónde se invierte tu plata?',
      answer:
        'Cuando invertís a través de Ualá, con tu plata suscribís cuotapartes del fondo SBS Ahorro Pesos FCI, administrado por SBS Asset Management S.A.S.G.F.C.I. Podés conocer más sobre la composición del FCI [link link="https://www.sbsfondos.com/fondos/sbs-ahorro-pesos-fci/"]acá[/link]. De acuerdo con la Ley 24.083 los fondos comunes de inversión están regulados por la CNV (Comisión Nacional de Valores), y como no son depósitos, no cuentan con garantía del BCRA (Banco Central de la República Argentina). * La suscripción al Fondo Común de Inversión no asegura ni garantiza el resultado de la inversión.',
    },
  ];

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
        <title>Ualá - Inversiones: invertí fácil y despertá tu plata</title>
        <meta
          name="description"
          content="Invertí tu plata desde la app Ualá, y liberala cuando quieras. Desde $1 y sin límite de inversión. Conocé los resultados de tu inversión todos los dias"
        />
      </Head>
      <Layout nav footer>
        <Hero
          containerStyles="bg-blue-wave mt-12"
          section="Inversiones"
          title="Hacemos que invertir sea fácil"
          subtitle="Despertá tu plata a través de Ualá y mirá los resultados todos los días."
          button
          buttonCopy="Descargar la app"
          mobileLink="https://uala.onelink.me/tTSW/ixxdq28i"
          qr="/images/sectionsQr/AR-Inversiones.jpg"
          img={
            <Image
              src="/assets/images/inversiones/hero-inversiones.jpg"
              width={1389}
              height={1184}
            />
          }
        />

        <ImageItemsSection
          reverse
          bg="bg-blue-degrade"
                    pushImg="/assets/images/inversiones/push.png"
                    img={<Image src="/assets/images/inversiones/inversiones-invertir 1.webp" width={1389} height={1134} />}
                    items={[
                        <CardItem text="Invertí y liberá tu plata al instante
                        con un solo click."
                            img="/assets/images/inversiones/icono-inversiones.png" />,
                        <CardItem text="Desde $1 y sin límites de inversión."
                            img="/assets/images/inversiones/icono-plata.png" />,
                        <CardItem text="Conocé los resultados de tu inversión todos los días desde la app."
                            img="/assets/images/inversiones/icono-resultados.png" />]}
                />
                 <Container className="md:my-12 my-12">
                    <h2 className="title-2 text-center mb-6">¿Cómo invertir a través de Ualá?</h2>
                    <a className="hidden md:block" href="https://www.youtube.com/watch?v=12gi-FVZ97o" target="_blank">
                        <PlayVideoButton
                            youtubeId="12gi-FVZ97o"
                            previewVideoSrc="/assets/video/thumbnail-inversiones-desktop.mp4"
                            isPreviewVideoScaled={false}
                        />
                    </a>
                    <a className="block md:hidden" href="https://www.youtube.com/watch?v=12gi-FVZ97o" target="_blank">
                        <PlayVideoButton
                            youtubeId="12gi-FVZ97o"
                            previewVideoSrc="/assets/video/thumbnail-inversiones-317x329px.mp4"
                            isPreviewVideoScaled={false}
                        />
                    </a>
                </Container>
                <ImageItemsSection
                    title="Tené el control de tu plata"
                    img={<Image src="/assets/images/inversiones/inversiones-liberar 1.webp" width={1389} height={1134} />}
                    items={[
                        <CardItem text="Podés liberar tu plata en el acto. A cualquier hora y en cualquier lugar."
                            img="/assets/images/inversiones/icono-liberar-plata.png" />,
                        <CardItem text="Sin costos ocultos."
                            img="/assets/images/inversiones/icono-sin-costos.png" />]}
                />

        <ImageItemsSection
          reverse
          title="Invertí con objetivos claros"
          img={
            <Image
              src="/assets/images/inversiones/Metas-de-inversion.jpg"
              width={1389}
              height={1134}
            />
          }
          items={[
            <CardItem
              text="Configurá una Meta de Inversión."
              img="/assets/images/inversiones/icono-meta.png"
            />,
            <CardItem
              text="Ponele un nombre y su valor."
              img="/assets/images/inversiones/icono-nombre.png"
            />,
            <CardItem
              text="Mirá cómo avanza y cuánto te falta para cumplirla."
              img="/assets/images/inversiones/icono-seguimiento.png"
            />,
          ]}
        />

        <Container className="my-12">
          <div className=" mx-auto shadow-blue md:p-16 p-8 rounded-2xl">
            <h2 className="title-2">Pasos para invertir</h2>
            <div className="">
              <ol>
                <li className="pt-4">
                  1. Entrá en la sección "Inversiones" de la app y respondé algunas preguntas.{' '}
                </li>
                <li className="pt-4">2. Elegí el monto que querés suscribir.</li>
                <li className="pt-4">3. Mirá los resultados de tu inversión en 48hs hábiles.</li>
              </ol>
            </div>
          </div>
        </Container>
        <Faqs faqs={faqs} />
      </Layout>
    </div>
  );
}
