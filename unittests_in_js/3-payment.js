const Utils = require('./utils');

module.exports = function sendPaymentRequestToApi(totalAmount, totalShipping) {
    const res = Utils.calculateNumber('SUM', totalAmount, totalShipping);
    console.log(`The total is: ${res}`);
}