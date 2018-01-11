const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found',
    name: 'Todo App v1.0'
  });
});

//GET /users
app.get('/users', (req, res) => {
  res.status(200)
    .send([
      {
        name: 'Anthony',
        age: 18
      },
      {
        name: 'Kirby',
        age: 2
      }
    ])
})

app.listen(3000);

module.exports.app = app;
