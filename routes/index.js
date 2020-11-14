var express = require('express');
var router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname+'/index.html'));
});

<<<<<<< Updated upstream
=======
router.get('/form', function(req, res, next) {
  res.sendFile(path.join(__dirname+'/formulario.html'));
});

router.get('/login', function(req, res, next) {
  res.sendFile(path.join(__dirname+'/iniciarSesion.html'));
});

router.get('/userprofile', function(req, res, next) {
  res.sendFile(path.join(__dirname+'/perfil.html'));
});



>>>>>>> Stashed changes
module.exports = router;

//   res.sendFile(path.join(__dirname+'/index.html'));
//   res.render('index', { title: 'Express' });
