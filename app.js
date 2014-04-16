var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('./db.js');
var geoPosition = require('./app/models/geo_position.js');

app.use(bodyParser());

app.get('/', function(req, res){
  res.send('hello world');
});

app.post('/geo-position', function(req, res) {
  geoPosition.create({
    lat: req.param('lat'),
    lng: req.param('lng')
  }, function(err, geoPosition) {
    if (err) {
      res.send(err);
    } else {
      res.json(geoPosition);
    }
  });
});

app.listen(3000);
