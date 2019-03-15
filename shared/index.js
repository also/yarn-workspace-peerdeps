const path = require('path');

const { version } = require('lodash/package.json');

module.exports = function (dirname) {
  const { name, dependencies } = require(path.join(dirname, 'package.json'));

  const requiredLodashVersion = dependencies['lodash'];

  if (requiredLodashVersion !== version) {
    throw new Error(`shared in package ${name} requires lodash ${requiredLodashVersion} but got ${version}`);
  }
  else {
    console.log(`shared in package ${name} got required lodash version ${requiredLodashVersion}`);
  }
}
