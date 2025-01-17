const express = require('express');
const app = express();
const port = 7865;
const DebugHolberton = require('./debug');

(new DebugHolberton()).fetch(process.argv, process.env);

app.get('/', (req, res) => {
    res.status(200).send("Welcome to the payment system");
});

app.listen(port, () => {
    console.log("API available on localhost port 7865");
});