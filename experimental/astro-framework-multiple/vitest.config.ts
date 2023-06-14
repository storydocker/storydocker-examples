/// <reference types="vitest" />
import { getViteConfig } from 'astro/config';
import {svelte} from '@sveltejs/vite-plugin-svelte';
import vue from '@vitejs/plugin-vue'

export default getViteConfig({
  plugins: [svelte({hot: !process.env.VITEST}), vue()],
	test: {
    alias: {
      '@/': new URL('./src/', import.meta.url).pathname,
    },
		/* for example, use global to avoid globals imports (describe, test, expect): */
		// globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setup.js'],
	},
});