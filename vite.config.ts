import { defineConfig } from "vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    minify: true,
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "FlexUI",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "styled-components"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
});
