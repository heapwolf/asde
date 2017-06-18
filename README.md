# SYNOPSIS
A low level module for destructuring asynchronous values.

# MOTIVATION
`async` helps solve `promise hell` and provides a sync-like way to receive
values, but doesn't include a similar way to receive errors. `asde` is a
simple, low level promise wrapper that returns both error and values as an
array to which `destructuring assignment` can identify the values.

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
