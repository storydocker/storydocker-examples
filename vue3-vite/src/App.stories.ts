
import { within, userEvent } from '@storybook/testing-library';
import type { Meta, StoryObj } from '@storybook/vue3';
import { expect, jest } from '@storybook/jest';

// @ts-ignore
global.expect = expect;
// @ts-ignore
global.jest = jest;

import App from './App.vue';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/vue/writing-stories/introduction
const meta = {
  title: 'Vue3/App',
  component: App,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/7.0/vue/writing-docs/docs-page
  tags: ['autodocs'],
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof meta>;


// More on interaction testing: https://storybook.js.org/docs/7.0/react/writing-tests/interaction-testing
export const Counter = {
  // @ts-ignore
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const countButton = await canvas.getByRole('button');
    await expect(countButton).toHaveTextContent(/count is 0/i);
    await userEvent.click(countButton);
    await expect(countButton).toHaveTextContent(/count is 1/i);
  },
};
