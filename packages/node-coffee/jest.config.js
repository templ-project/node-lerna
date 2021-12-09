// jest.config.js

/******************************************************************************
 * In order to use Jest instead of Mocha, please install the additional
 * modules:
 * ```bash
 * npm i -D jest eslint-plugin-jest
 * # yarn add --dev jest eslint-plugin-jest
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

// jest.config.js

module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
    moduleDirectories: ["node_modules","src","test"],
    moduleFileExtensions: ["js","json","jsx","coffee"],
  // rootDir: '.',
  roots: [ "test" ],
  testEnvironment: 'node',
    testMatch: ["**/__tests__/**/*.coffee","**/?(*.)+(spec|test).coffee"],
    transform: {".*":"<rootDir>/test/preprocessor.js"},
}
