# Multi-framework composition Storybook with Astro and StoryDocker

This example is based on the [Astro framework-multiple template](https://github.com/withastro/astro/tree/latest/examples/framework-multiple). It is an instance of Astro with multiple frameworks (React, Preact, Svelte, and Vue).

In addition to the Astro application, Storybook dependencies come from [StoryDocker-storybook](https://www.npmjs.com/package/storydocker-storybook). 

The Storybook configuration for each child framework is in their respective directories within `./framework-storybooks`.  The composed parent composition Storybook's configuration is in `./storybook`.

## Running the multi-framework composition Storybook

`npm run sbook`

## Astro in Storybook

This is an experiment as there is [currently no Astro+Storybook integration](https://github.com/storybookjs/storybook/issues/18356).

When you run `sbook`, it first builds the Astro site into `./dist`, which I then added to the parent Storybook's `staticDirs` array. This gives Storybook access to the generated Astro assets. The assets are referenced by the .html files, which are imported as strings. The main Storybook is configured for HTML using `@storybook/html-vite`, which means the `render` function can render the HTML string. See [./src/stories/Astro.stories.js](./src/stories/Astro.stories.js).

<!--

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/storydocker/storydocker-examples/tree/main/experimental/astro-framework-multiple)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/storydocker/storydocker-examples/tree/main/experimental/astro-framework-multiple)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/storydocker/storydocker-examples?devcontainer_path=.devcontainer/astro-framework-multiple/devcontainer.json)

-->