const { expect } = require('chai');
const DebugHolberton = require('./debug');
const request = require('request')

describe('test express server', () => {
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

describe('test new route', () => {
  (new DebugHolberton()).fetch(process.argv, process.env);
  it('Cart 0!', (done) => {
    request("http://localhost:7865/cart/1", (error, response, body) => {
      expect(body).to.equal("Payment methods for cart 1");
      done()
    })
  });
  it('Cart -1', (done) => {
    request("http://localhost:7865/cart/-1", (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done()
    })
  });
  it('Cart an string', (done) => {
    request("http://localhost:7865/cart/ok", (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});