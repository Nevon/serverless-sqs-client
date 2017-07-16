var AWS = require("aws-sdk");
const SQS_ENDPOINT = process.env.SQS_ENDPOINT || "http://localhost:9324";

module.exports = (options = {}) =>
  process.env.IS_OFFLINE
    ? new AWS.SQS(
        Object.assign({}, options, {
          region: "localhost",
          endpoint: SQS_ENDPOINT
        })
      )
    : new AWS.SQS(options);
