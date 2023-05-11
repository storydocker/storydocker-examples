import path from "path";
/** @type { import('@storybook/preact-vite').StorybookConfig } */
const config = {
  stories: ["../stories/PreactCounter.stories.js"],
  addons: ['@storybook/addon-essentials', '@storybook/addon-links', '@storybook/addon-interactions', '@storybook/addon-coverage'],
  framework: {
    name: "@storybook/preact-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(config) {
    // Ensures that the cache directory does not conflict with other frameworks
    config.cacheDir = path.join(__dirname, '../../node_modules/.vite-preact')
    return config;
  },
};
export default config;
