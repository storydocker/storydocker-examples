import path from "path";
/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: ["../stories/VueCounter.stories.js"],
  addons: ['@storybook/addon-essentials', '@storybook/addon-links', '@storybook/addon-interactions', '@storybook/addon-coverage'],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(config) {
    // Ensures that the cache directory does not conflict with other frameworks
    config.cacheDir = path.join(__dirname, '../../node_modules/.vite-vue')
    return config;
  },
};
export default config;
