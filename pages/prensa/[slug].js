import { fetchContent } from '../../utils/contentful';
import Head from 'next/head';
import Layout from "../../components/layout";
import Container from '../../components/container';
import ContactoInstitucional from "../../components/contactoInstitucional";
import Image from "next/image";
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

export const getStaticPaths = async () => {
  const response = await fetchContent(`
    {
      argentinaPrensaCollection(limit: 100) {
          items {
            slug
          }
        }
      }`)

  const paths = response.argentinaPrensaCollection.items.map(item => {
    return {
      params: { slug: item.slug }
    }
  })

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps = async ({ params }) => {
  const response = await fetchContent(`
  {
    argentinaPrensaCollection(where: {slug: "${ params.slug }"}, limit: 1) {
      items {
        title, 
        subtitle, 
        dateAndLocation,
        body,
        image {
          url,
          width,
          height
        }
      }
    }
  }
  
`)

  return {
    props: { news: response.argentinaPrensaCollection.items[0] },
    revalidate: 10
  }
}

export default function Details({ news }) {
  if (!news) return <div>Loading</div>
  return (
    <>
            <Head>
                <title>Ualá</title>
            </Head>
            <Layout nav footer>
              <Container>
                  <div className="cursor-pointer flex flex-row items-center mb-12 lg:mb-20 mt-32">
                      <Link href="/prensa">
                        <a className="link outline-none">
                          <i className="fas fa-chevron-left mr-4"></i>Regresar a prensa
                        </a>
                      </Link>
                    </div>
              </Container>

              <Container>
                  <div className="">
                      <div className="flex flex-col">
                          <div className="w-full lg:w-2/3 pr-4">
                              <h2 className="title-2">{ news.title }</h2>

                              <p className="text">
                              { news.subtitle } 
                              </p>
                          </div>
                          <div className="w-full pr-4">
                              <p className="text mb-8 mt-12">
                              { news.dateAndLocation }
                              </p>
                              <p className="text">
                                <ReactMarkdown>{ news.body }</ReactMarkdown>
                              </p>
                          </div>
                          {
                            news.image.url &&
                          
                              <div className="w-full flex flex-col items-end justify-center">
                                  <div className="w-full h-auto rounded-2xl overflow-hidden my-8">
                                  <Image src={ news.image.url } width={news.image.width} height={news.image.height} layout="responsive" />
                                  </div>
                              </div>
                          }
                      </div>
                      
                  </div>    

              </Container>
              <ContactoInstitucional />
          </Layout>
        </>
  )
}