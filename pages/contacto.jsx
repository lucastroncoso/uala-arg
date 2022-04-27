import React, { useEffect } from 'react';
import Layout from '../components/layout';
import Hero from "../components/hero";
import Container from "../components/container";
import ContactCard from "../components/contacto/contactCard";
import { useAppContext } from '../store/context';
import Image from "next/image";
import Head from 'next/head';

export default function Seguridad(props) {
    const { locale, setRegion } = useAppContext();
    useEffect(() => {
        setRegion('co');
    }, []);

    return (
        <>
            <Head>
                <link rel="alternate" hreflang="es-ar" href="https://www.uala.com.ar/contacto" />
                <link rel="alternate" hreflang="es-mx" href="https://www.uala-abc.com.mx/contacto" />
                <link rel="alternate" hreflang="es-co" href="https://www.uala.com.co/contacto" />
                <link rel="alternate" hreflang="x-default" href="https://www.uala.com.ar/contacto" />
                <title>Ualá - Canales de contacto</title>
                <meta name="description" content="¿Necesitás contactarte con nosotros? Conocé todos nuestros medios de contacto." />
            </Head>
            <Layout nav footer>
                <Hero
                    containerStyles="mt-14 "
                    section="Contacto"
                    title="¿Necesitás ponerte en contacto con nosotr@s?"
                    subtitle="Te mostramos nuestros medios de contacto"
                    img={<Image src="/assets/images/contacto/contacto.webp" width={1626} height={1251} />}
                />
                <Container className="my-24">
                    <div className="col-span-10 col-start-2 ">
                        <div className="grid gap-8 md:grid-cols-2 gap-x-40 col-span-full ">
                            <ContactCard title="Chat de la app"
                                href="/assets/images/contacto/Ilus-Chat.png"
                                subtitle="Chateá con nosotros desde la app de Ualá de lunes a viernes de 9 a 21hs y los sábados de 9 a 18hs. Iniciá el chat, escribí tu consulta y quedate en línea para que podamos responderte."
                            />
                            <ContactCard title="Mail"
                                href="/assets/images/contacto/Ilus-Mail.png"
                                subtitle="Podés escribirnos por mail a hola@uala.com.ar cualquier día de la semana, a cualquier hora. Acordate de incluir tu número de DNI y el detalle de tu consulta."
                            />
                            <ContactCard title="Redes sociales"
                                href="/assets/images/contacto/Ilus-RRSS (1).png"
                                subtitle="Estamos para ayudarte en Facebook, Instagram y Twitter, de lunes a viernes de 9 a 18 hs."
                            />
                            <ContactCard title="Comunidad Ualá"
                                href="/assets/images/contacto/Ilus-Comunidad.png"
                                subtitle="En la Comunidad Ualá podés hablar con otros usuarios e intercambiar dudas, sugerencias o ideas."
                            />

                        </div>
                    </div>
                </Container>
            </Layout>
        </>
    )
}