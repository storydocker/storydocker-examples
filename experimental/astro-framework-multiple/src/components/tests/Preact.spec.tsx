import { h } from 'preact';
import { render } from '@testing-library/preact';
import { describe, it, assert, expect } from 'vitest';

import { PreactCounter } from '@/components/PreactCounter';
import { getElements, ensureElements, mouseInteraction, keyboardNavigation, keyboardInteraction } from '@/components/tests/counter.shared-spec';

describe('Preact', () => {
  describe('Counter', () => {
    it('ensure elements', async () => {
      const rendered = render(<PreactCounter/>);
      const elements = await getElements(rendered.container);
      await ensureElements(elements);
    });
    it('mouse interaction', async () => {
      const rendered = render(<PreactCounter/>);
      const elements = await getElements(rendered.container);
      await mouseInteraction(elements);
    });
    it('keyboard navigation', async () => {
      const rendered = render(<PreactCounter/>);
      const elements = await getElements(rendered.container);
      await keyboardNavigation(elements);
    });
    it('keyboard interaction', async () => {
      const rendered = render(<PreactCounter/>);
      const elements = await getElements(rendered.container);
      await keyboardInteraction(elements);
    });
  });
})