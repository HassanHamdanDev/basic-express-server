'use strict';

const { server } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('Web server', () => {

    test('Should responed 404', async () => {
        const response = await mockRequest.get('/foo');
        expect(response.status).toBe(404);
    });
});
