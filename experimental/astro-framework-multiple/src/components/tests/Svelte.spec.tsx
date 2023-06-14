import { render } from '@testing-library/svelte';
import { describe, it, assert, expect } from 'vitest';

import SvelteCounter from '@/components/SvelteCounter.svelte';
import { getElements, ensureElements, mouseInteraction, keyboardNavigation, keyboardInteraction } from '@/components/tests/counter.shared-spec';

describe('Svelte', () => {
  describe('Counter', () => {
    it('ensure elements', async () => {
      const rendered = render(SvelteCounter);
      const elements = await getElements(rendered.container);
      await ensureElements(elements);
    });
    it('mouse interaction', async () => {
      const rendered = render(SvelteCounter);
      const elements = await getElements(rendered.container);
      await mouseInteraction(elements);
    });
    it('keyboard navigation', async () => {
      const rendered = render(SvelteCounter);
      const elements = await getElements(rendered.container);
      await keyboardNavigation(elements);
    });
    it('keyboard interaction', async () => {
      const rendered = render(SvelteCounter);
      const elements = await getElements(rendered.container);
      await keyboardInteraction(elements);
    });
  });
})