/**
 * @fileoverview StorybookRefs content generated according to destination environment
 */

/**
 * StorybookRefs content for one Storybook instance
 * @typedef {Object} StorybookReferences
 * @property {string} title - Title of the Storybook instance
 * @property {string} local - Local URL with port for the Storybook instance
 * @property {string} ghpages - GitHub Pages path for the Storybook instance
 */

/**
 * StorybookRefs content for all Storybook instances
 * @typedef {Object.<string, StorybookReferences>} StorybookRefs
 */
export const references = {
  "astro_preact": {
    "title": "preact",
    "local": "http://localhost:6001",
    "ghpages": "/storydocker-examples/astro-framework-multiple/preact",
    "chromatic": "https://64ad68bd58a29190829b21c9-ldyqiukppu.chromatic.com"
  },
  "astro_react": {
    "title": "react",
    "local": "http://localhost:6002",
    "ghpages": "/storydocker-examples/astro-framework-multiple/react",
    "chromatic": "https://645cf8cc6c66c97beb256bf6-aotbylwlaj.chromatic.com"
  },
  "astro_svelte": {
    "title": "svelte",
    "local": "http://localhost:6003",
    "ghpages": "/storydocker-examples/astro-framework-multiple/svelte",
    "chromatic": "https://64ad7443637336c6b8b81971-wygblehcro.chromatic.com"
  },
  "astro_vue": {
    "title": "vue",
    "local": "http://localhost:6004",
    "ghpages": "/storydocker-examples/astro-framework-multiple/vue",
    "chromatic": "https://64ad74a7637336c6b8b81b84-bkvrxzvlxp.chromatic.com/"
  },
}



/**
 * Generates a Storybook ref (`{ title: string; url: string }`) for each child storybook. 
 *  `url` is chosen based on destination environment
 * @returns {Object.<string, import('@storybook/core-common').StorybookRefs>}
 */
export const refs = (config, { configType }) => {
  let urlKey = 'ghpages';
  if (configType === 'DEVELOPMENT') {
    urlKey = 'local';
  }
  if (process.env.DEPLOY_DEST === 'chromatic') {
    urlKey = 'chromatic';
  }
  const newRefs = {};
  for (const [key, value] of Object.entries(references)) {
    newRefs[key] = {
      title: value.title,
      url: value[urlKey],
    }
  }
  return newRefs;
}
