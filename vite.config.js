import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import injectHTML from "vite-plugin-html";
import FullReload from "vite-plugin-full-reload";
import ViteImageOptimizer from "vite-plugin-image-optimizer";

export default defineConfig({
  plugins: [react()],
});
