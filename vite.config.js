import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import defaultConf from "./config.js";

export default defineConfig({
  base: defaultConf.base,
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
    extensions: ["*", ".js", ".json", ".vue"],
  },
  server: {
    open: true,
    host: "0.0.0.0",
    port: 4200,
    https: false,
  },
  build: {
    // 浏览器兼容性 ‘esnext’ | 'modules'
    target: "modules",
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "index.html"),
        about: path.resolve(__dirname, "about/index.html"),
        detail: path.resolve(__dirname, "detail/index.html"),
      },
    },
  },
});
