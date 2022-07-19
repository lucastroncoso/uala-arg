module.exports = {
  reactStrictMode: true,
  env: {
    locale: 'es',
  },
  images: {
    domains: ['images.ctfassets.net'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  async redirects() {
    return [
      {
        source: '/tyc',
        destination: '/tyc.html',
        permanent: true,
      },
      {
        source: '/terminosycondiciones',
        destination: '/tyc.html',
        permanent: true,
      },
      {
        source: '/tyc-ualabis',
        destination: '/assets/legales/TyCUalaBis.pdf',
        permanent: true,
      },
      {
        source: '/legalesmisionuala',
        destination: '/assets/legales/SorteoPS5-diciembre2021.pdf',
        permanent: true,
      },
      {
        source: '/tyc-samsung',
        destination: '/assets/legales/TyCCréditosSamsung.pdf',
        permanent: true,
      },
      {
        source: '/tyc_programa_referidos',
        destination: '/assets/legales/TérminosyCondicionesdelProgramadeReferidosUalá.pdf',
        permanent: true,
      },
      {
        source: '/promo-20-reintegro-asistencias',
        destination: '/assets/legales/Promo20ReintegroAsistencias.pdf',
        permanent: true,
      },
      {
        source: '/SBS_Ahorro_Pesos%20_V2/SBS_Ahorro_Pesos.html',
        destination: '/assets/legales/to-sbs-ahorro-pesos-032020.pdf',
        permanent: true,
      },
      {
        source: '/Inversiones_TyC.html',
        destination: '/assets/legales/inversiones_TyC.pdf',
        permanent: true,
      },
      {
        source: '/programa-de-beneficios',
        destination: 'https://www.ualamas.com.ar/',
        permanent: true,
      },
      {
        source: '/tarjeta',
        destination: '/compras',
        permanent: true,
      },
      {
        source: '/qr',
        destination: '/compras',
        permanent: true,
      },
      {
        source: '/faqs',
        destination: '/preguntas-frecuentes',
        permanent: true,
      },
      {
        source: '/creditos',
        destination: '/prestamos',
        permanent: true,
      },
      {
        source: '/bienvenida',
        destination: 'https://www.youtube.com/watch?v=dJyRl1bq9eg',
        permanent: true,
      },
      {
        source: '/privacidad.html',
        destination: '/privacidad',
        permanent: true,
      },
      {
        source: '/reporte-sostenibilidad',
        destination: '/assets/legales/reporte-sostenibilidad.pdf',
        permanent: true,
      },
      {
        source: '/BasesConcursoUalaGamergy',
        destination: '/assets/legales/Uala_Gamergy_terminos-y-condiciones.pdf',
        permanent: true,
      },
      {
        source: '/gaming-pass-tyc',
        destination: '/assets/legales/Terminos y Condiciones del Programa Gaming Pass.pdf',
        permanent: true,
      },
      {
        source: '/tyc_sorteo_manu',
        destination: '/assets/legales/Términos y Condiciones - Concurso Manu Ginóbili.pdf',
        permanent: true,
      },
      {
        source: '/gaming-pass-faqs',
        destination: '/assets/legales/Preguntas Frecuentes Gaming Pass.pdf',
        permanent: true,
      },
      {
        source: '/TyCConcursoEmpretienda',
        destination: '/assets/legales/Terminos-y-Condiciones-Concurso-Membresia-empretienda.pdf',
        permanent: true,
      },
      {
        source: '/tyc-cashback-applepay',
        destination: '/assets/legales/TYC_ApplePayCashback.pdf',
        permanent: true,
      },
    ];
  },
};
