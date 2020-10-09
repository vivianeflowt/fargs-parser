var FargsParser = require('../src/fargs-parser').FArgs

// some function without argument definition
var sampleFunction = function () {
    // creates a new instance of the function parser and passes the
    // function's argument object as a parameter
    var fargs = FargsParser(arguments)

    // list        (simple argument list)
    // typedList   (list with argument type)

    console.table(fargs.list())
    console.table(fargs.typedList())
}

sampleFunction('name', 123)
