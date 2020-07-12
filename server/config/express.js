const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const { secret } = require('./config')

module.exports = (app) => {
    app.use(cors({
        origin: 'http://localhost:3000',
        credentials: true
    }));

    app.use(cookieParser(secret));
    app.use(express.json());

    app.use((err, req, res, next) => {
        console.error(err);
        res.status(500).send('Server Error');
    });
}