import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/my-portfolio/',   // 👈 yeh add karo (repo name ke hisaab se)
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
