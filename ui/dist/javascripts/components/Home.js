var React = require('react');
var Cities = require('./Cities');
var WeatherSummary = require('./WeatherSummary');

var Home = React.createClass({
  getInitialState: function () {
        return {

        weather : {
      "_id": "578c8784585a38564d0fadbb",
      "base": "cmc stations",
      "dt": 1468837800,
      "sys": {
        "sunset": 1468847980,
        "sunrise": 1468801920,
        "country": "IN",
        "message": 0.0029,
        "id": 7823,
        "type": 1
      },
      "id": 1277333,
      "name": "Bangalore",
      "cod": 200,
      "__v": 0,
      "clouds": {
        "all": 40
      },
      "wind": {
        "speed": 5.1
      },
      "main": {
        "temp": 28,
        "pressure": 1012,
        "humidity": 58,
        "temp_min": 28,
        "temp_max": 28
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d",
          "_id": "578cc4b1722ab3c5218da8a5"
        }
      ],
      "coord": {
        "lon": 77.6,
        "lat": 12.98
      }
    }
  }
},
  render: function () {
    return (
      <div className="container">
        <div className="col-md-offset-3 col-md-6 ">
            <Cities onChange = {this.handleChange} />
            <WeatherSummary city = {this.state.weather} />
        </div>
      </div>
    );
  },
  handleChange: function (value) {
    this.setState({
      weather: value
    })
  }

});

module.exports = Home;
