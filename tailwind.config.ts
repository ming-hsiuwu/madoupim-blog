import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF7F0",
        ink: "#2A2E28",
        muted: "#6B7068",
        line: "#E6E1D4",
        pomelo: {
          50: "#F2F4EE",
          100: "#E1E7D8",
          200: "#C3D0B2",
          300: "#9DB182",
          400: "#7A8D6B",
          500: "#5C7152",
          600: "#4A6741",
          700: "#3C5436",
          800: "#2E4228",
          900: "#1F2D1B",
        },
        earth: {
          50: "#FBF6EB",
          100: "#F1E6CA",
          200: "#E3D0A3",
          300: "#D9C9A6",
          400: "#C4A473",
          500: "#A8834E",
          600: "#8B6F3F",
          700: "#6E5731",
        },
        warm: {
          500: "#C97B3A",
          600: "#A45E27",
        },
      },
      fontFamily: {
        sans: ["var(--font-noto-sans-tc)", "var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-noto-serif-tc)", "var(--font-inter)", "serif"],
      },
      maxWidth: {
        prose: "44rem",
      },
    },
  },
  plugins: [typography],
};
export default config;
