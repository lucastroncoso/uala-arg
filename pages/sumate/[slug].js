import { fetchContent } from '../../utils/contentful';
import Head from 'next/head';
import Layout from "../../components/layout";
import Container from '../../components/container';
import styles from './busquedas.module.css'
import Script from 'next/script'


const axios = require('axios');


export const getStaticPaths = async () => {
    try {
        var config = {
            method: 'get',
            url: 'https://www.comeet.co/careers-api/2.0/company/54.00B/positions?token=45B15C715C78B6273322D88B6D111A22D11&details=true',
        };
        const res = await axios(config)
        let data = JSON.stringify(res.data)
        data = JSON.parse(data);
        const paths = data.map(item => {
            return {
                params: { slug: item.uid }
            }
        })

        return {
            paths,
            fallback: true
        }
    } catch (error) {
        /* add a descriptive error message first,
        so we know which GraphQL query caused the issue */
        console.error(`There was a problem retrieving entries with the query `);
        console.error(error);
        return {
            redirect: {
                destination: '/',
                statusCode: 307
            }
        }

    }
}

export async function getStaticProps({ params }) {
    // add a try / catch loop for nicer error handling
    // console.log(`Building slug: ${slug}`)
    try {
        var config = {
            method: 'get',
            url: `https://www.comeet.co/careers-api/2.0/company/54.00B/positions/${params.slug}?token=45B15C715C78B6273322D88B6D111A22D11&details=true`,
        };
        const res = await axios(config)

        let data = JSON.stringify(res.data)
        data = JSON.parse(data);


        return {
            props: {
                data,

            },
            revalidate: 10
        };
    } catch (error) {
        /* add a descriptive error message first,
        so we know which GraphQL query caused the issue */
        console.error(`There was a problem retrieving entries with the query `);
        console.error(error);
        return {
            redirect: {
                destination: '/',
                statusCode: 307
            }
        }

    }
}

export default function Details({ data }) {

    return (
        <>
            <Head>
                <title>Ualá</title>

            </Head>
            <Layout nav footer banner>
                <script dangerouslySetInnerHTML={{
                    __html:

                        ` window.comeetInit = function () {
                            COMEET.init({
                                "token": "45B15C715C78B6273322D88B6D111A22D11",
                                "company-uid": "54.00B",
                                "company-name": "uala",
                                "color": "278fe6",
                                "font-size": "13px"
                            });
                        };
            `}}>
                </script>
                {/* <script dangerouslySetInnerHTML={{
                    __html: `(function(){var a=function(){window.COMEET.set("candidate-source-storage", !0)};window.COMEET?a():window.comeetUpdate=a})();`
                }}></script> */}
                <Script strategy="afterInteractive" src="https://www.comeet.co/careers-api/api.js"></Script>

                <Container className="mx-auto lg:w-10/12 mb-72 mt-40">

                    {data &&
                        <div>
                            <div className="title-1">{data.name}</div>
                            <div className="title-3 mt-8">Descripción</div>
                            <div className="text carrerUniqueDescription" id={styles.carrerUniqueDescription} dangerouslySetInnerHTML={{ __html: data.details[0].value }}></div>
                            <div className="title-3 mt-8">Requerimientos</div>
                            <div className="text carrerUniqueDescription" id={styles.carrerUniqueDescription} dangerouslySetInnerHTML={{ __html: data.details[1].value }}></div>
                            <script type="comeet-applyform" data-position-uid={data.uid}></script>
                            {/* <script type="comeet-social"></script> */}
                        </div>}




                </Container>


            </Layout>
        </>
    )

}