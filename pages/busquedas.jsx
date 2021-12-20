import Layout from "../components/layout";
import Container from "../components/container";
import Head from 'next/head';
import { useEffect, useState } from "react";

function Promotion(props) {

    return (
        <div className="grid">
            <div className="flex flex-col m-4 shadow-lg p-4 rounded-3xl border border-gray-100">
                <div className="flex justify-center">
                    <div>
                        <img className="max-h-16" src={`https://uala-mex-frontend-promotions-prod.s3.amazonaws.com/${props.image}`} alt="" />
                    </div>
                </div>
                <div className="text-center mt-4 font-medium flex-grow flex items-center">
                    <div className="w-full">{props.title}</div>
                </div>
                <div className="text-center mt-4 text-sm">{props.date}</div>
                <div className="text-center mt-4"><a href="/condiciones" className="link">Ver mas</a></div>
            </div>
        </div>
    )

}

export default function Promociones(props) {

    const [promotions, setPromotions] = useState(false); // Lista de promociones

    useEffect(async () => {

        let promotionList = await (await fetch("https://cms.prod.websites.uala.com.mx:2082/promotions")).json();

        setPromotions(promotionList.payload)

    }, [])

    return (
        <>
            <Head>
                <title>Ualá</title>
            </Head>
            <Layout nav footer>
                <div className="flex justify-center">
                    <div className="hidden lg:block"><img src="/assets/images/MX_promos_MainSlider_banner.jpeg" /> </div>
                    <div className="lg:hidden"><img src="/assets/images/MX_promos_Mainslideer_banner_mobile.jpeg" /></div>
                </div>
                <Container>
                    <div className="text-center my-16 text-blue-600 text-3xl font-medium">No te pierdas estas súper promociones increibles</div>
                    <div className="my-16 grid lg:grid-cols-3">
                        {
                            !promotions ? <div className="text-center col-span-full">Cargando...</div> : promotions.map(promotion => <Promotion {...promotion} />)
                        }
                    </div>
                </Container>
                <Container>
                    <div className="flex justify-center mb-12">
                        <div className="hidden lg:block"><img src="/assets/images/MX_promos_banner_adquisicion_desktop.png" /></div>
                        <div className="lg:hidden"><img src="/assets/images/MX_promos_banner_adquisicion_mobile.png" /></div>
                    </div>
                </Container>


            </Layout>
        </>
    )

}