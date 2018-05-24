const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    var res = isRealString({});
    expect(res).toEqual(false);
  });

  it('should reject string with only spaces', () => {
    var res = isRealString('    ');
    expect(res).toEqual(false);
  });

  it('should allow string with non-space characters', () => {
    var res = isRealString('    hello      ');
    expect(res).toEqual(true);
  });
})
