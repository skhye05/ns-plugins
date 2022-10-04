const fs = require('fs');
const path = require('path');
module.exports = function (androidResourcesMigrationService: IAndroidResourcesMigrationService, logger: ILogger, projectData: IProjectData, injector: IInjector, hookArgs: any) {
  const platformName = ((hookArgs && hookArgs.platformData && hookArgs.platformData.normalizedPlatformName) || (hookArgs.checkForChangesOpts && hookArgs.checkForChangesOpts.platform) || '').toLowerCase();

  projectData = hookArgs && (hookArgs.projectData || (hookArgs.checkForChangesOpts && hookArgs.checkForChangesOpts.projectData));

  if (platformName === 'android') {
    const appDynamics = `
		dependencies {
			  classpath 'com.appdynamics:appdynamics-gradle-plugin:21.+'
		  `;

    const appDynamics_7_0 = `
			  classpath "com.android.tools.build:gradle:$androidBuildToolsVersion"
			  classpath 'com.appdynamics:appdynamics-gradle-plugin:21.+'
		  `;

    const rootPath = projectData.projectDir;
    const buildGradle = path.join(rootPath, 'platforms', 'android', 'build.gradle');
    if (fs.existsSync(buildGradle)) {
      const buildGradleData = fs.readFileSync(buildGradle);
      let buildGradleContent = buildGradleData.toString();
      let write = false;

      if (buildGradleContent.indexOf('com.appdynamics:appdynamics-gradle-plugin') === -1) {
        if (buildGradleContent.indexOf('classpath "com.android.tools.build:gradle:$androidBuildToolsVersion"') !== -1) {
          // gradle 7.0
          buildGradleContent = buildGradleContent.replace('classpath "com.android.tools.build:gradle:$androidBuildToolsVersion"', appDynamics_7_0);
        } else {
          buildGradleContent = buildGradleContent.replace(/(dependencies(\s{)?({)?)/, appDynamics);
        }
        write = true;
      }

      if (write) {
        fs.writeFileSync(buildGradle, buildGradleContent);
      }
    }
  } else if (platformName === 'ios') {
  } else {
    logger.warn(`Platform '${platformName}' isn't supported: skipping appDynamics`);
    return;
  }
};

function getPlatformData(platformData: IPlatformData, projectData: IProjectData, platform: string, injector: IInjector): IPlatformData {
  if (!platformData) {
    // Used in CLI 5.4.x and below:
    const platformsData = injector.resolve<IPlatformsData>('platformsData');
    platformData = platformsData.getPlatformData(platform, projectData);
  }

  return platformData;
}

const hookArgReader = (args) => {
  if (typeof args !== 'string') {
    return Object.keys(args)[0];
  } else {
    return args;
  }
};
