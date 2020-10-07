# fargs-parser - simple library to parser function arguments for node.js

## Usase

>  npm install fargs-parser

### Example

>const FargsParser = require('fargs-parser')
>const functionExample = function () {
>const fargs = FargsParser(arguments)
>console.table(fargs.list)
>console.table(fargs.typedList)
>}
>functionExample('name', 123)

<br>

