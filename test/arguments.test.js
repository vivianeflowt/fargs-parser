const assert = require('assert')
const fargs = require('../src/fargs-parser')

test('argument count', () => {
  assert.strictEqual(fargs.argsCount([]), 0)
  assert.strictEqual(fargs.argsCount([1]), 1)
  assert.strictEqual(fargs.argsCount([1, 2]), 2)
})


test('argument list', () => {
  assert.strictEqual(fargs.typeOf(fargs.argsList([], fargs.LIST_TYPE.SIMPLE)), 'array')
  assert.strictEqual(fargs.typeOf(fargs.argsList([], fargs.LIST_TYPE.TYPED)), 'array')
  assert.strictEqual(fargs.typeOf(fargs.argsList([])), 'array')
})
