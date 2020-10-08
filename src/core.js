/*
 * fargs-parser
 * Copyright(c) 2020 Viviane Florido.
 * Licensed under the MIT license.
 */

'use strict'

const typecast = require('./typecast')
const defs = require('./defs')
const LIST_TYPE = require('./defs').LIST_TYPE

const argsList = function (argList = [], callback) {
  if (callback == null) {
    callback = LIST_TYPE.SIMPLE
  }
  return callback(argList)
}

const argsCount = function (argList = []) {
  return argList.length
}

const argsValidate = function (argList, rules = []) {
  const Validators = Object.keys(defs.VALIDATE_RULES).sort()
  for (let i = 0; i < rules.length; i++) {
    var ruleList = rules[i][1].split('|').join(' ').trim().split(' ').join('|').split('|')
    for (let j = 0; j < ruleList.length; j++) {
      if (Validators.indexOf(ruleList[j]) >= 0) {
        if (!defs.VALIDATE_RULES[ruleList[j]](argList[rules[i][0]])) {
          return false
        }
      } else {
        return false
      }
    }
  }
  return true
}

module.exports.TypeCast = typecast
module.exports.Defs = defs
module.exports = {
  argsList,
  argsCount,
  argsValidate
}
