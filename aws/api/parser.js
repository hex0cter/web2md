const Mercury = require('@postlight/mercury-parser');
const AWS = require('aws-sdk');

AWS.config.apiVersions = {
  lambda: '2015-03-31',
};

var lambda = new AWS.Lambda();

exports.handler = async (event) => {
  console.log('event', event);
  const { url } = JSON.parse(event.body)
  const result = await Mercury.parse(url);
  console.log(`result: ${JSON.stringify(result)}`);
  const payload = { url, result };
  console.log(`payload: ${JSON.stringify(payload)}`);

  // const lambda = new aws.Lambda({
  //   region: 'us-west-2' //change to your region
  // });

  const reply = await lambda.invoke({
    FunctionName: 'html2markdown-dev-converter',
    Payload: JSON.stringify(result) // pass params
  }).promise();
  console.log(`reply from another lambda: ${JSON.stringify(reply)}`);

  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Credentials' : true
    },
    body: reply.Payload
  };

  return response;
};
