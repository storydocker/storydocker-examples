import type { StorybookConfig } from "@storybook/vue3-vite";
import path from 'path';

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    '@storybook/addon-docs',
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  features: {
    buildStoriesJson: true,
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(config, options) {
    config.cacheDir = path.join(__dirname, '../node_modules/.vite')
    // Add your configuration here
    return config;
  },
};
export default config;
