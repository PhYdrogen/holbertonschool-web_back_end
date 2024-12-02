const assert = require('assert');
const calculateNumber = require('./1-calcul.js');
const DebugHolberton = require('./debug.js');
(new DebugHolberton("Checker")).fetch(process.argv, process.env);

describe('when type is SUM', function () {
    it('test 1', function () {
        assert.equal(calculateNumber('SUM', 1, 1), 2);
        assert.equal(calculateNumber('SUM', 1.3, 3), 4);
        assert.equal(calculateNumber('SUM', 3.3, 1), 4);
    });
    it('test 2', function () {
        assert.equal(calculateNumber('SUM', 3, 1.3), 4);
        assert.equal(calculateNumber('SUM', 3, 2.3), 5);
    });
    it('test 3', function () {
        assert.equal(calculateNumber('SUM', 3.3, 2.3), 5);
        assert.equal(calculateNumber('SUM', 1.3, 2.8), 4);
        assert.equal(calculateNumber('SUM', 1.1, 1.1), 2);
    });
});  

describe('when type is SUBTRACT', function () {
    it('when type is SUBTRACT', function () {
        assert.equal(calculateNumber('SUBTRACT', 1.3, 1), 0);
    });

});  

describe('when type is DIVIDE', function () {
    it('when type is DIVIDE', function () {
        assert.equal(calculateNumber('DIVIDE', 1, 0).toLowerCase(), 'error');
        assert.equal(calculateNumber('DIVIDE', 1, 0.2).toLowerCase(), 'error');
        assert.equal(calculateNumber('DIVIDE', 1, 0.3).toLowerCase(), 'error');
        assert.equal(calculateNumber('DIVIDE', 1, 0.4).toLowerCase(), 'error');
        assert.equal(calculateNumber('DIVIDE', 1, 0.5), 1);
        assert.equal(calculateNumber('DIVIDE', 1.3, 1), 1);
    });
  });
