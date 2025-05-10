import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist', // Vercel'in doğru çıxış qovluğuna baxması üçün
    rollupOptions: {
      input: 'index.html', // Vercel'in uyğun bildiyi giriş faylı
    },
  },
});
