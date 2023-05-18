/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        14: "3.5rem",
        "128px": "128px",
        "language-select-spacing": "-200px",
        "premium-1-spacing": "-100px",
        "premium-2-spacing": "-140px",
        "premium-4-spacing": "-65px",
        "premium-negative": "-10px",
        "left-negative": "-60px"
      },
      colors: {
        "hoverspt": "#18D760",
        "purple-main": "#2D4689",
        "green-main": "#1ED760",
        "pink-main": "#A1248B",
        "pink-hover": "#8C1F79",
        "gray-main": "#191414",
        "gray-links": "#222326",
        "blue-main": "#1D75DE",
        "blue-hover": "#1A69C7"
      },
      backgroundImage: (theme) => ({
        "spotify-theme": "url('/src/img/bursts.svg')",
        "spotify-theme-mobile": "url('/src/img/bursts-mobile.svg')",
      }),
      backgroundSize: {
        "175%": "175%",
        "195%": "195%",
      },
      backgroundPosition: {
        'banner': '46% 4%',
        'banner-mobile': 'top 25% center'
      },
      fontSize:{
        '9xl': '9rem',
        '07rem': '0.7rem',
        'text-span-bar': '0.875rem',
        "xxs": "0.6rem"
      },
      lineHeight: {
        'text-span-bar': '1rem'
      },
      width:{
        "40rem": "40rem",
        "36rem": "36rem"
      }
    },
  },
  plugins: [],
};
