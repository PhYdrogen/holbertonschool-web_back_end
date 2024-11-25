const http = require('node:http');
const DebugHolberton = require('./debug');
const countStudents = require('./3-read_file_async');
const process = require('node:process');


const d = new DebugHolberton();
d.fetch();
const app = http.createServer(async (req, res) => {
  if (req.url === '/students') {
    await countStudents(process.argv[0]);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is the list of our students');
  } else {

      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello Holberton School!');
    }
});
app.listen(1245);
module.exports = app;
