// .babelrc.js

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    mocha: true,
  },
  parser: 'eslint-plugin-coffee',

  // uncomment for eslint rules
  extends: [
    "plugin:coffee/eslint-recommended",
    // uncomment to add airbnb rules
    // 'plugin:coffee/airbnb-base'
    'plugin:mocha/recommended',
    'plugin:sonar/recommended',
    'plugin:sonarjs/recommended',
    // comment to remove mocha rules
    'plugin:mocha/recommended',
    /************************************************************************
     * Uncomment to add jest rules. Don't forget you need to install
     * the jest eslint plugin.
     * ```bash
     * npm i -D eslint-plugin-jest
     * # or
     * yarn add --dev eslint-plugin-jest
     * ```
     */
    // 'plugin:jest/recommended',
    'prettier',
  ],
  plugins: ['coffee', 'prettier', 'sonar', 'sonarjs'],
  root: true,
  rules: {
    'consistent-return': 2,
    'max-len': ['error', 120],
    'max-lines-per-function': ['error', 20],
    'max-params': ['error', 3],
    'no-else-return': 1,
    'sonar/no-invalid-await': 0,
    'space-unary-ops': 2,
    curly: ['error', 'all'],
    // indent: [1, 2],
    semi: [0, 'always'],
  },
};
