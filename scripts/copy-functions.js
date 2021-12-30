const fs = require('fs-extra');
const { resolve } = require('path');

const CLOUD_DIST = resolve(__dirname, '../cloud/dist');
const CLOUD_FUNCTIONS = resolve(__dirname, '../cloud/functions');

if (module.name === 'main') {
  functionNames().forEach((it) => copyFunction(it));
}

function functionNames() {
  const rc = require('../cloudbaserc.json');
  const functions = Object.values(rc.framework.plugins).find(
    (it) => it.use == '@cloudbase/framework-plugin-function',
  );

  return functions.inputs.functions.map((it) => it.name);
}

function copyFunction(name) {
  const distDir = resolve(CLOUD_DIST, name);
  const functionDir = resolve(CLOUD_FUNCTIONS, name);
  const ignore = /^(node_modules|tsconfig\.json|src|\..+)$/;
  fs.readdirSync(functionDir).forEach((it) => {
    if (ignore.test(it)) {
      return; // ignored
    }

    const dest = resolve(distDir, it);
    const file = resolve(functionDir, it);
    if (it === 'package.json') {
      fs.writeJSONSync(dest, normalizePackage(file), {
        spaces: 2,
      });
    } else {
      fs.copySync(file, dest);
    }
  });
}

function normalizePackage(file) {
  const {
    scripts,
    devDependencies,
    // others to remove
    ...normalized
  } = fs.readJSONSync(file);
  return normalized;
}
