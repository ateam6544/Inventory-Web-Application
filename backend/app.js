const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('FRC');
    next();
});

app.use((req, res, next) => {
    res.send('Inventory Server Node JS');
});

module.exports = app;