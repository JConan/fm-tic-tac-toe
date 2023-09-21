import { defineConfig } from 'vitest/config'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  test: {
    globals: true,
    environment: "jsdom",
    include: ['src/**/*.{test,spec}.ts'],
    setupFiles: './vitest-setup.ts'
  }
})
