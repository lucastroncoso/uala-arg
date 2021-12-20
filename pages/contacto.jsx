import React, { useEffect } from 'react';
import Layout from '../components/layout';
import Hero from "../components/hero";
import Container from "../components/container";
import ContactCard from "../components/contacto/contactCard";
import { useAppContext } from '../store/context';
import Image from "next/image";

export default function Seguridad(props) {
    const { locale, setRegion } = useAppContext();
    useEffect(() => {
        setRegion('co');
    }, []);

    return (

        <Layout nav footer>
            <Hero
                containerStyles="mt-14 "
                section="Contacto"
                title="¿Necesitás ponerte en contacto con nosotr@s?"
                subtitle="Te mostramos nuestros medios de contacto"
                img={<Image src="/assets/images/contacto/contacto.png" width={1626} height={1251} />}
            />
            <Container className="my-24">
                <div className="col-span-10 col-start-2 ">
                    <div className="grid gap-8 md:grid-cols-2 gap-x-40 col-span-full ">
                        <ContactCard title="Chat de la app"
                            href="/assets/images/contacto/Ilus-Chat.png"
                            subtitle="Chatea con nosotros desde la app de Ualá de lunes a viernes de 7 a 23hs y los sábados de 7 a 18hs.Inicia el chat, escribe tu consulta y quédate en línea para que podamos responderte."
                        />
                        <ContactCard title="Mail"
                            href="/assets/images/contacto/Ilus-Mail.png"
                            subtitle="Puedes escribirnos por mail a hola@uala.com.co cualquier día de la semana, a cualquier hora.
                                Acuérdate de incluir tu número de identificación (cédula de ciudadanía/extranjería) y el detalle de tu consulta."
                        />
                        <ContactCard title="Redes sociales"
                            href="/assets/images/contacto/Ilus-RRSS (1).png"
                            subtitle="Estamos para ayudarte en Facebook, Instagram y Twitter, de lunes a viernes de 9 a 18 hs."
                        />
                        <ContactCard title="Comunidad Ualá"
                            href="/assets/images/contacto/Ilus-Comunidad.png"
                            subtitle="En la Comunidad Ualá puedes hablar con otros usuarios e intercambias dudas, sugerencias o ideas."
                        />

                    </div>
                </div>



            </Container>
        </Layout>

    )
}