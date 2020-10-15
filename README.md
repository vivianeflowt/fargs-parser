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
![example](blob:https://pasteboard.co/b1ec9e2f-8873-4fb1-b6f3-787d674c0099)

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
![example](https://pasteboard.co/b1a52686-c760-40b8-9fb1-e51279ea0052)

```js
//New Method:  fargs.indexOf(index)          // return arguments info by index
//New Method:  fargs.valueOf(index)          // return value of argument by index
//New Method:  fargs.tyṕeOf(index)           // return type of argument by index
//New Property: fargs.lenght                  // return arguments length
//New Method: fargs.fatten(index)           // return flatten value if array or object
//New Method: fargs.split(index,separator)  // return split string value with separator
```
### License

MIT
