const { expect } = require('chai');
const DebugHolberton = require('./debug');
const request = require('request')

describe('test new route', () => {
  (new DebugHolberton()).fetch(process.argv, process.env);
  it('check payment', (done) => {
    request("http://localhost:7865/available_payments", (error, response, body) => {
      expect(JSON.parse(body)).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done()
    })
  });
  it('check payment status code', (done) => {
    request('http://localhost:7865/available_payments', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
  it('check post login', (done) => {
    request({
      uri: "http://localhost:7865/login",
      method: "POST",
      json:{
        userName: "Betty"
      },
      headers: {
        "Content-Type": "application/json"
      },
      callback: (error, response, body) => {
        expect(body).to.equal("Welcome Betty");
        done();
      },
    })
  });
  it('Returns the right name', function (done) {
    request.post('http://localhost:7865/login', {
      json: {
        userName: 'BobDylan',
      }
    }, (error, response, body) => {
      expect(body).to.include("Welcome BobDylan");
      done();
    });
  });
  it('test for put', function (done) {
    request.put('http://localhost:7865/login', {
      json: {
        userName: 'BobDylan',
      }
    }, (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});