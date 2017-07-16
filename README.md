Serverless SQS Client
=====================

Lets you use the same client for local and online development against AWS SQS.

This library is intended to be used together with [serverless-sqs-local](https://github.com/Nevon/serverless-sqs-local).

# Installation

`yarn add serverless-sqs-client` / `npm install --save serverless-sqs-client`

# Usage

```
const sqs = require("serverless-sqs-client")();
sqs.listQueues({}, (err, data) => err ? console.error(err, err.stack) : console.log(data));
```

`serverless-sqs-client` takes an optional options object which is forwarded directly to [SQS' constructor](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SQS.html#constructor_details).

Example:

```
const sqs = require("serverless-sqs-client")({ accessKeyId: "fake-key-id", secretAccessKey: "******" })
```

