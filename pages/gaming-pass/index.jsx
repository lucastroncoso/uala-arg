import Head from 'next/head';
import { useEffect, useState } from "react";
import { fetchContent } from '../../utils/contentful';
import Layout from "../../components/layout";
import Container from '../../components/container';
import Image from "next/image";
import PromotionCard from '../../components/gaming-pass/promotionCard';
import GamingpassHero from '../../components/gaming-pass/gamingpassHero';
import LogoGamingpass from '../../components/gaming-pass/logoGamingpass';
import Router, { useRouter } from 'next/router';
import Link from 'next/link';
import FaqsInSections from "../../components/faqs/faqsInSections";
import styles from "./gaming-pass.module.css"
import Slider from "../../components/slider/slider"



export async function getStaticProps() {
    const response_promos = await fetchContent(`
 {
        argentinaPromotionCollection (where:{gamingpass: true} ,order: [position_ASC], limit: 50) {
            items {
              name,
              slug, 
              previewTitle,
                previewTitle2,
              previewSubtitleReintegro,
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

             argentinaFaqCollection(order: [id_ASC], limit: 300) {
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
        revalidate: 10
    }
}


export default function Gamingpass(props) {
    const router = useRouter();
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


    const lastColOdd = (total,index) => {
   if (total % 3 !==0 && total===4 || total ===7 || total ===10 || total===13) {
return "col-start-3 "
     } else  if (total % 3 !==0 && index ===total) {
return "col-start-4 "
    }   else if (total % 3 !==0 && index ===total-1) {
return "col-start-2 "
    } 
    else return
    }

    return (
        <div className="bg-gray-gaming ">
            <Layout nav footer banner>
                  <LogoGamingpass></LogoGamingpass>
                  <div id={styles.curveGaming}><GamingpassHero
                
        
                title1="Viv?? una nueva experiencia"
                subtitle="Acced?? a beneficios exclusivos y disfrut?? la experiencia antes que nadie"
                img={<Image src="/assets/images/gamingpass/Imagenes/image-suscripcion-1.webp" width={1084} height={834} />}
              />
                  
                        <h2 className=" mx-auto text-white lg:text-3xl text-2xl font-semibold mt-4 text-center lg:w-1/2 w-5/6">
                          La suscripci??n a Gaming Pass incluye estas tremendas promos
                        </h2>
                            <Container className="mx-auto lg:w-10/12  ">
                        <div className=" mb-12 mt-2 md:grid-cols-6 hidden md:grid">
                            {
                                allPromotions.length == 0
                                    ? <div className="text-center col-span-full">Parece que no se encontraron promociones...</div>
                                    : allPromotions.map((promotion,index) => <PromotionCard  className={`p-4 bg-white cursor-pointer  h-64 flex flex-col justify-center col-span-2 ${lastColOdd(allPromotions.length,index+1)} `}    key={promotion.slug} {...promotion} />)
                            }
                        </div>
                        <div  className=" md:hidden block">                <Slider>
                            {
                                allPromotions.length == 0
                                    ? <div className="text-center col-span-full">Parece que no se encontraron promociones...</div>
                                    : allPromotions.map(promotion => <PromotionCard className="p-4 bg-white cursor-pointer  h-64 flex flex-col justify-center" key={promotion.slug} {...promotion} />)
                            }
                        </Slider></div>
              
                        </Container></div>
  
                           <h2 className=" mx-auto text-white lg:text-3xl text-2xl  text-center lg:w-1/2">
                         Y estate atent@, ??siempre se <br/> vienen m??s novedades!
                        </h2>

                  <GamingpassHero
                containerStyles="mt-12"
               
                title1="Una ??nica suscripci??n,"
                    title2=" todo incluido"
                subtitle="La suscripci??n se debitar?? de tu cuenta Ual?? todos los meses ??Record?? cargar saldo!"
                title3="$500 por mes (incluye IVA)"
                img={<Image src="/assets/images/gamingpass/Imagenes/image-suscripcion-2.webp" width={1084} height={834} />}
              />
                  
<div className="-mt-44 pt-20" id={styles.gradientFaqs}>                 <Container className="mx-auto  ">
                             <div className=" -pt-20 bg-white rounded-2xl shadow-blue  lg:mt-32  mt-20 -mb-20 py-6 px-4 lg:px-12 text-gray-150 lg:text-center">
                          ??No tan r??pido! Antes de que vayas corriendo a contarle a todos tus amig@s, te contamos que s??lo algunas personas recibieron la invitaci??n a suscribirse. Pronto tod@s l@s usuari@s de Ual?? podr??n suscribirse a Gaming Pass ????
                        </div>
                </Container>     <FaqsInSections section="gamingpass" title="Preguntas frecuentes sobre los pagos onlines" response={props.response_promos}/> 
                <div  className=" lg:mx-auto mx-5  text-white text-xl	text-center  text-blue-250 underline  -mt-20 lg:pb-40 pb-20"> <Link href="/gaming-pass-tyc">Consult?? los t??rminos y condiciones de Gaming Pass ac?? </Link></div>
         </div>
       
            </Layout>
        </div>
    )

}