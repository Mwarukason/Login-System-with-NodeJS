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

// Register User
router.post('/register', function(req, res){
  var name = req.body.name;
  var email = req.body.email;
  var username = req.body.username;
  var password = req.body.password;
  var password2 = req.body.password2;

  //validaton
  req.checkBody('name', 'Name field is required').notEmpty();

  var errors = req.validationErrors();
  if(errors){
    console.log('YES');
  }else{
    console.log('NO');
  }
});
module.exports = router;
