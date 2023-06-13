import { Counter as ReactCounter } from '../../src/components/ReactCounter';
import { getElements, ensureElements, mouseInteraction, keyboardNavigation, keyboardInteraction } from '../../src/components/tests/counter.shared-spec';

export default {
  title: 'React',
  component: ReactCounter,
};

export const React = {
  args: {
    children: 'React Counter'
  },
  play: async ({ args, canvasElement, step }) => {
    const elements = await getElements(canvasElement);
    step('react tests', async () => {
      await step('ensure elements', async () => {
        await ensureElements(elements, args);
      });
      await step('mouse interaction', async () => {
        await mouseInteraction(elements, args);
      });
      await step('keyboard navigation', async () => {
        await keyboardNavigation(elements, args);
      });
      await step('keyboard interaction', async () => {
        await keyboardInteraction(elements, args);
      });
    });
  },
};

