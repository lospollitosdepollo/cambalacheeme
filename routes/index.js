var express = require('express');
var router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname+'/index.html'));
});

router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname+'/formularioProducto.html'));
})

module.exports = router;

//   res.sendFile(path.join(__dirname+'/index.html'));
//   res.render('index', { title: 'Express' });
