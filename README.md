# SYNOPSIS
A low level module for destructuring asynchronous values.

# MOTIVATION
Use `async/await` on regular callback APIs without touching any promises.

# DESCRIPTION
`asde` is a low level module that wraps a node-style function call in a promise
so that it can be used with `async/await`. The promise always resolves with an
array of values (error first). The values can then be identified using
a `destructuring assignment`, providing both the error and values in the same
channel without the need for a try/catch block.

# USAGE
Here are some notes on how async functions work with the await keyword.

### ASYNC
`async` functions help solve `promise hell`. They provide a synchronous-looking
way to receive asynchronous values.

```js
async function main () {
  // the await keyword is only available inside async functions.

  // async functions are "shallow"! await is not available
  // to any nested, non-async functions in the scope.

  // an exception in an async function body
  // will throw an unhandled promise rejection.

  // try/catch blocks can be used to handle rejections.
}
```

### AWAIT
The `await` keyword waits until a promise resolves or rejects.

```js
const b = new Promise((resolve, reject) => {
  setTimeout(() => resolve('b'), 16)
})

async function main () {
  try {
    console.log('a')
    console.log(await b)
    console.log('c')
  } catch (ex) {
    console.log(ex)
  }
}

main()
```

If you don't catch, the `rejection` will "bubble up" until it finds a promise
that can handle it. If one isn't found, Node.js (and some browsers) provide a
catch-all event called `unhandledRejection` (similar too `uncaughtException`).

# USAGE
`asde` will return a function that takes the same parameters as the original
function, but does not require a `callback`. The new function should be called
with the `await` keyword from within a `async` function.

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
