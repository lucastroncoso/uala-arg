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
      }
    ]
  }
};
