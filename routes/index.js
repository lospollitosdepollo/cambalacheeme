var express = require('express');
var router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname+'/index.html'));
});

router.get('/form', function(req, res, next) {
  res.sendFile(path.join(__dirname+'/formulario.html'));
});

router.get('/login', function(req, res, next) {
  res.sendFile(path.join(__dirname+'/iniciarSesion.html'));
});

router.get('/userprofile', function(req, res, next) {
  res.sendFile(path.join(__dirname+'/perfil.html'));
});


router.get('/formProducto', function(req, res, next) {
  res.sendFile(path.join(__dirname+'/formularioProducto.html'));
})

router.get('/peticionTrueque', function(req, res, next) {
  res.sendFile(path.join(__dirname+'/peticionTrueque.html'));
})

router.get('/landing', function(req, res, next) {
  res.sendFile(path.join(__dirname+'/landing.html'));
})

module.exports = router;

//   res.sendFile(path.join(__dirname+'/index.html'));
//   res.render('index', { title: 'Express' });
