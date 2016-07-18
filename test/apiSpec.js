var should      = require('chai').should(),
    supertest   = require('supertest'),
    app         = require('../bin/www'),
    path        = require('path'),
    url         = supertest("http://localhost:8080"),
    city        = "London";

describe('/city', function (err){

    it('should return status code 200 and json response', function (done){
      url
        .get('/city')
        .expect(200)
        .expect("Content-Type",/json/)
        .end(function (err,res) {
          if(err) throw err;
          done();
        });
      });

      it('should return an array', function (done){
        url
          .get('/city')
          .expect(200)
          .expect("Content-Type",/json/)
          .end(function (err,res) {
            if(err) throw err;
            responseObject = JSON.parse(res.text);
            responseObject.should.be.an("array");
            done();
          });
      });
});

describe('/city/<cityname>', function (err){

    it('should return status code 200 and json response', function (done){
      url
        .get(path.join('/city',city))
        .expect(200)
        .expect("Content-Type",/json/)
        .end(function (err,res) {
          if(err) throw err;
          done();
        });
      });

      it('should return an object', function (done){
        url
          .get(path.join('/city',city))
          .expect(200)
          .expect("Content-Type",/json/)
          .end(function (err,res) {
            if(err) throw err;
            responseObject = JSON.parse(res.text);
            responseObject.should.be.an("object");
            done();
          });
      });
});
