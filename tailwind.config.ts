import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        // Change '20s' to make it faster or slower
        marquee: "marquee 20s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" }, // Resets perfectly halfway through the duplicated items
        },
      },
      colors: {
        primary: "#fccd29",
        foundation_blue: "#748D9D",
        low_blue: "#AFBEC6",
        secondary: "#517184",
        accent: "#F59E0B",
        danger: "#EF4444",
        dark: "#010101",
        light: "#ffffff",
        card_bg: "#FAFAFA",
        "steel-blue": "#222F37",
        "gradient-light-primary": "#FDF4C2",
        "gradient-dark-secondary": "#4A6879",
      },

      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        space_grotesk: ["var(--font-space_grotesk)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
