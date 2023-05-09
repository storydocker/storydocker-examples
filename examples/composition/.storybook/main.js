import path from "path";
import refs from "./refs.js";

/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ['@storybook/addon-essentials', '@storybook/addon-links', '@storybook/addon-interactions', '@storybook/addon-coverage'],
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  refs,
  features: {
    buildStoriesJson: true, // 👈 Enable this to build the stories.json file
  },
  core: {
    disableTelemetry: true,
    crossOriginIsolated: false,
  },
  async viteFinal(config, options) {
    // Ensures that the cache directory is inside the project directory
    config.cacheDir = path.join(__dirname, '../node_modules/.vite')
    return config;
  },
};
export default config;
