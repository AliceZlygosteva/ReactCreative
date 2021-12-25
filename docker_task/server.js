'use strict';

const express = require('express');
const app = express();

const HOST = '0.0.0.0';
const PORT = 4444;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/app/index.html');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);