const chai = require('chai');
const calculateNumber = require('./2-calcul_chai');
const DebugHolberton = require('./debug');

(new DebugHolberton(process.env.HOME == "/home/student_jail" ? "Checker": "Gab")).fetch(process.argv, process.env);

describe('when type is SUM', function () {
    it('test 1', function () {
        chai.expect(calculateNumber('SUM', 1, 1), 2);
        chai.expect(calculateNumber('SUM', 1.3, 3), 4);
        chai.expect(calculateNumber('SUM', 3.3, 1), 4);
    });
    it('test 2', function () {
        chai.expect(calculateNumber('SUM', 3, 1.3), 4);
        chai.expect(calculateNumber('SUM', 3, 2.3), 5);
    });
    it('test 3', function () {
        chai.expect(calculateNumber('SUM', 3.3, 2.3), 5);
        chai.expect(calculateNumber('SUM', 1.3, 2.8), 4);
        chai.expect(calculateNumber('SUM', 1.1, 1.1), 2);
    });
});  

describe('when type is SUBTRACT', function () {
    it('when type is SUBTRACT', function () {
        chai.expect(calculateNumber('SUBTRACT', 1.3, 1), 0);
    });

});  

describe('when type is DIVIDE', () => {
    it('it round the first argument', () => {
        chai.expect(calculateNumber('DIVIDE', 10.0, 2), 5);
        chai.expect(calculateNumber('DIVIDE', 10.3, 2), 5);
        chai.expect(calculateNumber('DIVIDE', 10.7, 2), 5.5);
    });
    
    it('it round the second argument', () => {
        chai.expect(calculateNumber('DIVIDE', 10, 1.0), 10);
        chai.expect(calculateNumber('DIVIDE', 10, 1.3), 10);
        chai.expect(calculateNumber('DIVIDE', 10, 1.7), 5);
    });
    
    it('it should return the right number', () => {
        chai.expect(calculateNumber('DIVIDE', 10.3, 2), 5);
        chai.expect(calculateNumber('DIVIDE', 10, 1.2), 10);
        chai.expect(calculateNumber('DIVIDE', 10.3, 1.3), 10);
        chai.expect(calculateNumber('DIVIDE', 10.7, 1.2), 11);
        chai.expect(calculateNumber('DIVIDE', 10.3, 1.8), 5);
        chai.expect(calculateNumber('DIVIDE', 10.6, 1.8), 5.5);
    });

    it('it should return Error if b is equal to 0', () => {
        chai.expect(calculateNumber('DIVIDE', 10.3, 0).toLowerCase(), 'error');
        chai.expect(calculateNumber('DIVIDE', 10.7, 0).toLowerCase(), 'error');
        chai.expect(calculateNumber('DIVIDE', 10.3, 0.3).toLowerCase(), 'error');
        chai.expect(calculateNumber('DIVIDE', 10.7, 0.2).toLowerCase(), 'error');
    });
  });