/*
 * fargs-parser
 * Copyright(c) 2020 Viviane Florido.
 * Licensed under the MIT license.
 */

'use strict'

const typedetect = require('type-detect')
const arrFlat = require('utils-flatten')
const objFlat = require('flat')

const typeOf = (value) => {
    return typedetect(value).toLowerCase()
}

const argumentListBuilder = function (argumentObject) {
    const argumentList = []
    Array.from(argumentObject).forEach((item) => {
        argumentList.push({
            value: item,
            type: typeOf(item),
        })
    })
    return argumentList
}

function FArgsParser(argumentObject) {
    if (!(this instanceof FArgsParser)) {
        return new FArgsParser(argumentObject)
    }
    if (!typeOf(argumentObject) === 'arguments') {
        throw new Error('needs argument object as parameter')
    }

    const _arguments = argumentListBuilder(argumentObject)

    this.arguments = new (function () {
        return _arguments
    })()
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
    this.split = function (index, sep = ' ') {
        if (typeOf(_arguments[index].value) == 'string') {
            return _arguments[index].value.split(sep)
        }
        return null
    }
}

module.exports = {
    typeOf,
    FArgsParser,
}
