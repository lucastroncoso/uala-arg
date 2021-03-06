import Layout from '../components/layout';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import useScrollTrigger from '../components/home/utils/hooks/useScrollTrigger';
import gsap from 'gsap';

export default function AulaUala(props) {
  const [sectionRef, childrenSelector, createTL] = useScrollTrigger();

  useEffect(() => {
    if (!sectionRef || !sectionRef.current) return;

    const backgroundCards = childrenSelector('[data-animation="background-card"]');
    const title = childrenSelector('[data-animation="title"]');
    const titleTl = gsap.timeline({ paused: true });

    const tl = createTL({
      scrub: 1,
      onEnter: () => titleTl.play(),
      start: '0% 70%',
    });

    titleTl.fromTo(
      title,
      { scaleY: 0, transformOrigin: '0% 100%' },
      { scaleY: 1, duration: 0.3, ease: 'power4.out' },
      0,
    );

    backgroundCards.forEach((card, index) => {
      gsap
        .timeline({ scrollTrigger: { trigger: card, start: '0% 100%' } })
        .fromTo(
          card,
          { x: index % 2 ? 150 : -150, transformOrigin: '50% 20%', opacity: 0 },
          { duration: 0.65, x: 0, ease: 'Power4.InOut', opacity: 1 },
        );
    });
  }, []);

  const [button, setButton] = useState({
    text: 'Subscribirme',
    enabled: false,
    color: 'bg-gray-300',
  });
  const [mailInputEnabled, setMailInputEnabled] = useState(true);

  const enableButton = () => {
    setButton({ text: 'Subscribirme', enabled: true, color: 'bg-blue-250' });
  };

  const registerUser = async (e) => {
    e.preventDefault();

    setButton({ text: 'Espera...', enabled: false, color: 'bg-gray-300' });
    setMailInputEnabled(false);

    await fetch(`/api/newsletter`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        Email: e.target.mail.value,
        Created: new Date().toLocaleDateString('en-GB'),
      }),
    })
      .then((response) => {
        if (response.status == 302) {
          setButton({ text: '??Listo!', enabled: false, color: 'bg-blue-250' });
          setMailInputEnabled(true);
        } else {
          setButton({ text: 'Hubo un error', enabled: false, color: 'bg-gray-300' });
          setMailInputEnabled(true);
        }
      })
      .catch((err) => console.log('err:', err));
  };

  return (
    <>
      <Head>
        <title>Ual??</title>
      </Head>
      <Layout nav footer>
        <div ref={sectionRef}>
          <div className="grid grid-cols-12 w-screen overflow-hidden relative z-0 md:mt-12">
            {/* <!-- HEADER --> */}
            <div
              className="col-span-12 grid grid-cols-12 lg:mt-8 pt-24 lg:pt-0 lg:px-12"
              style={{ backgroundColor: 'rgba(222, 232, 255, 0.3)' }}
            >
              <div className="col-span-10 col-start-2 grid grid-cols-2">
                <div className="lg:order-none order-2  col-span-2 lg:col-span-1">
                  <div className=" my-12">
                    <img
                      className="rounded-xl w-full"
                      src="/assets/images/aula/Aula Ual??_1.webp"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex justify-center items-center lg:order-none order-1 col-span-2 lg:col-span-1">
                  <div className="lg:px-24">
                    <img src="/assets/images/aula/Logo Aula Ual??.png" alt="" className="w-9/12" />
                    <p className="text-2xl text-gray-150 ">
                      Nuestro espacio de educaci??n financiera. ??Hablamos de finanzas, pero f??cil!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- CARDS --> */}
            <div className="col-span-12 grid grid-cols-12 mt-8 lg:px-12 ">
              <div
                data-animation="title"
                className="col-span-10 col-start-2 mt-12 title-2 text-center"
              >
                El lado f??cil de tus finanzas
              </div>

              <div className="col-span-10 col-start-2 grid grid-cols-2 gap-8 mt-12">
                <a
                  target="_blank"
                  href="https://blog.uala.com.ar/"
                  className="rounded-xl grid grid-cols-12 shadow-2xl border border-gray-100 lg:p-12 p-8 lg:pr-18 px-4 col-span-2 lg:col-span-1 transform transition duration-300 "
                  data-animation="background-card"
                >
                  <div className="lg:col-span-4 col-span-12 w-full">
                    <img
                      src="/assets/images/aula/Ilus_Blog.png"
                      alt=""
                      className="mx-auto pb-2 lg:pb-0 w-6/12 lg:w-full"
                    />
                  </div>
                  <div className="lg:col-span-8 col-span-12 flex items-center flex-wrap lg:pl-8">
                    <h2 className="text-xl text-gray-250 font-semibold mx-auto lg:mx-0 pb-2 lg:pb-0">
                      Nuestro blog
                    </h2>
                    <p className="text-xl text-gray-150 text-center lg:text-left">
                      Escribimos sobre finanzas, emprendedurismo y m??s. <br />
                      ??Le?? nuestros art??culos!
                    </p>
                  </div>
                </a>

                <a
                  data-animation="background-card"
                  target="_blank"
                  href="/aula-form"
                  className="rounded-xl grid grid-cols-12 shadow-2xl border border-gray-100 lg:p-12 p-8 lg:pr-18 px-4 col-span-2 lg:col-span-1 transform hover:scale-105 transition duration-300"
                >
                  <div className="lg:col-span-4 col-span-12 w-full">
                    <img
                      src="/assets/images/aula/Ilus_Charlas.png"
                      alt=""
                      className="mx-auto pb-2 lg:pb-0 w-6/12 lg:w-full"
                    />
                  </div>
                  <div
                    target="_blank"
                    href="/aula-form"
                    className="lg:col-span-8 col-span-12 flex items-center flex-wrap lg:pl-8"
                  >
                    <h2 className="text-xl text-gray-250 font-semibold mx-auto lg:mx-0 pb-2 lg:pb-0">
                      Charlas online
                    </h2>
                    <p className="text-xl text-gray-150 text-center lg:text-left">
                      Visitamos virtualmente escuelas de nivel secundario. <br /> ??Anot?? la tuya!
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-span-12 grid grid-cols-12 mb-8 lg:px-12">
              <div className="col-span-10 col-start-2 grid grid-cols-2 gap-8 my-12">
                <a
                  data-animation="background-card"
                  target="_blank"
                  href="https://www.youtube.com/playlist?list=PLg1PUEcEHPufD4651KuYpGx79ebqte0KI"
                  className="rounded-xl grid grid-cols-12 shadow-2xl border border-gray-100 lg:p-12 p-8 lg:pr-18 px-4 col-span-2 lg:col-span-1 transform hover:scale-105 transition duration-300"
                >
                  <div className="lg:col-span-4 col-span-12 w-full">
                    <img
                      src="/assets/images/aula/Ilus_Videos.png"
                      alt=""
                      className="mx-auto pb-2 lg:pb-0 w-6/12 lg:w-full"
                    />
                  </div>
                  <div className="lg:col-span-8 col-span-12 flex items-center flex-wrap lg:pl-8">
                    <h2 className="text-xl text-gray-250 font-semibold mx-auto lg:mx-0 pb-2 lg:pb-0">
                      Videos educativos
                    </h2>
                    <p className="text-xl text-gray-150 text-center lg:text-left">
                      Un canal de YouTube con excelentes tutoriales. <br />
                      ??Miralos todos!
                    </p>
                  </div>
                </a>
                <a
                  data-animation="background-card"
                  target="_blank"
                  href="https://cursosaula.uala.com.ar/"
                  className="rounded-xl grid grid-cols-12 shadow-2xl border border-gray-100 lg:p-12 p-8 lg:pr-18 px-4 col-span-2 lg:col-span-1 transform hover:scale-105 transition duration-300"
                >
                  <div className="lg:col-span-4 col-span-12 w-full">
                    <img
                      src="/assets/images/aula/Ilus_Cursos.png"
                      alt=""
                      className="mx-auto pb-2 lg:pb-0 w-6/12 lg:w-full"
                    />
                  </div>
                  <div className="lg:col-span-8 col-span-12 flex items-center flex-wrap lg:pl-8">
                    <h2 className="text-xl text-gray-250 font-semibold mx-auto lg:mx-0 pb-2 lg:pb-0">
                      Cursos gratuitos online
                    </h2>
                    <p className="text-xl text-gray-150 text-center lg:text-left">
                      Una plataforma online con cursos gratuitos sobre finanzas. <br /> ??Inscribite
                      ahora!
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* <!-- RED SECTION --> */}
            <div
              className="col-span-12 grid grid-cols-12 py-12"
              style={{ backgroundColor: 'rgba(255, 103, 102, 0.07)' }}
            >
              <div className="col-span-10 col-start-2 grid lg:grid-cols-2 grid-cols-1 lg:text-left text-center">
                <div className="flex justify-center items-center">
                  <div className="lg:px-12">
                    <h2 className="text-3xl font-medium  text-gray-250 mb-6">
                      Material descargable
                    </h2>
                    <h3 className="text-xl text-gray-150 font-medium pb-2 px-12 lg:px-0">
                      ??Quer??s ser un experto en finanzas personales?
                    </h3>
                    <p className="text-xl text-gray-150  lg:pr-24 pb-8 px-4 lg:px-0">
                      Bajate nuestro programa completo donde encontrar??s todo en un mismo documento.
                    </p>
                    <a
                      target="_blank"
                      href="/assets/images/aula/Aula Ual?? - PDF.pdf"
                      className="border-none text-xl rounded-3xl py-3 lg:px-10 px-8 mt-8 outline-none bg-blue-250 text-white"
                    >
                      Descargar programa
                    </a>
                  </div>
                </div>
                <div>
                  <div className=" my-12">
                    <img
                      className="rounded-xl w-full px-8"
                      src="/assets/images/aula/Aula Ual??_3.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- LAST SECTION --> */}

            <div className="col-span-12 grid grid-cols-12 lg:mx-12 my-12">
              <div className="col-span-10 col-start-2 grid lg:grid-cols-2 grid-cols-1">
                <div className="col-span-2 lg:col-span-1">
                  <div className=" my-12">
                    <img
                      className="rounded-xl w-full"
                      src="/assets/images/aula/Aula Ual??_2.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex justify-center items-center col-span-2 lg:col-span-1 z-10">
                  <div className="lg:pr-8 lg:pl-12 w-full">
                    <h2 className="text-3xl font-medium  text-gray-250 mb-6 text-center lg:text-left">
                      ??Quer??s enterarte de las
                      <br className="hidden lg:block" /> novedades de Aula Ual???
                    </h2>
                    <p className="lg:text-2xl text-xl text-gray-150  mb-6 text-center lg:text-left">
                      Suscribite a nuestro <br /> newsletter de educaci??n financiera.
                    </p>
                    <form onSubmit={registerUser} className="flex flex-wrap my-6" id="form">
                      <div className="lg:w-8/12 w-full">
                        <label className="text-xl block text-blue-250" htmlFor="mail">
                          Mi mail es:
                        </label>
                        <input
                          type="email"
                          name="mail"
                          id="mail"
                          onChange={enableButton}
                          placeholder="ejemplo@email.com"
                          className="text-blue-250-3 border-b border-uala-3 w-11/12 leading-8 focus:outline-none "
                          id="mailInput"
                          required
                          disabled={!mailInputEnabled}
                        />
                      </div>
                      <button
                        id="registerButton"
                        type="submit"
                        disabled={!button.enabled}
                        className={`${button.color}  text-white rounded-full px-6 py-4 text-lg lg:w-4/12 w-6/12 mt-6 lg:mt-0 mx-auto outline-none`}
                      >
                        {button.text}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-10 col-start-2 grid grid-cols-1 lg:grid-cols-2 lg:my-20 lg:text-left text-center lg:relative lg:py-12 pb-12">
              <div className="flex justify-center items-center">
                <div className="lg:pr-8 lg:pl-12 w-full">
                  <h2 className="text-3xl font-medium  text-gray-250 mb-6">
                    ??Por qu?? en Ual?? apostamos <br /> por la educaci??n financiera?
                  </h2>
                  <p className="text-xl text-gray-150  mb-6">
                    Aula Ual?? es nuestro espacio de educaci??n financiera. Apostamos por la educaci??n
                    porque as?? generamos un c??rculo virtuoso que mejora la vida de las personas.
                  </p>
                  <p className="text-xl text-gray-150  mb-6">
                    {' '}
                    En Ual?? ofrecemos un producto para manejar tu plata pero mucho m??s f??cil,
                    apostando por la inclusi??n financiera y educando para que tomes las mejores
                    decisiones.
                  </p>
                  <p className="text-xl text-gray-150 font-semibold">
                    Por cualquier consulta o sugerencia sobre Aula Ual??, escribinos a{' '}
                    <a className="link" href="mailto:aulauala@ua.la">
                      aulauala@ua.la
                    </a>
                  </p>
                </div>
              </div>
              <div>
                <div className=" my-12 mt-24 md:mt-12  relative flex justify-end ">
                  <img
                    className=" lg:w-8/12 w-10/12 lg:mr-12 mr-2"
                    src="/assets/images/aula/Group 6 (2).png"
                    alt=""
                  />
                  <p className="absolute text-lg -top-8 md:-top-6 right-12 text-blue-250">
                    Un <span className="font-semibold">producto </span>
                    para manejar <br /> tu plata mucho m??s f??cil
                  </p>
                  <p className="absolute text-lg lg:left-16 -left-6 top-2/4 text-red-350">
                    que <span className="font-semibold">educa</span>
                    <br /> y empodera
                  </p>
                  <p className="absolute text-lg lg:right-36 -right-6 -bottom-4 lg:-bottom-6 text-blue-250">
                    que <span className="font-medium">incluye</span>
                    <br /> financieramente
                  </p>
                </div>
              </div>
              <img
                src="/assets/images/aula/BG1.png"
                alt=""
                className="absolute z-0  hidden md:flex -bottom-20 -right-80 w-9/12"
              />
              <img
                src="/assets/images/bg/Background-arrows.png"
                alt=""
                className="absolute bottom-0 md:hidden   "
              />
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-10 col-start-2 my-16">
              <img src="/assets/images/aula/Group 138.png" alt="" className="md:w-4/12 mx-auto" />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
