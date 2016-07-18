var React = require('react');
var path = require('path');

var Cities = React.createClass({
  handleChange: function(e) {
    var city = e.target.value;
    var url = path.join("/city",city);
    console.log(url);
    var sendThis = this.props.onChange;
    $.ajax({
      type: "GET",
      url: url
    }).done(function (response) {
      console.log(JSON.stringify(response));
      sendThis(response);
    });

  },
  render: function () {
    return (
      <select className ="form-control" onChange = {this.handleChange} ref = "currentCity">
        <option value = "Bangalore">Bangalore</option>
        <option value = "London" >London</option>
        <option value = "Amsterdam" >Amsterdam</option>
        <option value = "Johannesburg" >Johannesburg</option>
        <option value = "New York" >New York</option>
      </select>
    );
  }
});

module.exports = Cities;
