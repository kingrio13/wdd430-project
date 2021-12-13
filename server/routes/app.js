var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  console.log(__dirname,'dist/appointment/index.html');
  res.sendFile(path.join(__dirname, 'dist/appointment/index.html'));
});

module.exports = router;
