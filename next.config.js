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
        source: '/sumate',
        destination: 'https://www.comeet.com/jobs/Uala/54.00B',
        permanent: true,
      }
    ]
  }
};
