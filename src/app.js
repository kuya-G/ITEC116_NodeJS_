// src/app.js
const express = require('express');
const factorial = require('./factorial');

const app = express();

app.get('/factorial', (req, res) => {
  const number = parseInt(req.query.number, 10);

  if (isNaN(number) || number < 0) {
    return res.status(400).json({ error: 'Opps. Number must be equal or grater than zero' });
  }

  const result = factorial(number);
  res.json({ number, factorial: result });
});

module.exports = app;
