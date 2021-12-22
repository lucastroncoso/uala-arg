import { useEffect } from "react"
import Layout from "../components/layout";
import Container from "../components/container";
import Head from 'next/head';
import Image from "next/image";


export default function Contratos(props) {

    useEffect(() => {
        window.comeetInit = function () {
            COMEET.init({
                "token": "45B15C715C78B6273322D88B6D111A22D11",
                "company-uid": "54.00B",
                "company-name": "uala",
                "color": "278fe6",
                "font-size": "13px"
            });
        }
    })



    return (
        <>
            <Head>
                <title>Ualá</title>
            </Head>
            <Layout nav footer>

                <script src="https://www.comeet.co/careers-api/api.js"></script>

                <div class="carrerHeader">

                    <div class="marginContainer">

                        <a href="/sumate" class="logo">
                            <img src="/assets/images/logos/logoname.png" alt="" />
                        </a>
                        <div class="carrerMenu">

                        </div>
                    </div>


                </div>

                <div class="marginContainer carrerListContainer" id="carrers"></div>

                <div class="marginContainer carrerUniqueContainer wrapContainer hide" id="carrer"></div>

                <div class="carrersLogin" id="carrersLogin">
                    <div class="list" id="list"></div>
                    <section class="social">
                        <h1>¡Ayudanos a crecer!</h1>
                        <script type="comeet-social"></script>
                    </section>
                </div>
            </Layout>
        </>
    )

}