/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#9fd9ea",

          secondary: "#aeaded",

          accent: "#2b8296",

          neutral: "#241B32",

          "base-100": "#E8E8ED",

          info: "#8C9BDE",

          success: "#29E0BF",

          warning: "#F8A93A",

          error: "#EB3114",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
