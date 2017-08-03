'use strict';

var fs = require('fs');

// We’re setting up an extremely simple server here.
const http = require('http');

// These could (should) be set as env vars.
const port = process.env.PORT || 5000;
const host = process.env.HOST || 'localhost';

// No matter what hits the server, we send the same thing.
http.createServer((req, res) => {

  // Tell the browser what’s coming.
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8',
  });

  var contents = fs.readFileSync('./app/proxy.pac', 'utf8');

  // Send a simple message in HTML.
  res.write('<pre style="word-wrap: break-word; white-space: pre-wrap;">');
  res.write(contents);
  res.write('</pre>');
  res.end();
}).listen(port, host);

// This message prints in the console when the app starts.
console.log(`App running at http://${host}:${port}`);
