import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';
import { resolve } from "path";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    outDir: 'build',
    rollupOptions: {
      input: {
        main: './index.html',
        background: resolve(__dirname, "src/background.ts"),
        "content-scripts/read-page": resolve(
          __dirname,
          "src/content-scripts/read-page.ts"
        ),
      },
      output: {
        entryFileNames: (chunkInfo) => {
          return chunkInfo.name === 'background' ? 'background.js' : '[name].js';
        },
      },
    },
  },
});