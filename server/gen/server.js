'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
app.use(bodyParser.json());
app.use(cors());
var server = app.listen(4000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Test app server listening at http://%s:%s', host, port);
});
