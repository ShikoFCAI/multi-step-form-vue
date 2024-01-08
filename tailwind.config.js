/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: {
          marineBlue: "hsl(213, 96%, 18%)",
          purpleBlue: "hsl(243, 100%, 62%)",
          pastelBlue: "hsl(228, 100%, 84%)",
          lightBlue: "hsl(206, 94%, 87%)",
          strawberry: "hsl(354, 84%, 57%)",

          coolGrey: "hsl(231, 11%, 63%)",
          lightGrey: "hsl(229, 24%, 87%)",
          magnolia: "hsl(217, 100%, 97%)",
          alabaster: "hsl(231, 100%, 99%)",
        },
      },
    },
  },
  plugins: [],
};
