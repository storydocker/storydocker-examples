
import { within, userEvent } from '@storybook/testing-library';

import App from '../App';

const meta = {
  title: 'Example/App',
  component: App,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;

// More on interaction testing: https://storybook.js.org/docs/7.0/react/writing-tests/interaction-testing
export const Counter = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const countButton = await canvas.getByRole('button');
    await expect(countButton).toHaveTextContent(/count is 0/i);
    await userEvent.click(countButton);
    await expect(countButton).toHaveTextContent(/count is 1/i);
  },
};
