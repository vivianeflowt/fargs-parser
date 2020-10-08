/*
 * fargs-parser
 * Copyright(c) 2020 Viviane Florido.
 * Licensed under the MIT license.
 */

const assert = require('assert')
const fargs = require('../src/fargs-parser')

describe('LIST_TYPE.SIMPLE', function () {
  it('return array', function () {
    assert.strictEqual(fargs.typeOf(fargs.LIST_TYPE.SIMPLE([])), 'array')
  })
})

describe('LIST_TYPE.TYPED', function () {
  it('return array', function () {
    assert.strictEqual(fargs.typeOf(fargs.LIST_TYPE.TYPED([])), 'array')
  })
})

describe('ARGUMENTS COUNT', function () {
  it('array item count 0', function () {
    assert.strictEqual(fargs.argsCount([]), 0)
  })
  it('array item count 1', function () {
    assert.strictEqual(fargs.argsCount([1]), 1)
  })
  it('array item count 2', function () {
    assert.strictEqual(fargs.argsCount([1, 2]), 2)
  })
})

describe('ARGUMENTS LIST', function () {
  it('return array', function () {
    assert.strictEqual(fargs.typeOf(fargs.argsList([], fargs.LIST_TYPE.SIMPLE)), 'array')
  })
  it('return array', function () {
    assert.strictEqual(fargs.typeOf(fargs.argsList([], fargs.LIST_TYPE.TYPED)), 'array')
  })
  it('set default callback', function () {
    assert.strictEqual(fargs.typeOf(fargs.argsList([])), 'array')
  })
})
