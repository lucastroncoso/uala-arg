import Head from 'next/head';
import { useEffect, useState } from "react";
import { fetchContent } from '../../utils/contentful';
import Layout from "../../components/layout";

export async function getStaticProps() {
    const response = await fetchContent(`
    {
        argentinaPromotionCollection (limit: 50) {
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
          },
        
        banner(id:"7DHXlgGa8Bywucy53A3Ai"){
            bannerDesktop{
                url
            }
            bannerMobile1{
                url
            }
        }
    }
      
    `);

    return {
        props: { response },
        revalidate: 10
    }
}

function Promotion(props) {

    return (
        <div className="grid">
            <div className="flex flex-col p-4 m-4 border border-gray-100 shadow-lg rounded-3xl">
                <div className="flex justify-center">
                    <div>
                        <img className="max-h-16" src={props.logo.url} alt="" />
                    </div>
                </div>
                <div className="flex items-center flex-grow mt-4 font-medium text-center">
                    <div className="w-full">{props.title}</div>
                </div>
                <div className="mt-4 text-sm text-center">{props.date}</div>
                <div className="mt-4 text-center"><a href={"/promociones/" + props.slug} className="link">Ver mas</a></div>
            </div>
        </div>
    )
}

function FeaturedPromotion(props) {

    return (
        <div className="grid">
            <div className="flex flex-col m-4 border border-gray-100 shadow-lg rounded-3xl overflow-hidden wrapper ">

                <div className="relative">
                    <img src={props.image.url}  alt={props.name}  />

                    <div className="flex absolute left-4 -bottom-4">
                        <div className="border border-gray-100 shadow-lg rounded-xl bg-white h-24 flex items-center p-1">
                            <img className="max-h-16" src={props.logo.url} alt="" />
                        </div>
                    </div>
                </div>
                
                <div class="p-3 space-y-3 m-4">
                    
                    <div className="flex flex-grow mt-4 font-medium ">
                        <div className="w-full">{props.title}</div>
                    </div>
                    <div className="flex justify-between flex-row flex-grow mt-4 font-medium text-center">
                        <div className="mt-4 text-sm text-center">{props.date}</div>
                        <div className="mt-4 text-center"><a href={"/promociones/" + props.slug} className="link">Ver mas</a></div>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default function Promociones(props) {
    const [ allPromotions, setAllPromotions ] = useState( props.response.argentinaPromotionCollection.items ); // Lista completa de promociones
    const [ featuredPromotions, setFeaturedPromotions ] = useState(); // Lista de promos destacadas
    const [ promotions, setPromotions ] = useState(); // Lista de promociones restantes

    useEffect( () => {
        const featured = allPromotions.filter( promo => promo.featured === true );
        setFeaturedPromotions( featured.slice( 0, 3 ) );
    }, [ allPromotions ] );

    useEffect( () => {
        if ( !!featuredPromotions ) {
            console.log(featuredPromotions.length)
            featuredPromotions.forEach(element => {
                console.log(element.slug)
            });
            const otherPromotions = allPromotions.filter( promo => {
                if ( featuredPromotions.length === 1 ) {
                    return promo.slug !== featuredPromotions[0].slug;
                } 
                if ( featuredPromotions.length === 2 ) {
                    return ((promo.slug !== featuredPromotions[0].slug) && (promo.slug !== featuredPromotions[1].slug));
                } 
            } );
            setPromotions( otherPromotions );
        }
        
    }, [ featuredPromotions ] );

    return (
        <>
            <Head>
                <title>Ualá</title>
            </Head>
            {/* <Layout nav footer> */}
                


                
            <div className="flex justify-center md:mt-20 mt-12">
                    <div className="hidden lg:block"><img src={props.response.banner.bannerDesktop.url} /></div>
                    <div className="lg:hidden"><img src={props.response.banner.bannerMobile1.url} /></div>
                </div>

                <div className="mx-auto lg:w-10/12 mb-72">
                    <div className="my-16 text-3xl font-medium text-center text-blue-600">No te pierdas estas súper promociones</div>
                    
                    <div className="grid my-16 lg:grid-cols-2">
                        {
                            featuredPromotions && featuredPromotions.map(promotion => <FeaturedPromotion key={ promotion.slug } {...promotion} />)
                        }
                    </div>
                    
                    <div className="grid my-16 lg:grid-cols-3">
                        {
                            !promotions ? <div className="text-center col-span-full">Cargando...</div> : promotions.map(promotion => <Promotion key={ promotion.slug } {...promotion} />)
                        }
                    </div>
                </div>


            {/* </Layout> */}
        </>
    )

}