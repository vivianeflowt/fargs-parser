## fargs-parser - simple library to parser function arguments for node.js

This library was created with the objective of simplifying the creation of functions with different options of parameters and analyzing the type of data passed and making some validations.

### Installation

With [npm](https://npmjs.org/):

```shell
npm install fargs-parser
```

### How to use?
```js
const FargsParser = require('fargs-parser')

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
```
<br>

