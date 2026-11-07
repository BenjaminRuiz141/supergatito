import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// base './' permite que funcione en GitHub Pages sin importar el nombre del repositorio
export default defineConfig({
  base: './',
  plugins: [react()],
})
