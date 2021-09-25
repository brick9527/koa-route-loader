const _ = require('lodash');

const defaultConfig = require('./default');

/**
 * merge customized config with config template
 * @param {*} options - customized config
 * @returns merged config
 */
module.exports = (options) => {
  return _.defaultsDeep(options, defaultConfig);
};