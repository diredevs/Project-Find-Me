var express = require('express');
var app = express();
var db = require('./db.js');
var geoPosition = require('./app/models/geo_position.js');

app.get('/', function(req, res){
  res.send('hello world');
});

app.post('/geo-position', function(req, res) {
  var lat = req.query.lat,
      lng = req.query.lng;
  geoPosition.create({
    lat: lat,
    lng: lng
  }, function(err, geoPosition) {
    if (err) {
      res.send(err);
    } else {
      res.json(geoPosition);
    }
  });
});

app.listen(3000);
