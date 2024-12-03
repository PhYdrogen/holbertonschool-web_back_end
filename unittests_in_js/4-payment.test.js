const { expect } = require('chai');
const sinon = require("sinon");
const Utils = require('./utils');
const DebugHolberton = require('./debug');
const sendPaymentRequestToApi = require('./3-payment');

(new DebugHolberton()).fetch(process.argv, process.env);

describe('sendPaymentRequestToApi', () => {
    it('stubs the function', () => {
        const consoleSpy = sinon.spy(console, 'log');
        const calc = sinon.stub(Utils, 'calculateNumber');
        calc.returns(10);
        sendPaymentRequestToApi(100, 20);
        expect(calc.calledWithExactly('SUM', 100, 20)).to.be.true;
        expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
        consoleSpy.restore();
    });
});
