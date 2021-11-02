'use strict';

const { server } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('Web server', () => {

    test('Checking th name qurey', async () => {
        const response = await mockRequest.get('/person?name=hassan');
        expect(response.status).toBe(200);
    });

    test('no name', async () => {
        const response = await mockRequest.get('/person?name=');
        expect(response.status).toBe(500);
    });
});
