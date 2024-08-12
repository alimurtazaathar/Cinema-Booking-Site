import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: 'localhost', // or 0.0.0.0
    port: 3000, // or your preferred port
    strictPort: true,
  },
  hmr: {
    protocol: 'ws', // WebSocket protocol
    host: 'localhost',
  },
});