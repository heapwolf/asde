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
const [errStat, value] = stat('./file')
```

# INSTALL

```js
npm install asde
```
