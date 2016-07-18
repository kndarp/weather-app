var React = require('react');
var Home = require('../components/Home');

var HomePage = React.createClass({
  render () {
    return (
        <div className = "container">
          <Home/>
        </div>
    );
  }
});

module.exports = HomePage;
