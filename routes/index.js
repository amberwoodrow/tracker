var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // var sc = document.cookie = "C";
  // var c = document.cookie;
  res.render('index', { sc: "hi" });
});

module.exports = router;
