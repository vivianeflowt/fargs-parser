/*
 * fargs-parser
 * Copyright(c) 2020 Viviane Florido.
 * Licensed under the MIT license.
 */


const assert = require('assert')
const Chance = require('chance')
const typedetect = require('type-detect')
const chance = Chance(Math.floor(Math.random() * 1000 + 1).toString())
const type = (value) => typedetect(value).toLowerCase()

const ValidateRule = require('../src/defs').VALIDATE_RULES
const core = require('../src/core')
const LIST_TYPE = require('../src/defs').LIST_TYPE

const stringAlpha = (length = 10) => {
  return chance.string({
    alpha: true,
    length: 10
  })
}
const stringNumeric = (length = 10) => {
  return chance.string({
    numeric: true
  })
}
const stringAlphaNum = (length = 10) => {
  return 'A1' + chance.string({
    alpha: true,
    numeric: true,
    length: length
  })
}
const stringSymbol = (length = 10) => {
  return chance.string({
    symbols: true,
    length: length
  })
}
const stringMixed = (length = 10) => {
  return chance.string({
    alpha: true,
    numeric: true,
    symbols: true,
    length: length
  })
}

const numInt = () => {
  return Math.floor(chance.integer())
}
const numFloat = () => {
  return 0.1 + chance.floating({
    fixed: 2
  })
}

const numNatural = () => {
  return chance.natural()
}

describe('VALIDATE RULE - REQUIRED', function () {
  it('null', function () {
    assert.strictEqual(ValidateRule.required(null), false)
  })
  it('undefined', function () {
    assert.strictEqual(ValidateRule.required(undefined), false)
  })
  it('clear string', function () {
    assert.strictEqual(ValidateRule.required(''), true)
  })
  it('whitespace string', function () {
    assert.strictEqual(ValidateRule.required(' '), true)
  })
  it('integer', function () {
    assert.strictEqual(ValidateRule.required(numInt()), true)
  })
  it('float', function () {
    assert.strictEqual(ValidateRule.required(numFloat()), true)
  })
  it('boolean: true', function () {
    assert.strictEqual(ValidateRule.required(true), true)
  })
  it('boolean: false', function () {
    assert.strictEqual(ValidateRule.required(false), true)
  })
  it('date', function () {
    assert.strictEqual(ValidateRule.required(chance.date()), true)
  })
})
describe('VALIDATE RULE - ALPHA', function () {
  it('null', function () {
    assert.strictEqual(ValidateRule.alpha(null), false)
  })
  it('undefined', function () {
    assert.strictEqual(ValidateRule.alpha(undefined), false)
  })
  it('clean string', function () {
    assert.strictEqual(ValidateRule.alpha(''), false)
  })
  it('whitespace string', function () {
    assert.strictEqual(ValidateRule.alpha(' '), false)
  })
  it('integer', function () {
    assert.strictEqual(ValidateRule.alpha(numInt()), false)
  })
  it('float', function () {
    assert.strictEqual(ValidateRule.alpha(numFloat()), false)
  })
  it('boolean: true', function () {
    assert.strictEqual(ValidateRule.alpha(true), false)
  })
  it('boolean: false', function () {
    assert.strictEqual(ValidateRule.alpha(false), false)
  })
  it('date', function () {
    assert.strictEqual(ValidateRule.alpha(chance.date()), false)
  })
  it('alpha', function () {
    assert.strictEqual(ValidateRule.alpha(stringAlpha(10)), true)
  })
  it('alpha-numeric', function () {
    assert.strictEqual(ValidateRule.alpha(stringAlphaNum(10)), false)
  })
  it('numeric', function () {
    assert.strictEqual(ValidateRule.alpha(stringNumeric(10)), false)
  })
  it('symbol', function () {
    assert.strictEqual(ValidateRule.alpha(stringSymbol(10)), false)
  })
})
describe('VALIDATE RULE - ALPHA-NUMERIC', function () {
  it('null', function () {
    assert.strictEqual(ValidateRule.alphanumeric(null), false)
  })
  it('undefined', function () {
    assert.strictEqual(ValidateRule.alphanumeric(undefined), false)
  })
  it('clean string', function () {
    assert.strictEqual(ValidateRule.alphanumeric(''), false)
  })
  it('whitespace string', function () {
    assert.strictEqual(ValidateRule.alphanumeric(' '), false)
  })
  it('integer', function () {
    assert.strictEqual(ValidateRule.alphanumeric(numInt()), false)
  })
  it('float', function () {
    assert.strictEqual(ValidateRule.alphanumeric(numFloat()), false)
  })
  it('boolean: true', function () {
    assert.strictEqual(ValidateRule.alphanumeric(true), false)
  })
  it('boolean: false', function () {
    assert.strictEqual(ValidateRule.alphanumeric(false), false)
  })
  it('date', function () {
    assert.strictEqual(ValidateRule.alphanumeric(chance.date()), false)
  })
  it('alpha', function () {
    assert.strictEqual(ValidateRule.alphanumeric(stringAlpha(20)), true)
  })
  it('alpha-numeric', function () {
    assert.strictEqual(ValidateRule.alphanumeric(stringAlphaNum(20)), true)
  })
  it('symbol', function () {
    assert.strictEqual(ValidateRule.alphanumeric(stringSymbol(10)), false)
  })
})
describe('VALIDATE RULE - NUMERIC', function () {
  it('null', function () {
    assert.strictEqual(ValidateRule.numeric(null), false)
  })
  it('undefined', function () {
    assert.strictEqual(ValidateRule.numeric(undefined), false)
  })
  it('clean string', function () {
    assert.strictEqual(ValidateRule.numeric(''), false)
  })
  it('whitespace string', function () {
    assert.strictEqual(ValidateRule.numeric(' '), false)
  })
  it('integer', function () {
    assert.strictEqual(ValidateRule.numeric(numInt()), true)
  })
  it('float', function () {
    assert.strictEqual(ValidateRule.numeric(numFloat()), true)
  })
  it('boolean: true', function () {
    assert.strictEqual(ValidateRule.numeric(true), false)
  })
  it('boolean: false', function () {
    assert.strictEqual(ValidateRule.numeric(false), false)
  })
  it('alpha', function () {
    assert.strictEqual(ValidateRule.numeric(stringAlpha(10)), false)
  })
  it('alpha-numeric', function () {
    assert.strictEqual(ValidateRule.numeric(stringAlphaNum(10)), false)
  })
  it('numeric', function () {
    assert.strictEqual(ValidateRule.numeric('1234567890'), true)
  })
  it('symbol', function () {
    assert.strictEqual(ValidateRule.numeric(stringSymbol(5)), false)
  })
})
describe('VALIDATE RULE - INTEGER', function () {
  it('null', function () {
    assert.strictEqual(ValidateRule.integer(null), false)
  })
  it('undefined', function () {
    assert.strictEqual(ValidateRule.integer(undefined), false)
  })
  it('clean string', function () {
    assert.strictEqual(ValidateRule.integer(''), false)
  })
  it('whitespace string', function () {
    assert.strictEqual(ValidateRule.integer(' '), false)
  })
  it('integer', function () {
    assert.strictEqual(ValidateRule.integer(numInt()), true)
  })
  it('float', function () {
    assert.strictEqual(ValidateRule.integer(numFloat()), false)
  })
  it('boolean: true', function () {
    assert.strictEqual(ValidateRule.integer(true), false)
  })
  it('boolean: false', function () {
    assert.strictEqual(ValidateRule.integer(false), false)
  })
  it('alpha', function () {
    assert.strictEqual(ValidateRule.integer(stringAlpha(10)), false)
  })
  it('alpha-numeric', function () {
    assert.strictEqual(ValidateRule.integer(stringAlphaNum(10)), false)
  })
  it('numeric', function () {
    assert.strictEqual(ValidateRule.integer('1234567890'), false)
  })
  it('symbol', function () {
    assert.strictEqual(ValidateRule.integer(stringSymbol(5)), false)
  })
})
describe('VALIDATE RULE - BOOLEAN', function () {
  it('null', function () {
    assert.strictEqual(ValidateRule.boolean(null), false)
  })
  it('undefined', function () {
    assert.strictEqual(ValidateRule.boolean(undefined), false)
  })
  it('clean string', function () {
    assert.strictEqual(ValidateRule.boolean(''), false)
  })
  it('whitespace string', function () {
    assert.strictEqual(ValidateRule.boolean(' '), false)
  })
  it('integer', function () {
    assert.strictEqual(ValidateRule.boolean(numInt()), false)
  })
  it('float', function () {
    assert.strictEqual(ValidateRule.boolean(numFloat()), false)
  })
  it('boolean: true', function () {
    assert.strictEqual(ValidateRule.boolean(true), true)
  })
  it('boolean: false', function () {
    assert.strictEqual(ValidateRule.boolean(false), true)
  })
  it('alpha', function () {
    assert.strictEqual(ValidateRule.boolean(stringAlpha(10)), false)
  })
  it('alpha-numeric', function () {
    assert.strictEqual(ValidateRule.boolean(stringAlphaNum(10)), false)
  })
  it('numeric', function () {
    assert.strictEqual(ValidateRule.boolean('1234567890'), false)
  })
  it('symbol', function () {
    assert.strictEqual(ValidateRule.boolean(stringSymbol(5)), false)
  })
})
describe('VALIDATE RULE - DATE', function () {
  it('null', function () {
    assert.strictEqual(ValidateRule.date(null), false)
  })
  it('undefined', function () {
    assert.strictEqual(ValidateRule.date(undefined), false)
  })
  it('clean string', function () {
    assert.strictEqual(ValidateRule.date(''), false)
  })
  it('whitespace string', function () {
    assert.strictEqual(ValidateRule.date(' '), false)
  })
  it('integer', function () {
    assert.strictEqual(ValidateRule.date(numInt()), false)
  })
  it('float', function () {
    assert.strictEqual(ValidateRule.date(numFloat()), false)
  })
  it('boolean: true', function () {
    assert.strictEqual(ValidateRule.date(true), false)
  })
  it('boolean: false', function () {
    assert.strictEqual(ValidateRule.date(false), false)
  })
  it('date', function () {
    assert.strictEqual(ValidateRule.date(chance.date()), true)
  })
  it('alpha', function () {
    assert.strictEqual(ValidateRule.date(stringAlpha(10)), false)
  })
  it('alpha-numeric', function () {
    assert.strictEqual(ValidateRule.date(stringAlphaNum(10)), false)
  })
  it('numeric', function () {
    assert.strictEqual(ValidateRule.date('1234567890'), false)
  })
  it('symbol', function () {
    assert.strictEqual(ValidateRule.date(stringSymbol(5)), false)
  })
})
describe('VALIDATE RULE - ARRAY', function () {
  it('is array', function () {
    assert.strictEqual(ValidateRule.array([]), true)
  })
  it('not is array', function () {
    assert.strictEqual(!ValidateRule.array([]), false)
  })
})
describe('VALIDATE RULE - OBJECT', function () {
  it('is object', function () {
    assert.strictEqual(ValidateRule.object({}), true)
  })
  it('not is object', function () {
    assert.strictEqual(!ValidateRule.object({}), false)
  })
})
describe('VALIDATE RULE - FUNCTION', function () {
  it('is function', function () {
    assert.strictEqual(ValidateRule.function(function () {}), true)
  })
  it('not is function', function () {
    assert.strictEqual(!ValidateRule.function(function () {}), false)
  })
})

describe('CORE - ARGUMENTS PARSER', function () {
  it('no arguments', function () {
    assert.strictEqual(core.argsParser(), false)
  })
  it('array as argument', function () {
    assert.strictEqual(core.argsParser([]), false)
  })
  it('object as argument', function () {
    assert.strictEqual(core.argsParser({}), false)
  })
  it('if parameter is arguments return array', function () {
    assert.strictEqual(type(core.argsParser(arguments)), 'array')
  })
})

describe('CORE - ARGUMENTS COUNT', function () {
  it('array item count 0', function () {
    assert.strictEqual(core.argsCount([]), 0)
  })
  it('array item count 1', function () {
    assert.strictEqual(core.argsCount([1]), 1)
  })
  it('array item count 2', function () {
    assert.strictEqual(core.argsCount([1, 2]), 2)
  })
})

describe('LIST_TYPE.SIMPLE', function () {
  it('return array', function () {
    assert.strictEqual(type(LIST_TYPE.SIMPLE([])), 'array')
  })
})

describe('LIST_TYPE.TYPED', function () {
  it('return array', function () {
    assert.strictEqual(type(LIST_TYPE.TYPED([])), 'array')
  })
})

describe('CORE - ARGUMENTS LIST', function () {
  it('return array', function () {
    assert.strictEqual(type(core.argsList([], LIST_TYPE.SIMPLE)), 'array')
  })
  it('return array', function () {
    assert.strictEqual(type(core.argsList([], LIST_TYPE.TYPED)), 'array')
  })
})

describe('CORE - ARGUMENTS VALIDATE', function () {
  it('empty parametes return true', function () {
    assert.strictEqual(core.argsValidate([], []), true)
  })
  it('empty args with any rule return false', function () {
    assert.strictEqual(core.argsValidate([], [
      [0, 'required|numeric']
    ]), false)
  })
  it('empty rules with any args return true', function () {
    assert.strictEqual(core.argsValidate([1], []), true)
  })
})
