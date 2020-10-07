# fargs-parser - simple library to parser function arguments for node.js

## Usase

>  npm install fargs-parser

### Example
<code>
const FargsParser = require('fargs-parser')
<br />
const functionExample = function () {
  <br />
  const fargs = FargsParser(arguments)
  <br />
  console.table(fargs.list)
  <br />
  console.table(fargs.typedList)
<br />
}
<br />
functionExample('name', 123)
</code>

<br>

