const { expect } = require('chai');
const DebugHolberton = require('./debug');
const request = require('request')

describe('test express server', () => {
  (new DebugHolberton()).fetch(process.argv, process.env);
  it('Correct result !', (done) => {
    request("http://localhost:7865/", (error, response, body) => {
      expect(body).to.equal("Welcome to the payment system");
      done()
    })
  });
  it('Correct status code !', (done) => {
    request("http://localhost:7865/", (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
});