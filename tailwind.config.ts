import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#e50000",
          ink: "#242426",
          border: "#e2e4e5",
          panel: "#faecee",
        },
        countdown: {
          label: "#a8a6a6",
          "label-soft": "#d2cccc",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-gilroy)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      maxWidth: {
        frame: "1024px",
      },
    },
  },
  plugins: [],
};

export default config;
