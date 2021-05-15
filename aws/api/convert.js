var Mercury = require('@postlight/mercury-parser');

exports.handler = async (event) => {
  console.log('event', event);
  const { url } = JSON.parse(event.body)
  const result = await Mercury.parse(url);
  console.log(`result: ${JSON.stringify(result)}`);
  const payload = { url, result };
  console.log(`payload: ${JSON.stringify(payload)}`);

  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Credentials' : true
    },
    body: JSON.stringify(payload)
  };

  return response;
};
