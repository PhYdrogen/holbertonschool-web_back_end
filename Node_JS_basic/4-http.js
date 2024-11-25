const http = require('node:http');
const DebugHolberton = require('./debug');

const d = new DebugHolberton();
// d.fetch();
const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!');
});
app.listen(1245);
module.exports = app;
