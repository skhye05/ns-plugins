// const fs = require('fs');
// const path = require('path');
// module.exports = function (_: IAndroidResourcesMigrationService, logger: ILogger, projectData: IProjectData, _injector: IInjector, hookArgs: any) {
//   const platformName = ((hookArgs && hookArgs.platformData && hookArgs.platformData.normalizedPlatformName) || (hookArgs.checkForChangesOpts && hookArgs.checkForChangesOpts.platform) || '').toLowerCase();

//   projectData = hookArgs && (hookArgs.projectData || (hookArgs.checkForChangesOpts && hookArgs.checkForChangesOpts.projectData));

//   console.log("PLATFORM NAME:::", platformName);

//   if (platformName === 'android') {
//     const libVersion = "20.7.1";
//     const lib = "com.appdynamics:appdynamics-gradle-plugin";
//     const gradleLib = "com.android.tools.build:gradle:$androidBuildToolsVersion";

//     const appDynamics = `
// 		dependencies {
// 			  classpath '${lib}:${libVersion}'
// 		  `;

//     const appDynamics_7_0 = `
// 			  classpath "${gradleLib}"
// 			  classpath '${lib}:${libVersion}'
// 		  `;

//     const rootPath = projectData.projectDir;
//     const buildGradle = path.join(rootPath, 'platforms', 'android', 'build.gradle');
//     const include = path.join(rootPath, 'platforms', 'android', 'config.gradle');
//     if (fs.existsSync(buildGradle)) {
//       const buildGradleData = fs.readFileSync(buildGradle);
//       let buildGradleContent = buildGradleData.toString();
//       let write = false;

//       if (buildGradleContent.indexOf(lib) === -1) {
//         if (buildGradleContent.indexOf(`classpath "${gradleLib}"`) !== -1) {
//           // gradle 7.0
//           buildGradleContent = buildGradleContent.replace(`classpath "${gradleLib}"`, appDynamics_7_0);
//         } else {
//           buildGradleContent = buildGradleContent.replace(/(dependencies(\s{)?({)?)/, appDynamics);
//         }
//         write = true;
//       }


//       if (buildGradleContent.indexOf("apply plugin: 'adeum'") === -1) {
//         buildGradleContent = buildGradleContent + '\n' + "apply plugin: 'adeum'";
//         write = true;
//       }

//       if (write) {
//         fs.writeFileSync(buildGradle, buildGradleContent);
//       }
//     }
//   } else if (platformName === 'ios') { } else {
//     logger.warn(`Platform '${platformName}' isn't supported: skipping appDynamics`);
//     return;
//   }
// };

// function getPlatformData(platformData: IPlatformData, projectData: IProjectData, platform: string, injector: IInjector): IPlatformData {
//   if (!platformData) {
//     // Used in CLI 5.4.x and below:
//     const platformsData = injector.resolve<IPlatformsData>('platformsData');
//     platformData = platformsData.getPlatformData(platform, projectData);
//   }

//   return platformData;
// }

// const hookArgReader = (args) => {
//   if (typeof args !== 'string') {
//     return Object.keys(args)[0];
//   } else {
//     return args;
//   }
// };



const fs = require('fs');
const path = require('path');
module.exports = function (androidResourcesMigrationService: IAndroidResourcesMigrationService, logger: ILogger, projectData: IProjectData, injector: IInjector, hookArgs: any) {
  const platformName = ((hookArgs && hookArgs.platformData && hookArgs.platformData.normalizedPlatformName) || (hookArgs.checkForChangesOpts && hookArgs.checkForChangesOpts.platform) || '').toLowerCase();

  projectData = hookArgs && (hookArgs.projectData || (hookArgs.checkForChangesOpts && hookArgs.checkForChangesOpts.projectData));

  const platformData = getPlatformData(hookArgs && hookArgs.platformData, projectData, platformName, injector);

  const environmentName = hookArgs.prepareData.env.use ? hookArgReader(hookArgs.prepareData.env.use) : '';

  if (platformName === 'android') {

    const libVersion = "20.7.1";
    const lib = "com.appdynamics:appdynamics-gradle-plugin";
    const gradleLib = "com.android.tools.build:gradle:$androidBuildToolsVersion";

    const appDynamics = `
		dependencies {
			  classpath 'com.appdynamics:appdynamics-gradle-plugin:20.7.1'
		  `;


    const appDynamics_7_0 = `
			  classpath "com.android.tools.build:gradle:$androidBuildToolsVersion"
			  classpath 'com.appdynamics:appdynamics-gradle-plugin:20.7.1'
		  `;

    const rootPath = projectData.projectDir;
    const buildGradle = path.join(rootPath, 'platforms', 'android', 'build.gradle');
    const include = path.join(rootPath, 'platforms', 'android', 'config.gradle');
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
  } else if (platformName === 'ios') { } else {
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
