var React = require('react');
var path = require('path');
var Link = require('react-router').Link;

var WeatherSummary = React.createClass({
  render: function () {
    var city              = this.props.city,
        name              = city.name,
        country           = city.sys.country,
        weather           = city.weather[0].main,
        temperature       = city.main.temp,
        tempMin           = city.main.temp_min,
        tempMax           = city.main.temp_max,
        windSpeed         = city.wind.speed,
        clouds            = city.clouds.all,
        pressure          = city.main.pressure,
        latitude          = city.coord.lat,
        longitude         = city.coord.lon,
        linkto            = path.join("/detail",name);

    return (
      <div className = "row">
        <hr/>
        <div className = "col-sm-2 image-frame">

        </div>
        <section className = "content col-sm-10">
          <div className = "heading">
            <h4><Link to = {linkto}>{name},{country}</Link> <small><i>{weather}</i></small></h4>
          </div>
          <article>
            <p><span className="badge">{temperature} <sup>o</sup>C</span> temp from {tempMin} to {tempMax}, wind {windSpeed}m/s. clouds {clouds}%, {pressure} hpa
            </p>
            <p>Geo coords [ {latitude}, {longitude} ]
            </p>
          </article>
        </section>
      </div>
    );
  }
});

module.exports = WeatherSummary;
