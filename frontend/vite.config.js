import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
        //we’re setting up a proxy for requests starting with /api.
        //Any requests that match this pattern will be redirected to
        //http:localhost:3000.
      },
    },
  },
  plugins: [react()],
});
