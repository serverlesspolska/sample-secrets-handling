const middy = require('@middy/core')
const ssm = require('@middy/ssm')

const handler = middy(async (event, context) => {
  const secret = context.SECRET
  return `My secret is ${secret}`
})

handler.use(ssm({
  cache: true,
  names: {
    SECRET: '/sample/mysecret'
  },
  setToContext: true
}))

module.exports = {
  handler
}
