var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '나의 프레임웍 구축 성공' });
});

module.exports = router;
