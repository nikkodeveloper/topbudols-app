/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

        "primary": "#FE2C55",

        "primary-content": "#fff",
                
        "secondary": "#FF439D",
                
        "accent": "#f9a8d4",
                
        "neutral": "#111",
                
        "base-100": "#000",

        "base-content": "#fff",
                
        "info": "#3abff8",
                
        "success": "#36d399",
                
        "warning": "#fbbd23",
                
        "error": "#f87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

