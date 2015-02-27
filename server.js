var fs = require('fs');
var path = require('path');
var express = require('express');
var app = express();

var serverPort = 8080;

app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(serverPort);

console.log('Server started: http://localhost:' + serverPort + '/');