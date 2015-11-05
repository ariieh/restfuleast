"use strict"
var express = require('express');
var app = express();
var logger = require('morgan');
var errorHandler = require('errorhandler');

// Express config
app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
if ('development' == app.get('env')) app.use(errorHandler());

app.get('/', function(req, res) {
  res.send('hello world');
});

app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});

