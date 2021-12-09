## Using Jest

For replacing [Mocha](https://mochajs.org/) with [Jest](https://jestjs.io/), please follow these tests:

### Install Jest packages

```bash
npm i -D jest eslint-plugin-jest
# yarn add --dev jest eslint-plugin-jest
```

### Configure .eslintrjc.js

Open `./.eslintjrc.js` and replace `plugin:mocha/recommended` with `plugin:jest/recommended` under `extends` key.

### Configure package.json

Open `./package.json` and replace all the `"test*"` commands with the following

```json
  "test:junit": "npm run test -- --reporter mocha-junit-reporter --reporter-options mochaFile=.junit.xml",
  "test:watch": "npm run test -- --watch"
  "test": "cross-env NODE_ENV=test NO_API_DOC=1 jest --coverage --runInBand --verbose",
```

### Change to Jest

* Open `./test/index.test.js`
* Comment or remove everything related to Mocha
  1. Clean `mocha` & `chai` packages from `package.json`
  2. Remove `.mocharc.js`
* Uncomment the commented Jest unit test.
* Add the jest config content bellow to `jest.config.js`
* Add the jest preprocessor content bellow to `test\preprocessor.js` 
* Happy testing!

```javascript
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
```

```javascript
// preprocessor.js

const coffee = require('coffeescript');
const babelJest = require('babel-jest');

module.exports = {
  process: (src, path, config) => {
    if (!/node_modules/.test(path)) {
      // CoffeeScript files need to be compiled by CoffeeScript
      // before being processed by babel
      if (coffee.helpers.isCoffee(path)) {
        src = coffee.compile(src, { bare: true });
      }
      return babelJest.process(src, path, config);
    }
    return src;
  }
};

```
