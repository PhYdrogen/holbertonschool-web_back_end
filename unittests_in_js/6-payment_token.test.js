const { expect } = require('chai');
const sinon = require("sinon");
const Utils = require('./utils');
const DebugHolberton = require('./debug');
const getPaymentTokenFromAPI = require('./6-payment_token');

(new DebugHolberton()).fetch(process.argv, process.env);

describe('sendPaymentRequestToApi', () => {
    it('async test false', (done) => {
        getPaymentTokenFromAPI(false).then(() => {
        }, rej => {
            expect(rej).to.not.eq({data: 'Successful response from the API'});
            done();
        });
    });
    it('async test true', (done) => {
        getPaymentTokenFromAPI(true).then(res => {
            expect(res).to.eql({data: 'Successful response from the API'});
            done();
        });
    });
});