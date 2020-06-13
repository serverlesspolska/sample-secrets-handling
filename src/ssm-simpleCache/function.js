const SSM = require('aws-sdk/clients/ssm')

let cachedSecret = null

const handler = async (event) => {
  const secret = await getSsmSecret('/sample/mysecret')
  return `My secret is ${secret}`
}

const getSsmSecret = async (Name) => {
  if (!cachedSecret) {
    const ssm = new SSM()
    console.log('Getting secret from SSM')
    const response = await ssm.getParameter({ Name, WithDecryption: true }).promise()
    cachedSecret = response.Parameter.Value
  }
  return cachedSecret
}

module.exports = {
  handler
}
