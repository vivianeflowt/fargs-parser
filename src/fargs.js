/*
 * fargs-parser
 * Copyright(c) 2020 Viviane Florido.
 * Licensed under the MIT license.
 */

'use strict'

const core = require('./core')
const isArgs = require('./typecast').isArgs
const LIST_TYPE = require('./defs').LIST_TYPE

const FArgs = function (argumentObject) {
  if (!isArgs(argumentObject)) {
    throw new Error('needs argument object')
  }

  const args = argumentObject
  let argList = null

  const getArgs = () => {
    if (argList === null) {
      argList = Array.from(args)
    }
    return argList
  }

  return {
    count: () => {
      return core.argsCount(getArgs())
    },
    list: () => {
      return core.argsList(getArgs(), LIST_TYPE.SIMPLE)
    },
    typedList: () => {
      return core.argsList(getArgs(), LIST_TYPE.TYPED)
    },
    validate: (rules) => core.argsValidate(getArgs(), rules)
  }
}

module.exports.FArgs = FArgs
