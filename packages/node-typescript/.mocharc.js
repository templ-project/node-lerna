// .mocharc.js

const mochaConfig = require('../../.mocharc');

module.exports = {
  ...mochaConfig,
  require: ['ts-node/register', ...mochaConfig.require],
};
