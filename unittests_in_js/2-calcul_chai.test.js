import { expect } from 'chai';
import calculateNumber from './2-calcul_chai.js';
import DebugHolberton from './debug.js';
(new DebugHolberton(process.env.HOME == "/home/student_jail" ? "Checker": "Gab")).fetch(process.argv, process.env);

describe('when type is SUM', function () {
    it('test 1', function () {
        expect(calculateNumber('SUM', 1, 1), 2);
        expect(calculateNumber('SUM', 1.3, 3), 4);
        expect(calculateNumber('SUM', 3.3, 1), 4);
    });
    it('test 2', function () {
        expect(calculateNumber('SUM', 3, 1.3), 4);
        expect(calculateNumber('SUM', 3, 2.3), 5);
    });
    it('test 3', function () {
        expect(calculateNumber('SUM', 3.3, 2.3), 5);
        expect(calculateNumber('SUM', 1.3, 2.8), 4);
        expect(calculateNumber('SUM', 1.1, 1.1), 2);
    });
});  

describe('when type is SUBTRACT', function () {
    it('when type is SUBTRACT', function () {
        expect(calculateNumber('SUBTRACT', 1.3, 1), 0);
    });

});  

describe('when type is DIVIDE', () => {
    it('it round the first argument', () => {
        expect(calculateNumber('DIVIDE', 10.0, 2), 5);
        expect(calculateNumber('DIVIDE', 10.3, 2), 5);
        expect(calculateNumber('DIVIDE', 10.7, 2), 5.5);
    });
    
    it('it round the second argument', () => {
        expect(calculateNumber('DIVIDE', 10, 1.0), 10);
        expect(calculateNumber('DIVIDE', 10, 1.3), 10);
        expect(calculateNumber('DIVIDE', 10, 1.7), 5);
    });
    
    it('it should return the right number', () => {
        expect(calculateNumber('DIVIDE', 10.3, 2), 5);
        expect(calculateNumber('DIVIDE', 10, 1.2), 10);
        expect(calculateNumber('DIVIDE', 10.3, 1.3), 10);
        expect(calculateNumber('DIVIDE', 10.7, 1.2), 11);
        expect(calculateNumber('DIVIDE', 10.3, 1.8), 5);
        expect(calculateNumber('DIVIDE', 10.6, 1.8), 5.5);
    });

    it('it should return Error if b is equal to 0', () => {
        expect(calculateNumber('DIVIDE', 10.3, 0).toLowerCase(), 'error');
        expect(calculateNumber('DIVIDE', 10.7, 0).toLowerCase(), 'error');
        expect(calculateNumber('DIVIDE', 10.3, 0.3).toLowerCase(), 'error');
        expect(calculateNumber('DIVIDE', 10.7, 0.2).toLowerCase(), 'error');
    });
  });