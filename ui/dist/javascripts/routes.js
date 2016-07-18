var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var Home = require('./components/Home');
var WeatherDetailed = require('./components/WeatherDetailed');

module.exports = (
<Route>
      <Route handler={Home} name = "Home" path="/"/>
      <Route handler={WeatherDetailed} name = "WeatherDetailed" path="/detail/:city"/>
</Route>
);
