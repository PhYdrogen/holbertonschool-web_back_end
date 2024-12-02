const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function () {
    it('when type is SUM', function () {
        assert.equal(calculateNumber(1, 1, 'SUM'), 2);
        assert.equal(calculateNumber(1.3, 3, 'SUM'), 4);
        assert.equal(calculateNumber(3.3, 1, 'SUM'), 4);
        //
        assert.equal(calculateNumber(3, 1.3, 'SUM'), 4);
        assert.equal(calculateNumber(3, 2.3, 'SUM'), 5);
        //
        assert.equal(calculateNumber(3.3, 2.3, 'SUM'), 5);
        assert.equal(calculateNumber(1.3, 2.8, 'SUM'), 4);
        assert.equal(calculateNumber(1.1, 1.1, 'SUM'), 2);

    });
    it('when type is SUBTRACT', function () {
        assert.equal(calculateNumber(1.3, 1, 'SUBTRACT'), 0);
    });
    it('when type is DIVIDE', function () {
        assert.equal(calculateNumber(1, 0, 'DIVIDE').toLowerCase(), 'error');
        assert.equal(calculateNumber(1, 0.2, 'DIVIDE').toLowerCase(), 'error');
        assert.equal(calculateNumber(1, 0.3, 'DIVIDE').toLowerCase(), 'error');
        assert.equal(calculateNumber(1, 0.4, 'DIVIDE').toLowerCase(), 'error');
        assert.equal(calculateNumber(1, 0.5, 'DIVIDE'), 1);
    });
  });
