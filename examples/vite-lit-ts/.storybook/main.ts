import path from 'path';
import type { StorybookConfig } from "@storybook/web-components-vite";
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ['@storybook/addon-essentials', '@storybook/addon-links', '@storybook/addon-interactions', '@storybook/addon-coverage'],
  framework: {
    name: "@storybook/web-components-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(config, options) {
    // Ensures that the cache directory is inside the project directory
    config.cacheDir = path.join(__dirname, '../node_modules/.vite')
    return config;
  },
};
export default config;

