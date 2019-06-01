const AWS = require('aws-sdk');

module.exports = function (SecretId, region = 'us-east-2') {
  const secretsmanager = new AWS.SecretsManager({
    apiVersion: '2017-10-17',
    region
  });

  const params = { SecretId };

  console.log(params);

  return secretsmanager
    .getSecretValue(params)
    .promise()
    .then(function (result) {
      console.log(`result:`);
      console.log(result);
      return JSON.parse(result.SecretString);
    })
    .catch(function (err) {
      throw new Error(err);
    });
};
