var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/users/cool/', function(req, res, next) {
  res.send("You're So Cool.");
});
module.exports = router;
