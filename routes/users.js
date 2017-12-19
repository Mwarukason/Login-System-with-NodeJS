var express = require('express');
var router = express.Router();

// Template / view register
router.get('/register', function(req, res){
  res.render('register');
});

// template / view login
router.get('/login', function(req, res){
  res.render('login');
});

module.exports = router;
