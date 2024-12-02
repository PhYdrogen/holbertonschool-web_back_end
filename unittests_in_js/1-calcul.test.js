const assert = require('assert');
const calculateNumber = require('./1-calcul.js');
const DebugHolberton = require('./debug.js');
(new DebugHolberton(process.env.HOME == "/home/student_jail" ? "Checker": "Gab")).fetch(process.argv, process.env);

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

describe('when type is DIVIDE', () => {
    it('it round the first argument', () => {
        assert.equal(calculateNumber('DIVIDE', 10.0, 2), 5);
        assert.equal(calculateNumber('DIVIDE', 10.3, 2), 5);
        assert.equal(calculateNumber('DIVIDE', 10.7, 2), 5.5);
    });
    
    it('it round the second argument', () => {
        assert.equal(calculateNumber('DIVIDE', 10, 1.0), 10);
        assert.equal(calculateNumber('DIVIDE', 10, 1.3), 10);
        assert.equal(calculateNumber('DIVIDE', 10, 1.7), 5);
    });
    
    it('it should return the right number', () => {
        assert.equal(calculateNumber('DIVIDE', 10.3, 2), 5);
        assert.equal(calculateNumber('DIVIDE', 10, 1.2), 10);
        assert.equal(calculateNumber('DIVIDE', 10.3, 1.3), 10);
        assert.equal(calculateNumber('DIVIDE', 10.7, 1.2), 11);
        assert.equal(calculateNumber('DIVIDE', 10.3, 1.8), 5);
        assert.equal(calculateNumber('DIVIDE', 10.6, 1.8), 5.5);
    });

    it('it should return Error if b is equal to 0', () => {
        assert.equal(calculateNumber('DIVIDE', 10.3, 0).toLowerCase(), 'error');
        assert.equal(calculateNumber('DIVIDE', 10.7, 0).toLowerCase(), 'error');
        assert.equal(calculateNumber('DIVIDE', 10.3, 0.3).toLowerCase(), 'error');
        assert.equal(calculateNumber('DIVIDE', 10.7, 0.2).toLowerCase(), 'error');
    });
  });