import SvelteCounter from '../../src/components/SvelteCounter.svelte';

export default {
  title: 'Svelte',
  component: SvelteCounter,
};

export const Counter = {
  args: {
    children: 'Svelte Counter'
  },
};

