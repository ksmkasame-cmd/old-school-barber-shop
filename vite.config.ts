import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// VITE_BASE é definido no deploy do GitHub Pages (subpasta do repositório)
export default defineConfig({ base: process.env.VITE_BASE ?? "/", plugins: [react()] });
