const expect = require('expect');
const {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'James';
    var text = 'Hello';
    var response = generateMessage(from, text);

    expect(response.createdAt).toBeA('number');
    expect(response).toInclude({from, text});
  });
});
