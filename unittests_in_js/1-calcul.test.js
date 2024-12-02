const assert = require('assert');
const calculateNumber = require('./1-calcul.js');
const DebugHolberton = require('./debug.js');
const d = new DebugHolberton('test');
d.fetch();

describe('calculateNumber', function () {
    it('test SUM 1+1', function () {
    assert.equal(calculateNumber(1, 1, 'SUM'), 2);
    });
    it('test SUB 1.3-1', function () {
        assert.equal(calculateNumber(1.3, 1, 'SUBTRACT'), 0);
    });
    it('test DIVIDE 1/0', function () {
        assert.equal(calculateNumber(1, 0, 'DIVIDE'), 'Error');
    });
    it('test DIVIDE 2.4/2.4', function () {
        assert.equal(calculateNumber(2.4, 2.4, 'DIVIDE'), 1);
    });
  });
