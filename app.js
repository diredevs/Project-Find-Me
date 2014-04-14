var express = require('express');
var app = express();
var db = require('db.js');

app.get('/', function(req, res){
    res.send('hello world');
});

app.listen(3000);
