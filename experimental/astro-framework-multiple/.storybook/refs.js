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
    "ghpages": "/preact"
  },
  "astro_react": {
    "title": "react",
    "local": "http://localhost:6002",
    "ghpages": "/react"
  },
  "astro_svelte": {
    "title": "svelte",
    "local": "http://localhost:6003",
    "ghpages": "/svelte"
  },
  "astro_vue": {
    "title": "vue",
    "local": "http://localhost:6004",
    "ghpages": "/vue"
  },
}

/**
 * Generates `CoreCommon_StorybookRefs` for each child storybook according to the environment
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