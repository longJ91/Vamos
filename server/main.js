const express = require('express');
const http = require('http');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');

let app = express();
let server = http.createServer(app);
let db = require('./setting/db_connection').sequelize;
const openApiDocumentation = require('./setting/openApiDocumentation');
const {corsOption} = require('./setting/cors');
let {CustomError} = require('./util/error_util');
let userApiRouter = require('./router/user_api_router');
global.__base = __dirname;
db.sync();
app.use(cors(corsOption));

//body parser
app.use(express.json());
app.use(express.urlencoded( {extended : false } ));

//swagger setting
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiDocumentation));

//router
app.use('/user', userApiRouter);

app.use(function(error, req, res, next) {
  if(error instanceof CustomError){
    //custom error by devloper
    console.error(error.message);
    res.status(error.status).json({ Error: error.message});
  }
  else{
    //async error end point
    console.error(error.stack);
    res.status(500).json({ Error: error.message});
  }
});

server.listen(8000, function() {
  console.log('Express server listening on port ' + server.address().port);
});