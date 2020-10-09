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

const FArgs = function (argumentObject) {
    /**
     * @param {arguments} argumentObject the function argument object
     * @return {object} result a fargs-parser instance
     */
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
        },
    }
}

module.exports = {
    FArgs,
    typeOf,
    argsList,
    argsCount,
    LIST_TYPE,
}
