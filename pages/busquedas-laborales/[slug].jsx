// import { fetchContent } from '../../utils/contentful';
// import Head from 'next/head';
// import Layout from "../../components/layout";
// import Container from '../../components/container';
// import CardRoundedShadow from "../../components/cardRoundedShadow";
// import Image from "next/image";
// import OutlinedButton from '../../components/outlinedButton';
// import Link from 'next/link';
// const axios = require('axios');


// export const getStaticPaths = async () => {
//     try {


//         var config = {
//             method: 'get',
//             url: 'https://www.comeet.co/careers-api/2.0/company/54.00B/positions?token=45B15C715C78B6273322D88B6D111A22D11&details=true',


//         };
//         const res = await axios(config)

//         let data = JSON.stringify(res.data)
//         data = JSON.parse(data);


//         const paths = data.map(item => {
//             return {
//                 params: { slug: item.uid }
//             }
//         })

//         return {
//             paths,
//             fallback: true
//         }
//     } catch (error) {
//         // add a descriptive error message first,
//         // so we know which GraphQL query caused the issue
//         console.error(`There was a problem retrieving entries with the query `);
//         console.error(error);
//         return {
//             redirect: {
//                 destination: '/',
//                 statusCode: 307
//             }
//         }

//     }
// }

// export async function getStaticProps({ params }) {
//     // add a try / catch loop for nicer error handling
//     try {


//         var config = {
//             method: 'get',
//             url: `https://www.comeet.co/careers-api/2.0/company/54.00B/positions/${params.slug}?token=45B15C715C78B6273322D88B6D111A22D11&details=true`,


//         };
//         const res = await axios(config)

//         let data = JSON.stringify(res.data)
//         data = JSON.parse(data);


//         return {
//             props: {
//                 data
//             }
//         };
//     } catch (error) {
//         // add a descriptive error message first,
//         // so we know which GraphQL query caused the issue
//         console.error(`There was a problem retrieving entries with the query `);
//         console.error(error);
//         return {
//             redirect: {
//                 destination: '/',
//                 statusCode: 307
//             }
//         }

//     }
// }

// export default function Details({ data }) {
//     console.log(data)
//     return (
//         <>
//             <Head>
//                 <title>Ualá</title>
//                 <script dangerouslySetInnerHTML={{
//                     __html:

//                         `window.comeetInit = function() {
//                         COMEET.init({
//                             "token": "45B15C715C78B6273322D88B6D111A22D11",
//                             "company-uid": "54.00B",
//                             "company-name": "uala",
//                             "color": "278fe6",
//                             "font-size": "13px"
//                             "candidate-source-storage": false,
//                             "color":       "278fe6", //optional
//                             //add more parameters here
//                         });
//                     };

//                     (function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) {return; } js = d.createElement(s); js.id = id;
//                     js.src = "//www.comeet.co/careers-api/api.js"; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'comeet-jsapi'));`}}>
//                 </script>
//                 <script dangerouslySetInnerHTML={{
//                     __html: `(function(){var a=function(){window.COMEET.set("candidate-source-storage", !0)};window.COMEET?a():window.comeetUpdate=a})();`
//                 }}></script>
//             </Head>
//             <Layout nav footer banner>

//                 <Container className="mx-auto lg:w-10/12 mb-72 mt-40">

//                     <div className="title-1">{data.name}</div>

//                     <script type="comeet-applyform" data-position-uid={data.uid}></script>


//                 </Container>


//             </Layout>
//         </>
//     )
// }