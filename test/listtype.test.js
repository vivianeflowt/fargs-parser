const assert = require('assert')
const fargs = require('../src/fargs-parser')

test('simple list test', () => {
  assert.strictEqual(fargs.typeOf(fargs.LIST_TYPE.TYPED([])), 'array')
})
test('typed list test', () => {
  assert.strictEqual(fargs.typeOf(fargs.LIST_TYPE.TYPED([])), 'array')
})
