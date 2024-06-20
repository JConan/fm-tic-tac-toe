import { defineConfig } from 'vitest/config'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => ({
  plugins: [svelte()],
  base:  mode === 'production' ? '/fm-tic-tac-toe/' : '/',
  test: {
    globals: true,
    environment: "jsdom",
    include: ['src/**/*.{test,spec}.ts'],
    setupFiles: './vitest-setup.ts'
  },
  resolve: {
    alias: {
      $lib: path.resolve('./src/lib'),
      $stores: path.resolve('./src/stores'),
      $assets: path.resolve('./src/assets')
    }
  }
}))
