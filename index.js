
module.exports = (fn, ctx) => (...args) =>
  new Promise((resolve, reject) =>
    process.nextTick(() =>
      fn.call(ctx, ...args, (err, ...values) => {
        if (err) return resolve([null, err])
        return resolve([...values, null])
      })
    )
  )
