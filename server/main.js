const express = require('express');
const http = require('http');
let app = express();
let server = http.createServer(app);
global.__base = __dirname;

let login_api = require('./router/login_api_router');
let swaggerDoc = require('./setting/swagger');
let db = require('./setting/db_connection').sequelize;

db.sync();
app.use(swaggerDoc);

app.get('/', function (req, res) {
  res.send('Hello');
});

app.use('/login', login_api);

server.listen(8000, function() {
  console.log('Express server listening on port ' + server.address().port);
});
