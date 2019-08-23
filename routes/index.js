var express = require('express');
var router = express.Router();
var searchCtrl = require('../controllers/yelp');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/yelpSearch', searchCtrl.yelpSearch);

module.exports = router;
