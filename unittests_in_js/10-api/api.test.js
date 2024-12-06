const { expect } = require('chai');
const DebugHolberton = require('./debug');
const request = require('request')

describe('test new route', () => {
  (new DebugHolberton()).fetch(process.argv, process.env);
  it('check payment', (done) => {
    request("http://localhost:7865/available_payments", (error, response, body) => {
      expect(body).to.eql(JSON.stringify({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      }));
      done()
    })
  });
  it('check post login', (done) => {
    request({
      uri: "http://localhost:7865/login",
      method: "POST",
      body: JSON.stringify({
        userName: "Betty"
      }),
      headers: {
        "Content-Type": "application/json"
      },
      callback: (error, response, body) => {
        expect(body).to.equal("Welcome Betty");
        done();
      },
    })
  });
});