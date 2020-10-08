/*
 * fargs-parser
 * Copyright(c) 2020 Viviane Florido.
 * Licensed under the MIT license.
 */

'use strict'

const type = require('type-detect')

const typeCheck = (...args) => {
  if (args.length === 0) {
    throw new Error('invalid parameters')
  }
  if (args.length === 1) {
    return type(args[0]).toLowerCase()
  } else {
    return (type(args[0]).toLowerCase() === args[1].toLowerCase())
  }
}

const typeOf = (value) => {
  return typeCheck(value)
}
const isString = (value) => {
  return typeCheck(value, 'string')
}
const isNumber = (value) => {
  return typeCheck(value, 'number')
}
const isBool = (value) => {
  return typeCheck(value, 'boolean')
}
const isObject = (value) => {
  return typeCheck(value, 'object')
}
const isDate = (value) => {
  return typeCheck(value, 'date')
}
const isFunction = (value) => {
  return typeCheck(value, 'function')
}
const isNull = (value) => {
  return typeCheck(value, 'null')
}
const isArray = (value) => {
  return typeCheck(value, 'array')
}
const isArgs = (value) => {
  return typeCheck(value, 'arguments')
}

const isNumeric = (value) => {
  return !isNaN(value)
}
const isAlphaNumeric = (value) => {
  if (!isString(value) || value === '' || value === ' ') {
    return false
  }
  var code, i, len
  for (i = 0, len = value.length; i < len; i++) {
    code = value.charCodeAt(i)
    if (!(code > 47 && code < 58) && // numeric (0-9)
      !(code > 64 && code < 91) && // upper alpha (A-Z)
      !(code > 96 && code < 123)) { // lower alpha (a-z)
      return false
    }
  }
  return true
}
const isAlpha = (value) => {
  if (!isString(value) || value === '' || value === ' ') {
    return false
  }
  var code, i, len
  for (i = 0, len = value.length; i < len; i++) {
    code = value.charCodeAt(i)
    if (!(code > 64 && code < 91) && // upper alpha (A-Z)
      !(code > 96 && code < 123)) { // lower alpha (a-z)
      return false
    }
  }
  return true
}

module.exports = {
  typeOf,
  isString,
  isNumber,
  isBool,
  isObject,
  isDate,
  isFunction,
  isNull,
  isArray,
  isArgs,
  isAlpha,
  isAlphaNumeric,
  isNumeric
}
