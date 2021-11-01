'use strict';

const { server } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('Web server', () => {

    test('/Home', async () => {
        const response = await mockRequest.get('/Home');
        expect(response.status).toBe(200);
    });
    test('Should responed 404', async () => {
        const response = await mockRequest.get('/foo');
        expect(response.status).toBe(404);
    });
    test('Should responed 500', async () => {
        const response = await mockRequest.get('/error');
        expect(response.status).toBe(500);
    });
});

