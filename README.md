## fargs-parser - simple library to parse function arguments for node.js

This library was created with the objective of simplifying the creation of functions with different options of parameters

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
const FargsParser = require("fargs-parser");

// some function without argument definition
var someFunction = function () {
  // creates a new instance of the function parser and passes the
  // function argument object as a parameter

  var fargs = FargsParser(arguments);

  console.table(fargs.arguments);
};

someFunction("name", 123);
```

<span> Result: </span> <br />
![example](https://github.com/vivianeflowt/fargs-parser/blob/main/examples/example1.png)

```js
// Some New Methods
var someFunction = function () {
  // creates a new instance of the function parser and passes the
  // function argument object as a parameter

  var fargs = FargsParser(arguments);
  // Fatten as Array 
  console.log(fargs.flatten(0))
};

someFunction([1,2[3,4]]);
```
<span> Result: </span> <br />
![example](https://github.com/vivianeflowt/fargs-parser/blob/main/examples/example2.png)


### License

MIT
