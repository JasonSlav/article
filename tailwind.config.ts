import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      base: `rgb(var(--base) / <alpha-value>)`,
      surface: `rgb(var(--surface) / <alpha-value>)`,
      overlay: `rgb(var(--overlay) / <alpha-value>)`,
      muted: `rgb(var(--muted) / <alpha-value>)`,
      subtle: `rgb(var(--subtle) / <alpha-value>)`,
      text: `rgb(var(--text) / <alpha-value>)`,
      love: `rgb(var(--love) / <alpha-value>)`,
      gold: `rgb(var(--gold) / <alpha-value>)`,
      rose: `rgb(var(--rose) / <alpha-value>)`,
      pine: `rgb(var(--pine) / <alpha-value>)`,
      foam: `rgb(var(--foam) / <alpha-value>)`,
      iris: `rgb(var(--iris) / <alpha-value>)`,
      highlightLow: `rgb(var(--highlightLow) / <alpha-value>)`,
      highlightMed: `rgb(var(--highlightMed) / <alpha-value>)`,
      highlightHigh: `rgb(var(--highlightHigh) / <alpha-value>)`,
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
