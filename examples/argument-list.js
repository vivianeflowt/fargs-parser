var FargsParser = require('../src/fargs-parser').FArgsParser

// some function without argument definition
var sampleFunction = function () {
    // creates a new instance of the function parser and passes the
    // function's argument object as a parameter
    var fargs = FargsParser(arguments)

    console.table(fargs.arguments)
}

sampleFunction('name', 123)
