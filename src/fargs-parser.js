/*
 * fargs-parser
 * Copyright(c) 2020 Viviane Florido.
 * Licensed under the MIT license.
 */

'use strict'

const type = require('type-detect')

const LIST_TYPE = {
  SIMPLE: (argList = []) => {
    /**
     * @param {array} argList
     * @return {array} result a array with simple list
     */
    const list = []
    argList.forEach((e) => {
      list.push([e])
    })
    return list
  },
  TYPED: (argList = []) => {
    /**
     * @param {array} argList
     * @return {array} result a array with a typed
     */
    const list = []
    argList.forEach((e) => {
      list.push([e, typeOf(e)])
    })
    return list
  },
}
const argsList = (argList = [], callback) => {
  /**
   * @param {array} argList
   * @param {function} callback
   * @return {array} result a array with the arguments list
   */
  if (callback == null) {
    callback = LIST_TYPE.SIMPLE
  }
  return callback(argList)
}

const argsCount = (argList = []) => {
  /**
   * @param {array} argList
   * @return {number} result length of array
   */
  return argList.length
}

const typeOf = (value) => {
  /**
   * @param {value} value some value to get the type
   * @return {string} result value type
   */
  return type(value).toLowerCase()
}

const type = require('type-detect')
const arrFlat = require('utils-flatten')
const objFlat = require('flat')

const typeOf = (value) => {
  return type(value).toLowerCase()
}

const argumentListBuilder = function (argumentObject) {
  const argumentList = []
  Array.from(argumentObject).forEach(item => {
    argumentList.push({
      value: item,
      type: typeOf(item),
    })
    index++
  });
  return argumentList
}

function FArgsParser(argumentObject) {
  if (!(this instanceof FArgsParser)) {
    return new FArgsParser(argumentObject);
  }
  if (!typeOf(argumentObject) === 'arguments') {
    throw new Error('needs argument object as parameter')
  }

  const _arguments = argumentListBuilder(argumentObject)

  this.arguments = new function () {
    return _arguments
  }

  this.indexOf = function (index) {
    return _arguments[index]
  }
  this.valueOf = function (index) {
    return _arguments[index].value
  }
  this.typeOf = function (index) {
    return _arguments[index].type
  }
  this.length = _arguments.length

  this.flatten = function (index) {
    if (typeOf(_arguments[index].value) == 'array') {
      return arrFlat(_arguments[index].value)
    }
    if (typeOf(_arguments[index].value) == 'object') {
      return objFlat(_arguments[index].value)
    }
    return null
  }
  this.split = function (index, sep = " ") {
    if (typeOf(_arguments[index].value) == 'string') {
      return _arguments[index].value.split(sep)
    }
    return null
  }
}

module.exports = {
  FArgsParser
}
