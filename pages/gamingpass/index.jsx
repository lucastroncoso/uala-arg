import Head from 'next/head';
import { useEffect, useState } from "react";
import { fetchContent } from '../../utils/contentful';
import Layout from "../../components/layout";
import Container from '../../components/container';
import Image from "next/image";
import PromotionCard from '../../components/gamingpass/promotionCard';
import GamingpassHero from '../../components/gamingpass/gamingpassHero';
import LogoGamingpass from '../../components/gamingpass/logoGamingpass';
import Router, { useRouter } from 'next/router';
import Link from 'next/link';
import FaqsInSections from "../../components/faqs/faqsInSections";
import styles from "./gamingpass.module.css"
import Slider from "../../components/slider/slider"



export async function getStaticProps() {
    const response_promos = await fetchContent(`
 {
        argentinaPromotionCollection (order: [position_ASC], limit: 50) {
            items {
              name,
              slug, 
              previewTitle,
              date,
              logo {
                url
              },
              position,
              categoriesCollection {
                items {
                  slug
                }
              },
              locationsCollection {
                items {
                  slug
                }
              },
              featured,
              image{
                url
              },
              sys {
                id,
                publishedAt
              }
            }
          }

             argentinaFaqCollection(order: [id_ASC], limit: 200) {
            items{
                categoryId {
                    faqCategoryId
                },
                id,
                question,
                answer
              section
            }
  } }
    `);

  

    return {
        props: { response_promos },
        revalidate: 100
    }
}


export default function Gamingpass(props) {
    const router = useRouter();

    console.log(props.response_promos)

    const [allPromotions, setAllPromotions] = useState(props.response_promos.argentinaPromotionCollection.items); // Lista completa de promociones
    

    useEffect(() => {
        // Verificar al cargar la pagina si hay una categoria seleccionada desde la url
        if (router.isReady && !!router.query.category) {
            const found = categories.find(cat => cat.slug === router.query.category);
            if (!!found) {
                setSelectedCategory({ slug: router.query.category });
            }
        }
    }, [router.isReady]);

    return (
        <div className="bg-gray-gaming ">
            <Layout nav footer banner>
                  <LogoGamingpass></LogoGamingpass>
                  <div id={styles.curveGaming}><GamingpassHero
                
        
                title1="Viví una nueva experiencia"
                subtitle="Accedé a beneficios exclusivos y disfrutá la experiencia antes que nadie"
                img={<Image src="/assets/images/gamingpass/Imagenes/image-suscripcion-1.webp" width={1084} height={834} />}
              />
                  
                        <h2 className=" mx-auto text-white lg:text-3xl text-2xl font-semibold mt-4 text-center lg:w-1/2 w-5/6">
                          La suscripción a Gaming Pass incluye estas tremendas promos
                        </h2>
                            <Container className="mx-auto lg:w-10/12  ">
                        <div className=" mb-12 mt-2 lg:grid-cols-3 hidden md:grid">
                            {
                                allPromotions.length == 0
                                    ? <div className="text-center col-span-full">Parece que no se encontraron promociones...</div>
                                    : allPromotions.map(promotion => <PromotionCard key={promotion.slug} {...promotion} />)
                            }
                        </div>
                        <div  className=" md:hidden block">                <Slider>
                            {
                                allPromotions.length == 0
                                    ? <div className="text-center col-span-full">Parece que no se encontraron promociones...</div>
                                    : allPromotions.map(promotion => <PromotionCard key={promotion.slug} {...promotion} />)
                            }
                        </Slider></div>
              
                        </Container></div>
  
                           <h2 className=" mx-auto text-white lg:text-3xl text-2xl  text-center lg:w-1/2">
                         Y estate atent@, ¡siempre se <br/> vienen más novedades!
                        </h2>

                  <GamingpassHero
                containerStyles="mt-12"
               
                title1="Una única suscripción,"
                    title2=" todo incluído"
                subtitle="La suscripción se debitará de tu cuenta Ualá todos los meses ¡Recordá cargar saldo!"
                title3="$500 por mes (incluye IVA)"
                img={<Image src="/assets/images/gamingpass/Imagenes/image-suscripcion-2.webp" width={1084} height={834} />}
              />
                  
<div className="-mt-44 pt-20" id={styles.gradientFaqs}>                 <Container className="mx-auto  ">
                             <div className=" -pt-20 bg-white rounded-2xl shadow-blue  lg:mt-32  mt-20 -mb-20 py-6 px-4 lg:px-12 text-gray-150 lg:text-center">
                          ¡No tan rápido! Antes de que vayas corriendo a contarle a todos tus amig@s, te contamos que sólo algunas personas recibieron la invitación a suscribirse. Pronto tod@s l@s usuari@s de Ualá podrán suscribirse a Gaming Pass 😉
                        </div>
                </Container>     <FaqsInSections section="prestamos" title="Preguntas frecuentes sobre los pagos onlines" response={props.response_promos}/> 
                <div  className=" lg:mx-auto mx-5  text-white text-xl	text-center  text-blue-250 underline  -mt-20 lg:pb-40 pb-20"> <Link href="/">Consultá los términos y condiciones de Gaming Pass acá </Link></div>
         </div>
       
            </Layout>
        </div>
    )

}