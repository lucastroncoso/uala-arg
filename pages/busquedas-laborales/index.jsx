import Head from 'next/head';
import { useEffect, useState } from "react";
import { fetchContent } from '../../utils/contentful';
import Layout from "../../components/layout";
import Container from '../../components/container';
import Image from "next/image";
const axios = require('axios');



export async function getStaticProps() {
    // add a try / catch loop for nicer error handling
    try {
        const res = await axios(
            'https://comeet.co/careers-api/2.0/company/54.00B/positions?token=45B15C715C78B6273322D88B6D111A22D11&details=true',
            {
                method: 'GET',
                headers: {
                    'content-type': 'application/json'

                },
                // throw our query (a string) into the body directly

            },
        );
        const { data } = await res.json();
        return { props: data };
    } catch (error) {
        // add a descriptive error message first,
        // so we know which GraphQL query caused the issue
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
//         .then(data => {

//     var parseData = []
//     data.forEach(element => {

//         // if (element.location.country != "MX") {

//         if (!parseData[element.department]) {
//             parseData[element.department] = [];
//         }

//         parseData[element.department]["carrers"] ? parseData[element.department]["carrers"].push(element) : (parseData[element.department]["carrers"] = [element])
//         parseData[element.department]["categoryTitle"] = element.department;

//         // }

//     });
// });

// return {
//     props: { data }
// }
// }

export default function Promociones(props) {




    return (
        <>
            <Head>
                <title>Ualá</title>
            </Head>
            <Layout nav footer banner>


            </Layout>
        </>
    )

}