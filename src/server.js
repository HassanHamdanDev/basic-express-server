'use strict';

const express = require('express');
require('dotenv').config();
const server = express();
const PORT = process.env.PORT || 3090;

const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const logger = require('./middleware/logger');
const queryValidator = require('./middleware/validator');

server.get('/Home', (req, res) => {
    res.status(200).send('All Good !!');
});

server.get('/person', queryValidator, (req, res) => {
    let name = req.query.name;
    res.status(200).json({ name: `${name}` });
});

server.get('/error', (req, res, next) => {
    throw new Error('Server Error');
});

server.use('*', notFoundHandler);
server.use(logger);
server.use(errorHandler);




function start() {
    server.listen(PORT, () => {
        console.log(`Server Listening on ${PORT}`);
    });
}

module.exports = {
    server: server,
    start: start,
}


