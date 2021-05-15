
exports.handler = async (event) => {
  console.log('event', event);
  const { url } = JSON.parse(event.body)

  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Credentials' : true
    },
    body: JSON.stringify({ url, result: 'ok' })
  };

  return response;
};
