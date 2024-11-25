import http from 'node:http';
import DebugHolberton from './debug';

const d = new DebugHolberton();
d.fetch();
const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!\n');
});
app.listen(1245);
module.exports = app;
