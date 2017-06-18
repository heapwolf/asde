module.exports = (fn, ctx) => (...args) => {
  return (new Promise((resolve, reject) => {
    return fn.call(ctx, ...args, (err, ...values) => {
      if (err) return resolve([err])
      return resolve([null, ...values])
    })
  }))
}
