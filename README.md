# fargs-parser - simple library to parser function arguments for node.js

> Simple Library to Parser Argument Function for Node

## Usage

  const FargsParser = require('fargs-parser')

  const functionExample = function () {
      const fargs = FargsParser(arguments)
      console.table(fargs.list)
      console.table(fargs.typedList)
  }
  functionExample('name', 123)

