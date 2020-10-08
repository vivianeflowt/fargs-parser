/*
 * fargs-parser
 * Copyright(c) 2020 Viviane Florido.
 * Licensed under the MIT license.
 */

'use strict'

const type = require('type-detect')

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
      list.push([e, type(e).toLowerCase()])
    })
    return list
  }
}
const argsList = (argList = [], callback) => {
  if (callback == null) {
    callback = LIST_TYPE.SIMPLE
  }
  return callback(argList)
}

const argsCount = (argList = []) => {
  return argList.length
}

const typeOf = (value) => {
  return type(value).toLowerCase()
}

const FArgs = function (argumentObject) {
  if (!typeOf(argumentObject) === 'arguments') {
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
      return argsCount(args())
    },
    list: () => {
      return argsList(args(), LIST_TYPE.SIMPLE)
    },
    typedList: () => {
      return argsList(args(), LIST_TYPE.TYPED)
    }
  }
}

module.exports = {
  FArgs,
  typeOf,
  argsList,
  argsCount,
  LIST_TYPE
}
