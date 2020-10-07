## FArgs

> Simple Library to Parser Argument Function for Javascript
<br>

## Example

> const FArgs = require('./index')
>
> const examplefunction = function () {
<br>
const fargs = FArgs(arguments)
<br>
console.table(fargs.list)
<br>
console.table(fargs.typedList)
<br>
}
<br>
examplefunction(1, 'teste', 25, {
id: 1,
name: 'aaa'
})
<br>

### License

MIT
<br>
