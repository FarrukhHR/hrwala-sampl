import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";

export default defineConfig({
  base: "./",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rolldownOptions: {
      input: {
        discover: fileURLToPath(new URL("./index.html", import.meta.url)),
        jobs: fileURLToPath(new URL("./jobs.html", import.meta.url)),
        jobPortal: fileURLToPath(new URL("./job-portal.html", import.meta.url)),
      },
    },
  },
});
