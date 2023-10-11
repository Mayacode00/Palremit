import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundColor: {
        gradientYellow:
          "linear-gradient(180deg, rgba(70,85,44,1) 0%, rgba(255,152,17,1) 100%);",
        "gradient-orange": "linear-gradient(45deg, #F9A620, #2C5530)",
      },
      colors: {
        darkGray: "rgba(43, 43, 43, 1)",
        green: "rgba(5, 70, 64, 1)",
        LightGray: "rgba(65, 65, 65, 1)",
        white: "#ffffff",
        black: "#000000",
        greenTwo: "#2C5530",
        greenThree: "#054640",
        orange: "#F9A620",
        darkOrange: "#FF9811",
        darkGreen: "#46552C",
        gradBlack: "rgba(0,0,0,0.46)",
        opacGray: "rgba(147,147,147,0.38)",
        yellowOne: "#FFF6B7",
        deepYellow: "#FFF182",
        mintGreen: "#E6F193",
        cream: "#FFFCE4",
        yellow: "#FFDA44",
      },
    },
  },
  plugins: [],
};
export default config;
