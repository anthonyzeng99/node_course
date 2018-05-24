const expect = require('expect');
const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'James';
    var text = 'Hello';
    var response = generateMessage(from, text);

    expect(response.createdAt).toBeA('number');
    expect(response).toInclude({from, text});
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = "James";
    var latitude = 123;
    var longitude = 456;
    var url = `https://www.google.com/maps?q=${latitude},${longitude}`
    var response = generateLocationMessage(from, latitude, longitude);

    expect(response.createdAt).toBeA('number');
    expect(response).toInclude({from, url});
  })
})
