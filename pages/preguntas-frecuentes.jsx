import { fetchContent } from '../utils/contentful';
import Layout from "../components/layout";
import FaqsCategories from "../components/faqs/faqsCategories";
import Container from "../components/container";
import Head from 'next/head';

export async function getStaticProps() {
    const response = await fetchContent(`
    {
        argentinaFaqCategoryCollection (order: [faqCategoryId_ASC]) {
            items{
                faqCategoryId,
                name,
                description
            }
        }

        argentinaFaqCollection(order: [id_ASC], limit: 500) {
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
                <title>Ualá</title>
            </Head>
            <Layout nav footer>

                <Container className="mt-32">
                    <div className="text-xl w-5/6 ">Preguntas frecuentes</div>
                    <div className="mb-16 title-1 mt-4">
                        ¿Tenés <br /> alguna duda?
                    </div>
                </Container>
                <FaqsCategories categories={categories} faqs={faqs} />

            </Layout>
        </>
    )

}