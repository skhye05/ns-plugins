const path_ = require('path');
const utils = require('../utils');

module.exports = function (hookArgs: any, $projectData: IProjectData, $logger: ILogger) {
  const projectDir = $projectData.projectDir;
  const platform = (hookArgs.platform || hookArgs.prepareData.platform).toLowerCase();
  const configPath = path_.join(projectDir, 'app-dynamics.nativescript.json');

  const config = utils.readPathToJson(configPath);

  return new Promise<void>(function (resolve) {
    if (platform === 'ios') {
    } else {
      const gradlePath = path_.join(projectDir, 'node_modules/@skhye05/app-dynamics/platforms/android/include.gradle');

      utils.updateGradle(gradlePath, config);
      $logger.info(`Updated App Dynamics Config`);
    }

    resolve();
  });
};
