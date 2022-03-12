import {
  jest,
  expect,
  test,
  describe,
} from '@jest/globals';
import superTest from 'supertest';
import Server from '../../src/server.js';

describe('API E2E Test Suite', () => {
  test('GET / - should return array', async () => {
    const response = await superTest(Server)
      .get('/');
    
    const data = JSON.parse(response.text);
    expect(data).toBeInstanceOf(Array);
  });
  test.todo('POST / - should save an item and return ok');
  test.todo('DELETE / - should save  array');
});