# fargs-parser - simple library to parser function arguments for node.js

## Usase

>  npm install fargs-parser

### Example
<blockquote>
const FargsParser = require('fargs-parser')
<br>  
const functionExample = function () {
  const fargs = FargsParser(arguments)
  console.table(fargs.list)
  console.table(fargs.typedList)
}
<br>
functionExample('name', 123)
</blockquote>
<br>

