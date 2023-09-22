// calculator.test.js

const assert = require('chai').assert;
const { calculateExpression } = require('../src/utils/CommunFunctions');

describe('Calculator', function () {
  it('returns zero', function () {
    const result = calculateExpression('0');
    assert.equal(parseFloat(result), 0);
  });

  it('calculates addition', function () {
    const result = calculateExpression('+ 3 4');
    assert.equal(parseFloat(result), 3 + 4);
  });
  it('calculates subtraction and multiplication', function () {
    const result = calculateExpression('- 3 * 4 5');
    assert.equal(parseFloat(result), 3 - 4 * 5);
  });
  
  it('calculates addition and multiplication', function () {
    const result = calculateExpression('* + 3 4 5');
    assert.equal(parseFloat(result), (3 + 4) * 5);
  });
});
