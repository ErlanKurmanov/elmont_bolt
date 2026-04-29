import { defineConfig } from 'vite';

export default defineConfig({
  // No plugins needed — pure HTML + Tailwind via PostCSS
  build: {
    outDir: 'dist',
  },
});
