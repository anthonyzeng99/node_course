const utils = require('./utils');
const expect = require('expect');

it('should add two numbers', () => {
  var res = utils.add(33, 11);
  expect(res)
    .toExist()
    .toBeA('number')
    .toBe(44);
});

it('should async add two numbers', (done) => {
  utils.asyncAdd(4, 3, (sum) => {
    expect(sum)
      .toExist()
      .toBeA('number')
      .toBe(7)
    done();
  });
});

it('should square number', () => {
  var res = utils.square(5);
  expect(res)
    .toExist()
    .toBeA('number')
    .toBe(25);
});

it('should async square a number', (done) => {
  utils.asyncSquare(5, (square) => {
    expect(square)
      .toExist()
      .toBeA('number')
      .toBe(25)
    done();
  });
});

// should verify first and last names are set
it ('should verify first names are set', () => {
  var res = utils.setName({}, 'Anthony Zeng');

  expect(res)
    .toExist()
    .toBeA('object')
    .toInclude({
      firstName: 'Anthony',
      lastName: 'Zeng'
    });
});


// it('should expect some values', () => {
//   expect({
//     name: 'Anthony',
//     age: 25,
//     location: 'New York'
//   }).toInclude({
//     age: 23
//   });
// });
