import assert from 'assert';
import calculateNumber from './0-calcul.js';

describe('calculateNumber', function () {
    it('test 1', function () {
    assert.equal(calculateNumber(1, 1), 2);
    });
    it('test 2', function () {
        assert.equal(calculateNumber(1.3, 1), 2);
    });
    it('test 3', function () {
        assert.equal(calculateNumber(1, 1.3), 2);
    });
    it('test 4', function () {
        assert.equal(calculateNumber(1.5, 1), 3);
    });
  });
