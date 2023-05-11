import path from 'path';
import { fileURLToPath } from 'url';
import { generateStoryDockerExamples } from './generator/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

generateStoryDockerExamples(__dirname);