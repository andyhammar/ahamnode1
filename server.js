var http = require('http')
var port = process.env.PORT || 8081;
http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<html><body>');
  
  res.write('Hello World\n');
  res.write('<h2>Awesome Azure!</h2>\n');
  res.end('</body></html>');
}).listen(port);