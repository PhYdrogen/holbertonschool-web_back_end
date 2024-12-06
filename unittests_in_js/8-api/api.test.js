const { expect } = require('chai');
const DebugHolberton = require('./debug');
const request = require('request')

describe('test express server', () => {
    it('Correct result !',() => {
        (new DebugHolberton()).fetch(process.argv, process.env);
        request("http://localhost:7865/", (error, response, body) => {
            
            expect(body).to.equal("Welcome to the payment system");
            expect(response.statusCode).to.equal(200);
        })
    });
});