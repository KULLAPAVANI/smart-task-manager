const request = require('supertest');
const app = require('./app');

describe('GET /api/tasks', () => {
  it('should return all tasks with 200 status', async () => {
    const res = await request(app).get('/api/tasks');
    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toBe(true);
  });
});