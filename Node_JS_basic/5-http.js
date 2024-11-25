const http = require('node:http');
const process = require('node:process');
const DebugHolberton = require('./debug');
const countStudents = require('./3-read_file_async');

const d = new DebugHolberton();
d.fetch();
const app = http.createServer(async (req, res) => {
  if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    countStudents(process.argv[2])
      .then((result) => {
        res.write('This is the list of our students\n');
        res.write(result);
      })
      .catch(() => {
        res.write('This is the list of our students\n');
        res.write('Cannot load the database');
      }).finally(() => {
        res.end();
      });
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  }
});
app.listen(1245);
module.exports = app;
