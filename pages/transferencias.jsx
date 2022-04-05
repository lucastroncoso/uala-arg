import Container from '../components/container';
import Hero from '../components/hero';
import CardItem from '../components/cardItem';
import CardSmItem from '../components/cardSmItem';
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

export default function Pagos(props) {
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
        <link rel="alternate" hreflang="es-ar" href="https://www.uala.com.ar/transferencias" />
        <link rel="alternate" hreflang="es-mx" href="https://www.uala-abc.com.mx/transferencias" />
        <link rel="alternate" hreflang="es-co" href="https://www.uala.com.co/transferencias" />
        <link rel="alternate" hreflang="x-default" href="https://www.uala.com.ar/transferencias" />
        <title>Ualá - Transferencias: enviá y recibí plata gratis</title>
      </Head>
      <Layout nav footer>
        <Hero
          containerStyles="mt-12 bg-coral-wave"
          section="Transferencias"
          title="Transferí y recibí plata de tod@s"
          subtitle="Enviá y recibí plata desde cualquier cuenta
                    bancaria y/o virtual, gratis y en el acto."
          img={
            <Image
              src="/assets/images/transferencias/Hero_transferencias.jpg"
              width={1084}
              height={834}
            />
          }
        />

        <CardSection className="bg-red-degrade">
          <Card
            img="/assets/images/transferencias/transferencias 1.png"
            title="Transferencias entre usuarios"
            text="Podés recibir o mandar plata a tus amig@s o familiares que tienen Ualá. Buscá su nombre de usuario en la sección “Transferencias” o escaneá el código de QR desde su app. Es gratis e instantáneo."
          />
          <Card
            img="/assets/images/transferencias/SPEI 1.png"
            title="Transferencias a cuentas bancarias y/o virtuales"
            text="Podés recibir transferencias desde cualquier cuenta bancaria y/o virtual a tu CVU de Ualá. También podés mandar plata a otras cuentas desde la sección “Transferencias” de la app."
          />
          <Card
            img="/assets/images/transferencias/SPEI 2.png"
            title="Clave de seguridad"
            text="Para hacer transferencias desde la app de Ualá necesitás la clave de 6 dígitos o clave de seguridad que creaste cuando validamos tu usuario. Si te la olvidaste podés recuperarla haciendo click en “Olvidé mi clave” antes de confirmar la transferencia o movimiento de plata."
          />
        </CardSection>
        <Container className="md:my-12 my-12">
          <h2 className="title-2 text-center mb-6">¿Cómo hacer transferencias?</h2>
          <a
            className="hidden md:block"
            href="https://www.youtube.com/watch?v=YaH4MZUAlXA"
            target="_blank"
          >
            <PlayVideoButton
              youtubeId="YaH4MZUAlXA"
              previewVideoSrc="/assets/video/thumbnail-transferencias-desktop.mp4"
              isPreviewVideoScaled={false}
            />
          </a>
          <a
            className="block md:hidden"
            href="https://www.youtube.com/watch?v=YaH4MZUAlXA"
            target="_blank"
          >
            <PlayVideoButton
              youtubeId="YaH4MZUAlXA"
              previewVideoSrc="/assets/video/thumbnail-transferencias-317x329px.mp4"
              isPreviewVideoScaled={false}
            />
          </a>
        </Container>
      </Layout>
    </div>
  );
}
