var express = require('express');
var app = express.Router();

app.get('/test', function(req, res){
	res.send('test success!');
});

module.exports = app;