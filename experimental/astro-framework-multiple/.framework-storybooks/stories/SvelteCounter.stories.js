import SvelteCounter from '../../src/components/SvelteCounter.svelte';
import { getElements, ensureElements, mouseInteraction, keyboardNavigation, keyboardInteraction } from '../../src/components/tests/counter.shared-spec';

export default {
  title: 'Svelte',
  component: SvelteCounter,
};

export const Svelte = {
  args: {
    children: 'Svelte Counter'
  },
  play: async ({ args, canvasElement, step }) => {
    const elements = await getElements(canvasElement);
    step('svelte tests', async () => {
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

