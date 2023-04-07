import path from 'path';

const coverageConfig = {
  istanbul: {
    cypress: true,
  }
};
const config = {
  stories: ["../src/stories/**/*.mdx", "../src/stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    '@storybook/addon-docs',
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
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
