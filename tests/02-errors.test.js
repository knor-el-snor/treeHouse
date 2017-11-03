import BadRequestError from '../src/lib/errors/badRequest';
import NotFoundError from '../src/lib/errors/notFound';
import ServerError from '../src/lib/errors/serverError';
import UnauthorisedError from '../src/lib/errors/unauthorised';
import ValidationError from '../src/lib/errors/validation';

describe('#Errors', () => {
  test('Should consist of a default bad error request code and statusCode', async () => {
    const error = new BadRequestError();
    expect(error).toHaveProperty('statusCode', 400);
    expect(error).toHaveProperty('code', 'BAD_REQUEST');
    expect(error).toHaveProperty('message');
  });

  test('Should consist of a custom bad error request code', async () => {
    const error = new BadRequestError('This is a bad request', 'MY_CUSTOM_BAD');
    expect(error).toHaveProperty('statusCode', 400);
    expect(error).toHaveProperty('code', 'MY_CUSTOM_BAD');
    expect(error).toHaveProperty('message', 'This is a bad request');
  });

  test('Should consist of a default not found error code and statusCode', async () => {
    const error = new NotFoundError();
    expect(error).toHaveProperty('statusCode', 404);
    expect(error).toHaveProperty('code', 'NOT_FOUND');
    expect(error).toHaveProperty('message');
  });

  test('Should consist of a custom bad request error code', async () => {
    const error = new NotFoundError('Not found', 'MY_CUSTOM_NF');
    expect(error).toHaveProperty('statusCode', 404);
    expect(error).toHaveProperty('code', 'MY_CUSTOM_NF');
    expect(error).toHaveProperty('message', 'Not found');
  });

  test('Should consist of a default not found error code and statusCode', async () => {
    const error = new ServerError();
    expect(error).toHaveProperty('statusCode', 500);
    expect(error).toHaveProperty('code', 'SERVER_ERROR');
    expect(error).toHaveProperty('message');
  });

  test('Should consist of a custom server error code', async () => {
    const error = new ServerError('ServerErr', 'CUSTOM_SERVER_ERROR');
    expect(error).toHaveProperty('statusCode', 500);
    expect(error).toHaveProperty('code', 'CUSTOM_SERVER_ERROR');
    expect(error).toHaveProperty('message', 'ServerErr');
  });

  test('Should consist of a default unauthorised error code and statusCode', async () => {
    const error = new UnauthorisedError();
    expect(error).toHaveProperty('statusCode', 401);
    expect(error).toHaveProperty('code', 'NOT_AUTHORISED');
    expect(error).toHaveProperty('message');
  });

  test('Should consist of a custom unauthorised code', async () => {
    const error = new UnauthorisedError('UnauthCustom', 'CUSTOM_UNAUTHORISED');
    expect(error).toHaveProperty('statusCode', 401);
    expect(error).toHaveProperty('code', 'CUSTOM_UNAUTHORISED');
    expect(error).toHaveProperty('message', 'UnauthCustom');
  });

  test('Should consist of a default validation error code and statusCode', async () => {
    const error = new ValidationError();
    expect(error).toHaveProperty('statusCode', 400);
    expect(error).toHaveProperty('code', 'INVALID_REQUEST');
    expect(error).toHaveProperty('message');
  });

  test('Should consist of a custom validation code', async () => {
    const error = new ValidationError('invalidCustom', 'CUSTOM_INVALID');
    expect(error).toHaveProperty('statusCode', 400);
    expect(error).toHaveProperty('code', 'CUSTOM_INVALID');
    expect(error).toHaveProperty('message', 'invalidCustom');
  });
});
