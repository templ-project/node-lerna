// jest.config.js

/******************************************************************************
 * In order to use Jest instead of Mocha, please install the additional
 * modules:
 * ```bash
 * npm i -D jest eslint-plugin-jest @types/jest
 * # yarn add --dev jest eslint-plugin-jest @types/jest
 * ```
 *
 * Then configure `.eslintrjc.js` (see comments inside file).
 *
 * Then configure package.json and replace all `test*` instructions with the following:
 *
 * ```json
 *   "test:junit": "npm run test -- --reporter mocha-junit-reporter --reporter-options mochaFile=.junit.xml",
 *   "test:watch": "npm run test -- --watch"
 *   "test": "cross-env NODE_ENV=test NO_API_DOC=1 jest --coverage --runInBand --verbose",
 * ```
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const jestConfig = require('../../jest.config');

module.exports = {
  ...jestConfig,
  transform: {'^.+\\.(t|j)s$': 'ts-jest'},
};
