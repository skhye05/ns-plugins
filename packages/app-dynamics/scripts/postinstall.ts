const { updateGradle } = require('../utils');
const _fs = require('fs');
const _path = require('path');
const promptCommand = require('prompt');

// The directories where the Podfile and include.gradle are stored
var directories = {
  ios: './platforms/ios',
  android: './platforms/android',
};

console.log('NativeScript Firebase Plugin Installation');

var appRoot = '../../../';
var pluginConfigFile = 'app-dynamics.nativescript.json';
var pluginConfigPath = _path.join(appRoot, pluginConfigFile);
var config = {};

function isInteractive() {
  return process.stdin && process.stdin.isTTY && process.stdout && process.stdout.isTTY;
}

if (!isInteractive()) {
  console.log('No existing ' + pluginConfigFile + ' config file found and terminal is not interactive! Default configuration will be used.');
} else {
  console.log('No existing ' + pluginConfigFile + " config file found, so let's configure the Firebase plugin!");
  // promptCommand.start();
  // promptCommand.get([{
  //   name: 'name',
  //   description: 'Enter your App Dynamics EUM Account name:',
  //   // default: ''
  // }, {
  //   name: 'licenseKey',
  //   description: 'Enter your App Dynamics EUM License key:',
  //   // default: ''
  // },
  // {
  //   name: 'failBuildOnUploadFailure',
  //   description: 'Do you want to fail the app if there is a failure on Uploads? (y/n)',
  //   default: 'n'
  // }, {
  //   name: 'automaticUploads',
  //   description: 'Do you want to enable automatic uploads? (y/n)',
  //   default: 'y'
  // },

  // ], function (err, result) {
  //   if (err) {
  //     return console.log(err);
  //   }
  //   result.failBuildOnUploadFailure = isSelected(result.failBuildOnUploadFailure);
  //   result.automaticUploads = isSelected(result.automaticUploads);
  //   config = result;
  //   updateGradleFile(result);
  //   saveConfig();
  // });
}

function saveConfig() {
  _fs.writeFileSync(pluginConfigPath, JSON.stringify(config, null, 4));
}

function isSelected(value) {
  return value === true || (typeof value === 'string' && value.toLowerCase() === 'y');
}

// function readConfig() {
//   try {
//     const str = fs.readFileSync(pluginConfigPath, 'utf8')
//     config = JSON.parse(str);
//   } catch (e) {
//     console.log("Failed reading " + pluginConfigFile);
//     console.log(e);
//     config = {};
//   }
// }

// function promptCommandQuestionsResult(result) {
//   updateGradle(result);
// }

function updateGradleFile(result) {
  updateGradle(_path.join('platforms/android/include.gradle'), result);
}
