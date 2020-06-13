const middy = require('@middy/core')
const sm = require('@middy/secrets-manager')

const handler = middy(async (event, context) => {
  const { secret } = context.SECRET // returns parsed JSON as Object with property 'secret'
  return `My secret is ${secret}`
})

handler.use(sm({
  cache: true,
  secrets: {
    SECRET: 'sample/my-second-secret'
  },
  setToContext: true
}))

module.exports = {
  handler
}
