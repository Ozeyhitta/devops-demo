const request = require('supertest');
const app = require('./app');

test('GET / trả về Hello World', async () => {
  const res = await request(app).get('/');
  expect(res.statusCode).toBe(200);
  expect(res.body.message).toBe('Hello World! 🚀');
});