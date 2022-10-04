const fs = require('fs');

const updateGradle = (path, config) => {
  const content = `apply plugin: 'adeum'

repositories {
  jcenter()
}

dependencies {
     api 'com.appdynamics:appdynamics-runtime:21.+'
}

adeum{
    // The account information is also needed for on-prem deployments.
    account {
        name '${config.name}'
        licenseKey '${config.licenseKey}'
    }
    // Add this information if you want to modify upload behavior.
    proguardMappingFileUpload {
        failBuildOnUploadFailure ${config.failBuildOnUploadFailure} // If true, will fail build. Defaults to false.
        enabled ${config.automaticUploads} //enables automatic uploads.  Defaults to true
    }
}`;

  fs.writeFileSync(path, content);
};

const readPathToJson = (path) => {
  try {
    const str = fs.readFileSync(path, 'utf8');
    return JSON.parse(str);
  } catch (e) {
    console.log('Failed reading from:' + path);
    console.log(e);
    return {};
  }
};

module.exports = {
  readPathToJson,
  updateGradle,
};
