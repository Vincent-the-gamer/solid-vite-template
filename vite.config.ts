import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    host: "0.0.0.0",
    port: 3000
  },
  build: {
    cssCodeSplit: true, // 拆分css打包
    rollupOptions: {
      output: {
        // 拆分js打包
        manualChunks: (id: any) => {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      }
    }
  },
});