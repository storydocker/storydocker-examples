import fs from 'fs-extra';
import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Set of templates which Astro can generate
 */
export const astroTemplates = [
  'framework-multiple',
];

/**
 * Generate a new Astro project
 */
export const generatorAstro = (template) => {
  if (!template) {
    console.log('Please specify an Astro template');
    return;
  }
  if (!astroTemplates.includes(template)) {
    console.log(`Invalid template "${template}"`);
    return;
  }
  const projectDir = `astro-${template}`;
  console.log('Generating an `Astro` app in', projectDir);
  const flags = [
    // do not show houston animation
    '--skip-houston',
    // do not install dependencies
    '--no-install',
    // do not create git repo
    '--no-git',
    // easy on the typescript
    '--typescript',
    'relaxed'

  ]
  const sb = spawn('npm', ['create', 'astro@latest', '--', projectDir, '--template', template, ...flags]);

  return new Promise((resolveFunc) => {
    sb.stdout.on('data', async (data) => {
      if (data.includes('Scaffolding project in')) {
        console.log('Astro scaffolding step complete');
      }
    });

    sb.stderr.on('data', (data) => {
      console.error(data.toString());
    });

    sb.on('close', async (code) => {
      console.log(`Astro's cli exited with code ${code}`);
      resolveFunc(projectDir);
    });
  });
};

/**
 * Add storybook config files, boilerplate stories & components and npm scripts
 */
export const generateAstroStorybook = async (template, outputDir) => {
  if (!template) {
    console.log('Please specify a Astro template');
    return;
  }

  const optionsSet = new Set();
  if (template.includes('framework-multiple')) {
    optionsSet.add('--type');
    optionsSet.add('html');
  }
  optionsSet.add('--builder');
  optionsSet.add('vite');
  const optionsArr = Array.from(optionsSet);
  const sb = spawn('npx', ['storyD', 'add-storybook', outputDir].concat(optionsArr));
  return new Promise((resolveFunc) => {
    sb.stdout.on('data', (data) => {
      console.log(data.toString());
      if (data.includes('Adding Storybook support to')) {
        console.log(data.toString().trim());
      }
    });

    sb.stderr.on('data', (data) => {
      console.error(data.toString());
    });

    sb.on('close', async (code) => {
      console.log(`Storybook's cli closed with code ${code}`);
      resolveFunc();
    });
  });
};
