import { fetchContent } from '../utils/contentful';
import Layout from "../components/layout";
import FaqsCategories from "../components/faqs/faqsCategories";
import Container from "../components/container";
import Head from 'next/head';

export async function getStaticProps() {
    const response = await fetchContent(`
   {
        argentinaFaqCategoryCollection (where: {faqCategoryId_not: 68},order: [faqCategoryId_ASC]) {
            items{
                faqCategoryId,
                name,
                description
            }
        }

        argentinaFaqCollection(where: {categoryId: {faqCategoryId_not:68} },order: [id_ASC], limit: 500) {
            items{
                categoryId {
                    faqCategoryId
                },
                id,
                question,
                answer
            }
        }
    }
    `);
    return {
        props: { response },
        revalidate: 10
    }
}

export default function PreguntasFrecuentes({ response }) {

    let categories = response.argentinaFaqCategoryCollection.items
    let faqs = response.argentinaFaqCollection.items

    return (
        <>
            <Head>
                <link rel="alternate" hreflang="es-ar" href="https://www.uala.com.ar/preguntas-frecuentes" />
                <link rel="alternate" hreflang="es-mx" href="https://www.uala-abc.com.mx/faqs" />
                <link rel="alternate" hreflang="es-co" href="https://www.uala.com.co/faqs" />
                <link rel="alternate" hreflang="x-default" href="https://www.uala.com.ar/preguntas-frecuentes" />
                <title>Ualá - Preguntas frecuentes y respuestas</title>
                <meta name="description" content="¿Tenés alguna duda? Sobre Ualá. Usuario y cuenta. La tarjeta. Cargar y retirar plata. Créditos. Inversiones. Pagos y Recargas. Transferencias." />
            </Head>
            <Layout nav footer>

                <Container className="mt-32">
                    <div className="text-xl w-5/6 ">Preguntas frecuentes</div>
                    <div className="mb-16 text-blue-250 text-3xl  md:text-5xl font-semibold leading-snug mt-4">
                        ¿Tenés alguna duda?
                    </div>
                </Container>
                <FaqsCategories categories={categories} faqs={faqs} />

            </Layout>
        </>
    )

}