import VueCounter from '../../src/components/VueCounter.vue';
import { getElements, ensureElements, mouseInteraction, keyboardNavigation, keyboardInteraction } from '../../src/components/tests/counter.shared-spec';

export default {
  title: 'Vue',
  component: VueCounter,
};

export const Vue = {
  render: () => ({
    components: {
      VueCounter,
    },
    template: '<vue-counter>Vue Counter</vue-counter>',
  }),
  play: async ({ args, canvasElement, step }) => {
    const elements = await getElements(canvasElement);
    step('vue tests', async () => {
      await step('ensure elements', async () => {
        await ensureElements(elements);
      });
      await step('mouse interaction', async () => {
        await mouseInteraction(elements);
      });
      await step('keyboard navigation', async () => {
        await keyboardNavigation(elements);
      });
      await step('keyboard interaction', async () => {
        await keyboardInteraction(elements);
      });
    });
  },
};

