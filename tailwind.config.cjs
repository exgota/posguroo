module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#0000ff', // TODO exact HEX from logo
        dark: '#333333'
      },
      fontFamily: {
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: [],
};
