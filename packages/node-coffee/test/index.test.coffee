{expect} = require 'chai'

{hello} = require '../src'

#
# Uncomment for Mocha
#

describe 'hello', -> it 'hello("World") to return "Hello World!"', -> expect(hello 'World').equal 'Hello World!'

#
# Uncomment for Jest
#
# describe('hello', function () {
#   it('hello("World") to return "Hello World!"', function () {
#     expect(hello('World')).toEqual('Hello World!');
#   });
# });
