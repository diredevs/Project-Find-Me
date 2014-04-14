var mongoose = require('mongoose');

var geoPositionSchema = mongoose.Schema({
  lat: String,
  lng: String
});

module.exports = mongoose.model('GeoPosition', geoPositionSchema);
