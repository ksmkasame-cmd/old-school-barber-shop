import { fileURLToPath } from "node:url";

const here = (p) => fileURLToPath(new URL(p, import.meta.url));

/** @type {import('tailwindcss').Config} */
export default {
  content: [here("./index.html"), here("./src") + "/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { surface: "#111111", muted: "#A3A3A3" },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      borderColor: { hair: "rgba(255,255,255,0.08)" },
    },
  },
  plugins: [],
};
