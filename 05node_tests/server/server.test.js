const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

it('should return hello world response', (done) => {
  request(app)
    .get('/')
    .expect((res) => {
      expect(res.body)
        .toInclude({
          error: 'Page not found'
        })
    })
    .expect(404)
    .end(done);
});

it('should return users', (done) => {
  request(app)
    .get('/users')
    .expect(200)
    .expect((res) => {
      expect(res.body)
        .toInclude({
          name: 'Anthony',
          age: 18
        })
    })
    .end(done);
});
