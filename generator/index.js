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
 * Generate npm scripts to run all examples
 * @todo: generate docker-compose.yml for use in StoryDocker
 */
export const getExamples = async () => {
  const dirs = await fs.readdir(examplesDir);
  const meows =  dirs.filter((dir) => !dir.startsWith('.')).filter((dir) => dir.includes('vite'));
  const waitOns = new Set();
  const examples = new Set();
  const workspaces = new Set();
  const refs = {};
  meows.forEach((m, idx) => {
    const port = 6001 + idx;
    waitOns.add(`npx wait-on http://localhost:${port}`);
    const machine = m.replace(/-/g, '_');
    refs[machine] = {
      title: m,
      url: `http://localhost:${port}`,
      expanded: false,
    }
    examples.add(`"npm run storybook -workspace examples/${m} -- --port ${port} --no-open"`);
    workspaces.add(`"npm run storybook -workspace workspaces/${m} -- --port ${port} --no-open"`);
    generateUiTestConfig(m, `examples/${m}`, port);
  })

  fs.outputFileSync(
    path.join(compositionDir, '.storybook/refs.js'),
    `export default ${JSON.stringify(refs, null, 2)}`
  );
  const rootDir = path.join(__dirname, '../');
  const packageManager = new JsPackageManager({ cwd: rootDir });
  const initialPackageJson = await packageManager.retrievePackageJson();
  initialPackageJson.scripts['local-children'] = `npx concurrently ${Array.from(examples).join(' ')}`;
  initialPackageJson.scripts['local-parent'] = Array.from(waitOns).join(' && ') + ' && npm run storybook -workspace examples/composition -- --port 2002';
  initialPackageJson.scripts['local'] = 'npx concurrently "npm run local-children" "npm run local-parent"';

  try {
    await fs.outputFile(path.join(rootDir, './package.json'), JSON.stringify(initialPackageJson, null, 2))
    console.log('Updated project package metadata');
  } catch (err) {
    throw new Error(err);
  }
}

// getExamples()