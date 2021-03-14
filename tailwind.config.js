module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    minHeight: {
      0: '0',
      500: '500px',
      full: '100%',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
