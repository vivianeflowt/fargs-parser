/*
 * fargs-parser
 * Copyright(c) 2020 Viviane Florido.
 * Licensed under the MIT license.
 */


'use strict'

const core = require('./core')
const LIST_TYPE = require('./defs').LIST_TYPE

const FArgs = function (args) {
  if (core.argsParser(args) === false) {
    throw new Error('needs arguments object')
  }
  var argList = core.argsParser(args)
  return {
    count: core.argsCount(argList),
    list: core.argsList(argList, LIST_TYPE.SIMPLE),
    typedList: core.argsList(argList, LIST_TYPE.TYPED),
    validate: (rules) => core.argsValidate(argList, rules)
  }
}

module.exports.FArgs = FArgs
