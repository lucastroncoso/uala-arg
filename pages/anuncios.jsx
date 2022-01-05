import { useState } from "react";
import { fetchContent } from '../utils/contentful';
import Layout from "../components/layout";
import Container from "../components/container";
import Head from 'next/head';
import Link from 'next/link';

export async function getStaticProps() {
    const response = await fetchContent(`
    {
        argentinaPrensaCollection(order: [sys_firstPublishedAt_DESC]) {
          items {
            cardDate
            cardTitle
            slug
            sys {
              id
              publishedAt
            }
          }
        }
      }
    `);

    return {
        props: { response },
        revalidate: 10
    }
}

export default function Anuncios(props) {
    const [ news, setNews ] = useState( props.response.argentinaPrensaCollection.items ); // Lista completa de notas de prensa
    const [ showableNews, setShowableNews ] = useState(9);

    const loadMoreNews = () => {
        setShowableNews( current => current + 3)
    };

    return (
    <>
        <Head>
                <title>Ualá</title>
        </Head>
        <Layout nav footer>
            <Container>
                  <div className="cursor-pointer flex flex-row items-center mb-12 mt-32">
                      <Link href="/prensa">
                        <a className="link outline-none">
                          <i className="fas fa-chevron-left mr-4"></i>Regresar a prensa
                        </a>
                      </Link>
                    </div>
            </Container>

            <Container className="mb-4 w-full">
                <div className="w-full">
                    <h1 className="title-2 md:w-5/6 my-4">
                        <div className="text-gray-250">Anuncios</div>
                    </h1>
                </div>
            </Container>

            <Container className="bg-blue-wave-prensa w-full mb-20">
                <div className="grid lg:grid-cols-3 gap-5">
                    {
                        news !== undefined &&
                        news.slice(0,showableNews).map(notice => (
                                    <div key={notice.slug} className="shadow-md rounded-2xl p-6 border border-gray-100 flex flex-col bg-white">
                                        <div className="text-gray-500 font-medium mb-4">{notice.cardDate}</div>
                                        <div className="text-gray-700 text-xl font-medium mb-4 flex-grow">{notice.cardTitle}</div>
                                        <Link href={`/prensa/${notice.slug}`}>
                                            <a className="link">Leer más</a>
                                        </Link>
                                    </div>
                                ))

                    }
                </div>
                
            </Container>

            {
                ( !!news && showableNews < news.length ) &&
            
                <Container>
                    <div className="mb-20">
                        <div 
                            className="link text-2xl text-center cursor-pointer"
                            onClick={loadMoreNews}
                        >Cargar más anuncios</div>
                    </div>
                </Container>
            }
        </Layout>
    </>
    )

}