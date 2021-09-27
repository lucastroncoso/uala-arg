module.exports = {
  purge: {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    safelist: [
      'lg:w-1/4',
      'lg:w-2/4',
      'lg:w-3/4',
      'lg:w-4/4',
      'h-1/4',
      'h-2/4',
      'h-3/4',
      'h-4/4',
      'h-4/6',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        width: 'width',
        height: 'height',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
