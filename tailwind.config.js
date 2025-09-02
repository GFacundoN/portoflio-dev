export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'diamond-dark': 'radial-gradient(ellipse at center, #00013A 0%, #000015 100%)',
        'diamond-light': 'radial-gradient(ellipse at center, #9EA0FF 0%, #EEEFFF 100%)',
      },
      fontFamily: {
        sans: ['"Onest"', 'sans-serif'], 
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#570DF8",
          secondary: "#F000B8",
          accent: "#37CDBE",
          neutral: "#3D4451",
          "base-100": "transparent",
        },
      },
      {
        dark: {
          primary: "#661AE6",
          secondary: "#D926A9",
          accent: "#1FB2A6",
          neutral: "#191D24",
          "base-100": "transparent",
        },
      },
    ],
  },
}
