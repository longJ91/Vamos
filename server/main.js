let express = require('express');
let http = require('http');
let app = express();
let server = http.createServer(app);

let login_api = require('./router/login_api');

app.get('/', function (req, res) {
  res.send('Hello');
});

app.use('/login_api', login_api);

server.listen(8000, function() {
  console.log('Express server listening on port ' + server.address().port);
});