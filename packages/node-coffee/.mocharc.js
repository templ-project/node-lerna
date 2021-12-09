// .mocharc.js

module.exports = {
  recursive: true,
  reporter: 'spec',
  timeout: 5000,
  require: ['coffeescript/register', 'chai/register-assert', 'chai/register-expect', 'chai/register-should'],
};
