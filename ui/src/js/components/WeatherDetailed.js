var React = require('react');
var path = require('path');

var WeatherDetailed = React.createClass({
  getInitialState: function () {
    return {
      city : {
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
  handleState: function(response) {
    this.setState({
      city: response
    });
  },
  refresh: function () {
    console.log("yay!");
    var city = this.props.params.city;
    var apiURL = "//api.openweathermap.org/data/2.5/weather?q="+city+"&appid=6b4aa87d5e93df3d752971fe632cdb8e&units=metric";
    var url = path.join("/update",city);
    console.log(apiURL);
    var setThis = this.handleState;
    $.ajax({
      type: "GET",
      url: apiURL
    }).done(function (response) {
      console.log(JSON.stringify(response));
      $.ajax({
        type: "PUT",
        url: url,
        data: response
      }).done(function (resp) {
        console.log(JSON.stringify(resp));
      });
      setThis(response);
    });
  },
  componentWillMount:function () {
    console.log(this.props);
    var city = this.props.params.city;
    var url = path.join("/city",city);
    console.log(url);
    var setThis = this.handleState;
    $.ajax({
      type: "GET",
      url: url
    }).done(function (response) {
      console.log(JSON.stringify(response));
      setThis(response);
    });
  },
  render: function () {
    var city              = this.state.city,
        name              = city.name,
        country           = city.sys.country,
        weather           = city.weather[0].main,
        temperature       = city.main.temp,
        windSpeed         = city.wind.speed,
        cloudiness        = city.weather[0].description,
        pressure          = city.main.pressure,
        latitude          = city.coord.lat,
        longitude         = city.coord.lon,
        sunrise           = city.sys.sunrise,
        sunset            = city.sys.sunset,
        humidity          = city.main.humidity;
    console.log(city);
    return (
      <div className = "row">
        <div className = "col-sm-4"></div>
        <div className = "col-sm-offset-4 col-sm-4">
          <div className = "heading col-sm-12">
            <h1>{name},{country}</h1>
          </div>
          <div className = "row">
            <div className = "col-sm-6 image"></div>
            <div className = "col-sm-6 temp pull-right">
              <h2>{temperature} <sup>o</sup>C </h2></div>
          </div>
            <div className = "col-sm-6">
              <h1><small>{weather} <button type="button" className="btn btn-link" onClick = {this.refresh}><span className = "glyphicon glyphicon-refresh"></span></button></small></h1>

            </div>
            <div>
            <table className="table table-striped">
              <tr>
                <td>Wind</td>
                <td>{windSpeed}</td>
              </tr>
              <tr>
                <td>Cloudiness</td>
                <td>{cloudiness}</td>
              </tr>
              <tr>
                <td>Pressure</td>
                <td>{pressure}</td>
              </tr>
              <tr>
                <td>Humidity</td>
                <td>{humidity}</td>
              </tr>
              <tr>
                <td>Sunrise</td>
                <td>{sunrise}</td>
              </tr>
              <tr>
                <td>Sunset</td>
                <td>{sunset}</td>
              </tr>
              <tr>
                <td>Geo Coordinates</td>
                <td>[{latitude},{longitude}]</td>
              </tr>
            </table>
            </div>
          </div>
        </div>
    );
  }
});

module.exports = WeatherDetailed;
