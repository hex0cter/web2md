
exports.handler = async (event) => {
  console.log('event', event);
  const params = event.pathParameters;
  console.log(`params: ${JSON.stringify(params)}`);

  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Credentials' : true
    },
    body: JSON.stringify({ result: 'ok' })
  };

  return response;
};
