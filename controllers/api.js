var Weather = require("../models/weather"),
    error   = {
      cityNotFound: {message: "City not present in DB"},
      badRequest: {message: "JSON body doesn't match Schema"},
      requestNotImplemented: {message: "Request coudn't be implemented"}
    },
    success = {
      actionComplete: {message: "Success"}
    };

exports.getCity = function (req,res) {

  if(req.params.city){
    var searchParams = {};
    searchParams.name = req.params.city;
    return Weather.findOne(searchParams, function (err, city) {
      if(!err){
        return res.send(city);
      }else{
        res.status(404);
        return res.send(error.cityNotFound);
      }
    });
  }else{
    return Weather.find({}, function (err, city) {
      if(!err){
        return res.send(city);
      }else{
        res.status(404);
        return res.send(error.cityNotFound);
      }
    });
  }
};

exports.addCity = function (req, res) {

  var weather = new Weather(req.body);
  return weather.save(function (err, city) {
    if(!err){
      return res.send(city);
    }else{
      res.status(400);
      console.error(err);
      return res.send(error.badRequest);
    }
  });

};

exports.updateCity = function (req,res) {

  var searchParams = {};
  if(req.params.city){
    searchParams.name = req.params.city;
  }
  return Weather.update(searchParams,req.body,function (err, city) {
    if(!err){
      res.status(200);
      res.send(success.actionComplete);
    }else{
      res.status(501)
      res.send(err.requestNotImplemented);
    }
  });

};


exports.deleteCity = function (req,res) {

  var searchParams = {};
  if(req.params.city){
    searchParams.name = req.params.city;
  }
  return Weather.find(searchParams).remove(function (err,city) {
    if(!err){
      res.status(200);
      res.send(success.actionComplete);
    }else{
      res.status(501)
      res.send(err.requestNotImplemented);
    }
  })

};
