module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      spacing: {
        128: '32rem',
        192: '48rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
