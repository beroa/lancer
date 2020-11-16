var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.register = function(req, res, next) {
  if(!req.body.username || !req.body.password) {
    return res.status(400).send({ "message": "username and password required" });
  }
  var user = new User();
  user.name = req.body.username;
  user.setPassword(req.body.password);
  user.generateWallet();
  user.save(function(err) {
    if (err) {
      return res.status(400).json({status: 400, message: err.message});
    } else {
      return res.json(user.generateJwt());
    }
  });
};

exports.login = function(req, res, next) {
  console.log("login")

  if(!req.body.username) {
    return res.status(400).send({ "message": "Username required" });
  }
  if(!req.body.password) {
    return res.status(400).send({ "message": "Password required" });
  }

  passport.authenticate('local', function(err, user, info) {
    var token;
    if (err) {
      res.status(404).json(err);
      return;
    }
    if (user) { 
      token = user.generateJwt();
      res.status(200);
      res.json({
        "token" : token
      });
    } else {
      res.status(401).json(info);
    }
  })(req, res);

};