import { fetchContent } from '../../utils/contentful';
import Head from 'next/head';
import Layout from "../../components/layout";
import Container from '../../components/container';
import CardRoundedShadow from "../../components/cardRoundedShadow";
import Image from "next/image";
import OutlinedButton from '../../components/outlinedButton';
import Link from 'next/link';

export const getStaticPaths = async () => {
  const response = await fetchContent(`
    {
      argentinaPromotionCollection(limit: 100) {
          items {
            slug
          }
        }
      }`)

  const paths = response.argentinaPromotionCollection.items.map(item => {
    return {
      params: { slug: item.slug }
    }
  })

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps = async ({ params }) => {
  const response = await fetchContent(`
  {
    argentinaPromotionCollection (
      where: { slug:"${ params.slug }" }
      limit: 1
      )  {
      items {
        title,
        date,
        logo {
          url,
          width,
          height
        },
        locationsCollection {
          items {
            name,
            slug
          }
        },
        description,
        callToAction
        actionText,
        actionUrl,
        conditions
      }
    }
  } 
`)

  return {
    props: { promotion: response.argentinaPromotionCollection.items[0] },
    revalidate: 10
  }
}

export default function Details({ promotion }) {
  if (!promotion) return <div>Loading</div>
  return (
    <>
            <Head>
                <title>Ualá</title>
            </Head>
            <Layout nav footer banner>

                <Container className="mx-auto lg:w-10/12 mb-72 mt-40">

                  
                  <div className="cursor-pointer flex flex-row items-center mb-12 lg:mb-20">
                    <Link href="/promociones">
                      <a className="link outline-none">
                        <i className="fas fa-chevron-left mr-4"></i>Regresar a promociones
                      </a>
                    </Link>
                  </div>


                  <div className="flex flex-row justify-between">

                    <div className="w-8/12">
                        <CardRoundedShadow className="ml-0 mt-0 p-4 lg:p-12 w-1/2 mb-12 lg:mb-20">
                          <div className="min-h-16 flex flex-row justify-center items-center">
                            { promotion.logo 
                            ? <Image
                                src={ promotion.logo.url}
                                width={ promotion.logo.width }
                                height={ promotion.logo.height }
                                alt={ promotion.title }
                              /> 
                            : <Image
                                src="/assets/logos/uala-logo-wave.png"
                                width={ 200 }
                                height={ 100 }
                                alt={ promotion.title }
                              />}
                          </div>
                        </CardRoundedShadow>
                          

                        <div className="w-full">
                            <h1 className="title-2 md:w-5/6 mt-4">
                                <div className="">{promotion.title}</div>
                            </h1>
                        </div>

                        <div className="w-full mt-4">
                            <div className="md:w-9/12 subtitle-1 ">
                                {promotion.description}
                            </div>
                        </div>
                    </div>

                    <div className="w-4/12 ml-4">
                      <Image
                        src="/assets/images/promociones/promociones-hero.png"
                        width={ 1000 }
                        height={ 919 }
                        alt="Promociones"
                      />
                    </div>

                  </div>

                  <div className=" mt-8 flex flex-row flex-wrap">

                    <div className="w-1/3 p">
                        {promotion.date}
                    </div>

                    <div className="w-2/3 p ">
                      <i className="fas fa-map-marker-alt mx-2 text-blue-250"></i>
                      {
                        !!promotion && promotion.locationsCollection.items.map(loc => {
                          if (loc.name !== promotion.locationsCollection.items.slice(-1)[0].name ) {
                            return loc.name + ", ";
                          } 
                          return loc.name;
                        })
                      }
                    </div>

                    {
                      promotion.callToAction &&
                      <div className="w-full" onClick={ () => dataLayer.push(
                        { 
                          event: 'trackEvent',
                          eventCategory: 'Web Arg', 
                          eventAction: 'Pagina Promociones', 
                          eventLabel: 'Boton Usar Promo' 
                         }) }>
                        <OutlinedButton
                          href={promotion.actionUrl}
                          text={promotion.actionText}
                        />
                      </div>
                    }

                  </div>

                  <div className="w-full mt-20 mb-2">
                    <p className="subtitle-3 ">Bases y condiciones</p>

                    <p className="p text-justify">
                      <small>
                        {promotion.conditions}
                      </small>
                    </p>
                  </div>


                </Container>


            </Layout>
        </>
  )
}