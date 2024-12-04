const { expect } = require('chai');
const got = require('got');
const DebugHolberton = require('./debug');

(new DebugHolberton()).fetch(process.argv, process.env);

describe('test express server', () => {
    let res;
    before(async () => {
        res = await got('http://localhost:7865/');
    });
    it('Correct result?',() => {
        expect(res.body).to.equal("Welcome to the payment system");
    });
    it('Correct statusCode?', () => {
        expect(res.statusCode).to.equal(200);
    });
    it('Correct port?', () => {
        expect(res.client._peername.port).to.equal(7865);
    });
    
    after(() => {
        res = null;
    });
});