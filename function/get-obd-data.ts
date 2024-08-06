import { Handler } from 'aws-lambda';

const handler: Handler = async (event) => {
  console.log(`event data = ${JSON.stringify(event)}`);
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
    }),
  };
};

export { handler };
