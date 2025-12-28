import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  resolve: {
    alias: {
      // Alias to import engine code easily
      'lowfleet-engine': new URL('../engine/src', import.meta.url).pathname,
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
  },
  server: {
    open: true,
    port: 5173,
  },
});
