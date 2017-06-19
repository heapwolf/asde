module.exports = (fn, ctx) => (...args) =>
  new Promise((resolve, reject) =>
    process.nextTick(() =>
      fn.call(ctx, ...args, (err, ...values) => {
        if (err) return resolve([err])
        return resolve([null, ...values])
      })
    )
  )
