import Container from "../components/container";
import Hero from "../components/hero";
import CardItem from "../components/cardItem";
import ImageItemsSection from "../components/imageItemsSection";
import Legal from "../components/legal";
import Layout from "../components/layout";
import Head from 'next/head';
import Image from "next/image";
import PlayVideoButton from '../components/home/PlayVideoButton/PlayVideoButton';
import FaqsInSections from "../components/faqs/faqsInSectionsNew";
import { fetchContent } from '../utils/contentful'
import Card from '../components/card';
import CardInvite from "../components/cardInvite";

export async function getStaticProps() {
    const response = await fetchContent(`
    {
        faqCollection(order: order_ASC limit: 50, where: {
          web: {name: "Argentina"}
        }) {
            items{
                question,
              answer,order,web {
                name
              } sectionCollection {
                items {
                  name
                }
              }
            }
        }
    }
    `);
    console.log(response)

    return {
        props: { response },
        revalidate: 10
    }
}



export default function Cuotas(props) {

    return (
        <>
            <Head>
                <title>Invitá a Ualá: compartí el lado bueno de tu plata</title>
                <meta name="description" content="Por cada amig@ que se sume, ambos ganan $300. Ayudá a tus amig@s a obtener el control de sus finanzas, es gratis y para tod@s" />
            </Head>
            <Layout nav footer>
                <div className="gradient-invitar bg-wave-invitar">
                    <Hero
                        containerStyles="mt-12"
                        section="Invitá a Ualá"
                        title="Compartí el lado bueno de tu plata"
                        subtitle="Por cada amig@ que se sume a Ualá, ambos ganan $300"
                        img={<Image src="/assets/images/invitar-a-uala/hero-mgm-argentina.webp" width={1626} height={1251} />}
                    />
                 </div>
                 <div className="bg-invitar-gradient">
                     <ImageItemsSection
                        title="¡Lo bueno se comparte!"
                        subtitle="Ayudá a tus amigos a obtener el control de sus finanzas."
                        imgHidden={<Image src="/assets/images/invitar-a-uala/imagen-tarjeta.webp" width={1450} height={1116} />}
                        items={[
                            <CardItem text="Es para tod@s"
                                img="/assets/svg/icono-check.svg" 
                                width="35px"
                                textSize="text-xl md:text-2xl font-semibold"
                                />,
                            <CardItem text="Es gratis"
                                img="/assets/svg/icono-check.svg" 
                                width="35px"
                                textSize="text-xl md:text-2xl font-semibold"
                                />]}
                    />
                 </div>
               <Container>
                    <div className="block md:hidden">
                            <Card
                                title="¿Qué tenés que hacer?"
                                text="Invitar a tu amig@"
                            />
                            <Card
                                title="¿Qué tiene que hacer tu amig@?"
                                text=" Una compra de $300 o más con su tarjeta Ualá "
                            />
                            <Card
                                title="¿Qué tiene que hacer tu amig@ si tiene un comercio?"
                                text="Hacer ventas por $5000 o más o más a través de cualquiera de los medios de cobro de Ualá Bis (link de pago, mPOS, o a través de una tienda online)"
                            />
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="col-span-1 pr-4 hidden md:block">
                            <CardInvite 
                                className="bg-white rounded-3xl flex flex-wrap py-4 pl-10 pr-6 shadow-lightblue my-4 grid grid-cols-12"
                                number="1"
                                title="¿Qué tenés que hacer?"
                                text="Invitar a tu amig@"
                                style={{ minHeight:  "300px",
                            maxHeight: "302px"
                            }}
                            />
                            <CardInvite 
                                className="bg-white rounded-3xl flex flex-wrap py-4 pl-10 pr-6 shadow-lightblue my-4 grid grid-cols-12"
                                number="2"
                                title="¿Qué tiene que hacer tu amig@?"
                                text=" Una compra de $300 o más con su tarjeta Ualá "
                                style={{ minHeight:  "300px",
                                maxHeight: "302px"
                                }}
                            />
                        </div>
                        <div className="col-span-1 pl-4 hidden md:block">
                            <CardInvite 
                                number="3"
                                title="¿Qué tiene que hacer tu amig@ si tiene un comercio?"
                                text="Hacer ventas por $5000 o más o más a través de cualquiera de los medios de cobro de Ualá Bis (link de pago, mPOS, o a través de una tienda online)"
                                img="/assets/images/invitar-a-uala/imagen-paso3-mpos.webp"
                                width="270"
                                height="174"
                                className="bg-white rounded-3xl flex flex-wrap pt-4 pl-10 pr-6 shadow-lightblue my-4 grid grid-cols-12"
                                style={{ minHeight:  "600px",
                                maxHeight: "604px"
                                }}
                            />
                        </div>
                    </div>
               </Container>
               <FaqsInSections section="Invitar Ualá AR" title="Preguntas frecuentes sobre los consumos en cuotas" response={props.response}/>
            </Layout>
        </>
    )

}