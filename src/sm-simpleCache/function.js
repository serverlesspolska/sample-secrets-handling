const SecretsManager = require('aws-sdk/clients/secretsmanager')

let cachedSecret = null

const handler = async (event) => {
  const secret = await getSmSecret('sample/my-second-secret')
  return `My secret is ${secret}`
}

const getSmSecret = async (Name) => {
  if (!cachedSecret) {
    const sm = new SecretsManager()
    console.log('Getting secret from Secrets Manger')
    const response = await sm.getSecretValue({ SecretId: Name }).promise()
    cachedSecret = JSON.parse(response.SecretString).secret // 'secret' is a field name of JSON property in our secret
  }
  return cachedSecret
}

module.exports = {
  handler
}
