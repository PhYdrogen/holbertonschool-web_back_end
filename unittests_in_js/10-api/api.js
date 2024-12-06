const express = require('express');
const app = express();
const port = 7865;
const DebugHolberton = require('./debug');

(new DebugHolberton()).fetch(process.argv, process.env);

//middleware for body
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send("Welcome to the payment system");
});
app.get('/cart/:id(\\d+)/', (req, res) => {
    res.status(200).send(`Payment methods for cart ${req.params["id"]}`)
});
app.get('/available_payments', (req, res) => {
    res.status(200).send(JSON.stringify({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      }));
});
app.post('/login', (req, res) => {
    console.log(req)
    res.status(200).send(`Welcome ${req.body.userName}`);
});
app.get('*', (req, res) => {
    res.status(404).send('Not found');
});

app.listen(port, () => {
    console.log("API available on localhost port 7865");
});
