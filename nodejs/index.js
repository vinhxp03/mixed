const express = require('express');
const app = express();

// Library
const Joi = require('./library/Joi');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

/** Joi validator */
app.get('/joi', (req, res) => {
  // Get param
  let params = {
    ...req.query
  }

  res.send({
    code: 200,
    message: 'Success',
    data: Joi.validate(params)
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});