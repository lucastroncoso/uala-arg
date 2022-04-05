import Container from '../components/container';
import Hero from '../components/hero';
import CardItem from '../components/cardItem';
import MapItemsSection from '../components/extracciones/mapItemsSection';
import Card from '../components/card';
import CardSection from '../components/cardSection';
import Layout from '../components/layout';
import VideoTitle from '../components/videoTitle';
import Head from 'next/head';
import Image from 'next/image';
import PlayVideoButton from '../components/home/PlayVideoButton/PlayVideoButton';
import useScrollTrigger from '../components/home/utils/hooks/useScrollTrigger';
import { useEffect } from 'react';
import gsap from 'gsap';

export default function Extracciones(props) {
  const [sectionRef, childrenSelector, createTL] = useScrollTrigger();

  useEffect(() => {
    if (!sectionRef || !sectionRef.current) return;

    const videoButton = childrenSelector('[data-animation="video-button"]');
    const videoElement = childrenSelector('[data-animation="video-element"]');
    const ctaCards = childrenSelector('[data-animation="cta-cards"]');

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

    gsap
      .timeline({ scrollTrigger: { trigger: ctaCards, start: '0% 80%' } })
      .fromTo(
        ctaCards,
        { y: 100, transformOrigin: '50% 20%', opacity: 0 },
        { duration: 0.55, y: 0, stagger: 0.2, ease: 'power4.inOut', opacity: 1 },
        '-=0.5',
      );
  }, []);

  return (
    <div ref={sectionRef}>
      <Head>
        <link rel="alternate" hreflang="es-ar" href="https://www.uala.com.ar/extracciones" />
        <link rel="alternate" hreflang="es-mx" href="https://www.uala-abc.com.mx/extracciones" />
        <link rel="alternate" hreflang="es-co" href="https://www.uala.com.co/retiros" />
        <link rel="alternate" hreflang="x-default" href="https://www.uala.com.ar/extracciones" />
        <title>Ualá - Extracciones: Sacá plata en todo el país</title>
      </Head>
      <Layout nav footer>
        <Hero
          containerStyles="mt-12 bg-coral-wave-2"
          section="Extracciones"
          title="Sacá plata en todo el país"
          subtitle="Podés extraer efectivo en cualquier sucursal de Rapipago o en cajeros de la red Link o Banelco."
          img={
            <Image
              src="/assets/images/extracciones/extracciones-uala.jpg"
              width={1500}
              height={1295}
            />
          }
        />

        <CardSection className="bg-red-degrade">
          <Card
            img="/assets/images/extracciones/Icono-extracciones-cajero.png"
            title="Red Link o Banelco"
            text="Para extraer plata en cualquier cajero, primero necesitás el PIN. Una clave de 4 dígitos que generás desde la sección “Tarjeta” de la app."
          >
            <img
              src="/assets/images/extracciones/red-link 1.png"
              className="w-2/12 mr-4 inline"
              alt=""
            />
            <img src="/assets/images/extracciones/banelco 1.png" className="w-5/12 inline" alt="" />
          </Card>
          <Card
            img="/assets/images/extracciones/Icono-extracciones-cajero.png"
            title="Extraer en Rapipago"
            text="Para extraer plata en una sucursal de Rapipago, primero necesitás generar un código de extracción desde la sección “Tarjeta” de la app."
          >
            <img src="/assets/images/extracciones/rappipago.png" className="w-5/12 inline" alt="" />
          </Card>
          <Card
            img="/assets/images/transferencias/SPEI 2.png"
            title="Montos de extracción"
            text="Red Link: $8.500 cada 24hs.
                        Banelco: $8.500 cada 24hs.
                        Rapipago: Hasta dos extracciones de $15.000 por día y hasta 8 extracciones por mes."
          />
        </CardSection>

        <MapItemsSection
          reverse
          title="Dónde retirar efectivo"
          subtitle="Podés retirar desde cualquier cajero automático de la red Link o Banelco y en las sucursales de Rapipago de todo el país."
        />

        <div className="bg-blue-degrade-trabajar">
          <Container className="md:my-12 my-12">
            <h2 className="title-2 text-center mb-6">¿Cómo sacar plata del cajero?</h2>
            <a
              className="hidden md:block"
              href="https://www.youtube.com/watch?v=08HLUarWD5Q"
              target="_blank"
            >
              <PlayVideoButton
                youtubeId="08HLUarWD5Q"
                previewVideoSrc="/assets/video/thumbnail-extracciones-desktop.mp4"
                isPreviewVideoScaled={false}
              />
            </a>
            <a
              className="block md:hidden"
              href="https://www.youtube.com/watch?v=08HLUarWD5Q"
              target="_blank"
            >
              <PlayVideoButton
                youtubeId="08HLUarWD5Q"
                previewVideoSrc="/assets/video/thumbnail-extracciones-317x329px.mp4"
                isPreviewVideoScaled={false}
              />
            </a>
          </Container>
          <Container className="pb-8">
            <h2 className="title-extracciones">Costos</h2>
            <div className="grid grid-cols-2 py-8">
              <p className="col-span-2 md:col-span-1 text-gray-250">
                <span className="font-bold">Red Link y Banelco</span>
                <br />
                Cada extracción tienen un costo de $130 + IVA.
              </p>
              <p className="col-span-2 md:col-span-1 md:col-start-2 text-gray-250">
                <span className="font-bold">Rapipago</span>
                <br />
                Tenés una extracción gratis por mes. Si hacés más extracciones, tienen un costo de
                $75 + IVA que se va a cobrar de tu saldo cuando hagas la extracción.
              </p>
            </div>
          </Container>
        </div>
      </Layout>
    </div>
  );
}
