module.exports = {
  reactStrictMode: true,
  env: {
    locale: 'es',
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
