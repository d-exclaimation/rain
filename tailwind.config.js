/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,svelte}"],
  theme: {
    extend: {
      fontFamily: {
        comfort: ["Comfortaa Variable"],
      },
      animation: {
        appear: "appear 1s ease-in-out",
        droplet: "droplet 4s ease-in-out infinite backwards",
      },
      keyframes: {
        droplet: {
          "0%": {
            transform: "scale(20%)",
            opacity: "0",
          },
          "50%": {
            opacity: "1",
          },
          "100%": {
            transform: "scale(100%)",
            opacity: "0",
          },
        },
        appear: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
