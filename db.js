var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/project-find-me');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));

db.once('open', function callback() {
  // Defining a model:
  // Soon it should be moved to an individual file for better modularity.
  var geoPositionSchema = mongoose.Schema({
    lat: String,
    lng: String
  });
  var GeoPosition = mongoose.model('GeoPosition', geoPositionSchema);
});
