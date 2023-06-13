import { PreactCounter } from '../../src/components/PreactCounter';
import { getElements, ensureElements, mouseInteraction, keyboardNavigation, keyboardInteraction } from '../../src/components/tests/counter.shared-spec';

export default {
  title: 'Preact',
  component: PreactCounter,
};

export const Preact = {
  args: {
    children: 'Preact Counter'
  },
  play: async ({ args, canvasElement, step }) => {
    const elements = await getElements(canvasElement);
    step('preact tests', async () => {
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

