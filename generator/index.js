import fs from 'fs-extra';
import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import { JsPackageManager } from '@storybook/cli';

import { generateUiTestConfig } from './github.js';
import { viteTemplates, generatorVite, generateViteStorybook } from './vite.js';
import { astroTemplates, generatorAstro, generateAstroStorybook } from './astro.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const examplesDir = path.join(__dirname, '../examples');
const compositionDir = path.join(__dirname, '../examples/composition');

const ghpagesRoot = '/storydocker-examples';

/**
 * Update metadata in package.json
 */
export const pkgContent = async (outputDir) => {
  if (!outputDir) {
    console.error('Need example directory');
    return;
  }
  const packageManager = new JsPackageManager({ cwd: outputDir });
  const initialPackageJson = await packageManager.retrievePackageJson();
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
 * Generate all examples
 */
export const generateStoryDockerExamples = async (cwd = __dirname) => {
  for (const template of viteTemplates) {
    const projectDir = await generatorVite(template);
    const initialDir = path.join(cwd, projectDir);
    const outDir = path.join(examplesDir, projectDir);
    await generateViteStorybook(template, projectDir);
    await pkgContent(projectDir);
    await generatorStoryDocker(projectDir);
    try {
      await fs.move(initialDir, outDir, { overwrite: true })
      console.log(`"${template}" project setup complete and moved to ${outDir}.`);
    } catch (err) {
      console.error(err)
    }
  }
  // for (const template of astroTemplates) {
  //   const projectDir = await generatorAstro(template);
  //   const initialDir = path.join(cwd, projectDir);
  //   const outDir = path.join(examplesDir, projectDir);
  //   await generateAstroStorybook(template, projectDir);
  //   await pkgContent(projectDir);
  //   await generatorStoryDocker(projectDir);
  //   try {
  //     await fs.move(initialDir, outDir, { overwrite: true })
  //     console.log(`"${template}" project setup complete and moved to ${outDir}.`);
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }
};

/**
 * StorybookRefs content related to a Storybook instance
 * @typedef {Object} StorybookReferences
 * @property {string} title - Title of the Storybook instance
 * @property {string} directory - Directory of the Storybook instance
 * @property {number} port - Port number for the Storybook instance
 * @property {string} local - Local URL with port for the Storybook instance
 * @property {string} ghpages - GitHub Pages path for the Storybook instance
 * @property {boolean} expanded - Whether the Storybook name/contents are initially expanded in the UI
 */

/**
 * 
 * @param {string} booksDir - directory containing example projects
 * @param {number} initialPort - port number to start iteration
 * @returns {Object.<string, StorybookReferences>} set of content about example Storybooks
 */
export const generateReferences = async (booksDir = examplesDir, initialPort = 6001) => {
  const dirs = await fs.readdir(booksDir);
  const viteExamples = dirs.filter((dir) => !dir.startsWith('.')).filter((dir) => dir.includes('vite'));
  const viteReferences = {};
  viteExamples.forEach((m, idx) => {
    const port = initialPort + idx;
    const machine = m.replace(/-/g, '_');
    viteReferences[machine] = {
      title: m,
      directory: m,
      port,
      local: `http://localhost:${port}`,
      ghpages: `${ghpagesRoot}/${m}`,
      expanded: false,
    }
  });
  return viteReferences;
}

/**
 * Save references for vite composition Storybook
 */
export const generateCompositionRefsFile = async (references = {}) => {
  const fileHeader = '// This file is auto-generated by <root>/generator/index.js, manual edits will be overwritten\n\n';
  try {
    await fs.outputFile(
      path.join(compositionDir, '.storybook/refs.js'),
      `${fileHeader}export default ${JSON.stringify(references, null, 2)}`
    );
    console.log('Saved composition refs file');
  } catch (err) {
    throw new Error(err);
  }
}

export const generatePackageScripts = async (references = {}) => {
  const rootDir = path.join(__dirname, '../');
  const buildDirRelative = '../../ghpages';
  const waitOns = new Set();
  const examples = new Set();
  const builders = new Set();
  for (const [key, value] of Object.entries(references)) {
    waitOns.add(`npx wait-on ${value.local}`);
    examples.add(`"npm run storybook -workspace examples/${value.directory} -- --port ${value.port} --no-open"`);
    builders.add(`npm run build-storybook -workspace examples/${value.directory} -- --output-dir ${buildDirRelative}/${value.directory}`);
    generateUiTestConfig(value.directory, `examples/${value.directory}`, value.port);
  }
  const packageManager = new JsPackageManager({ cwd: rootDir });
  const initialPackageJson = await packageManager.retrievePackageJson();
  initialPackageJson.scripts['local-children'] = `npx concurrently ${Array.from(examples).join(' ')}`;
  initialPackageJson.scripts['local-parent'] = Array.from(waitOns).join(' && ') + ' && npm run storybook -workspace examples/composition -- --port 2002';
  initialPackageJson.scripts['local'] = 'npx concurrently "npm run local-children" "npm run local-parent"';
  initialPackageJson.scripts['build-children'] = `${Array.from(builders).join(' && ')}`;
  initialPackageJson.scripts['build-parent'] = `npm run build-storybook -workspace examples/composition -- --output-dir ${buildDirRelative}/composition`;
  initialPackageJson.scripts['prebuild'] = 'mkdir -p ghpages & npm run build-parent';
  initialPackageJson.scripts['build'] = 'npm run build-children';

  try {
    await fs.outputFile(path.join(rootDir, './package.json'), JSON.stringify(initialPackageJson, null, 2))
    console.log('Updated project package metadata');
  } catch (err) {
    throw new Error(err);
  }
}

/**
 * Generate npm scripts to run all examples
 * @todo: generate docker-compose.yml for use in StoryDocker
 */
export const getExamples = async () => {
  const workspaces = new Set();
  const viteReferences = await generateReferences(examplesDir, 6001);
  generatePackageScripts(viteReferences);
  generateCompositionRefsFile(viteReferences);
  for (const [key, value] of Object.entries(viteReferences)) {
    workspaces.add(`"npm run storybook -workspace workspaces/${value.directory} -- --port ${value.port} --no-open"`);
    generateUiTestConfig(value.directory, `examples/${value.directory}`, value.port);
  }
}

getExamples()