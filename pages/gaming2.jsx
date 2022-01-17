import { useState } from 'react';
import GamingHero from '../components/gaming/gamingHero';
import CardItem from '../components/cardItem';
import VideoTitleGaming from '../components/VideoTitleGaming/videoTitleGaming';
import Layout from '../components/layout';
import Head from 'next/head';
import Image from 'next/image';
import ImageItemsSectionGaming from '../components/imageItemsSectionGaming/imageItemsSectionGaming';
import styles from '../styles/newpampas.module.css';
import PromotionCard from '../components/promotions/promotionCard';

export default function Gaming2(props) {
  const [gamePrice, setGamePrice] = useState('');
  const [calcStatus, setCalcStatus] = useState(false);
  const [optionValue, setOptionValue] = useState('');

  const lastTwoDecimal = (number) => Math.round(number * 100) / 100;

  const options = [
    {
      label: ' ',
      value: ' ',
    },
    {
      label: 'Vivo en CABA o GBA',
      value: 'Vivo en CABA o GBA',
    },
    {
      label: 'No vivo en CABA o GBA',
      value: 'No vivo en CABA o GBA',
    },
  ];

  return (
    <>
      <Head>
        <title>Ualá</title>
      </Head>
      <Layout nav footer banner>
        <div className="bg-gray-gaming">
          <div className="bg-gaming-hero">
            <div className="relative" data-aos="fade-right">
              <GamingHero
                containerStyles="mt-12"
                section="Gaming"
                title1="Alcanzá el"
                title2="siguiente nivel"
                subtitle="Beneficios exclusivos, eventos y hasta una academia para ser parte de un equipo profesional. Pensado 100% para gamers"
                img={<Image src="/assets/images/gaming/img-hero.jpg" width={1084} height={834} />}
              />
              <div className="absolute bottom-5 right-2 md:bottom-20 md:right-14">
                <Image src="/assets/images/gaming/Aro-body.png" width={68} height={68} />
              </div>
            </div>
            <ImageItemsSectionGaming
              title="Ualá Pampas sin límites"
              img={
                <VideoTitleGaming
                  imgDesktop={
                    <Image
                      src="/assets/images/gaming/video-thumbnail-desktop.png"
                      width={1213}
                      height={795}
                    />
                  }
                  imgMobile={
                    <Image
                      src="/assets/images/gaming/video-thumbnail-mobile.png"
                      width={640}
                      height={524}
                    />
                  }
                  href="https://www.youtube.com/watch?v=GTcxxiaN7K4"
                />
              }
              subtitle="Ualá y Pampas se unieron para que cada vez mas gamers tengan mejores oportunidades y conozcan #ElLadoBuenoDeTuPlata"
            />
            <ImageItemsSectionGaming
              reverse
              title="Sumate a la Gaming Academy"
              img={
                <Image
                  src="/assets/images/gaming/img-gamingacademy.jpg"
                  width={1213}
                  height={795}
                />
              }
              subtitle="¡La oportunidad de jugar en un equipo profesional! Desde donde estés, 100% online."
              href="/gamingAcademy"
              link="Conocé más"
            />
          </div>
          <div className="bg-gaming-body relative">
              <ImageItemsSectionGaming
                reverse
                title="Comprá con Ualá y segui jugando"
                image1="/assets/images/gaming/logo-steam.png"
                w1="198"
                h1="112"
                image2="/assets/images/gaming/logo-compragamer.png"
                w2="204"
                h2="56"
                image3="/assets/images/gaming/logo-divisiongamer.png"
                w3="228"
                h3="104"
                image4="/assets/images/gaming/logo-bangho.png"
                w4="204"
                h4="92"
                subtitle="Recordá calcular el 30% adicional de impuesto PAIS + el 35% de Percepción de Ganancias en tus compras en moneda extranjera."
                href="/promociones"
                link="Ver promociones"
              />
            <div className="absolute hidden md:block top-0 left-6">
              <Image src="/assets/images/gaming/Aro-body.png" width={33} height={33} />
            </div>
            <div className="absolute hidden md:block -top-5 right-0">
              <Image src="/assets/images/gamingAcademy/Aro-body-m2.png" width={37} height={48} />
            </div>
          </div>
        </div>
        <div className={'py-16 relative ' + styles.bgGradient}>
          <div className={styles.marginContainer}>
            <div className="px-4 mx-auto lg:px-24">
              <h2
                id="calculadora"
                className="mb-8 text-4xl font-semibold text-center text-gray-800"
              >
                Calculá cuánto sale tu juego
              </h2>
              <p className="mb-8 text-xl text-center text-gray-700">
                Utilizando esta calculadora podés conocer el precio final del juego{' '}
                <br className="hidden lg:block" /> para que sepas cuánto saldo cargar en Ualá.
              </p>
              <label
                htmlFor="price"
                className="block w-2/4 py-2 pl-0 mx-auto text-xl text-center text-gray-700 lg:pl-4"
              >
                Precio del juego
              </label>
              <input
                type="number"
                required="required"
                id="price"
                name="price"
                onChange={(e) => {
                  const price = e.target.value;
                  setGamePrice(price);
                  setCalcStatus(false);
                  setOptionValue(options[0].value);
                }}
                //placeholder="$2.500,00"
                className="block w-11/12 py-3 pl-4 mx-auto mb-4 text-xl text-center rounded-full appearance-none lg:w-8/12 focus:outline-none"
              />
              <label
                htmlFor="price"
                className="block w-2/4 py-2 pl-0 mx-auto text-xl text-center text-gray-700 lg:pl-4"
              >
                ¿Dónde vivís?
              </label>

              <select
                name="zone"
                required
                id="zone"
                style={{ textAlignLast: 'center' }}
                className="select block w-11/12 py-3 pl-4 mx-auto mb-10 text-xl text-center rounded-full outline-none lg:w-8/12 focus:outline-none bg-white "
                value={optionValue}
                onChange={(e) => {
                  const selectedOption = e.target.value;
                  setOptionValue(selectedOption);
                  setCalcStatus(false);
                }}
              >
                <option value={options[0].value}>{options[0].label}</option>
                <option value={options[1].value}>{options[1].label}</option>
                <option value={options[2].value}>{options[2].label}</option>
              </select>
              <button
                id="exec"
                className={
                  'block w-8/12 py-3 mx-auto mb-8 text-xl rounded-full  lg:w-5/12 ' +
                  styles.formButton
                }
                onClick={() => setCalcStatus(true)}
              >
                Calcular
              </button>
              <p className="block w-full mb-0 py-2 pl-0 mx-auto text-xl text-center text-gray-700 lg:w-2/4 lg:pl-4">
                Precio final del juego
              </p>
              <div id="result" className="w-11/12 mx-auto mb-8 text-center lg:w-8/12">
                <span className="text-gray-700 text-5xl">$</span>
                {calcStatus ? (
                  <>
                    {optionValue === 'Vivo en CABA o GBA' && (
                      <span className="font-semibold text-gray-700 text-5xl">
                        {lastTwoDecimal(gamePrice * 1.66)}{' '}
                      </span>
                    )}
                    {optionValue === 'No vivo en CABA o GBA' && (
                      <span className="font-semibold text-gray-700 text-5xl">
                        {lastTwoDecimal(gamePrice * 1.64)}
                      </span>
                    )}
                  </>
                ) : (
                  <span className="font-semibold text-gray-700 text-5xl">00.00</span>
                )}
              </div>
              <p className="text-center text-gray-500 mb-6 md:mb-10">
                El precio final tiene en cuenta el 21% del IVA, el 8% del impuesto PAIS, el 35% de
                impuesto a las Ganancias y el 2% de Ingresos Brutos en caso de que vivas en la
                Ciudad de Buenos Aires o en el Gran Buenos Aires
              </p>
            </div>
          </div>
          <div className="absolute -bottom-5 right-20 md:-bottom-5 md:left-20">
            <Image src="/assets/images/gaming/circle-form.png" width={40} height={40} />
          </div>
          <div className="absolute -top-5 right-10 md:-top-5 md:right-20">
            <Image src="/assets/images/gaming/circle-form.png" width={40} height={40} />
          </div>
        </div>
        <div className="bg-gray-gaming px-10 pt-14 pb-28">
          <PromotionCard />
        </div>
      </Layout>
    </>
  );
}
