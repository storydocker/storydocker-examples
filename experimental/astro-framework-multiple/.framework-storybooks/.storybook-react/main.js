import path from "path";
/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../stories/ReactCounter.stories.js"],
  addons: ['@storybook/addon-essentials', '@storybook/addon-links', '@storybook/addon-interactions', '@storybook/addon-coverage'],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(config) {
    // Ensures that the cache directory does not conflict with other frameworks
    config.cacheDir = path.join(__dirname, './.vite-react')
    return config;
  },
};
export default config;
