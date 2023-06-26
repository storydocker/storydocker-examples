import { expect, jest } from '@storybook/jest';
import { within, userEvent } from '@storybook/testing-library';

/**
 * Extract elements from an HTMLElement
 */
export const getElements = async (canvasElement) => {
  const screen = within(canvasElement);

  return { 
    screen,
    canvasElement,
    container: await canvasElement.querySelector('.counter'),
    minus: await screen.queryByRole('button', { name: /-/i }),
    plus: await screen.queryByRole('button', { name: /\+/i }),
    count: await canvasElement.querySelector('pre'),
  };
}

/**
 * Ensure elements are present and have the correct attributes/content
 */
export const ensureElements = async (elements, args) => {
  const { minus, plus, count } = elements;
  await expect(minus).toBeTruthy();
  await expect(plus).toBeTruthy();
  await expect(count).toBeTruthy();
  await expect(count).toHaveTextContent('0');
}

/**
 * Test mouse interaction
 */
export const mouseInteraction = async (elements) => {
  const { minus, plus, count } = elements;
  const initCount = parseInt(count.textContent);
  await userEvent.click(plus);
  await expect(parseInt(count.textContent)).toBe(initCount + 1);
  await userEvent.click(plus);
  await expect(parseInt(count.textContent)).toBe(initCount + 2);
  await userEvent.click(minus);
  await expect(parseInt(count.textContent)).toBe(initCount + 1);
  await userEvent.click(minus);
  await expect(parseInt(count.textContent)).toBe(initCount);
  await userEvent.click(minus);
  await expect(parseInt(count.textContent)).toBe(initCount - 1);
  // reset user focus
  await minus.blur();
}

/**
 * Test keyboard interaction
 */
export const keyboardNavigation = async (elements) => {
  const { minus, plus, container } = elements;
  await document.activeElement.blur();
  await userEvent.tab({ focusTrap: container });
  await expect(minus).toHaveFocus();
  await userEvent.tab({ focusTrap: container });
  await expect(plus).toHaveFocus();
}

/**
 * Test keyboard interactions
 */
export const keyboardInteraction = async (elements) => {
  const { minus, plus, count, container } = elements;
  const initCount = parseInt(count.textContent);
  await plus.focus();
  await userEvent.keyboard('{enter}');
  await expect(parseInt(count.textContent)).toBe(initCount + 1);
  await userEvent.keyboard('{enter}');
  await expect(parseInt(count.textContent)).toBe(initCount + 2);
  await minus.focus();
  await userEvent.keyboard('{enter}');
  await expect(parseInt(count.textContent)).toBe(initCount + 1);
  await userEvent.keyboard('{enter}');
  await expect(parseInt(count.textContent)).toBe(initCount);
  await userEvent.keyboard('{enter}');
  await expect(parseInt(count.textContent)).toBe(initCount - 1);
  // reset user focus
  await minus.blur();
}