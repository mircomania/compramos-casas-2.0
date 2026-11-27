import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      // Express sirve el backend de desarrollo en un puerto separado.
      deny: ['.env', '.env.*', '*.{crt,pem}', '**/backend/**'],
    },
  },
})
