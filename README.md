# SYNOPSIS
A low level module for destructuring asynchronous values.

# MOTIVATION
`async` helps solve `promise hell` and provides a sync-like way to receive
values, but it doesn't provide a sync-link way to receive errors or values!

`asde` is a low level module that wraps a function call in a promise. The
promise always resolves with an array of values (error first). As any array,
the values can be identified using a `destructuring assignment`, giving us
both error and values in the same channel.

# USAGE

```js
const asde = require('asde')
const fs = require('fs')

const stat = asde(fs.stat)

async function main () {
  const [errStat, value] = await stat('./file')

  if (errStat) {
    return console.error(errStat)
  }

  console.log(value)
}

main()
```

# INSTALL

```js
npm install asde
```
