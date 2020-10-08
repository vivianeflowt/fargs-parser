## fargs-parser - simple library to parser function arguments for node.js

This library was created with the objective of simplifying the creation of functions with different options of parameters and analyzing the type of data passed and making some validations.


### Install

With [npm](https://npmjs.org/):

```shell
npm install fargs-parser
```

With [yarn](https://yarnpkg.com/en/):

```shell
yarn add fargs-parser
```

### Usage
```js
const FargsParser = require('fargs-parser')

// some function without argument definition
var someFunction = function () {

  // creates a new instance of the function parser and passes the
  // function argument object as a parameter
  
  var fargs = FargsParser(arguments)
  
  // to get the list of arguments we can use two methods and returns an array
  //    list        (simple argument list)
  //    typedList   (list with argument type)
  
  console.table(fargs.list)
  console.table(fargs.typedList)
}

someFunction('name', 123)
```
Results:
https://raw.githubusercontent.com/vivianeflowt/fargs-parser/main/docs/example.png

### License
MIT

