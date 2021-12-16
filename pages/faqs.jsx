import { fetchContent } from '../utils/contentful';
import Layout from "../components/layout";
import Faqss from "../components/faqsCategories";

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

            >


                <div className="grid grid-cols-12 mt-14">
                    <div className="col-span-10 col-start-2 mt-20">
                        <p className="text-xl w-5/6 ">
                            <div className="">Preguntas frecuentas</div>
                        </p>
                        <div className="mb-16 title-1 mt-4">¿Tenés <br /> alguna duda?</div>
                        <Faqss categories={categories} faqs={faqs} />
                    </div>
                </div>

            </Layout>
        </>
    )

}