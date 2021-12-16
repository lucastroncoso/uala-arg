module.exports = {
  purge: {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './components/*.{js,ts,jsx,tsx}'],
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
          250: "#3E6BFD",
          350: "#EFF4FF"
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
        lightblue: '0px 5px 24px 6px rgba(62, 107, 253, 0.1)',
      },
    },
  },
  variants: {
    extend: { border: ['last'] },
  },
  plugins: [],
};
