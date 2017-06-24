const assert = require('assert')
const asde = require('./index')

function foo (n, cb) {
  setTimeout(() => {
    if (n < 100) {
      return cb(new Error())
    }
    cb(null, n)
  }, 150)
}

const fn = asde(foo)

async function main () {
  {
    const [ n, err] = await fn(50)
    assert(err, 'should return an error')
  }

  {
    const [n, err] = await fn(150)
    assert(!err, 'no error when callback provides null as first arg')
    assert(n === 150, 'value returned and destructured')
  }
}

main()
