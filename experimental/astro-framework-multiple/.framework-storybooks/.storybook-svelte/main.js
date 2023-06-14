import path from "path";
/** @type { import('@storybook/svelte-vite').StorybookConfig } */
const config = {
  stories: ["../stories/SvelteCounter.stories.js"],
  addons: ['@storybook/addon-essentials', '@storybook/addon-links', '@storybook/addon-interactions', '@storybook/addon-coverage'],
  framework: {
    name: "@storybook/svelte-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(config) {
    // Ensures that the cache directory does not conflict with other frameworks
    config.cacheDir = path.join(__dirname, './.vite-svelte')
    return config;
  },
};
export default config;
