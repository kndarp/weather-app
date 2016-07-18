var mongoose = require('mongoose'),
    Schema    = mongoose.Schema;

var weatherSchema = new Schema({
    "coord": {
      "lon": Number,
      "lat": Number
    },
    "weather": [
      {
        "id": Number,
        "main": String,
        "description": String,
        "icon": String
      }
    ],
    "base": String,
    "main": {
      "temp": Number,
      "pressure": Number,
      "humidity": Number,
      "temp_min": Number,
      "temp_max": Number
    },
    "wind": {
      "speed": Number
    },
    "clouds": {
      "all": Number
    },
    "dt": Number,
    "sys": Object,
    "id": Number,
    "name": String,
    "cod": Number
});

module.exports = mongoose.model('Weather',weatherSchema);
