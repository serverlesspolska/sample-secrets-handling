# How to handle secrets in serverless application on AWS

Five lambda functions demonstrate different ways of fetching secrets from AWS.

Samples include secrets stored in **AWS Systems Manager Parameter Store** as well as **AWS Secrets Manager**.

## How to use it?
### Deploy
Install node dependencies
```
npm i
```
Deploy. By default it deploys to Frankfurt region.
```
sls deploy
```

You can adjust AWS `profile` and `region` configuration in `serverless.yml` file, in section `custom \ deployment`.

### Crete secrets in you AWS account
In Frankfurt region, create in SSM Parameter store a secret named `/sample/mysecret` and second secret in Secrets Manager named `sample/my-second-secret`

### Excute
Next, invoke each function:

#### Get secret from SSM Parameter
```
sls invoke -f ssmSimple -l
```

#### Get secret from SSM Parameter and cache it between lambda invocations
```
sls invoke -f ssmSimpleCache -l
```

#### Get secret from Secrets Manager and cache it between lambda invocations
```
sls invoke -f smSimpleCache -l
```

#### Get secret from SSM Parameter using Middy middleware
```
sls invoke -f ssmMiddy -l
```

#### Get secret from Secrets Manager using Middy middleware
```
sls invoke -f smMiddy -l
```

Please notice, that second and subsequent invocations of each lambda function vary in time. This behavior depends on whether *secret* is fetch from AWS during each call or it is cached between invocations.