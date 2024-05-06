import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "dark-teal": "#003a3a",
        "gold": "#C2A83E",
        "sage-green": "#7ca982",
        "sage-green-light": "#96ba96",
        "dark-brown": "#27220c",
        "black": "#030301"
      }
    },
  },
  plugins: [],
};
export default config;
