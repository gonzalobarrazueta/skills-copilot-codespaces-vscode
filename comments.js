// Create web server
http.createServer(function(req, res) {
  if (req.url === '/comments' && req.method === 'POST') {
    var body = '';
    req.on('data', function(chunk) {
      body += chunk.toString();
    });
    req.on('end', function() {
      console.log('POSTed: ' + body);
      res.end('Received: ' + body);
    });
  } else {
    res.statusCode = 404;
    res.end();
  }
}).listen(3000);