import Head from 'next/head';
import { useEffect, useState } from "react";
import { fetchContent } from '../../utils/contentful';
import Layout from "../../components/layout";
import Container from '../../components/container';
import Image from "next/image";
import FeaturedPromotionCard from '../../components/promotions/featuredPromotionCard';
import PromotionCard from '../../components/promotions/promotionCard';
import PromotionFilters from '../../components/promotions/promotionFilters';
import Router, { useRouter } from 'next/router';
import Link from 'next/link';
import PromotionBannerSlider from '../../components/promotions/promotionBannerSlider';

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
        }
    `);

    const response_others = await fetchContent(`
    {
        promotionBannerArgentinaCollection {
          items {
            description
            url
            desktopImage {
                url
                width
                height
            }
            mobileImage {
                url
                width
                height
            }
          }
        },
        argentinaPromotionCategoryCollection (order: [id_ASC]) {
          items {
            slug
            name
          }
        },
        argentinaPromotionLocationCollection (order: [name_ASC]) {
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

const isPromotionNew = date => {
    const today = new Date();
    const promotionCreationDate = new Date(date);
    const differenceTime = today.getTime() - promotionCreationDate.getTime();
    const differenceDays = differenceTime / (1000 * 3600 * 24);
    if (differenceDays >= 0 && differenceDays <= 15) {
        return true;
    } else {
        return false;
    }
}

const modifyCategoryURL = slug => {
    Router.push({
        query: {
            category: slug
        }
    })
};

export default function Promociones(props) {
    const router = useRouter();

    const [allPromotions, setAllPromotions] = useState(props.response_promos.argentinaPromotionCollection.items); // Lista completa de promociones
    const [featuredPromotions, setFeaturedPromotions] = useState(); // Lista de promos destacadas completa
    const [promotions, setPromotions] = useState(); // Lista de promociones restantes completa
    const [displayableFeaturedPromotions, setDisplayableFeaturedPromotions] = useState([]); // Lista de promos destacadas visibles ( filtradas )
    const [displayablePromotions, setDisplayablePromotions] = useState([]); // Lista de promociones restantes visibles ( filtradas )
    const [categories, setCategories] = useState(props.response_others.argentinaPromotionCategoryCollection.items); // Lista de categorias - filtro
    const [locations, setLocations] = useState(props.response_others.argentinaPromotionLocationCollection.items); // Lista de ubicaciones - filtro
    const [selectedCategory, setSelectedCategory] = useState({ slug: '' }); // Categoría seleccionada
    const [selectedLocation, setSelectedLocation] = useState({ slug: '' }); // Ubicación seleccionada
    const [showNewest, setShowNewest] = useState(false); // Mostrar promociones nuevas
    const [banners, setBanners] = useState(props.response_others.promotionBannerArgentinaCollection.items); // Banners

    useEffect(() => {
        // Verificar al cargar la pagina si hay una categoria seleccionada desde la url
        if (router.isReady && !!router.query.category) {
            const found = categories.find(cat => cat.slug === router.query.category);
            if (!!found) {
                setSelectedCategory({ slug: router.query.category });
            }
        }
    }, [router.isReady]);

    useEffect(() => {
        // Lista de promociones destacadas - las primeras 2 que tengan la propiedad featured
        const featured = allPromotions.filter(promo => promo.featured === true);
        if (featured.length > 0) {
            setFeaturedPromotions(featured.slice(0, 2));
            setDisplayableFeaturedPromotions(featured.slice(0, 2));
        }

        // Lista de categorías para el filtro - solo aquellas que tengan alguna promoción activa
        let allCategories = props.response_others.argentinaPromotionCategoryCollection.items;
        let selectableCategories = [];
        let categoriesInUse = [];
        allPromotions.forEach(promotion => {
            promotion.categoriesCollection.items.forEach(element => {
                categoriesInUse.push(element.slug);
            });
        });
        const selectableCategoriesSlugs = [...new Set(categoriesInUse)];

        allCategories.forEach(category => {
            if (selectableCategoriesSlugs.find(element => element === category.slug) !== undefined) {
                selectableCategories.push(category);
            }
        });
        selectableCategories.unshift({ slug: 'any-category', name: 'Todas las categorías' });
        setCategories(selectableCategories);

        // Lista de ubicaciones para el filtro - solo aquellas que tengan alguna promoción activa
        let allLocations = props.response_others.argentinaPromotionLocationCollection.items;
        let selectableLocations = [];
        let locationsInUse = [];
        allPromotions.forEach(promotion => {
            promotion.locationsCollection.items.forEach(element => {
                locationsInUse.push(element.slug);
            });
        });
        const selectableLocationsSlugs = [...new Set(locationsInUse)];

        allLocations.forEach(location => {
            if (selectableLocationsSlugs.find(element => element === location.slug) !== undefined) {
                selectableLocations.push(location);
            }
        });
        selectableLocations.unshift({ slug: 'any-place', name: 'Todas las ubicaciones' });
        setLocations(selectableLocations);

    }, [allPromotions]);

    useEffect(() => {
        // Listado de todas las promociones que no están destacadas
        if (!!featuredPromotions) {
            const otherPromotions = allPromotions.filter(promo => {
                if (featuredPromotions.length === 1) {
                    return promo.slug !== featuredPromotions[0].slug;
                }
                if (featuredPromotions.length === 2) {
                    return ((promo.slug !== featuredPromotions[0].slug) && (promo.slug !== featuredPromotions[1].slug));
                }
            });
            setPromotions(otherPromotions);
            setDisplayablePromotions(otherPromotions);
        } else {
            setPromotions(allPromotions);
            setDisplayablePromotions(allPromotions);
        }
    }, [featuredPromotions, allPromotions]);

    useEffect(() => {
        // Modificar las listas de promociones visibles cuando se selecciona un filtro
        if (!!promotions && !!featuredPromotions) {

            let filteredFeaturedPromotions = featuredPromotions;
            let filteredPromotions = promotions;

            // Cuando se selecciona una categoría
            if (selectedCategory.slug !== '') {
                if (selectedCategory.slug !== 'any-category') {
                    modifyCategoryURL(selectedCategory.slug);
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
            }

            // Cuando se selecciona una ubicacion
            if (selectedLocation.slug !== '') {
                if (selectedLocation.slug !== 'any-place') {
                    filteredFeaturedPromotions = filteredFeaturedPromotions.filter(promotion => {
                        if (promotion.locationsCollection.items.find(element => (element.slug === selectedLocation.slug || element.slug === 'todo-el-pais')) !== undefined) {
                            return true;
                        } else {
                            return false;
                        }
                    });
                    filteredPromotions = filteredPromotions.filter(promotion => {
                        if (promotion.locationsCollection.items.find(element => (element.slug === selectedLocation.slug || element.slug === 'todo-el-pais')) !== undefined) {
                            return true;
                        } else {
                            return false;
                        }
                    });
                }
            }

            // Al seleccionar la opción de promociones recientes 
            if (showNewest) {
                filteredFeaturedPromotions = filteredFeaturedPromotions.filter(promotion => {
                    return (isPromotionNew(promotion.sys.publishedAt));
                });

                filteredPromotions = filteredPromotions.filter(promotion => {
                    return (isPromotionNew(promotion.sys.publishedAt));
                });
            }

            setDisplayableFeaturedPromotions(filteredFeaturedPromotions);
            setDisplayablePromotions(filteredPromotions);
        }
    }, [selectedCategory, selectedLocation, showNewest, featuredPromotions, promotions]);

    return (
        <>
            <Head>
                <link rel="alternate" hreflang="es-ar" href="https://www.uala.com.ar/promociones" />
                <link rel="alternate" hreflang="es-mx" href="https://www.uala-abc.com.mx/promociones" />
                <link rel="alternate" hreflang="es-co" href="https://www.uala.com.co/promociones" />
                <link rel="alternate" hreflang="x-default" href="https://www.uala.com.ar/promociones" />
                <title>Ualá - Promociones: beneficios inigualables para vos</title>
                <meta name="description" content="¡Sumate vos también! Con Ualá, podés acceder a increíbles promociones y beneficios todas las semanas." />
            </Head>
            <Layout nav footer banner>

                <div className="mt-16 md:mt-22 md:pt-2 lg:pt-4 w-full gap-x-4 overflow-hidden">
                    <PromotionBannerSlider banners={banners} />

                </div>

                <Container className="mx-auto lg:w-10/12 mb-32 lg:mb-72">

                    <div className="">
                        <div className="my-16 text-3xl font-medium text-center text-blue-600">No te pierdas estas súper promociones</div>

                        <PromotionFilters
                            categories={categories}
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                            locations={locations}
                            selectedLocation={selectedLocation}
                            setSelectedLocation={setSelectedLocation}
                            showNewest={showNewest}
                            setShowNewest={setShowNewest}
                        />

                        {
                            displayableFeaturedPromotions.length > 0 &&
                            <div className="grid my-16 lg:grid-cols-2">
                                {
                                    displayableFeaturedPromotions.map(promotion => <FeaturedPromotionCard key={promotion.slug} {...promotion} />)
                                }
                            </div>
                        }


                        <div className="grid my-16 lg:grid-cols-3">
                            {
                                displayablePromotions.length == 0
                                    ? <div className="text-center col-span-full">Parece que no se encontraron promociones...</div>
                                    : displayablePromotions.map(promotion => <PromotionCard key={promotion.slug} {...promotion} />)
                            }
                        </div>

                        <div className="w-full p-4">
                            <Link href="/seguros">
                                <a>
                                    <div className="hidden md:block rounded-2xl overflow-hidden">
                                        <Image
                                            layout="responsive"
                                            src="/assets/images/promociones/Banners Seguros_Desktop.jpg"
                                            width={2880}
                                            height={720}
                                            alt="Seguros"
                                        />
                                    </div>

                                    <div className="block md:hidden rounded-2xl overflow-hidden">
                                        <Image
                                            layout="responsive"
                                            src="/assets/images/promociones/Banners-Seguros_Mobile.jpg"
                                            width={700}
                                            height={800}
                                            alt="Seguros"
                                        />
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                </Container>


            </Layout>
        </>
    )

}