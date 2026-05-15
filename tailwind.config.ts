import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./constants/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        chem: {
          green: "#18a558",
          blue: "#0f4fa8",
          yellow: "#f5bf2f",
          slate: "#0b1625"
        }
      },
      boxShadow: {
        glow: "0 20px 45px -15px rgba(15, 79, 168, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;
