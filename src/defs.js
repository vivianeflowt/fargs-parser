/*
 * fargs-parser
 * Copyright(c) 2020 Viviane Florido.
 * Licensed under the MIT license.
 */

'use strict'

const typecast = require('./typecast')

const LIST_TYPE = {
  SIMPLE: (argList = []) => {
    const list = []
    argList.forEach(e => {
      list.push([e])
    })
    return list
  },
  TYPED: (argList = []) => {
    const list = []
    argList.forEach(e => {
      list.push([e, typecast.typeOf(e).toLowerCase()])
    })
    return list
  }
}

const VALIDATE_RULES = {
  required: (value) => {
    if (value == null || value == undefined) {
      return false
    }
    return true
  },
  alpha: (value) => {
    return typecast.isAlpha(value)
  },
  alphanumeric: (value) => {
    return typecast.isAlphaNumeric(value)
  },
  numeric: (value) => {
    if (typecast.isBool(value) || value == '' || value == ' ' || value == null || value == undefined) {
      return false
    }
    return typecast.isNumeric(value)
  },
  integer: (value) => {
    return Number.isInteger(value)
  },
  boolean: (value) => {
    return typecast.isBool(value)
  },
  date: (value) => {
    return typecast.isDate(value)
  },
  array: (value) => {
    return typecast.isArray(value)
  },
  object: (value) => {
    return typecast.isObject(value)
  },
  function: (value) => {
    return typecast.isFunction(value)
  }
}

module.exports = {
  LIST_TYPE,
  VALIDATE_RULES
}
