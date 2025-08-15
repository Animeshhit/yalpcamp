import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/v1": {
        target:
          "http://yalpcamp-env.eba-vc8pqatz.ap-south-1.elasticbeanstalk.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
