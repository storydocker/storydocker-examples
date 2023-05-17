import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.join(__dirname, '../');

/**
 * Generate github workflow action config for ui-tests for each example application
 */
export const generateUiTestConfig = async (appName, appPath, appPort) => {
  const uiTestsFile = await fs.readFile(path.join(__dirname, './assets/ui-tests.yml'), 'utf8');
  const newFile = uiTestsFile.replace(/APP_NAME/g, appName).replace(/APP_WORKSPACE_PATH/g, appPath).replace(/APP_PORT/g, appPort);
  try {
    await fs.outputFile(path.join(workflowsDir, `ui-tests-${appName}.yml`), newFile);
    console.log(`Generated ui-tests-${appName}.yml`);
  } catch (err) {
    throw new Error(err);
  }
};
