var FargsParser = require('../index')

// some function without argument definition
var sampleFunction = function () {
  // creates a new instance of the function parser and passes the
  // function's argument object as a parameter
  var fargs = FargsParser(arguments)
  // to get the list of arguments we can use two methods
  //  methods:
  //    list        (simple argument list)
  //    typedList   (list with argument type)
  // each method returns an array with the data of the
  // arguments passed to the function
  console.table(fargs.list)
  console.table(fargs.typedList)
}

sampleFunction('name', 123)
