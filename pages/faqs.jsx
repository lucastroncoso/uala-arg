
import Layout from "../components/layout";
import { fetchContent } from '../utils/contentful';
import FAQs from "../components/faqsCategories";

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

        argentinaFaqCollection(order: [id_ASC], limit: 100) {
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

export default function Faqs({ response }) {





    let categories = response.argentinaFaqCategoryCollection.items
    let faqs = response.argentinaFaqCollection.items

    return (
        <>
            <Layout nav footer
                head={
                    <>
                        <title>Ualá +</title>
                        <link rel="icon" href="public/favicon.ico" />
                        <meta name="description" content="Programa de beneficios de Ualá" />
                        <link rel="icon" href="/favicon.ico" />
                    </>
                }
            >


                <div className="grid grid-cols-12 mt-12">
                    <div className="col-span-10 col-start-2 mt-20">
                        <p className="text-xl w-5/6 ">
                            <div className="">Preguntas frecuentas</div>
                        </p>
                        <div className="mb-16 text-3xl font-medium title-1 mt-12">¿Tenés alguna duda?</div>
                        <FAQs categories={categories} faqs={faqs} />
                    </div>
                </div>

            </Layout>
        </>
    )

}