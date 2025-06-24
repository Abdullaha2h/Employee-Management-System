import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'employee-management-system' with your actual GitHub repo name
export default defineConfig({
  base: '/Employee-Management-System/',
  plugins: [react()],
})