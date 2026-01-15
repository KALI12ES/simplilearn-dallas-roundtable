import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-satoshi)"],
      },
      colors: {
        primary: "#0B1C2D",
        accent: "#F97316",
      },
    },
  },
  plugins: [],
};

export default config;
