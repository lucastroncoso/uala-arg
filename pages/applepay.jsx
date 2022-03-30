import Hero from '../components/hero';
import ImageItemsSection from '../components/imageItemsSection';
import Layout from '../components/layout';
import Head from 'next/head';
import Image from 'next/image';
import StepsSection from '../components/home/StepsSection/StepsSection';
import { fetchContent } from '../utils/contentful';
import FaqsInSections from '../components/applepay/faqsInSections';
import PlayVideoButton from '../components/home/PlayVideoButton/PlayVideoButton';
import Container from '../components/container';

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

export default function ApplePay(props) {
  const stepsSection = {
    title: '¿Cómo pagar con Apple Pay?',
    stepsItems: [
      {
        copy: 'Al momento de pagar, hace click dos veces en el botón lateral de tu iPhone. ',
        icon: 'pasos-applepay-1',
      },
      {
        copy: 'Si tenés Face ID, mirá el celular. Si tenés Touch ID, apoyá tu dedo.',
        icon: 'pasos-applepay-2',
      },
      {
        copy: 'Vas a ver tu tarjeta Ualá en la pantalla. Acerca el celular a la terminal de pago.',
        icon: 'pasos-applepay-3',
      },
      {
        copy: '¡Listo! Ya pagaste con tu iPhone de manera fácil, segura y sin contacto.',
        icon: 'pasos-applepay-4',
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Ualá</title>
      </Head>
      <Layout nav footer>
        <Hero
          containerStyles=" mt-12"
          section="Apple Pay"
          title="Pagá fácil, seguro y sin contacto"
          subtitle="Disfrutá de pagar con tu tarjeta Ualá a través de tu iPhone o Apple Watch."
          img={
            <Image
              src="/assets/images/applePay/Imágenes/hero_applepay_2.jpg"
              width={1389}
              height={1134}
            />
          }
        />

        <ImageItemsSection
          icons={[
            '/assets/images/applePay/logos/logo-contactless.png',
            '/assets/images/applePay/logos/logo-applepay.png',
          ]}
          title="Pagá acercando tu iPhone o Apple Watch"
          subtitle="Vas a poder usar Apple Pay en locales con el símbolo de contactless o en sitios web con el logo de Apple Pay."
          img={
            <Image
              src="/assets/images/applePay/Imágenes/image_applepay.jpg"
              width={1389}
              height={1134}
            />
          }
        />

        <Container className="md:mt-12 mt-10 md:-mb-4">
          <h2 className="title-2 text-center mb-6">
            Conocé cómo integrar tu tarjeta Ualá a Apple Pay
          </h2>
          <a
            className="hidden md:block"
            href="https://www.youtube.com/watch?v=6Bv0IdBFdDc"
            target="_blank"
          >
            <PlayVideoButton
              youtubeId="6Bv0IdBFdDc"
              previewVideoSrc="/assets/video/thumbnail-applepay-desktop.mp4"
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
              previewVideoSrc="/assets/video/thumbnail-applepay-mobile.mp4"
              isPreviewVideoScaled={false}
            />
          </a>
        </Container>
        <StepsSection applePay content={stepsSection} />
        <FaqsInSections
          section="applepay"
          title="Preguntas frecuentes sobre Apple Pay"
          response={props.response}
        />
      </Layout>
    </>
  );
}
