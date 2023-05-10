import fs from 'fs-extra';
import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Set of templates which Vite can generate
 */
export const viteTemplates = [
  'vanilla',
  'vanilla-ts',
  'vue',
  'vue-ts',
  'react',
  'react-ts',
  // swc versions fighting with vite/each other
  // 'react-swc',
  // 'react-swc-ts',
  // not in storydocker yet
  // 'preact',
  // 'preact-ts',
  'lit',
  'lit-ts',
  'svelte',
  'svelte-ts',
];

/**
 * Snippet ensures vite uses a unique cache directory
 */
export const viteFinalContent = (dir = '.vite') => {
  return `
  async viteFinal(config, options) {
    // Ensures that the cache directory is inside the project directory
    config.cacheDir = path.join(__dirname, '../node_modules/${dir}')
    return config;
  },
};
export default config;
`;
};

/**
 * Generate a new Vite project
 */
export const generatorVite = (template) => {
  if (!template) {
    console.log('Please specify a Vite template');
    return;
  }
  if (!viteTemplates.includes(template)) {
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
 * add async viteFinal to storybook main file
 */
export const addViteFinal = async (mainFilePath) => {
  if (!mainFilePath || !fs.existsSync(mainFilePath)) {
    console.log('Please specify a valid storybook main file');
    return;
  }
  const mainFile = await fs.readFile(mainFilePath, 'utf8');
  const endOfMainRegex = /(,)\s*\};\s*export default config;/gm;
  let newFile = mainFile.replace(endOfMainRegex, `,${viteFinalContent()}`);
  newFile = `import path from 'path';\n${newFile}`;
  await fs.outputFile(mainFilePath, newFile);
};

/**
 * Get path to storybook main file
 */
export const getMainFilePath = async (cwd) => {
  if (!cwd) {
    console.error('Please specify a valid cwd to find storybook main file');
    return;
  }

  const sbConfigPath = path.join(cwd, '.storybook');
  const contents = await fs.readdir(sbConfigPath);
  let filename = 'main.js';
  contents.forEach((file) => {
    if (file.includes('main')) {
      filename = file;
    }
  });
  return path.join(sbConfigPath, filename);
};

/**
 * Add storybook config files, boilerplate stories & components and npm scripts
 */
export const generateViteStorybook = async (template, outputDir) => {
  if (!template) {
    console.log('Please specify a Vite template');
    return;
  }

  const optionsSet = new Set();
  if (template.includes('vanilla')) {
    optionsSet.add('--type');
    optionsSet.add('html');
  }
  optionsSet.add('--builder');
  optionsSet.add('vite');
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

    sb.on('close', async (code) => {
      console.log(`Storybook's cli closed with code ${code}`);
      const mainFilePath = await getMainFilePath(outputDir);
      console.log(mainFilePath)
      await addViteFinal(mainFilePath)
      resolveFunc();
    });
  });
};