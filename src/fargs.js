/*
 * fargs-parser
 * Copyright(c) 2020 Viviane Florido.
 * Licensed under the MIT license.
 */

'use strict'

const core = require('./core')
const type = require('type-detect')
const LIST_TYPE = require('./defs').LIST_TYPE

const FArgs = function (argumentObject) {
  if (!type(argumentObject) === 'Arguments') {
    throw new Error('needs argument object as parameter')
  }
  const argObj = argumentObject
  let argList = null

  const args = () => {
    if (argList === null) {
      argList = Array.from(argObj)
    }
    return argList
  }

  return {
    count: () => {
      return core.argsCount(args())
    },
    list: () => {
      return core.argsList(args(), LIST_TYPE.SIMPLE)
    },
    typedList: () => {
      return core.argsList(args(), LIST_TYPE.TYPED)
    },
    validate: (rules) => core.argsValidate(args(), rules)
  }
}

module.exports.FArgs = FArgs
