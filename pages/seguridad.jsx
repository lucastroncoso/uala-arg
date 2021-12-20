import Image from 'next/image';
import Layout from "../components/layout";
import Hero from "../components/hero";
import Container from "../components/container";
import SecurityCard from "../components/seguridad/securityCard";



export default function Seguridad(props) {

  return (
    <>
      <Layout nav footer>
        <Hero
          containerStyles="mt-12 bg-coral-wave-2"
          section="Seguridad"
          title="Tu seguridad es lo más importante"
          subtitle="Seguí estos consejos para operar de forma segura con Ualá."
          img={<Image src="/assets/images/seguridad/Mask Group (28).png" width={1365} height={1050} />}
        />
        <Container className=" bg-red-degrade  md:py-36 text-gray-250">
          <SecurityCard title="Seguridad de tus claves"
            src="/assets/images/seguridad/1.png">
            <div>
              <p>Las claves que usás para operar en Ualá son datos confidenciales. Nunca compartas con nadie, incluso si parece que te las pide Ualá. Tampoco muestres los números que están atrás de la tarjeta.</p>
              <p>Cuando crees o modifiques tus claves, evitá usar información personal que puedan ser fáciles de adivinar (fecha de nacimiento, número de documento u otra información similar).</p>
              <p>Si olvidaste tu clave de inicio de sesión y seguiste los pasos para recuperarla, no compartas con nadie los códigos que te enviamos para resetearla.</p>
            </div>
          </SecurityCard>
          <SecurityCard title="Seguridad de tu dispositivo"
            src="/assets/images/seguridad/2.png">
            <div>
              <p>Bloqueá el acceso a tu celular con un código de bloqueo, patrón o con algún mecanismo de biometría (cara, huella dactilar, etc).</p>
              <p>Actualizá regularmente tus aplicaciones y sistema operativo de tu celular para tener las últimas actualizaciones de seguridad.</p>
              <p>Nunca instales aplicaciones por fuera de Play Store o App Store, no se pueden garantizar que sean legítimos.</p>
            </div>
          </SecurityCard>
          <SecurityCard title="Seguridad en tus operaciones"
            src="/assets/images/seguridad/4.png">
            <div>
              <p>Desconfiá de toda comunicación que contenga links sospechosos y/o que te pida las claves de tu Ualá o cualquier otra información confidencial para darte un beneficio a cambio.</p>
              <p>Nuestra casilla oficial de mail es hola@uala.com.ar y nuestras redes sociales @uala_arg (chequeá el tilde azul para comprobar que sea la cuenta oficial). Nunca te vamos a contactar por otro medio.</p>
              <p>Cuando compres online, verificá que la dirección de la página web sea legitima y que se trate de un sitio seguro.</p>
              <p>Si comprás un producto o servicio a otra persona, asegurate de que todo sea legítimo y confiable. Leé las experiencias de otros compradores. Recordá que Ualá es un medio de pago y no es responsable por las transacciones entre partes.</p>
              <p className="text-blue-250">Si tenes alguna duda o sospecha antes o después de haber realizado alguna operación escribinos por el chat de la app o por mail a hola@uala.com.ar para que podamos ayudarte.</p>
            </div>
          </SecurityCard>





        </Container>
      </Layout>

    </>
  );
}
