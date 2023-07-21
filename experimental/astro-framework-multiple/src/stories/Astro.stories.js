import './astro.css';
import { within, userEvent } from '@storybook/testing-library';

// adding `?raw` allows importing HTML as a string
import astroPage from '../../dist/index.html?raw';
import { getElements, ensureElements, mouseInteraction, keyboardNavigation, keyboardInteraction } from '../components/tests/counter.shared-spec';



export default {
  title: 'Astro',
  render: () => {
    return astroPage;
  },
};

/**
 * A framwork test suite
 * @todo: `userEvent` is not triggering the counter to change,
 *  but navigation works, needs investigation as to why js works 
 *  but not for userEvent via testing-library
 */
const frameworkTest = async (canvasElement, step, frameworkName) => {
  const heading = within(canvasElement).queryByText(`Hello from ${frameworkName}!`);
  const island = heading.closest('astro-island');
  const elements = await getElements(island);
  await step(`${frameworkName} tests`, async () => {
    await step('ensure elements', async () => {
      await ensureElements(elements);
    });
    // @TODO: keyboard navigation is broken in Astro dist
    // await step('keyboard navigation', async () => {
    //   await keyboardNavigation(elements);
    // });
    // @TODO: mouse interaction is broken in Astro dist
    // await step('mouse interaction', async () => {
    //   await mouseInteraction(elements);
    // });
    // @TODO: keyboard interaction is broken in Astro
    // await step('keyboard interaction', async () => {
    //   await keyboardInteraction(elements);
    // });
  });
}

export const Astro = {
  play: async ({ args, canvasElement, step }) => {
    await frameworkTest(canvasElement, step, 'React');
    await frameworkTest(canvasElement, step, 'Vue');
    await frameworkTest(canvasElement, step, 'Preact');
    await frameworkTest(canvasElement, step, 'Svelte');
  }
};

