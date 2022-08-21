module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#FFF',
      'gray_light': '#EEEEEE',
      'primary': '#50CB93',
      'secondary': '#71EFA3',
      'gray_dark': '#aeaeae',
      'black': '#3F3F44',
    },
    extend: {
      dropShadow: {
        'xxs': 'rgba(17, 17, 26, 0.1) 0px 1px 0px',
      },
      keyframes: {
        "slide-in": {
          "0%": {
            "-webkit-transform": "translateX(120%)",
            transform: "translateX(120%)",
          },
          "100%": {
            "-webkit-transform": "translateX(0%)",
            transform: "translateX(0%)",
          },
        },
      },
      animation: {
        "slide-in": "slide-in 0.5s ease-out",
      },
    },
  },
  plugins: [],
}
