import {
  jest,
  expect,
  test,
  describe,
  beforeEach
} from '@jest/globals';
import superTest from 'supertest';
import Server from '../../src/server.js';

describe('API E2E Test Suite', () => {
  
  beforeEach(async () => {
    await superTest(Server)
      .delete('/');
  });

  test('POST / - should save an item and return ok', async () => {
    const response = await superTest(Server)
      .post('/')
      .send({
        nome: 'marcosrodrigues',
        age: 21
      });
  
    const expectedResponse = { ok: 1 };
    expect(JSON.parse(response.text)).toStrictEqual(expectedResponse);
  }); 
  
  test('GET / - should return array', async () => {
    const response = await superTest(Server)
    .get('/');
    
    const data = JSON.parse(response.text);
    expect(data).toBeInstanceOf(Array);
    expect(data.length).toEqual(0);
  });


  test('DELETE / - should clear database', async () => {
    const response = await superTest(Server)
      .delete('/');
  
    const expectedResponse = { ok: 1 };
    expect(JSON.parse(response.text)).toStrictEqual(expectedResponse);
  });
});