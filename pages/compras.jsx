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
                <title>Ual?? - Tarjeta prepaga gratis: ped?? tu tarjeta</title>
                <meta name="description" content="Acced?? a una Tarjeta Prepaga Ual?? Mastercard: Una tarjeta gratis para tod@s y para todo. Compr?? en cualquier parte del mundo." />
            </Head>
        <Layout nav footer>
         <Hero
                    section="Compras"
                    title="Una tarjeta para tod@s y para todo"
                    subtitle="Aprovech?? tu tarjeta prepaga Ual?? y compr?? en cualquier comercio o p??gina web del mundo que acepte Mastercard."
                    img={<Image src="/assets/images/tarjeta/tarjeta-3D 1.webp" width={2132} height={2304} />}
                />

          {/* La tarjeta */}
          <ImageItemsSection
            bg="bg-red-degrade"
            title="La tarjeta"
            subtitle="Una tarjeta prepaga Mastercard internacional dise??ada para tener la mejor experiencia de compra."
            img={
              <Image src="/assets/images/tarjeta/compras-tarjeta.jpg" width={1389} height={1134} />
            }
            items={[
              <CardItem
                text="Al registrarte contar??s con una tarjeta digital para hacer compras online. "
                img="/assets/images/tarjeta/Icono compras.png"
              />,
              <CardItem
                text="Con chip, para que tu informaci??n est?? m??s protegida que nunca."
                img="/assets/images/tarjeta/Icono chip.png"
              />,
              <CardItem
                text="Con tecnolog??a contactless para que tus compras sean mucho m??s seguras."
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
                    text="Ped??s tu tarjeta y te la llevamos gratis a tu casa."
                    img="/assets/images/compras/icono-envio.png"
                  />,
                  <CardItem
                    text="Si la perd??s la pod??s congelar desde la app para que nadie la pueda usar."
                    img="/assets/images/compras/icono-congelar-tarjeta.png"
                  />,
                  <CardItem
                    text="Pod??s seguir los consumos en vivo desde la app."
                    img="/assets/images/compras/Icono-consumos.png"
                  />
            ]}
          />
          <ImageItemsSection
            title="Pag?? con QR donde quieras"
            subtitle="En cualquier comercio que tenga QR, escane?? con Ual?? y pag?? con la plata que tengas en la cuenta."
            img={<Image src="/assets/images/tarjeta/compras-QR.jpg" width={1389} height={1134} />}
            items={[
              <CardSmItem
                text="Entr??s en el men?? ???M??s??? de la app."
                img="/assets/images/tarjeta/item-1.png"
              />,
              <CardSmItem
                text="Eleg??s la opci??n ???Pagar con QR???."
                img="/assets/images/tarjeta/item-2.png"
              />,
              <CardSmItem
                text="Escane??s el c??digo del comercio en donde est??s, y ??listo!"
                img="/assets/images/tarjeta/item-3.png"
              />,
            ]}
          />

          <ImageItemsSection
            reverse
            title="Carg?? tu Ual?? gratis"
            subtitle="En efectivo o por transferencia. Es simple y r??pido."
            img={<Image src="/assets/images/tarjeta/cargar-uala.jpg" width={1389} height={1184} />}
            items={[
              <CardItem
                text="En efectivo a trav??s de Rapipago, Pago F??cil,
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
            <h2 className="title-2 text-center mb-6">??C??mo cargar tu Ual???</h2>
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
            title="Llev?? tu tarjeta Ual?? de viaje "
            subtitle="Viaj?? y us?? tu tarjeta prepaga internacional Ual?? en cualquier parte del mundo. Si aceptan Mastercard, aceptan Ual??. No es necesario dar aviso de viaje."
            img={
              <Image src="/assets/images/tarjeta/uala-de-viaje.jpg" width={1389} height={1134} />
            }
          />
          <div id="robo"></div>
          <Container className="pb-24 bg-red-250">
            <h2 className="title-2">??Perdiste o te robaron tu Ual???</h2>
            <div className="grid lg:grid-cols-2 py-8">
              <ImageTextItem
                title="Congel?? tu tarjeta"
                img="/assets/images/tarjeta/Item-1-coral.png"
              >
                <p className="text">
                  Si no encontr??s tu Ual?? pod??s congelarla en el acto desde la app para inhabilitar
                  las operaciones con la tarjeta. <br /> Si la encontr??s en un bolsillo, la
                  descongel??s y la segu??s usando como siempre.
                </p>
              </ImageTextItem>
              <ImageTextItem
                title="Hac?? la denuncia "
                img="/assets/images/tarjeta/Item-2-coral.png"
              >
                <p className="text">
                  Si perdiste o te robaron tu Ual??, hac?? la denuncia desde la app y te mandamos una
                  nueva dentro de los 15 d??as h??biles.
                </p>
                <br />
                <a
                  className="text underline text-blue-700"
                  target="_blank"
                  href="https://www.youtube.com/watch?v=xD7xz3jyZ2A"
                >
                  Mira el tutorial ac??
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
