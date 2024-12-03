const { expect } = require('chai');
const sinon = require("sinon");
const Utils = require('./utils');
const DebugHolberton = require('./debug');
const sendPaymentRequestToApi = require('./3-payment');

(new DebugHolberton()).fetch(process.argv, process.env);

describe('sendPaymentRequestToApi', () => {
    it('exec the function with arg and once', () => {
        const spycalculateNumber = sinon.spy(Utils, 'calculateNumber');
        sendPaymentRequestToApi(100, 20);
        expect(spycalculateNumber.calledWithExactly('SUM', 100, 20)).to.be.true;
        expect(spycalculateNumber.calledOnce).to.be.true;
        spycalculateNumber.restore();
    });
});
