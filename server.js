var http = require('http')
var port = process.env.PORT || 8081;
http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<html><body>');
  
  res.end('Hello World\n');
  res.end('<h2>Awesome Azure!</h2>\n');
  res.end('</body></html>');
}).listen(port);