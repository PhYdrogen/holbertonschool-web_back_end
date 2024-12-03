const { expect } = require('chai');
const sinon = require("sinon");
const Utils = require('./utils');
const DebugHolberton = require('./debug');
const sendPaymentRequestToApi = require('./3-payment');

(new DebugHolberton()).fetch(process.argv, process.env);

describe('sendPaymentRequestToApi', () => {
    let consoleSpy;

    beforeEach(() => {
        consoleSpy = sinon.spy(console, 'log');
    });

    it('stubs the function', () => {
        sendPaymentRequestToApi(100, 20);
        expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
        expect(consoleSpy.calledOnce).to.be.true;
    });

    it('stubs the function', () => {
        sendPaymentRequestToApi(10, 10);
        expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
        expect(consoleSpy.calledOnce).to.be.true;
    });

    afterEach(() => {
        consoleSpy.restore();
    })
});
