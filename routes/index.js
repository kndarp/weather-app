var express = require('express');
var router = express.Router();
var api = require('../controllers/api');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/city/:city?', api.getCity);

router.post('/add', api.addCity);

router.put('/update/:city?', api.updateCity);

router.delete('/delete/:city?', api.deleteCity);

module.exports = router;
