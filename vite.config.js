import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: 'gh_website',
  resolve: {
    alias: {
      '#src': '/src',
      '#root': '/'
    }
  }
})