module.exports = (fn, ctx) => (...args) =>
  new Promise((resolve, reject) =>
    fn.call(ctx, ...args, (err, ...values) => {
      if (err) return resolve([err])
      return resolve([null, ...values])
    })
  )
