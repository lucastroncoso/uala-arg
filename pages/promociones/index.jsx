import Head from 'next/head';
import { useEffect, useState } from "react";
import { fetchContent } from '../../utils/contentful';
import Layout from "../../components/layout";
import Container from '../../components/container';
import FeaturedPromotionCard from '../../components/promotions/featuredPromotionCard';
import PromotionCard from '../../components/promotions/promotionCard';
import PromotionFilters from '../../components/promotions/promotionFilters';

export async function getStaticProps() {
    const response_promos = await fetchContent(`
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
          }
        }
    `);

    const response_others = await fetchContent(`
    {
        banner(id: "7DHXlgGa8Bywucy53A3Ai") {
          bannerDesktop {
            url
          }
          bannerMobile1 {
            url
          }
        },
        promotionCategoryCollection {
          items {
            slug
            name
          }
        },
        promotionLocationCollection {
          items {
            slug
            name
          }
        }
      }  
    `);

    return {
        props: { response_promos, response_others },
        revalidate: 10
    }
}

export default function Promociones(props) {
    const [ allPromotions, setAllPromotions ] = useState( props.response_promos.argentinaPromotionCollection.items ); // Lista completa de promociones
    const [ featuredPromotions, setFeaturedPromotions ] = useState(); // Lista de promos destacadas completa
    const [ promotions, setPromotions ] = useState(); // Lista de promociones restantes completa
    const [ displayableFeaturedPromotions, setDisplayableFeaturedPromotions ] = useState([]); // Lista de promos destacadas visibles ( filtradas )
    const [ displayablePromotions, setDisplayablePromotions ] = useState([]); // Lista de promociones restantes visibles ( filtradas )
    const [ categories, setCategories ] = useState( props.response_others.promotionCategoryCollection.items ); // Lista de categorias - filtro
    const [ locations, setLocations ] = useState( props.response_others.promotionLocationCollection.items ); // Lista de ubicaciones - filtro
    const [ selectedCategory, setSelectedCategory ] = useState({slug: ''}); // Categoría seleccionada
    const [ selectedLocation, setSelectedLocation ] = useState({slug: ''}); // Ubicación seleccionada

    useEffect( () => {
        // Lista de promociones destacadas - las primeras 2 que tengan la propiedad featured
        const featured = allPromotions.filter( promo => promo.featured === true );
        setFeaturedPromotions( featured.slice( 0, 2 ) );
        setDisplayableFeaturedPromotions( featured.slice( 0, 2 ) );

        // Lista de categorías para el filtro - solo aquellas que tengan alguna promoción activa
        let allCategories = props.response_others.promotionCategoryCollection.items;
        let selectableCategories = [];
        let categoriesInUse = [];
        allPromotions.forEach(promotion => {
            promotion.categoriesCollection.items.forEach(element => {
                categoriesInUse.push(element.slug);
            });
        });
        const selectableCategoriesSlugs = [ ...new Set(categoriesInUse)];
        
        allCategories.forEach(category => {
            if ( selectableCategoriesSlugs.find(element => element === category.slug) !== undefined ) {
                selectableCategories.push( category );
            }
        });
        setCategories(selectableCategories);

        // Lista de ubicaciones para el filtro - solo aquellas que tengan alguna promoción activa
        let allLocations = props.response_others.promotionLocationCollection.items;
        let selectableLocations = [];
        let locationsInUse = [];
        allPromotions.forEach(promotion => {
            promotion.locationsCollection.items.forEach(element => {
                locationsInUse.push(element.slug);
            });
        });
        const selectableLocationsSlugs = [ ...new Set(locationsInUse)];

        allLocations.forEach(location => {
            if ( selectableLocationsSlugs.find(element => element === location.slug) !== undefined ) {
                selectableLocations.push( location );
            }
        });
        setLocations(selectableLocations);

    }, [ allPromotions ] );

    useEffect( () => {
        // Listado de todas las promociones que no están destacadas
        if ( !!featuredPromotions ) {
            const otherPromotions = allPromotions.filter( promo => {
                if ( featuredPromotions.length === 1 ) {
                    return promo.slug !== featuredPromotions[0].slug;
                } 
                if ( featuredPromotions.length === 2 ) {
                    return ((promo.slug !== featuredPromotions[0].slug) && (promo.slug !== featuredPromotions[1].slug));
                } 
            } );
            setPromotions( otherPromotions );
            setDisplayablePromotions( otherPromotions );
        }
        
    }, [ featuredPromotions ] );

    useEffect( () => {
        // Modificar las listas de promociones visibles cuando se selecciona un filtro
        if ( selectedCategory.slug !== '' || selectedLocation.slug !== '' ) {

            let filteredFeaturedPromotions = featuredPromotions;
            let filteredPromotions = promotions;

            // Cuando se selecciona una categoría
            if ( selectedCategory.slug !== '' ) {
                filteredFeaturedPromotions = filteredFeaturedPromotions.filter(promotion => {
                    if (promotion.categoriesCollection.items.find(element => element.slug === selectedCategory.slug) !== undefined) {
                        return true;
                    } else {
                        return false;
                    }
                });
                filteredPromotions = filteredPromotions.filter(promotion => {
                    if (promotion.categoriesCollection.items.find(element => element.slug === selectedCategory.slug) !== undefined) {
                        return true;
                    } else {
                        return false;
                    }
                });
            }

            // Cuando se selecciona una ubicacion
            if ( selectedLocation.slug !== '' ) {
                filteredFeaturedPromotions = filteredFeaturedPromotions.filter(promotion => {
                    if (promotion.locationsCollection.items.find(element => ( element.slug === selectedLocation.slug || element.slug === 'todo-el-pais' )) !== undefined) {
                        return true;
                    } else {
                        return false;
                    }
                });
                filteredPromotions = filteredPromotions.filter(promotion => {
                    if (promotion.locationsCollection.items.find(element => ( element.slug === selectedLocation.slug || element.slug === 'todo-el-pais' )) !== undefined) {
                        return true;
                    } else {
                        return false;
                    }
                });
            }

            
            setDisplayableFeaturedPromotions( filteredFeaturedPromotions );
            setDisplayablePromotions( filteredPromotions );
        }
    }, [ selectedCategory, selectedLocation, featuredPromotions, promotions ] );

    return (
        <>
            <Head>
                <title>Ualá</title>
            </Head>
            <Layout nav footer>
                
                <div className="flex justify-center md:mt-20 mt-12">
                    <div className="hidden lg:block"><img src={props.response_others.banner.bannerDesktop.url} /></div>
                    <div className="lg:hidden"><img src={props.response_others.banner.bannerMobile1.url} /></div>
                </div>

                <Container className="mx-auto lg:w-10/12 mb-72">
            
                <div className="">
                    <div className="my-16 text-3xl font-medium text-center text-blue-600">No te pierdas estas súper promociones</div>
                    
                    <PromotionFilters
                        categories={ categories }
                        selectedCategory={ selectedCategory }
                        setSelectedCategory={ setSelectedCategory }
                        locations={ locations }
                        selectedLocation={ selectedLocation }
                        setSelectedLocation={ setSelectedLocation }
                    />

                    {
                        displayableFeaturedPromotions.length > 0 && 
                            <div className="grid my-16 lg:grid-cols-2">
                                {
                                    displayableFeaturedPromotions.map(promotion => <FeaturedPromotionCard key={ promotion.slug } {...promotion} />)
                                }
                            </div>
                    }
                    
                    
                    <div className="grid my-16 lg:grid-cols-3">
                        {
                            displayablePromotions.length == 0 
                            ? <div className="text-center col-span-full">Parece que no se encontraron promociones...</div> 
                            : displayablePromotions.map(promotion => <PromotionCard key={ promotion.slug } {...promotion} />) 
                        }
                    </div>
                </div>
                </Container>


            </Layout>
        </>
    )

}