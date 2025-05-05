import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import injectHTML from "vite-plugin-html";
import FullReload from "vite-plugin-full-reload";
import ViteImageOptimizer from "vite-plugin-image-optimizer";

export default defineConfig({
  plugins: [
    react(),
    injectHTML(),
    FullReload(["./src/**/*.html"]),
    ViteImageOptimizer({
      exclude: /^sprite\.svg$/,
      png: {
        quality: 60,
      },
      jpeg: {
        quality: 60,
      },
      jpg: {
        quality: 60,
      },
      webp: {
        quality: 60,
      },
    }),
  ],
});
