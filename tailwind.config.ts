import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: "#89BC30",
          deep: "#6A9621",
          dark: "#456612",
          soft: "#A5DC3C",
          light: "#EEF7DA",
          muted: "#89BC3020",
        },
        paper: {
          DEFAULT: "#FAFBF7",
          deep: "#EEF4E4",
          muted: "#E4EDE0",
        },
        dark: {
          DEFAULT: "#111612",
          soft: "#1A231C",
          deep: "#0B0E0C",
        },
      },
      fontFamily: {
        display: [
          "Franklin Gothic Medium",
          "Franklin Gothic Demi",
          "Plus Jakarta Sans",
          "Inter",
          "sans-serif",
        ],
        body: [
          "Plus Jakarta Sans",
          "Inter",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
