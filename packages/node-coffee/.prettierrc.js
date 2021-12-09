// .prettierrc.js

module.exports = {
  bracketSpacing: false,
  overrides: [
    // see other parsers https://prettier.io/docs/en/options.html#parser
    {
      files: '*.js',
      options: {
        parser: 'babel',
      },
    },
    {
      files: '*.json',
      options: {
        parser: 'json5',
        singleQuote: false,
      },
    },
  ],
  parser: 'coffeescript',
  printWidth: 120,
  singleQuote: true,
  tabWidth: 2,
};
