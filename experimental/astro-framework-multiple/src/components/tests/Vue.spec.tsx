import { render } from '@testing-library/vue';
import { describe, it, assert, expect } from 'vitest';

import VueCounter from '@/components/VueCounter.vue';
import { getElements, ensureElements, mouseInteraction, keyboardNavigation, keyboardInteraction } from '@/components/tests/counter.shared-spec';

describe('Vue', () => {
  describe('Counter', () => {
    it('ensure elements', async () => {
      const rendered = render(VueCounter);
      const elements = await getElements(rendered.container);
      await ensureElements(elements);
    });
    it('mouse interaction', async () => {
      const rendered = render(VueCounter);
      const elements = await getElements(rendered.container);
      await mouseInteraction(elements);
    });
    it('keyboard navigation', async () => {
      const rendered = render(VueCounter);
      const elements = await getElements(rendered.container);
      await keyboardNavigation(elements);
    });
    it('keyboard interaction', async () => {
      const rendered = render(VueCounter);
      const elements = await getElements(rendered.container);
      await keyboardInteraction(elements);
    });
  });
})