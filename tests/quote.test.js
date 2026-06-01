const request = require('supertest');
const app = require('../src/server');

describe('GET /quote', () => {

  test('deve retornar status 200', async () => {

    const response = await request(app)
      .get('/quote');

    expect(response.statusCode).toBe(200);

  });

});