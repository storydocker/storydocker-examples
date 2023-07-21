import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import { cleanup as svelteCleanup } from '@testing-library/svelte';
import { cleanup as preactCleanup } from '@testing-library/preact';
import { cleanup as vueCleanup } from '@testing-library/vue'
import matchers from '@testing-library/jest-dom/matchers';
import React from 'react';
import ReactDOM from 'react-dom';
window.React = React

expect.extend(matchers);

afterEach(() => {
  cleanup();
  svelteCleanup();
  preactCleanup();
  vueCleanup();
});