import Container from '../components/container';
import Hero from '../components/hero';
import CardItem from '../components/cardItem';
import CardSmItem from '../components/cardSmItem';
import ImageItemsSection from '../components/imageItemsSection';
import ImageTextItem from '../components/tarjeta/imageTextItem';
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

export default function Tarjeta(props) {
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
      <>
     <Head>
                <link rel="alternate" hreflang="es-ar" href="https://www.uala.com.ar/compras" />
                <link rel="alternate" hreflang="es-mx" href="https://www.uala-abc.com.mx/tarjeta" />
                <link rel="alternate" hreflang="x-default" href="https://www.uala.com.ar/compras" />
                <title>Ualá - Tarjeta prepaga gratis: pedí tu tarjeta</title>
                <meta name="description" content="Accedé a una Tarjeta Prepaga Ualá Mastercard: Una tarjeta gratis para tod@s y para todo. Comprá en cualquier parte del mundo." />
            </Head>
        <Layout nav footer>
         <Hero
                    section="Compras"
                    title="Una tarjeta para tod@s y para todo"
                    subtitle="Aprovechá tu tarjeta prepaga Ualá y comprá en cualquier comercio o página web del mundo que acepte Mastercard."
                    button
                    buttonCopy="Pedí tu tarjeta"
                    mobileLink="https://uala.onelink.me/tTSW/6lj77u5q"
                    qr="/assets/images/sectionsQr/AR-Compras.jpg"
                    img={<Image src="/assets/images/tarjeta/tarjeta-3D 1.webp" width={2132} height={2304} />}
                />

          {/* La tarjeta */}
          <ImageItemsSection
            bg="bg-red-degrade"
            title="La tarjeta"
            subtitle="Una tarjeta prepaga Mastercard internacional diseñada para tener la mejor experiencia de compra."
            img={
              <Image src="/assets/images/tarjeta/compras-tarjeta.jpg" width={1389} height={1134} />
            }
            items={[
              <CardItem
                text="Al registrarte contarás con una tarjeta digital para hacer compras online. "
                img="/assets/images/tarjeta/Icono compras.png"
              />,
              <CardItem
                text="Con chip, para que tu información esté más protegida que nunca."
                img="/assets/images/tarjeta/Icono chip.png"
              />,
              <CardItem
                text="Con tecnología contactless para que tus compras sean mucho más seguras."
                img="/assets/images/tarjeta/Icono contactless.png"
              />,
            ]}
          />
              <ImageItemsSection
            title="Beneficios de la tarjeta prepaga Mastercard"
          reverse
            img={<div className="hidden md:block"><Image  src="/assets/images/compras/beneficios-tarjeta.jpg" width={1389} height={1134} /></div>}
            items={[
              <CardItem
                    text="Pedís tu tarjeta y te la llevamos gratis a tu casa."
                    img="/assets/images/compras/icono-envio.png"
                  />,
                  <CardItem
                    text="Si la perdés la podés congelar desde la app para que nadie la pueda usar."
                    img="/assets/images/compras/icono-congelar-tarjeta.png"
                  />,
                  <CardItem
                    text="Podés seguir los consumos en vivo desde la app."
                    img="/assets/images/compras/Icono-consumos.png"
                  />
            ]}
          />
          <ImageItemsSection
            title="Pagá con QR donde quieras"
            subtitle="En cualquier comercio que tenga QR, escaneá con Ualá y pagá con la plata que tengas en la cuenta."
            img={<Image src="/assets/images/tarjeta/compras-QR.jpg" width={1389} height={1134} />}
            items={[
              <CardSmItem
                text="Entrás en el menú “Más” de la app."
                img="/assets/images/tarjeta/item-1.png"
              />,
              <CardSmItem
                text="Elegís la opción “Pagar con QR”."
                img="/assets/images/tarjeta/item-2.png"
              />,
              <CardSmItem
                text="Escaneás el código del comercio en donde estés, y ¡listo!"
                img="/assets/images/tarjeta/item-3.png"
              />,
            ]}
          />

          <ImageItemsSection
            reverse
            title="Cargá tu Ualá gratis"
            subtitle="En efectivo o por transferencia. Es simple y rápido."
            img={<Image src="/assets/images/tarjeta/cargar-uala.jpg" width={1389} height={1184} />}
            items={[
              <CardItem
                text="En efectivo a través de Rapipago, Pago Fácil,
                        Cobro Express y Telerecargas."
                img="/assets/images/tarjeta/Icono efectivo.png"
              />,
              <CardItem
                text="Por transferencia desde una cuenta bancaria
                        CBU hacia CVU."
                img="/assets/images/tarjeta/Icono transferencia.png"
              />,
            ]}
          />
          <Container className="md:mt-12 mt-10 md:-mb-4">
            <h2 className="title-2 text-center mb-6">¿Cómo cargar tu Ualá?</h2>
            <a
              className="hidden md:block"
              href="https://www.youtube.com/watch?v=6Bv0IdBFdDc"
              target="_blank"
            >
              <PlayVideoButton
                youtubeId="6Bv0IdBFdDc"
                previewVideoSrc="/assets/video/thumbnail-compras-deskstop.mp4"
                isPreviewVideoScaled={false}
              />
            </a>
            <a
              className="block md:hidden"
              href="https://www.youtube.com/watch?v=6Bv0IdBFdDc"
              target="_blank"
            >
              <PlayVideoButton
                youtubeId="6Bv0IdBFdDc"
                previewVideoSrc="/assets/video/thumbnail-compras-317x329px.mp4"
                isPreviewVideoScaled={false}
              />
            </a>
          </Container>
          <ImageItemsSection
            bg="bg-red-degrade-oposite"
            title="Llevá tu tarjeta Ualá de viaje "
            subtitle="Viajá y usá tu tarjeta prepaga internacional Ualá en cualquier parte del mundo. Si aceptan Mastercard, aceptan Ualá. No es necesario dar aviso de viaje."
            img={
              <Image src="/assets/images/tarjeta/uala-de-viaje.jpg" width={1389} height={1134} />
            }
          />
          <div id="robo"></div>
          <Container className="pb-24 bg-red-250">
            <h2 className="title-2">¿Perdiste o te robaron tu Ualá?</h2>
            <div className="grid lg:grid-cols-2 py-8">
              <ImageTextItem
                title="Congelá tu tarjeta"
                img="/assets/images/tarjeta/Item-1-coral.png"
              >
                <p className="text">
                  Si no encontrás tu Ualá podés congelarla en el acto desde la app para inhabilitar
                  las operaciones con la tarjeta. <br /> Si la encontrás en un bolsillo, la
                  descongelás y la seguís usando como siempre.
                </p>
              </ImageTextItem>
              <ImageTextItem
                title="Hacé la denuncia "
                img="/assets/images/tarjeta/Item-2-coral.png"
              >
                <p className="text">
                  Si perdiste o te robaron tu Ualá, hacé la denuncia desde la app y te mandamos una
                  nueva dentro de los 15 días hábiles.
                </p>
                <br />
                <a
                  className="text underline text-blue-700"
                  target="_blank"
                  href="https://www.youtube.com/watch?v=xD7xz3jyZ2A"
                >
                  Mira el tutorial acá
                </a>
              </ImageTextItem>
            </div>
          </Container>
          <FaqsInSections
            section="compras"
            title="Preguntas frecuentes sobre la tarjeta prepaga Mastercard"
            response={props.response}
          />
        </Layout>
      </>
    </div>
  );
}
