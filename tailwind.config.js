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
      colors: {
        blue: {
          50: "#8EA8FD",
          150: "#EEF3FF",
          250: "#3E6BFD"
        },
        red: {
          250: "#FFEBEB"
        },
        gray: {
          150: "#757575",
          250: "#3A3A3A"
        }
      },
      boxShadow: {
        blue: '0px 5px 24px 6px rgba(62, 107, 253, 0.2)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
