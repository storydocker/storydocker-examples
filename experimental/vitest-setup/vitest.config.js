/// <reference types="vitest" />
import { defineConfig } from 'vite'
import {svelte} from '@sveltejs/vite-plugin-svelte';
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [svelte({hot: !process.env.VITEST}), vue()],
	test: {
    alias: {
      '@/': new URL('./src/', import.meta.url).pathname,
    },
    environment: 'jsdom',
    setupFiles: ['storydocker-vitest/tests/setup.js'],
    coverage: {
      all: true,
      include: ['src/**/*.jsx', 'src/**/*.tsx', 'src/**/*.vue', 'src/**/*.svelte'],
      exclude: ['src/main.jsx', 'src/main.tsx'],
      provider: 'istanbul',
      reporter: ['text', 'json', 'html'],
    },
	},
});