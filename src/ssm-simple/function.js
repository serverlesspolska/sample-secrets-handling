const SSM = require('aws-sdk/clients/ssm')

const handler = async (event) => {
  const secret = await getSsmSecret('/sample/mysecret')
  return `My secret is ${secret}`
}

const getSsmSecret = async (Name) => {
  const ssm = new SSM()
  console.log('Getting secret from SSM')
  const response = await ssm.getParameter({ Name, WithDecryption: true }).promise()
  return response.Parameter.Value
}

module.exports = {
  handler
}
