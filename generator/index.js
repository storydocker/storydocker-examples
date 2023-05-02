import fs from 'fs-extra';
import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import { JsPackageManager } from '@storybook/cli';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const examplesDir = path.join(__dirname, '../examples');

/**
 * Set of templates which Vite can generate
 */
export const availableTemplates = [
  'vanilla',
  'vanilla-ts',
  'vue',
  'vue-ts',
  'react',
  'react-ts',
  'react-swc',
  'react-swc-ts',
  'preact',
  'preact-ts',
  'lit',
  'lit-ts',
  'svelte',
  'svelte-ts',
];

/**
 * Update metadata in package.json
 */
export const pkgContent = async (outputDir) => {
  if (!outputDir) {
    console.error('Need example directory');
    return;
  }
  const packageManager = new JsPackageManager({ cwd: outputDir });
  const initialPackageJson = packageManager.retrievePackageJson();
  initialPackageJson.name = `@storydocker-examples/${initialPackageJson.name}`;
  try {
    await fs.outputFile(path.join(outputDir, './package.json'), JSON.stringify(initialPackageJson, null, 2))
    console.log('Updated project package metadata');
  } catch (err) {
    throw new Error(err);
  }
}

/**
 * Add storydocker docker files
 */
export const generatorStoryDocker = async (outputDir) => {
  if (!outputDir) {
    console.error('Need project directory');
    return;
  }
  const sb = spawn('npx', ['storyD', 'add-storydocker', outputDir]);
  return new Promise((resolveFunc) => {
    sb.stdout.on('data', (data) => {
      console.log(data.toString().trim());
    });

    sb.stderr.on('data', (data) => {
      console.error(data.toString());
    });

    sb.on('close', (code) => {
      resolveFunc();
    });
  });
};

/**
 * Add storybook config files, boilerplate stories & components and npm scripts
 */
export const generatorStorybook = async (template, outputDir) => {
  if (!template) {
    console.log('Please specify a Vite template');
    return;
  }

  const optionsSet = new Set();
  if (template.includes('vanilla')) {
    optionsSet.add('--type');
    optionsSet.add('html');
  }
  const optionsArr = Array.from(optionsSet);
  const sb = spawn('npx', ['storyD', 'add-storybook', outputDir].concat(optionsArr));
  return new Promise((resolveFunc) => {
    sb.stdout.on('data', (data) => {
      if (data.includes('Adding Storybook support to')) {
        console.log(data.toString().trim());
      }
    });

    sb.stderr.on('data', (data) => {
      console.error(data.toString());
    });

    sb.on('close', (code) => {
      console.log(`Storybook's cli closed with code ${code}`);
      resolveFunc();
    });
  });
};

/**
 * Generate a new Vite project
 */
export const generatorVite = (template) => {
  if (!template) {
    console.log('Please specify a Vite template');
    return;
  }
  if (!availableTemplates.includes(template)) {
    console.log(`Invalid template "${template}"`);
    return;
  }
  const projectDir = `vite-${template}`;
  console.log('Generating a `Vite` app in', projectDir);
  const sb = spawn('npm', ['create', 'vite@latest', projectDir, '--', '--template', template]);

  return new Promise((resolveFunc) => {
    sb.stdout.on('data', async (data) => {
      if (data.includes('Scaffolding project in')) {
        console.log('Vite scaffolding step complete');
      }
    });

    sb.stderr.on('data', (data) => {
      console.error(data.toString());
    });

    sb.on('close', async (code) => {
      console.log(`Vite's cli exited with code ${code}`);
      resolveFunc(projectDir);
    });
  });
};

/**
 * Generate all examples
 */
export const generateStoryDockerExamples = async (cwd = __dirname) => {
  for (const template of availableTemplates) {
    const projectDir = await generatorVite(template);
    const initialDir = path.join(cwd, projectDir);
    const outDir = path.join(examplesDir, projectDir);
    await generatorStorybook(template, projectDir);
    await pkgContent(projectDir);
    await generatorStoryDocker(projectDir);
    try {
      await fs.move(initialDir, outDir, { overwrite: true })
      console.log(`"${template}" project setup complete and moved to ${outDir}.`);
    } catch (err) {
      console.error(err)
    }
  }
};
