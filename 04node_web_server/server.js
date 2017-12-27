const express = require('express');

var app = express();

app.get('/', (req, res) => {
  // res.send('<h1>Hello Express!</h1>');
  res.send({
    name: 'Anthony',
    likes: [
      'travel',
      'stuff'
    ]
  });
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Bad Request'
  });
});

app.listen(3000);
