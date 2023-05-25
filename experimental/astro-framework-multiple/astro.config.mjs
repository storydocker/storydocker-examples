import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import react from '@astrojs/react';
import svelte from '@astrojs/svelte';
import vue from '@astrojs/vue';
import solid from '@astrojs/solid-js';

let assetsPrefix = '/';
if (process.env.DEPLOY_DEST === 'ghpages') {
  assetsPrefix = '/storydocker-examples/astro-framework-multiple/';
}

// https://astro.build/config
export default defineConfig({
	// Enable many frameworks to support all different kinds of components.
	integrations: [preact(), react(), svelte(), vue(), solid()],
  build: {
    assetsPrefix
  }
});
