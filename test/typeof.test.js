const assert = require('assert')
const typeOf = require('../src/fargs-parser').typeOf

test('string', () => {
  assert.strictEqual(typeOf('string'), 'string')
})
test('number', () => {
  assert.strictEqual(typeOf(1), 'number')
})
test('float', () => {
  assert.strictEqual(typeOf(0.1), 'number')
})
test('array', () => {
  assert.strictEqual(typeOf([]), 'array')
})
test('object', () => {
  assert.strictEqual(typeOf({}), 'object')
})
test('date', () => {
  assert.strictEqual(typeOf(new Date), 'date')
})
test('function', () => {
  assert.strictEqual(typeOf(function () {}), 'function')
})
test('arrow function', () => {
  assert.strictEqual(typeOf(() => {}), 'function')
})
test('arguments', () => {
  assert.strictEqual(typeOf(arguments), 'arguments')
})
