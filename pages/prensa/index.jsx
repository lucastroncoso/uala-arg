import { useState } from 'react';
import { fetchContent } from '../../utils/contentful';
import Layout from '../../components/layout';
import Container from '../../components/container';
import Image from 'next/image';
import Head from 'next/head';
import ContactoInstitucional from '../../components/contactoInstitucional';
import Link from 'next/link';
import useScrollTrigger from '../../components/home/utils/hooks/useScrollTrigger';
import { useEffect } from 'react';
import gsap from 'gsap';

export async function getStaticProps() {
  const response = await fetchContent(`
    {
        argentinaPrensaCollection(order: [sys_firstPublishedAt_DESC], limit: 3) {
          items {
            cardDate
            cardTitle
            slug
            sys {
              id
              publishedAt
            }
          }
        }
      }
    `);

  return {
    props: { response },
    revalidate: 10,
  };
}

export default function Prensa(props) {
  const [news, setNews] = useState(props.response.argentinaPrensaCollection.items); // Lista completa de notas de prensa

  const [sectionRef, childrenSelector, createTL] = useScrollTrigger();

  useEffect(() => {
    if (!sectionRef || !sectionRef.current) return;

    const ctaCards = childrenSelector('[data-animation="cta-cards"]');
    const ctaCards2 = childrenSelector('[data-animation="cta-cards2"]');

    gsap
      .timeline({ scrollTrigger: { trigger: ctaCards, start: '0% 80%' } })
      .fromTo(
        ctaCards,
        { y: 100, transformOrigin: '50% 20%', opacity: 0 },
        { duration: 0.55, y: 0, stagger: 0.2, ease: 'power4.inOut', opacity: 1 },
        '-=0.5',
      );

    gsap
      .timeline({ scrollTrigger: { trigger: ctaCards2, start: '0% 80%' } })
      .fromTo(
        ctaCards2,
        { y: 100, transformOrigin: '50% 20%', opacity: 0 },
        { duration: 0.55, y: 0, stagger: 0.2, ease: 'power4.inOut', opacity: 1 },
        '-=0.5',
      );
  }, []);

  const stories = [
    {
      image: 'google.svg',
      text: 'Las UAC permiten conectar con los usuarios m??s valiosos para cada app.',
      link: 'https://www.thinkwithgoogle.com/intl/es-419/recursos-y-herramientas/aplicaciones/las-campanas-universales-de-aplicaciones-permiten-conectar-con-los-usuarios-mas-valiosos-para-cada-app/',
    },
    {
      image: 'aws.svg',
      text: 'Activate proporcion?? los recursos necesarios para desarrollar la start up de Ual??.',
      link: 'https://aws.amazon.com/es/solutions/case-studies/Uala/',
    },
    {
      image: 'facebook.svg',
      text: 'M??s descargas de la app con anuncios en Facebook e Instagram Stories.',
      link: 'https://www.facebook.com/business/success/uala',
    },
    {
      image: 'twitter.svg',
      text: 'Estrategia en la construcci??n de la relaci??n a largo plazo entre la marca y los usuarios.',
      link: 'https://www.youtube.com/watch?v=zTF6s5k2clw&feature=youtu.be',
    },
    {
      image: 'ims.svg',
      text: 'Reforzar nuestra penetraci??n de mercado en segmentos muy importantes para nosotros.',
      link: 'https://www.imscorporate.com/',
    },
  ];

  return (
    <div ref={sectionRef}>
      <Head>
        <title>Ual??</title>
      </Head>
      <Layout nav footer>
        <Container className="">
          <div className="grid md:mb-0 mt-28 mb-12 md:grid-cols-2">
            <div className="flex flex-wrap content-center md:mb-12 md:order-none order-2 md:mt-0 mt-8">
              <div className="w-full">
                <div className="text-xl w-5/6 ">
                  <div className="">Prensa</div>
                </div>
              </div>
              <div className="w-full">
                <h1 className="title-2 md:w-5/6 mt-4">
                  <div className="text-gray-250">??ltimos anuncios</div>
                </h1>
              </div>
            </div>
          </div>
        </Container>

        <Container className="bg-blue-wave-prensa w-full">
          <div className="grid lg:grid-cols-3 gap-5">
            {news !== undefined &&
              news.map((notice) => (
                <div
                  data-animation="cta-cards"
                  key={notice.slug}
                  className="shadow-md rounded-2xl p-6 border border-gray-100 flex flex-col bg-white"
                >
                  <div className="text-gray-500 font-medium mb-4">{notice.cardDate}</div>
                  <div className="text-gray-700 text-xl font-medium mb-4 flex-grow">
                    {notice.cardTitle}
                  </div>
                  <Link href={`/prensa/${notice.slug}`}>
                    <a className="link">Leer m??s</a>
                  </Link>
                </div>
              ))}
          </div>
          <div className="my-8">
            <Link href="/anuncios">
              <a className="link text-2xl">Mir?? nuestros ??ltimos anuncios</a>
            </Link>
          </div>
        </Container>

        <Container className="mt-12 w-full">
          <div className="w-full">
            <h1 className="title-2 md:w-5/6 mt-4 mb-8">
              <div className="text-gray-250">Conoc?? m??s sobre Ual??</div>
            </h1>
          </div>
          <div className="grid grid-cols-12 gap-5">
            <div className="mb-4 lg:mb-0 col-span-full lg:col-span-3">
              <div className="shadow-md rounded-2xl p-6 border border-gray-100 flex flex-col bg-white">
                <div className="flex items-center">
                  <div className="flex-grow">
                    <Link href="/prensa/sobre">
                      <a className="link">Acerca de Ual??</a>
                    </Link>
                  </div>
                  <div>
                    <span className="text-blue-250"> ???</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-4 lg:mb-0 col-span-full lg:col-span-7">
              <div className="shadow-md rounded-2xl p-6 border border-gray-100 flex flex-col bg-white">
                <div className="flex items-center">
                  <div className="flex-grow">
                    <Link href="/prensa/pier">
                      <a className="link">Acerca de Pierpaolo Barbieri, fundador y CEO de Ual??</a>
                    </Link>
                  </div>
                  <div>
                    <span className="text-blue-250"> ???</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>

        <Container className="mt-12 w-full">
          <div className="w-full">
            <h1 className="title-2 md:w-5/6 mt-4 mb-8">
              <div className="text-gray-250">Descarg?? nuestro material institucional</div>
            </h1>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            <div className="mb-4 lg:mb-0 ">
              <div className="shadow-md rounded-2xl p-6 border border-gray-100 flex flex-col bg-white">
                <div className="flex items-center">
                  <div className="flex-grow">
                    <div className="link">
                      <a
                        href="https://drive.google.com/drive/folders/1p9oFw6tVSQix_1mSX5h7_46MEBsvSoeK?usp=sharing"
                        target="_blank"
                      >
                        Logo de Ual??
                      </a>
                    </div>
                  </div>
                  <div>
                    <Image src="/assets/images/icono-descarga.png" width={26} height={22} />
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-4 lg:mb-0 ">
              <div className="shadow-md rounded-2xl p-6 border border-gray-100 flex flex-col bg-white">
                <div className="flex items-center">
                  <div className="flex-grow">
                    <div className="link">
                      <a
                        href="https://drive.google.com/drive/folders/1WU03reTPU0jtqysli6nKEsy7JBd14Pg0?usp=sharing"
                        target="_blank"
                      >
                        Im??genes de producto
                      </a>
                    </div>
                  </div>
                  <div>
                    <Image src="/assets/images/icono-descarga.png" width={26} height={22} />
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-4 lg:mb-0 ">
              <div className="shadow-md rounded-2xl p-6 border border-gray-100 flex flex-col bg-white">
                <div className="flex items-center">
                  <div className="flex-grow">
                    <div className="link">
                      <a
                        href="https://drive.google.com/drive/folders/1m1SjV7h-CVF018jpizmtUN8rsj1nPTCQ?usp=sharing"
                        target="_blank"
                      >
                        Im??genes de las oficinas
                      </a>
                    </div>
                  </div>
                  <div>
                    <Image src="/assets/images/icono-descarga.png" width={26} height={22} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>

        <Container>
          <div className="mt-16">
            <div className="w-full">
              <h1 className="title-2 md:w-5/6 mt-4 mb-8">
                <div className="text-gray-250">Ual?? como caso de ??xito</div>
              </h1>
            </div>
            <div className="grid lg:grid-cols-3 gap-5 mt-8">
              {stories.map((story) => (
                <div
                  data-animation="cta-cards2"
                  key={story.link}
                  className="shadow-md rounded-xl p-6 border border-gray-100 flex flex-col"
                >
                  <div className="h-12">
                    {story.image === 'facebook.svg' ? (
                      <img
                        src={`/assets/images/prensa/${story.image}`}
                        alt=""
                        className="max-h-5"
                      />
                    ) : (
                      <img
                        src={`/assets/images/prensa/${story.image}`}
                        alt=""
                        className="max-h-9"
                      />
                    )}
                  </div>
                  <div className="text-gray-600 my-4 flex-grow">{story.text}</div>
                  <div className="link">
                    <a href={story.link} target="_blank">
                      Leer m??s
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>

        <Container className="mt-12 w-full">
          <div className="w-full">
            <h1 className="title-2 md:w-5/6 my-4">
              <div className="text-gray-250">Mir?? nuestro reporte de sustentabilidad</div>
            </h1>
          </div>
          <div className="grid grid-cols-12 gap-5">
            <div className="mb-4 lg:mb-0 col-span-full lg:col-span-3">
              <div className="shadow-md rounded-2xl p-6 border border-gray-100 flex flex-col bg-white">
                <div className="flex items-center">
                  <div className="flex-grow">
                    <a
                      href="/reporte-sostenibilidad"
                      target="_blank"
                      className="link"
                      rel="noopener noreferrer"
                    >
                      Reporte 2021
                    </a>
                  </div>
                  <div>
                    <Image src="/assets/images/icono-descarga.png" width={26} height={22} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>

        <ContactoInstitucional />

        <div className="w-full">
          <a href="https://blog.uala.com.ar/" target="_blank">
            <div className="hidden md:block cursor-pointer">
              <Image
                layout="responsive"
                src="/assets/images/prensa/banner_blog_desktop.jpg"
                width={3000}
                height={730}
                alt="Visita nuestro blog"
              />
            </div>

            <div className="block md:hidden">
              <Image
                layout="responsive"
                src="/assets/images/prensa/banner_blog_mobile.jpg"
                width={782}
                height={949}
                alt="Visita nuestro blog"
              />
            </div>
          </a>
        </div>
      </Layout>
    </div>
  );
}
