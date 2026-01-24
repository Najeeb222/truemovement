import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "path";



export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@contexts": path.resolve(__dirname, "./src/contexts"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@navigation": path.resolve(__dirname, "./src/navigation"),
      "@types": path.resolve(__dirname, "./src/types"),
      "@constant": path.resolve(__dirname, "./src/constant"),
      "@features": path.resolve(__dirname, "./src/features"),
      "@shared": path.resolve(__dirname, "./src/shared"),
      "@languages": path.resolve(__dirname, "./src/languages"),
      "@hocs": path.resolve(__dirname, "./src/hocs"),
      "@mui/styled-engine": "@mui/styled-engine-sc",
    },
  },
});
