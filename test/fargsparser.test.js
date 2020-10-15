const assert = require('assert')
const typeOf = require('../src/fargs-parser').typeOf
const FArgsParser = require('../src/fargs-parser').FArgsParser

test('arguments length', () => {
    const testing = function () {
        const fargs = FArgsParser(arguments)
        return fargs.length
    }
    assert.strictEqual(testing('name', 1), 2)
    assert.strictEqual(testing('name', 1, 2, 3), 4)
})

test('arguments type', () => {
    const testing = function () {
        const fargs = FArgsParser(arguments)
        return fargs.typeOf(0)
    }
    assert.strictEqual(testing('name'), 'string')
    assert.strictEqual(testing(1), 'number')
    assert.strictEqual(testing({}), 'object')
    assert.strictEqual(testing([]), 'array')
})

test('needs arguments object', () => {
    const testing = function () {
        const fargs = FArgsParser()
    }
    expect(testing).toThrow(Error)
})
