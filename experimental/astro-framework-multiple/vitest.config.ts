/// <reference types="vitest" />
import { getViteConfig } from 'astro/config';

import config from 'storydocker-vitest/vitest.config.js'

export default getViteConfig({
  ...config,
	test: {
    ...config.test,
    alias: {
      '@/': new URL('./src/', import.meta.url).pathname,
    },
  }
});