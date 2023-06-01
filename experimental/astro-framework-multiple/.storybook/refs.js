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
    "ghpages": "/storydocker-examples/astro-framework-multiple/preact"
  },
  "astro_react": {
    "title": "react",
    "local": "http://localhost:6002",
    "ghpages": "/storydocker-examples/astro-framework-multiple/react"
  },
  "astro_svelte": {
    "title": "svelte",
    "local": "http://localhost:6003",
    "ghpages": "/storydocker-examples/astro-framework-multiple/svelte"
  },
  "astro_vue": {
    "title": "vue",
    "local": "http://localhost:6004",
    "ghpages": "/storydocker-examples/astro-framework-multiple/vue"
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
  const newRefs = {};
  for (const [key, value] of Object.entries(references)) {
    newRefs[key] = {
      title: value.title,
      url: value[urlKey],
    }
  }
  return newRefs;
}