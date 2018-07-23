var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

exports.register = function(req, res) {

  if(!req.body.name || !req.body.password) {
    sendJSONresponse(res, 400, {
      "message": "name and password required"
    });
    return;
  }

  var user = new User();

  user.name = req.body.name;
  user.setPassword(req.body.password);
  user.generateWallet();

  user.save(function(err) {
    if (err)
      console.log(err);
    var token;
    token = user.generateJwt();
    res.status(200);
    res.json({
      "token" : token
    });
  });

};

exports.login = function(req, res) {

  if(!req.body.name|| !req.body.password) {
    sendJSONresponse(res, 400, {
      "message": "name and password required"
    });
    return;
  }

  passport.authenticate('local', function(err, user, info) {
    var token;
    if (err) {
      res.status(404).json(err);
      return;
    }

    if(user){
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